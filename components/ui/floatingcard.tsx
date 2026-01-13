interface Props {
  text: string;
  className?: string;
  small?: boolean;
}

export default function FloatingCard({
  text,
  className = "",
  small = false,
}: Props) {
  return (
    <div
      className={`absolute bg-white shadow-lg rounded-xl px-4 py-3 text-sm text-gray-600
      ${small ? "max-w-[200px]" : ""}
      ${className}`}
    >
      {text}
    </div>
  );
}
