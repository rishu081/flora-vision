import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import TopSelling from "./components/TopSelling";
import Reviews from "./components/Reviews";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#172414] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Trending />

      <TopSelling />

      <Reviews />

      <BestO2 />

      <Footer />

    </main>
  );
}