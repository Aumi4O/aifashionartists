"use client";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
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
    const getFileName = (p: string) => p.split("/").pop() || p;
    return collections.flatMap(c =>
      c.items.map((it) => {
        if (it.type === "video" && it.src.startsWith("/visuals/videos/")) {
          const file = getFileName(it.src);
          if (videoBase) {
            return { ...it, src: `${videoBase}/${file}` } as MediaItem;
          }
          return { ...it, src: `/videos/${file}` } as MediaItem;
        }
        return it;
      })
    );
  }, []);

  const normalized = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const isCollection = (label: string) =>
    collections.some(c => normalized(c.id) === normalized(label) || normalized(c.title) === normalized(label));

  const aliasMap: Record<string, string> = {
    // Map friendly chip labels to concrete collection ids/titles
    "korean photography": "korean-photography-wall-art",
  };

  const filtered = useMemo(() => {
    if (filter === "All") return allItems;
    const label = normalized(filter);
    if (label === "videos") return allItems.filter(i => i.type === "video");
    const mapped = aliasMap[label] ?? filter;
    if (isCollection(mapped)) return allItems.filter(i => normalized(i.collectionId) === normalized(mapped));
    return allItems;
  }, [allItems, filter]);

  // Distribute videos throughout the feed instead of clustering at the end
  const arranged = useMemo<MediaItem[]>(() => {
    // Only interleave for the all-items view. Other filters keep natural order.
    if (filter !== "All") return filtered;

    const images = filtered.filter(i => i.type === "image");
    const videos = filtered.filter(i => i.type === "video");
    if (videos.length === 0) return filtered;

    // Evenly spread videos by inserting one after every `step` images
    const step = Math.max(2, Math.floor(images.length / (videos.length + 1)));
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
    // If any videos remain, tuck them in near the end spaced by one image where possible
    let insertAt = Math.max(0, result.length - 1);
    while (vidIdx < videos.length) {
      result.splice(Math.min(insertAt, result.length), 0, videos[vidIdx++]);
      insertAt = Math.max(0, insertAt - 2);
    }
    return result;
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
      </section>

      <FilterBar onChange={setFilter} chips={["All","Videos","Korean Photography","Summer 2025"]} />

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
