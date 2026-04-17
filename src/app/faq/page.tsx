"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { faqs } from "@/data/faqs";
import { brand } from "@/config/brand";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-bg min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle={`Everything you need to know about ${brand.name}.`}
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-surface rounded-xl shadow-sm divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface-alt transition-colors"
                >
                  <span className="font-medium text-text">{faq.question}</span>
                  <span className="ml-4 text-primary text-xl font-bold" aria-hidden="true">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={openIndex === index ? "px-6 pb-4 pt-2 text-text-muted leading-relaxed" : "hidden"}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-banner-light rounded-xl p-8">
          <p className="text-banner-dark font-medium mb-4">Still have questions? We&apos;re happy to help.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-block">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
