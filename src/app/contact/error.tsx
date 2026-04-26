"use client";

import ErrorView from "@/components/ErrorView";

export default function ContactError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[ContactError]", error);

  return <ErrorView reset={reset} />;
}
