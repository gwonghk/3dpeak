import Button from "@/components/Button";
import { homeContent } from "@/data/home-content";

const { heading, description, button } = homeContent.cta;

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-on-primary mb-4">{heading}</h2>
        <p className="text-on-primary-container mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <Button variant="primary" href="/products">
          {button}
        </Button>
      </div>
    </section>
  );
}
