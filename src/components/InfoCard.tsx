interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="rounded-xl bg-surface p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-on-surface">{title}</h3>
      <p className="text-on-surface-variant">{content}</p>
    </div>
  );
}
