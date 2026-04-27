"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import ModelBadge from "./ModelBadge";

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(cents / 100);
}

export function ProductCard({ product }: ProductCardProps) {
  const images = product.images;
  const [hovered, setHovered] = useState(false);
  const secondImage = images[1] ?? images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-xl bg-surface shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface-container">
        <Image
          src={hovered ? secondImage : images[0]}
          alt={product.title}
          width={400}
          height={400}
          className={`w-full h-full object-cover transition-transform ${secondImage ? "duration-2000" : "duration-300"} group-hover:scale-105`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />

        {/* 3D model badge — top-left, always visible when model exists */}
        {product.modelUrl && <ModelBadge />}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-secondary">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-on-surface transition-colors group-hover:text-secondary">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-on-surface-variant line-clamp-2">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-on-surface">
            {formatPrice(product.price)}
          </span>
          {!product.inStock && (
            <span className="text-xs font-medium text-error">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface ProductCardProps {
  product: Product;
}
