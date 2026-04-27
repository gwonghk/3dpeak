"use client";

interface ErrorViewProps {
  reset?: () => void;
}

export default function ErrorView({ reset }: ErrorViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <svg
        className="w-12 h-12 text-tertiary mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-on-primary mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-on-surface-variant mb-6 max-w-md">
        We hit an unexpected snag. Your progress has been saved.
      </p>
      {reset && (
        <button
          onClick={reset}
          className="px-4 py-2 bg-tertiary text-on-tertiary rounded-lg hover:bg-tertiary/80 transition-colors text-sm font-medium"
        >
          Try again
        </button>
      )}
    </div>
  );
}
