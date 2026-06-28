import SectionHeading from "./SectionHeading";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    image: "/images/user1.jpg",
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier.",
  },
  {
    image: "/images/user2.jpg",
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality. They brightened my space.",
  },
  {
    image: "/images/user3.jpg",
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment.",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading title="Customer Review" />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {reviews.map((item) => (
          <ReviewCard
            key={item.name}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}