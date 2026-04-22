import { homeContent } from "@/data/home-content";

const { heading, items } = homeContent.features;

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="bg-surface p-8 rounded-xl shadow-sm text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-body mb-2">{title}</h3>
      <p className="text-body-muted">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-body mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
