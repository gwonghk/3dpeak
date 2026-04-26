"use client";

import ErrorView from "@/components/ErrorView";

export default function FaqError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[FaqError]", error);

  return <ErrorView reset={reset} />;
}
