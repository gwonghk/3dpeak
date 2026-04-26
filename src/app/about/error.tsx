"use client";

import ErrorView from "@/components/ErrorView";

export default function AboutError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[AboutError]", error);

  return <ErrorView reset={reset} />;
}
