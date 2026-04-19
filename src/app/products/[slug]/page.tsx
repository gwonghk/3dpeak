import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductSpecs from "@/components/ProductSpecs";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} — 3D Peak`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Gallery */}
          <div className="w-full">
            <ProductGallery
              title={product.title}
              images={product.images}
              modelUrl={product.modelUrl}
            />
          </div>

          {/* Right: Info */}
          <div className="w-full">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Specs — full width below */}
        <div className="mt-12 max-w-2xl">
          <ProductSpecs specs={product.specs} />
        </div>
      </div>
    </main>
  );
}
