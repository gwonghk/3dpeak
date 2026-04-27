"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface-container rounded-xl shadow-sm p-8 text-center">
        <h2 className="text-2xl font-bold text-on-primary mb-4">
          Message Sent!
        </h2>
        <p className="text-on-primary-container mb-6">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <Button variant="primary" href="/">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container rounded-xl shadow-sm p-8 space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-on-primary mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background text-on-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-on-primary mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background text-on-primary"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-on-primary mb-1"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background text-on-primary"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-on-primary mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none bg-background text-on-primary"
          placeholder="Tell us more..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
