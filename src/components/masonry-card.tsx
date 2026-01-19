"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { RenderComponentProps } from "masonic";
import type { MediaItem } from "@/data/collections";

export function MasonryCard({ data, index }: RenderComponentProps<MediaItem>) {
  const isVideo = data.type === "video";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoError = (el: HTMLVideoElement) => {
    if (!el) return;
    const original = (el.getAttribute("data-src-original") || el.src) as string;
    const attempt = (nextSrc: string) => {
      if (!nextSrc || nextSrc === el.src) return false;
      el.src = nextSrc;
      // Reload and try to play silently; ignore rejections
      el.load();
      const p = el.play();
      if (p && typeof (p as unknown as { catch?: (fn: (e: unknown) => void) => void }).catch === "function") {
        (p as unknown as { catch: (fn: (e: unknown) => void) => void }).catch(() => {});
      }
      return true;
    };

    // 1) Try decoded path (handles double-encoded cases)
    try {
      const decoded = decodeURIComponent(original);
      if (decoded && decoded !== original) {
        if (attempt(decoded)) return;
      }
    } catch {}

    // 2) Replace spaces explicitly with %20
    const spaceEncoded = original.replace(/ /g, "%20");
    if (spaceEncoded !== original) {
      if (attempt(spaceEncoded)) return;
    }

    // 3) Fallback to local asset path if R2 URL fails
    if (/^https?:\/\//.test(original) && original.includes("/visuals/videos/")) {
      const file = original.split("/").pop() || "";
      attempt(`/visuals/videos/${file}`);
    }
  };

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
        <>
          <video
            ref={videoRef}
            className="w-full h-auto bg-black"
            src={data.src}
            data-src-original={data.src}
            poster={data.poster}
            muted playsInline webkit-playsinline preload="metadata" autoPlay loop
            onMouseEnter={(e)=> e.currentTarget.play()}
            onMouseLeave={(e)=> { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
            onError={(e)=> handleVideoError(e.currentTarget)}
            crossOrigin="anonymous"
            controls={false}
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* Sound indicator for commercials and story videos */}
          {(data.collectionId === "commercials" || data.collectionId === "story-video") && (
            <div className="absolute bottom-2 left-2 rounded-full bg-black/70 text-white px-2 py-1 text-xs flex items-center gap-1 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              Sound
            </div>
          )}
        </>
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



