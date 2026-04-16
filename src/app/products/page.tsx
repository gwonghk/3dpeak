import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { ProductCard } from "@/components/Cards";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Our Products"
        subtitle="Browse our collection of premium 3D printed items."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12 text-center bg-indigo-50 rounded-xl p-8">
          <p className="text-indigo-800 font-medium">More products coming soon! Contact us for custom orders.</p>
        </div>
      </section>
    </div>
  );
}
