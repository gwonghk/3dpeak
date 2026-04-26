"use client";

import ErrorView from "@/components/ErrorView";

export default function HomeError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[HomeError]", error);

  return <ErrorView reset={reset} />;
}
