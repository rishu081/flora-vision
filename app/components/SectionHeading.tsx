interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <div className="flex justify-center py-10">
      <h2 className="relative text-3xl font-semibold">
        {title}
        <span className="absolute -bottom-1 left-0 h-[3px] w-10 rounded bg-[#7BB84A]" />
      </h2>
    </div>
  );
}