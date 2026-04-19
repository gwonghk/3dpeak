import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(cents / 100);
}

export function ProductCard({ product }: ProductCardProps) {
  const [primaryImage] = product.images;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-blue-600">
          {product.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-700">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {!product.inStock && (
            <span className="text-xs font-medium text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}
