import PlantCard from "./PlantCard";
import SectionHeading from "./SectionHeading";

const plants = [
  {
    image: "/images/p1.jpg",
    title: "Aglaonema Plant",
    description:
      "The Aglaonema plant is commonly known as Chinese Evergreen.",
    price: "Rs. 300/-",
  },

  {
    image: "/images/p2.jpg",
    title: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush decorative leaves.",
    price: "Rs. 380/-",
  },

  {
    image: "/images/p3.jpg",
    title: "Cactus",
    description:
      "Perfect for hot climates and indoor decoration.",
    price: "Rs. 259/-",
  },

  {
    image: "/images/p4.jpg",
    title: "Swiss Cheese Plant",
    description:
      "Known for its decorative split leaves.",
    price: "Rs. 400/-",
  },

  {
    image: "/images/p5.jpg",
    title: "Sansevieria Plant",
    description:
      "One of the easiest plants to maintain.",
    price: "Rs. 450/-",
  },

  {
    image: "/images/p6.jpg",
    title: "Agave Plant",
    description:
      "A beautiful succulent for indoor decoration.",
    price: "Rs. 359/-",
  },
];

export default function TopSelling() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading title="Our Top Selling Plants" />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {plants.map((plant) => (
          <PlantCard
            key={plant.title}
            {...plant}
          />
        ))}

      </div>

    </section>
  );
}