"use client";
import { useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import KineticHeading from "@/components/KineticHeading";

const movieItem = {
  id: "secret-life-of-needles",
  collectionId: "movie",
  type: "video" as const,
  w: 1920,
  h: 1080,
  title: "The Secret Life of Needles",
};

export default function MoviePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSrc = useMemo(() => {
    const r2Base = process.env.NEXT_PUBLIC_R2_BASE_URL?.replace(/\/$/, "");
    if (r2Base) {
      const encodedPath = encodeURIComponent("The Secret Life of Needles.mp4");
      return `${r2Base}/movie/${encodedPath}`;
    }
    return "";
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = () => {
      const p = el.play();
      if (p && typeof (p as { catch?: (fn: () => void) => void }).catch === "function") {
        (p as { catch: (fn: () => void) => void }).catch(() => {});
      }
    };
    el.addEventListener("canplay", tryPlay);
    tryPlay();
    return () => el.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <main className="container mx-auto px-4 pb-20 2xl:max-w-[1200px]">
      <section className="pt-10 md:pt-16">
        <KineticHeading text="Selected Works" />
        <p className="mt-3 text-sm text-neutral-600 max-w-[60ch]">
          Film work by Olga Vasilevsky.
        </p>

        {/* Category buttons */}
        <div className="mt-6 flex gap-3">
          <Link
            href="/"
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-sm transition-colors"
          >
            Fashion
          </Link>
          <Link
            href="/storytelling"
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-sm transition-colors"
          >
            Storytelling
          </Link>
          <span className="px-4 py-2 border border-neutral-900 bg-neutral-900 text-white text-sm">
            Movie
          </span>
        </div>
      </section>

      {/* Single movie */}
      <section className="mt-10">
        <h2 className="text-lg font-medium text-neutral-900 mb-4">
          {movieItem.title}
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-900 aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src={videoSrc}
            controls
            autoPlay
            playsInline
            preload="auto"
            controlsList="nodownload"
            disablePictureInPicture
          />
        </div>
      </section>
    </main>
  );
}
