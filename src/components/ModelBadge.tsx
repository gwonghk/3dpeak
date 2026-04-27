interface ModelBadgeProps {
  className?: string;
}

export default function ModelBadge({ className = "" }: ModelBadgeProps) {
  return (
    <div
      className={`absolute top-3 left-3 flex items-center gap-1 rounded-full bg-scrim-dark backdrop-blur-sm px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm ${className}`}
    >
      {/* Cube icon */}
      <svg
        className="h-3.5 w-3.5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
      <span>3D</span>
    </div>
  );
}
