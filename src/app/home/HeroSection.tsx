import Button from "@/components/Button";
import { homeContent } from "@/data/home-content";

const { headline, subheadline, description, browseCta } = homeContent.hero;

export default function HeroSection() {
  return (
    <section className="bg-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-on-primary">
          {headline}
          <br />
          {subheadline}
        </h1>
        <p className="text-xl text-on-primary mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" href="/products">
            {browseCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
