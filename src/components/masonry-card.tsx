"use client";
import Image from "next/image";
import type { RenderComponentProps } from "masonic";
import type { MediaItem } from "@/data/collections";

export function MasonryCard({ data, index }: RenderComponentProps<MediaItem>) {
  const isVideo = data.type === "video";
  return (
    <article
      className="js-tile group relative overflow-hidden rounded-2xl bg-neutral-50 cursor-zoom-in"
      onClick={() => {
        const event = new CustomEvent<MediaItem>("media:open", { detail: data });
        window.dispatchEvent(event);
      }}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={data.title || (isVideo ? "Open video" : "Open image")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const event = new CustomEvent<MediaItem>("media:open", { detail: data });
          window.dispatchEvent(event);
        }
      }}
    >
      {isVideo ? (
        <video
          className="w-full h-auto aspect-video"
          src={data.src}
          poster={data.poster}
          muted playsInline preload="metadata"
          onMouseEnter={(e)=> e.currentTarget.play()}
          onMouseLeave={(e)=> { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
          controls={false}
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onError={(e) => console.warn('Video load error:', data.src)}
        />
      ) : (
        <Image
          src={data.src}
          alt={"Artwork"}
          width={data.w} height={data.h}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="w-full h-auto object-cover select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}
      {/* Title overlay removed to avoid exposing original filenames/prompts */}
    </article>
  );
}



