import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Crafted with Precision.
            <br />
            Printed with Passion.
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Premium 3D printed items for collectors, creators, and curious minds.
            Every piece crafted with care.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" href="/products">Browse Products</Button>
            <Button variant="outline" href="/about">About Us</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why PeakCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Designs
              </h3>
              <p className="text-gray-600">
                Want something unique? We can bring your ideas to life with custom
                3D printing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                High-resolution printing with premium materials for detailed,
                durable results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Turnaround
              </h3>
              <p className="text-gray-600">
                Quick production times without sacrificing quality. Most orders
                ship within days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to explore?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Take a look at our current collection and find something that speaks to you.
          </p>
          <Button variant="primary" href="/products">View Collection</Button>
        </div>
      </section>
    </div>
  );
}
