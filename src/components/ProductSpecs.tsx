interface ProductSpecsProps {
  specs: Record<string, string>;
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  const entries = Object.entries(specs);

  if (entries.length === 0) return null;

  return (
    <div className="rounded-xl border border-outline bg-surface p-6">
      <h2 className="mb-4 text-lg font-semibold text-on-surface">Specifications</h2>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-3">
        {entries.map(([key, value]) => (
          <div key={key} className="border-b border-outline-variant pb-3 last:border-0">
            <dt className="text-sm text-on-surface-variant">{key}</dt>
            <dd className="mt-0.5 text-sm font-medium text-on-surface">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
