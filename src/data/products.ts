export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl?: string;
}

export const products: Product[] = [
  { id: 1, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
  { id: 2, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
  { id: 3, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
  { id: 4, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
  { id: 5, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
  { id: 6, name: "Product Name", description: "Product description will go here.", price: "$0.00", category: "Category" },
];
