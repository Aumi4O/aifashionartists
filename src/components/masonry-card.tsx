"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { RenderComponentProps } from "masonic";
import type { MediaItem } from "@/data/collections";

export function MasonryCard({ data, index }: RenderComponentProps<MediaItem>) {
  const isVideo = data.type === "video";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isVideo) return;
    const el = videoRef.current;
    if (!el) return;
    const onIntersect: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting && entry.intersectionRatio > 0.25) {
        const p = el.play();
        if (p && typeof (p as unknown as { catch?: (fn: (e: unknown) => void) => void }).catch === "function") {
          (p as unknown as { catch: (fn: (e: unknown) => void) => void }).catch(() => {});
        }
      } else {
        el.pause();
        el.currentTime = 0;
      }
    };
    const io = new IntersectionObserver(onIntersect, { threshold: [0, 0.25, 0.5] });
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, [isVideo]);
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
          ref={videoRef}
          className="w-full h-auto bg-black"
          src={data.src}
          poster={data.poster}
          muted playsInline webkit-playsinline preload="metadata" autoPlay loop
          onMouseEnter={(e)=> e.currentTarget.play()}
          onMouseLeave={(e)=> { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
          controls={false}
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
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



