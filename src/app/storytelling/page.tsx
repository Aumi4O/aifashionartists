"use client";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import KineticHeading from "@/components/KineticHeading";
import { MasonryCard } from "@/components/masonry-card";
import Lightbox from "@/components/Lightbox";
import type { MediaItem } from "@/data/collections";
import { getJapanItems } from "@/data/japan-collection";

// masonic relies on ResizeObserver; disable SSR to avoid server-side reference errors
const Masonry = dynamic(() => import("masonic").then(m => m.Masonry), { ssr: false }) as any;

export default function StorytellingPage() {
  const [active, setActive] = useState<MediaItem | null>(null);

  // Get all items - featured images first
  const allItems = useMemo(() => getJapanItems(), []);
  
  // Split into featured (first 6) and rest
  const featuredItems = allItems.slice(0, 6);
  const restItems = allItems.slice(6);
  
  // Separate by orientation for custom layout
  const landscapes = featuredItems.filter(item => item.w > item.h);
  const portraits = featuredItems.filter(item => item.h > item.w);

  const handleImageClick = (item: MediaItem) => {
    setActive(item);
  };

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
    <main className="container mx-auto px-4 pb-20 2xl:max-w-[1600px]">
      <section className="pt-10 md:pt-16">
        <KineticHeading text="Selected Works" />
        <p className="mt-3 text-sm text-neutral-600 max-w-[60ch]">
          Visual narratives and cinematic moments. A journey through light, shadow, and emotion.
        </p>
        
        {/* Category buttons */}
        <div className="mt-6 flex gap-3">
          <Link 
            href="/" 
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-sm transition-colors"
          >
            Fashion
          </Link>
          <span className="px-4 py-2 border border-neutral-900 bg-neutral-900 text-white text-sm">
            Storytelling
          </span>
        </div>
      </section>

      {/* Hero Section - Featured Images Above the Fold */}
      <section className="mt-10 space-y-3">
        {/* Row 1: First landscape (16:9) - full width */}
        {landscapes[0] && (
          <div
            className="relative cursor-pointer overflow-hidden group"
            onClick={() => handleImageClick(landscapes[0])}
          >
            <Image
              src={landscapes[0].src}
              alt={landscapes[0].title || ""}
              width={landscapes[0].w}
              height={landscapes[0].h}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        )}

        {/* Row 2: Three portraits (9:16) side by side */}
        {portraits.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {portraits.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer overflow-hidden group"
                onClick={() => handleImageClick(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title || ""}
                  width={item.w}
                  height={item.h}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            ))}
          </div>
        )}

        {/* Row 3: Two more landscapes (16:9) side by side */}
        {landscapes.length > 1 && (
          <div className="grid grid-cols-2 gap-3">
            {landscapes.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer overflow-hidden group"
                onClick={() => handleImageClick(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title || ""}
                  width={item.w}
                  height={item.h}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Rest of the gallery in masonry layout */}
      {restItems.length > 0 && (
        <section id="work" className="mt-10">
          <Masonry
            items={restItems.map((it) => ({ ...it, _key: `${it.collectionId}-${it.id}` }))}
            columnGutter={12}
            columnWidth={320}
            render={(props: { data: MediaItem } & Record<string, unknown>) => {
              const data = props.data as MediaItem & { _key?: string };
              return <MasonryCard key={data._key ?? `${data.collectionId}-${data.id}`} {...(props as any)} />;
            }}
          />
        </section>
      )}

      <Lightbox item={active} onClose={() => setActive(null)} />
    </main>
  );
}
