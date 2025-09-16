"use client";
import { useState } from "react";

const defaultChips = ["All","Videos","Korean Photography"] as const;

export default function FilterBar({ onChange, chips = defaultChips as readonly string[] }:{ onChange:(value:string)=>void, chips?:readonly string[] }) {
  const [active, setActive] = useState(String(chips[0] ?? "All"));
  return (
    <div className="overflow-x-auto px-4 sticky top-14 z-40 bg-white/80 backdrop-blur">
      <div className="flex gap-2 py-2">
        {chips.map(c => (
          <button
            key={c}
            onClick={() => { setActive(c); onChange(c); }}
            className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${
              active===c ? "bg-black text-white" : "bg-white text-black hover:bg-neutral-100"}`}
            aria-pressed={active===c}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}



