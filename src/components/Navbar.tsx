"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PRICING", href: "#pricing" },
  { label: "TEAM", href: "#team" },
  { label: "BLOG", href: "#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brown-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a
          href="#hero"
          className="font-display text-2xl font-bold text-cream tracking-wider"
        >
          <span className="italic">S</span>rujana Jois
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream/80 hover:text-cream text-xs tracking-[0.2em] font-body font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#appointment" className="hidden lg:block btn-accent">
          CONTACT US
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brown-dark border-t border-cream/10 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-cream/80 hover:text-cream text-sm tracking-[0.2em] font-body"
            >
              {link.label}
            </a>
          ))}
          <a href="#appointment" className="btn-accent inline-block mt-4">
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
