"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Creator", path: "/creator" },
  { name: "Developer", path: "/developer" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">My Portfolio</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-indigo-400 ${
                  pathname === item.path ? "text-indigo-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
