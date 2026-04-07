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
          padding: scrolled ? "12px clamp(20px, 4vw, 52px)" : "18px clamp(20px, 4vw, 52px)",
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
            <div className="relative" style={{ width: "170px", height: "64px" }}>
              <Image
                src="/images/logo/main logo full two.webp"
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
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: link.label === "Book Now →"
                      ? "var(--red)"
                      : "transparent",
                    padding: link.label === "Book Now →" ? "8px 18px" : "0",
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
            aria-label="Toggle menu"
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              marginRight: "4px",
              background: "none",
              border: "none",
              color: "var(--off-white)",
              cursor: "pointer",
            }}
            className="hamburger-btn"
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
            className="md:hidden"
            style={{ position: "fixed", inset: 0, zIndex: 9000 }}
          >
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "280px",
                display: "flex",
                flexDirection: "column",
                paddingTop: "80px",
                paddingBottom: "52px",
                paddingLeft: "24px",
                paddingRight: "24px",
                background: "#0E0A08",
                borderLeft: "3px solid var(--yellow)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  background: "none",
                  border: "none",
                  color: "var(--off-white)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="brand-stripe" style={{ width: "100%", marginBottom: "32px", borderRadius: "3px" }} />

              <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      borderRadius: "4px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "14px",
                      letterSpacing: "2px",
                      color: "rgba(250,246,238,0.75)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,246,238,0.75)")}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div style={{ marginTop: "auto" }}>
                <a
                  href="tel:7732261596"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: "4px",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "white",
                    background: "var(--red)",
                    textDecoration: "none",
                  }}
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
