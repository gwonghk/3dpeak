"use client";

import { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  modelUrl: string;
  alt: string;
  poster?: string;
}

export default function ModelViewer({ modelUrl, alt, poster }: ModelViewerProps) {
  const [loaded, setLoaded] = useState(false);
  const elRef = useRef<HTMLElement | null>(null);

  // One-time: load the @google/model-viewer library on mount
  useEffect(() => {
    import("@google/model-viewer").then(() => setLoaded(true));
  }, []);

  // Whenever props change (including on first load after mount), set attributes
  useEffect(() => {
    if (!loaded || !elRef.current) return;
    elRef.current.setAttribute("src", modelUrl);
    elRef.current.setAttribute("alt", alt);
    if (poster) {
      elRef.current.setAttribute("poster", poster);
    } else {
      elRef.current.removeAttribute("poster");
    }
    elRef.current.setAttribute("auto-rotate", "");
    elRef.current.setAttribute("camera-controls", "");
    elRef.current.setAttribute("shadow-intensity", "1");
    elRef.current.setAttribute("ar", "");
    elRef.current.setAttribute("ar-modes", "webxr scene-viewer quick-look");
  }, [modelUrl, alt, poster, loaded]);

  if (!loaded) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl bg-gray-100">
        <span className="text-sm text-gray-400">Loading 3D view...</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
      {/* @ts-ignore */}
      <model-viewer
        ref={elRef as React.RefObject<HTMLElement>}
        className="h-full w-full"
      />
    </div>
  );
}
