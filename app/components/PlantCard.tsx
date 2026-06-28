import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

interface PlantCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function PlantCard({
  image,
  title,
  description,
  price,
}: PlantCardProps) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-green-500">

      <div className="relative h-44 w-full flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-5 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-300">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-2xl font-semibold">
          {price}
        </span>

        <button className="rounded-lg border border-white p-3 transition hover:bg-white hover:text-black">
          <FiShoppingBag />
        </button>

      </div>

    </div>
  );
}