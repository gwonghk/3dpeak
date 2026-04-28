import SubscribeForm from "@/components/SubscribeForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Subscribe | PeakLab",
  description: "Get notified when we launch new 3D printed products.",
};

export default function SubscribePage() {
  return (
    <main className="min-h-full flex flex-col">
      <PageHeader
        title="Stay in the Loop"
        subtitle="Be the first to know when we launch new products. No spam, just the good stuff."
      />
      <section className="flex-1 py-20 bg-surface">
        <div className="max-w-md mx-auto px-4">
          <SubscribeForm variant="standalone" />
        </div>
      </section>
    </main>
  );
}
