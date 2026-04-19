"use client";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ModelViewer from "./ModelViewer";

interface ProductGalleryProps {
  title: string;
  images: string[];
  modelUrl: string | null;
}

export default function ProductGallery({ title, images, modelUrl }: ProductGalleryProps) {
  const [view, setView] = useState<"image" | "3d">("image");

  const has3D = modelUrl !== null;

  return (
    <div className="w-full">
      {/* View toggle */}
      {has3D && (
        <div className="mb-4 flex rounded-lg border border-gray-200 p-1 w-fit">
          <button
            onClick={() => setView("image")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
              view === "image"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setView("3d")}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${
              view === "3d"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            3D View
          </button>
        </div>
      )}

      {/* Content */}
      <div className="w-full">
        {view === "3d" && has3D ? (
          <ModelViewer modelUrl={modelUrl} alt={title} />
        ) : (
          <ImageCarousel images={images} alt={title} />
        )}
      </div>
    </div>
  );
}
