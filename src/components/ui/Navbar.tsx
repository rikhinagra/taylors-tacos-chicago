"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story",  href: "#about" },
  { label: "Catering",   href: "#services" },
  { label: "Menu",       href: "#menu" },
  { label: "Book Now →", href: "#contact" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 z-50 transition-all duration-400"
        style={{
          top: scrolled ? "0" : "8px",
          padding: scrolled ? "12px 52px" : "18px 52px",
          background: scrolled ? "rgba(14,10,8,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "3px solid var(--yellow)" : "none",
        }}
      >
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex-shrink-0"
          >
            <div className="relative" style={{ width: "140px", height: "52px" }}>
              <Image
                src="/images/logo/Taylor's Tacos Horizontal.webp"
                alt="Taylor's Tacos Chicago"
                fill
                className="object-contain"
                style={{ filter: "brightness(1.05)" }}
                priority
              />
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative group transition-colors duration-300"
                  style={{
                    color: link.label === "Book Now →" ? "white" : "rgba(250,246,238,0.72)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: link.label === "Book Now →"
                      ? "var(--red)"
                      : "transparent",
                    padding: link.label === "Book Now →" ? "11px 24px" : "0",
                    borderRadius: link.label === "Book Now →" ? "3px" : "0",
                    border: "none",
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    if (link.label !== "Book Now →") {
                      (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
                    } else {
                      (e.currentTarget as HTMLElement).style.background = "var(--deep-red)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (link.label !== "Book Now →") {
                      (e.currentTarget as HTMLElement).style.color = "rgba(250,246,238,0.72)";
                    } else {
                      (e.currentTarget as HTMLElement).style.background = "var(--red)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }
                  }}
                >
                  {link.label}
                  {link.label !== "Book Now →" && (
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                      style={{ background: "var(--yellow)" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--off-white)]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-[280px] flex flex-col pt-20 pb-8 px-6 shadow-2xl"
              style={{ background: "rgba(14,10,8,0.98)", borderLeft: "3px solid var(--yellow)" }}
            >
              <div className="brand-stripe w-full mb-8 rounded-sm" />
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    className="text-left py-3 px-4 rounded font-semibold uppercase tracking-widest text-sm transition-colors"
                    style={{
                      color: "rgba(250,246,238,0.75)",
                      letterSpacing: "2px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,246,238,0.75)")}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="tel:7732261596"
                  className="block text-center py-3 rounded text-sm font-semibold text-white"
                  style={{ background: "var(--red)" }}
                >
                  (773) 226-1596
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
