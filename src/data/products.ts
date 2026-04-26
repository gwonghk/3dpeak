export interface Product {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  modelUrl: string | null;
  images: string[];
  specs: Record<string, string>;
  price: number; // in cents
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    slug: "paw-print-pendant",
    title: "Paw Print Pendant",
    tagline: "A personalized keepsake for pet lovers",
    description:
      "Capture the essence of your beloved pet with this custom 3D-printed paw print pendant. Each piece is meticulously crafted to preserve every whisker detail, creating a timeless treasure you'll cherish for years to come. Made from biodegradable PLA filament, it's lightweight yet durable enough for everyday wear.",
    modelUrl: "/models/begging-shiba.glb",
    images: ["/pics/shiba1.jpeg", "/pics/shiba2.jpeg", "/pics/shiba1.jpeg"],
    specs: {
      Material: "PLA (polylactic acid)",
      Weight: "8g",
      Dimensions: "30mm × 30mm × 5mm",
      Finish: "Matte",
      Chain: "Not included",
    },
    price: 2499,
    category: "Jewelry",
    inStock: true,
  },
  {
    slug: "cable-holder-dragon",
    title: "Articulated Dragon Cable Holder",
    tagline: "Tame your cables with mythical flair",
    description:
      "This fully articulated dragon isn't just a desk accessory — it's a functional piece of art. Each joint moves independently, allowing you to pose it however you like while it keeps your charging cables organized and within reach. Perfect for desk warriors who want a touch of magic in their workspace.",
    modelUrl: null,
    images: [
      "https://placehold.co/600x600/e2e8f0/1e293b?text=Dragon+Front",
      "https://placehold.co/600x600/e2e8f0/1e293b?text=Dragon+Detail",
      "https://placehold.co/600x600/e2e8f0/1e293b?text=Dragon+Pose",
    ],
    specs: {
      Material: "PLA Plus",
      Weight: "45g",
      Dimensions: "120mm × 80mm × 60mm",
      "Articulation Points": "12",
      Finish: "Glossy",
    },
    price: 3999,
    category: "Desk Accessories",
    inStock: true,
  },
  {
    slug: "rabbit-litter-grid",
    title: "Custom Rabbit Litter Box Grid",
    tagline: "The ultimate upgrade for bunny homes",
    description:
      "Say goodbye to mess and hello to a cleaner cage. This custom-fit litter box grid is designed specifically for standard rabbit habitats, ensuring maximum coverage while allowing waste to fall through. Easy to clean and dishwasher safe.",
    modelUrl: null,
    images: [
      "https://placehold.co/600x600/e2e8f0/1e293b?text=Grid+Top",
      "https://placehold.co/600x600/e2e8f0/1e293b?text=Grid+Bottom",
    ],
    specs: {
      Material: "PETG",
      "Grid Size": "40cm × 30cm",
      "Bar Width": "8mm",
      "Rabbit Safe": "Yes",
      "Dishwasher Safe": "Yes",
    },
    price: 3499,
    category: "Pet Care",
    inStock: false,
  },
  {
    slug: "pencil-holder",
    title: "Articulated Pencil Holder",
    tagline: "Flexibility meets function on your desk",
    description:
      "Keep your pencils, pens, and markers exactly where you want them with this articulated pencil holder. The flexible joint lets you pose the holder to fit your desk layout, while the weighted base keeps it stable even when fully loaded. A satisfying mix of utility and print-in-place engineering.",
    modelUrl: "/models/pencil_flexure_joint.glb",
    images: ["/pics/shiba1.jpeg", "/pics/shiba2.jpeg"],
    specs: {
      Material: "PLA Plus",
      Weight: "62g",
      Dimensions: "100mm × 80mm × 40mm",
      "Articulation Points": "3",
      Finish: "Matte",
    },
    price: 3499,
    category: "Desk Accessories",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
