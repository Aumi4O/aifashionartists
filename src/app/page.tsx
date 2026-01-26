"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import KineticHeading from "@/components/KineticHeading";
import FilterBar from "@/components/FilterBar";
import { collections, type MediaItem } from "@/data/collections";
import { MasonryCard } from "@/components/masonry-card";
import Lightbox from "@/components/Lightbox";

// masonic relies on ResizeObserver; disable SSR to avoid server-side reference errors
const Masonry = dynamic(() => import("masonic").then(m => m.Masonry), { ssr: false }) as any;

export default function Home() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<MediaItem | null>(null);

  const allItems = useMemo<MediaItem[]>(() => {
    const videoBase = process.env.NEXT_PUBLIC_VIDEO_BASE_URL?.replace(/\/$/, "");
    const imageBase = process.env.NEXT_PUBLIC_IMAGE_BASE_URL?.replace(/\/$/, "");
    const items = collections.flatMap(c =>
      c.items.map((it) => {
        if (it.type === "video" && it.src.startsWith("/visuals/")) {
          if (videoBase) {
            // Old videos: /visuals/videos/file.mp4 -> videoBase/file.mp4 (videos folder is the base)
            // New videos: /visuals/Commercials /file.mp4 -> videoBase/Commercials /file.mp4
            // New videos: /visuals/story video/file.mp4 -> videoBase/story video/file.mp4
            let relativePath = it.src.replace("/visuals/", "");
            // Old videos have "videos/" prefix which matches the R2 root, so remove it
            if (relativePath.startsWith("videos/")) {
              relativePath = relativePath.replace("videos/", "");
            }
            const encodedPath = relativePath.split("/").map(encodeURIComponent).join("/");
            return { ...it, src: `${videoBase}/${encodedPath}` } as MediaItem;
          }
        }
        if (it.type === "image" && it.src.startsWith("/visuals/")) {
          // Images: /visuals/folder/file.png -> imageBase/folder/file.png
          if (imageBase) {
            const relativePath = it.src.replace("/visuals/", "");
            const encodedPath = relativePath.split("/").map(encodeURIComponent).join("/");
            return { ...it, src: `${imageBase}/${encodedPath}` } as MediaItem;
          }
        }
        return it;
      })
    );

    // Order: Commercials first (above fold), then Vision 2026, Story, Story Video, Portraits, then old site
    const collectionOrder = ["commercials", "vision-2026", "story", "story-video", "portraits", "2026", "Love", "Poster", "blues", "breathtaking", "fashion-portrets-2", "fashion-portrets-3", "fashion-portrets-horizontal", "grangy", "korean photography wall art ", "korean-photography-wall-art", "summer-2025", "videos"];
    return items.slice().sort((a, b) => {
      const aIdx = collectionOrder.indexOf(a.collectionId);
      const bIdx = collectionOrder.indexOf(b.collectionId);
      const aPriority = aIdx === -1 ? 999 : aIdx;
      const bPriority = bIdx === -1 ? 999 : bIdx;
      return aPriority - bPriority;
    });
  }, []);

  const normalized = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const isCollection = (label: string) =>
    collections.some(c => normalized(c.id) === normalized(label) || normalized(c.title) === normalized(label));

  const aliasMap: Record<string, string> = {
    // Map friendly chip labels to concrete collection ids/titles
    "korean photography": "korean-photography-wall-art",
    "vision 2026": "vision-2026",
    "story video": "story-video",
  };

  const filtered = useMemo(() => {
    if (filter === "All") return allItems;
    const label = normalized(filter);
    if (label === "videos") return allItems.filter(i => i.type === "video");
    const mapped = aliasMap[label] ?? filter;
    if (isCollection(mapped)) return allItems.filter(i => normalized(i.collectionId) === normalized(mapped));
    return allItems;
  }, [allItems, filter]);

  // Keep commercials at top, distribute other videos throughout
  const arranged = useMemo<MediaItem[]>(() => {
    // Only rearrange for the all-items view. Other filters keep natural order.
    if (filter !== "All") return filtered;

    // Commercials stay at top (above the fold)
    const commercials = filtered.filter(i => i.collectionId === "commercials");
    const rest = filtered.filter(i => i.collectionId !== "commercials");
    
    const images = rest.filter(i => i.type === "image");
    const videos = rest.filter(i => i.type === "video");
    if (videos.length === 0) return [...commercials, ...rest];

    // Evenly spread non-commercial videos among images
    const step = Math.max(4, Math.floor(images.length / (videos.length + 1)));
    const result: MediaItem[] = [];
    let imgIdx = 0;
    let vidIdx = 0;

    while (imgIdx < images.length) {
      for (let k = 0; k < step && imgIdx < images.length; k++) {
        result.push(images[imgIdx++]);
      }
      if (vidIdx < videos.length) {
        result.push(videos[vidIdx++]);
      }
    }
    // If any videos remain, add at end
    while (vidIdx < videos.length) {
      result.push(videos[vidIdx++]);
    }
    return [...commercials, ...result];
  }, [filtered, filter]);

  // Listen for media:open events from cards
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<MediaItem>;
      setActive(ce.detail);
    };
    window.addEventListener("media:open", handler as EventListener);
    return () => window.removeEventListener("media:open", handler as EventListener);
  }, []);

  return (
    <main className="container mx-auto px-4 pb-20 2xl:max-w-[1400px]">
      <section className="pt-10 md:pt-16">
        <KineticHeading text="Selected Works" />
        <p className="mt-3 text-sm text-neutral-600 max-w-[60ch]">
          A living portfolio by Olga Vasilevsky. Fashion-inflected portraiture, color-blocked architecture, and video studies.
        </p>
        
        {/* Category buttons */}
        <div className="mt-6 flex gap-3">
          <span className="px-4 py-2 border border-neutral-900 bg-neutral-900 text-white text-sm">
            Fashion
          </span>
          <Link 
            href="/storytelling" 
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-sm transition-colors"
          >
            Storytelling
          </Link>
        </div>
      </section>

      <FilterBar onChange={setFilter} chips={["All","Commercials","Vision 2026","Story","Portraits","Videos","2026","Korean Photography","Summer 2025"]} />

      <section id="work" className="mt-6">
        <Masonry
          key={filter}
          items={arranged.map((it) => ({ ...it, _key: `${it.collectionId}-${it.id}` }))}
          columnGutter={12}
          columnWidth={320}
          render={(props: { data: MediaItem } & Record<string, unknown>) => {
            const data = props.data as MediaItem & { _key?: string };
            return <MasonryCard key={data._key ?? `${data.collectionId}-${data.id}` } {...(props as any)} />;
          }}
        />
      </section>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </main>
  );
}
