"use client";

import ErrorView from "@/components/ErrorView";

export default function RootError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[RootError]", error);

  return <ErrorView reset={reset} />;
}
