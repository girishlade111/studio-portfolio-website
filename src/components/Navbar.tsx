"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Index", href: "#" },
  { name: "Work", href: "#work" },
  { name: "Service", href: "#service" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-3 group" data-hover="true">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute inset-0 border-[1.5px] border-white rounded-[4px] rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500 ease-out" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <span className="font-serif text-lg tracking-tight leading-none font-bold hidden sm:block">Rolland<br/>Studio</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative group hover:text-white transition-colors py-2 tracking-wide"
            data-hover="true"
          >
            {item.name}
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
        ))}
      </nav>
      
      <button className="md:hidden text-white" data-hover="true">
        Menu
      </button>
    </motion.header>
  );
}
