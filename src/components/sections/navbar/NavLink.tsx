"use client";

import Link from "next/link";
import { navLinks } from "@/components/sections/navbar/navLinks";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 flex-col md:flex-row">
      {navLinks.map((link) => (
        <li
          key={link.path}
          className={`rounded md:rounded-none ${
            link.path === pathname
              ? "md:font-bold bg-primary text-primary-foreground"
              : "bg-secondary text-foreground"
          } md:bg-transparent md:text-foreground overflow-hidden`}
        >
          <Link
            href={link.path}
            type="button"
            className="w-full h-full p-2 md:p-0 block"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
