import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or want to place a custom order? We'd love to hear from you."
      />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactForm />
      </section>
    </div>
  );
}
