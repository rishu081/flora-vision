import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  image: string;
  name: string;
  review: string;
}

export default function ReviewCard({
  image,
  name,
  review,
}: ReviewCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500">

      <div className="flex items-center gap-4">

        <Image
          src={image}
          alt={name}
          width={55}
          height={55}
          className="rounded-full object-cover"
        />

        <div>

          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          <div className="mt-1 flex gap-1 text-yellow-400">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

        </div>

      </div>

      <p className="mt-6 text-sm leading-7 text-gray-300">
        {review}
      </p>

    </div>
  );
}