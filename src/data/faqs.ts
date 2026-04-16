export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What materials do you use for 3D printing?",
    answer: "We primarily use PLA and PETG filaments, which are durable, food-safe (with proper settings), and produce high-quality prints.",
  },
  {
    question: "How long does it take to produce an item?",
    answer: "Most standard items ship within 3-5 business days. Custom orders may take longer.",
  },
  {
    question: "Can I request a custom design?",
    answer: "Absolutely! Contact us with your concept, and we'll provide a quote and timeline.",
  },
  {
    question: "Do you offer refunds or returns?",
    answer: "Due to the nature of 3D printed items, we generally don't accept returns unless an item arrives damaged.",
  },
  {
    question: "What file formats do you accept for custom orders?",
    answer: "We prefer STL or OBJ files, but can also work with STEP, Fusion 360, and other common 3D model formats.",
  },
  {
    question: "Do you ship nationwide?",
    answer: "Yes! We ship across Canada and the US. Shipping costs and times vary by location.",
  },
];
