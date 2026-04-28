"use client";

import { useState } from "react";

interface SubscribeFormProps {
  variant?: "inline" | "standalone";
  onSuccess?: (email: string) => void;
}

export default function SubscribeForm({
  variant = "inline",
  onSuccess,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setMessage("Almost there! Check your inbox to confirm your subscription.");
        setEmail("");
        onSuccess?.(email);
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  const isLoading = status === "loading";

  if (variant === "standalone") {
    return (
      <div className="max-w-md mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-4 text-on-primary">Stay in the Loop</h1>
        <p className="text-on-primary-container mb-8">
          Be the first to know when we launch new products. No spam, just the good stuff.
        </p>

        {status === "success" ? (
          <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-2xl">
            <p className="font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={isLoading}
              className="px-4 py-3 rounded-xl bg-surface-container-high text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors disabled:opacity-50"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
            {status === "error" && (
              <p className="text-error text-sm">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="py-20 bg-secondary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-on-secondary-container">
          Get Notified First
        </h2>
        <p className="text-on-secondary-container mb-8 max-w-xl mx-auto">
          Be the first to know when we launch new products. No spam, just the good stuff.
        </p>

        {status === "success" ? (
          <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-2xl max-w-md mx-auto">
            <p className="font-medium">{message}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="subscribe-email-inline" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email-inline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-xl bg-surface text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? "..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-error text-sm mt-3">{message}</p>
        )}
      </div>
    </section>
  );
}
