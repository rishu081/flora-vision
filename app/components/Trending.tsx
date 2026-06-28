import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

export default function Trending() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading title="Our Trendy Plants" />

      <div className="mt-14 space-y-10">

        {/* Card 1 */}

        <div className="rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-md grid md:grid-cols-2 items-center overflow-hidden">

          <div className="flex justify-center">

            <Image
              src="/images/trending1.jpg"
              alt="Plant"
              width={330}
              height={330}
            />

          </div>

          <div className="p-10">

            <h3 className="text-3xl font-semibold">
              For Your Desk Decorations
            </h3>

            <p className="mt-5 text-gray-300 leading-7">
              Recently I added a beautiful desk decoration plant
              to my workspace and it has made such a positive
              difference.
            </p>

            <h4 className="mt-6 text-3xl font-bold">
              Rs. 599/-
            </h4>

            <div className="mt-8 flex gap-5">

              <Button text="Explore" />

              <button className="rounded-lg border border-white p-3">
                🛍️
              </button>

            </div>

          </div>

        </div>

        {/* Card 2 */}

        <div className="rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-md grid md:grid-cols-2 items-center overflow-hidden">

          <div className="order-2 md:order-1 p-10">

            <h3 className="text-3xl font-semibold">
              For Your Desk Decorations
            </h3>

            <p className="mt-5 text-gray-300 leading-7">
              The greenery adds a touch of nature and serenity
              to my desk making it feel more inviting.
            </p>

            <h4 className="mt-6 text-3xl font-bold">
              Rs. 399/-
            </h4>

            <div className="mt-8 flex gap-5">

              <Button text="Explore" />

              <button className="rounded-lg border border-white p-3">
                🛍️
              </button>

            </div>

          </div>

          <div className="order-1 md:order-2 flex justify-center">

            <Image
              src="/images/trending2.jpg"
              alt="Plant"
              width={330}
              height={330}
            />

          </div>

        </div>

      </div>

    </section>
  );
}