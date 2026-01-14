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
      className={`absolute bg-white shadow-lg rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600
      ${small ? "max-w-[150px] sm:max-w-[200px]" : "max-w-[200px] sm:max-w-[250px]"}
      ${className}`}
    >
      {text}
    </div>
  );
}
