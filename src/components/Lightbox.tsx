"use client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { MediaItem } from "@/data/collections";

type LightboxProps = {
  item: MediaItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
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
                className="max-w-[95vw] max-h-[90vh] object-contain bg-black"
                src={item.src}
                poster={item.poster}
                controls
                autoPlay
                muted
                playsInline
                crossOrigin="anonymous"
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
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


