interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="theme-badge inline-flex mb-4">{label}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold theme-text mb-4">{title}</h2>
      {subtitle && (
        <p className="theme-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
