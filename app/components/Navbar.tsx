"use client";

import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from "react-icons/hi";

const navItems = [
  "Home",
  "Plants Type",
  "More",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>

          <h1 className="text-xl font-bold text-white">
            FloraVision.
          </h1>
        </div>

        <nav className="hidden gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white transition hover:text-green-400"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-xl text-white">
          <HiOutlineSearch className="cursor-pointer" />
          <HiOutlineShoppingBag className="cursor-pointer" />
          <HiOutlineMenuAlt3 className="cursor-pointer md:hidden" />
        </div>
      </div>
    </header>
  );
}