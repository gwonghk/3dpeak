import HeroSection from "@/app/home/HeroSection";
import FeaturesSection from "@/app/home/FeaturesSection";
import CtaSection from "@/app/home/CtaSection";
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SubscribeForm variant="inline" />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}
