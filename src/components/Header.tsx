"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setHidden(y > lastY && y > 24);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur bg-white/70 transition-transform duration-200 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <Link href="/" aria-label="Home" className="select-none inline-flex items-center leading-none font-medium tracking-tight bg-gradient-to-r from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent text-[18px] md:text-[20px]">
          Olga Vasilevsky
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </nav>
      </div>
    </header>
  );
}



