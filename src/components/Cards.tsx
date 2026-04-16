import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps extends Product {}

export function ProductCard({ name, description, price, category, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-200 border-2 border-dashed rounded-t-xl h-64 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={`${name} - ${category}`} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">Image coming soon</span>
        )}
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">Inquire →</Link>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
