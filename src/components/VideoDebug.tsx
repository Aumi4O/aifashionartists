"use client";
import { useEffect, useState } from "react";

export function VideoDebug() {
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  useEffect(() => {
    const info = [
      `NEXT_PUBLIC_VIDEO_BASE_URL: ${process.env.NEXT_PUBLIC_VIDEO_BASE_URL || 'NOT SET'}`,
      `User Agent: ${navigator.userAgent}`,
      `Is iOS: ${/iPad|iPhone|iPod/.test(navigator.userAgent)}`,
      `Supports video: ${document.createElement('video').canPlayType('video/mp4')}`,
    ];
    setDebugInfo(info);
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 text-xs max-w-sm z-50">
      <div className="font-bold">Video Debug:</div>
      {debugInfo.map((info, i) => (
        <div key={i}>{info}</div>
      ))}
    </div>
  );
}
