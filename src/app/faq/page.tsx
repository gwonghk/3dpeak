"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { faqs } from "@/data/faqs";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about PeakCraft."
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-4 text-indigo-600 text-xl font-bold" aria-hidden="true">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={openIndex === index ? "px-6 pb-4 pt-2 text-gray-600 leading-relaxed" : "hidden"}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-indigo-50 rounded-xl p-8">
          <p className="text-indigo-800 font-medium mb-4">Still have questions? We&apos;re happy to help.</p>
          <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
