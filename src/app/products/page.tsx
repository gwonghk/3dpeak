import PageHeader from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <PageHeader
        title="Our Products"
        subtitle="Browse our collection of premium 3D printed items."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-secondary-container p-8 text-center">
          <p className="font-medium text-on-secondary-container">
            More products coming soon! Contact us for custom orders.
          </p>
        </div>
      </section>
    </div>
  );
}
