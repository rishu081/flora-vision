interface ButtonProps {
  text: string;
  variant?: "primary" | "outline";
}

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-300 ${
        variant === "primary"
          ? "bg-[#5A8F3D] hover:bg-[#4A7C30] text-white"
          : "border border-white text-white hover:bg-white hover:text-black"
      }`}
    >
      {text}
    </button>
  );
}