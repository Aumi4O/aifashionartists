"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { MediaItem } from "@/data/collections";

type LightboxProps = {
  item: MediaItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  // Check if this is a commercial or story video (has sound)
  const hasSound = item?.collectionId === "commercials" || item?.collectionId === "story-video";

  useEffect(() => {
    if (!item) return;
    // Reset muted state when opening a new item - start muted for autoplay
    setIsMuted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  // On iOS, trigger play() after user gesture that opened the lightbox
  useEffect(() => {
    if (!item || item.type !== "video") return;
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = () => {
      const p = el.play();
      if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
    };
    const onCanPlay = () => tryPlay();
    el.addEventListener("canplay", onCanPlay);
    // attempt immediately too
    tryPlay();
    return () => el.removeEventListener("canplay", onCanPlay);
  }, [item]);

  const toggleMute = () => {
    const el = videoRef.current;
    if (el) {
      el.muted = !el.muted;
      setIsMuted(el.muted);
    }
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key={item.id}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            onContextMenu={(e) => e.preventDefault()}
          />
          <motion.div
            className="relative max-w-[95vw] max-h-[90vh] mx-auto rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.96, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {item.type === "video" ? (
              <video
                ref={videoRef}
                className="max-w-[95vw] max-h-[90vh] object-contain bg-black"
                src={item.src}
                data-src-original={item.src}
                poster={item.poster}
                controls
                autoPlay
                muted={isMuted}
                playsInline
                webkit-playsinline
                preload="auto"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                crossOrigin="anonymous"
                onContextMenu={(e) => e.preventDefault()}
                onError={(e) => {
                  const el = e.currentTarget;
                  const original = (el.getAttribute('data-src-original') || el.src) as string;
                  try {
                    const decoded = decodeURIComponent(original);
                    if (decoded && decoded !== original) { el.src = decoded; el.load(); el.play().catch(()=>{}); return; }
                  } catch {}
                  const spaceEncoded = original.replace(/ /g, '%20');
                  if (spaceEncoded !== original) { el.src = spaceEncoded; el.load(); el.play().catch(()=>{}); return; }
                  if (/^https?:\/+/.test(original) && original.includes('/visuals/videos/')) {
                    const file = original.split('/').pop() || '';
                    el.src = `/visuals/videos/${file}`; el.load(); el.play().catch(()=>{});
                  }
                }}
              />
            ) : (
              <Image
                src={item.src}
                alt={"Artwork"}
                width={item.w || 1600}
                height={item.h || 1200}
                className="h-auto w-auto max-w-[95vw] max-h-[90vh] object-contain bg-black select-none"
                sizes="95vw"
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            )}

            {/* Sound toggle button for commercials and story videos */}
            {item.type === "video" && hasSound && (
              <button
                onClick={toggleMute}
                className="absolute top-2 left-2 rounded-full bg-white/90 text-black px-3 py-1.5 text-sm hover:bg-white flex items-center gap-1.5 font-medium"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <line x1="23" y1="9" x2="17" y2="15"/>
                      <line x1="17" y1="9" x2="23" y2="15"/>
                    </svg>
                    Sound
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                    Sound On
                  </>
                )}
              </button>
            )}

            <button
              onClick={onClose}
              className="absolute top-2 right-2 rounded-full bg-white/90 text-black px-3 py-1 text-sm hover:bg-white"
              aria-label="Close"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


