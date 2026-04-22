import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { InfoCard } from "@/components/Cards";
import { brand } from "@/config/brand";

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      <PageHeader title={`About ${brand.name}`} subtitle={brand.tagline} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-surface rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold text-body mb-6">Our Story</h2>
          <div className="space-y-4 text-body-muted leading-relaxed">
            <p>
              {brand.name} started with a simple idea: to take digital designs
              and transform them into real, tangible objects that people can
              hold, display, and enjoy.
            </p>
            <p>
              What began as a hobby quickly grew into a passion for precision
              crafting. We believe that every design, whether it&apos;s a
              functional piece or a decorative showpiece, deserves to be made
              with care and attention to detail.
            </p>
            <p>
              Today, we specialize in creating premium 3D printed items for
              collectors, creators, and anyone who appreciates quality
              craftsmanship. Each piece is printed, inspected, and finished to
              meet our high standards.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Our Mission"
            content={`To create high-quality 3D printed items that inspire creativity and bring joy to everyday life — one precise layer at a time.`}
          />
          <InfoCard
            title="Our Promise"
            content={`Every ${brand.name} item is crafted with precision, inspected for quality, and made to last. We stand behind our work.`}
          />
        </div>
        <div className="mt-12 text-center bg-secondary-light rounded-xl p-8">
          <p className="text-body-muted mb-6">
            Interested in a custom project? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
