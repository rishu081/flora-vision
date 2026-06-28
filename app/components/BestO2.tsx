import Image from "next/image";
import Button from "./Button";

export default function BestO2() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid items-center gap-12 rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:grid-cols-2">

        {/* Left */}

        <div className="flex justify-center">

          <Image
            src="/images/o2plant.jpg"
            alt="O2 Plant"
            width={420}
            height={420}
          />

        </div>

        {/* Right */}

        <div>

          <span className="rounded-full bg-green-700 px-4 py-2 text-sm">
            Best Indoor Plant
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            We Have Small And Best O₂ Plants Collection
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Indoor plants not only enhance your home but also
            improve air quality by releasing oxygen and creating
            a refreshing environment.
          </p>

          <div className="mt-10">
            <Button text="Explore Now" />
          </div>

        </div>

      </div>

    </section>
  );
}