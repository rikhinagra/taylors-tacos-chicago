"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story",    href: "#about" },
  { label: "Catering",     href: "#services" },
  { label: "Menu",         href: "/catering-menu" },
  { label: "Taco Tuesday", href: "/taco-tuesday" },
  { label: "Book Now",     href: "#contact" },
];

const PINK_GRADIENT = "linear-gradient(90deg, #E41D75 0%, #E52D5D 50%, #EA3B48 100%)";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string, closeMenu?: () => void) => {
    if (closeMenu) closeMenu();
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    if (pathname === "/") {
      scrollTo(href);
    } else {
      window.location.href = `/${href}`;
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      scrollTo("#home");
    } else {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Set --navbar-height CSS variable so Hero can subtract it from 100vh
  useEffect(() => {
    const header = document.querySelector("header");
    const update = () => {
      if (header) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${header.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 50,
          background: PINK_GRADIENT,
          boxShadow: "0 4px 28px rgba(228,29,117,0.4)",
          textAlign: "center",
        }}
      >
        {/* ── Brand Name (big, bold, centered) — desktop/tablet only ── */}
        <button
          onClick={handleLogoClick}
          className="hidden md:block"
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            width: "100%",
            padding: "20px clamp(20px, 4vw, 52px) 0",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(44px, 8.5vw, 115px)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "clamp(1px, 0.3vw, 5px)",
              textTransform: "uppercase",
              lineHeight: 1,
              fontFamily: "Hannik, sans-serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.2)",
            }}
          >
            Taylor&apos;s Tacos Catering
          </span>
        </button>

        {/* ── Desktop Nav Links (centered, below brand name) ── */}
        <ul
          className="hidden md:flex items-center justify-center flex-wrap"
          style={{
            gap: "clamp(16px, 3vw, 48px)",
            padding: "14px clamp(20px, 4vw, 52px) 0",
            listStyle: "none",
            margin: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative group transition-all duration-300"
                style={{
                  color: (
                    (pathname === "/taco-tuesday" && link.label === "Taco Tuesday") ||
                    (pathname === "/catering-menu" && link.label === "Book Catering")
                  ) ? "var(--yellow)" : "#551A3A",
                  fontSize: "clamp(15px, 1.7vw, 22px)",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  background: "transparent",
                  border: "none",
                  cursor: "none",
                  padding: 0,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const isActive =
                    (pathname === "/taco-tuesday" && link.label === "Taco Tuesday") ||
                    (pathname === "/catering-menu" && link.label === "Book Catering");
                  (e.currentTarget as HTMLElement).style.color = isActive ? "var(--yellow)" : "#551A3A";
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ background: "white" }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* ── Address + Phone (centered, bottom strip) ── */}
        <div
          className="hidden md:block"
          style={{
            padding: "14px clamp(20px, 4vw, 52px) 18px",
            color: "white",
            fontSize: "clamp(13px, 1.4vw, 18px)",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <a
            href="https://maps.google.com/?q=135+N+Kedzie+Chicago+IL+60612"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none", cursor: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
          >
            135 N. Kedzie Chicago, IL
          </a>
          <span style={{ margin: "0 14px", color: "white" }}>(773) - 226 - 1596</span>
        </div>

        {/* ── Mobile: Brand + Hamburger row ── */}
        <div
          className="flex md:hidden items-center justify-between"
          style={{ padding: "8px clamp(16px, 5vw, 32px)" }}
        >
          <button
            onClick={handleLogoClick}
            style={{ background: "none", border: "none", cursor: "none", padding: 0 }}
          >
            <div className="relative" style={{ width: "150px", height: "48px" }}>
              <Image
                src="/images/logo/taylors-tacos-chicago-logo-horizontal.webp"
                alt="Taylor's Tacos Chicago"
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
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
                background: PINK_GRADIENT,
                borderLeft: "3px solid var(--yellow)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  background: "none",
                  border: "none",
                  color: "white",
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
                    onClick={() => handleNavClick(link.href, () => setMenuOpen(false))}
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      borderRadius: "4px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "14px",
                      letterSpacing: "2px",
                      color: "white",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div style={{ marginTop: "auto" }}>
                <a
                  href="tel:7732261596"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px",
                    borderRadius: "4px",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#E41D75",
                    background: "white",
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
