import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Left */}

        <div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Earth's Exhale
          </h1>

          <p className="mt-5 max-w-lg text-gray-300">
            "Earth's Exhale" symbolizes the purity and vitality
            of the Earth's natural environment and its
            essential role in sustaining life.
          </p>

          <div className="mt-8 flex gap-4">
            <Button text="Buy Now" />

            <Button
              text="Live Demo"
              variant="outline"
            />
          </div>

          <div className="mt-12 w-64 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <p className="text-sm text-gray-300">
              Beautiful indoor plants improve your
              productivity and freshen your room.
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <Image
            src="/images/hero.jpg"
            alt="Hero Plant"
            width={500}
            height={650}
            priority
          />

          <div className="absolute right-0 top-8 w-56 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">

            <Image
              src="/images/product1.jpg"
              alt="Plant"
              width={180}
              height={180}
              className="mx-auto"
            />

            <p className="mt-3 text-sm text-gray-300">
              Indoor Plant
            </p>

            <h3 className="text-xl font-semibold">
              Aglaonema Plant
            </h3>

            <Button text="Buy Now" />

          </div>

        </div>

      </div>
    </section>
  );
}