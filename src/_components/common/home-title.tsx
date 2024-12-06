interface H3TitleProps {
  title: string;
  className?: string;
  eyes?: boolean;
}

export default function H3Title({ title, className, eyes }: H3TitleProps) {
  return (
    <h3 className={`mb-10 text-h3 text-black ${className || ''}`}>
      {title}
      {eyes && <span className="ml-3">👀</span>}
    </h3>
  );
}
