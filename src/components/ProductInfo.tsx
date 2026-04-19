import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(cents / 100);
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <span className="text-sm font-medium uppercase tracking-wide text-blue-600">
        {product.category}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-500">{product.tagline}</p>

      {/* Price */}
      <div className="text-2xl font-semibold text-gray-900">
        {formatPrice(product.price)}
      </div>

      {/* Stock badge */}
      <div>
        {product.inStock ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            In Stock
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
            Out of Stock
          </span>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* CTA */}
      <button
        disabled={!product.inStock}
        className="mt-2 w-full rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
