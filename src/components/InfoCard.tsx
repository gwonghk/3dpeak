interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}
