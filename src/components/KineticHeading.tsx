"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KineticHeading({ text }:{ text:string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.4"] });
  const y = useTransform(scrollYProgress, [0,1], [10,0]);
  const opacity = useTransform(scrollYProgress, [0,1], [0,1]);

  return (
    <motion.h2
      ref={ref}
      className="select-none text-4xl md:text-5xl tracking-tight font-light"
      style={{ y, opacity, ["--wght" as any]: 200 }}
      onMouseMove={(e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const t = (e.clientX - rect.left) / rect.width;
        el.style.setProperty("--wght", String(150 + t * 80));
      }}
      onMouseLeave={(e) => e.currentTarget.style.setProperty("--wght","200")}
    >
      {Array.from(text).map((ch, i) => (
        <motion.span key={i} className="inline-block"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i*0.015, duration: 0.35, ease: "easeOut" }}>
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h2>
  );
}



