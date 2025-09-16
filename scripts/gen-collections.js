const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');
const visualsRoot = path.join(publicDir, 'visuals');

function walkDirectory(directoryPath) {
  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .flatMap((dirent) => {
      const absolutePath = path.join(directoryPath, dirent.name);
      if (dirent.isDirectory()) {
        return walkDirectory(absolutePath);
      }
      return [absolutePath];
    });
}

function getImageSize(absolutePath) {
  try {
    const output = execSync(
      `sips -g pixelWidth -g pixelHeight ${JSON.stringify(absolutePath)} 2>/dev/null`
    )
      .toString()
      .trim();
    const widthMatch = output.match(/pixelWidth: (\d+)/);
    const heightMatch = output.match(/pixelHeight: (\d+)/);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : 0;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : 0;
    return { width, height };
  } catch {
    return { width: 0, height: 0 };
  }
}

function main() {
  if (!fs.existsSync(visualsRoot)) {
    console.error('visuals directory not found:', visualsRoot);
    process.exit(1);
  }

  const allFiles = walkDirectory(visualsRoot).filter((filePath) =>
    /\.(png|jpg|jpeg|webp|mp4)$/i.test(filePath)
  );

  const mediaItems = [];
  for (const absolutePath of allFiles) {
    const relativeToPublic = absolutePath.split(publicDir).pop();
    const src = relativeToPublic ? relativeToPublic.replace(/\\/g, '/') : '';
    const ext = path.extname(absolutePath).toLowerCase();
    const collectionId = path.basename(path.dirname(absolutePath));
    const id = path.basename(absolutePath);
    const isVideo = ext === '.mp4';
    let width = 0;
    let height = 0;
    if (!isVideo) {
      const size = getImageSize(absolutePath);
      width = size.width;
      height = size.height;
    }
    mediaItems.push({
      id,
      collectionId,
      type: isVideo ? 'video' : 'image',
      src,
      w: width,
      h: height,
      title: id.replace(/_/g, ' ').replace(/\.(png|jpg|jpeg|webp|mp4)$/i, ''),
    });
  }

  const collectionIdToItems = {};
  for (const item of mediaItems) {
    if (!collectionIdToItems[item.collectionId]) {
      collectionIdToItems[item.collectionId] = [];
    }
    collectionIdToItems[item.collectionId].push(item);
  }

  const collections = Object.entries(collectionIdToItems).map(([id, items]) => ({
    id,
    title: id,
    items,
  }));

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'collections.ts');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const fileContents = `export type MediaItem = {\n  id: string;\n  collectionId: string;\n  type: \"image\" | \"video\";\n  src: string;\n  poster?: string;\n  w: number;\n  h: number;\n  title?: string;\n  year?: string;\n  tags?: string[];\n};\n\nexport type Collection = {\n  id: string;\n  title: string;\n  blurb?: string;\n  items: MediaItem[];\n};\n\nexport const collections: Collection[] = ${JSON.stringify(collections, null, 2)} as any;\n`;

  fs.writeFileSync(outputPath, fileContents, 'utf8');
  console.log('Wrote', outputPath, 'collections:', collections.length, 'items:', mediaItems.length);
}

main();



