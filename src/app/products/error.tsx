"use client";

import ErrorView from "@/components/ErrorView";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[ProductsError]", error);

  return <ErrorView reset={reset} />;
}
