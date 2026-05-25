interface Props {
  children: string;
}

export default function SectionTitle({ children }: Props) {
  const lines = children.split("\n");
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #3B6E47)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3B6E47" }} />
        <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #3B6E47)" }} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center leading-snug" style={{ color: "#1C1C1E" }}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  );
}
