import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold">🌿 Planto</h2>

          <p className="mt-4 text-gray-400">
            Bringing nature closer to your home with beautiful indoor plants.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3">
            <Link href="#">Home</Link>
            <Link href="#">Plants</Link>
            <Link href="#">Reviews</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Company</h3>

          <div className="flex flex-col gap-3">
            <Link href="#">About</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Support</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Newsletter</h3>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full rounded-lg bg-white/10 px-4 py-3 outline-none"
          />

          <div className="flex gap-4 mt-6 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}