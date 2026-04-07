"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

const bannerImages = [
  "/images/banners/taylor's_tacos_banner.webp",
  "/images/banners/taylor's_tacos_banner01.webp",
  "/images/banners/taylor's_tacos_banner02.webp",
  "/images/banners/taylor's_tacos_banner03.webp",
  "/images/banners/taylor's_tacos_banner04.webp",
  "/images/banners/taylor's_tacos_banner05.webp",
  "/images/banners/taylor's_tacos_banner06.webp",
  "/images/banners/taylor's_tacos_banner07.webp",
  "/images/banners/taylor's_tacos_banner08.webp",
  "/images/banners/taylor's_tacos_banner09.webp",
  "/images/banners/taylor's_tacos_banner10.webp",
  "/images/banners/taylor's_tacos_banner11.webp",
];

const papelFlags = Array.from({ length: 16 });

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance slideshow like a looping video
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* ── Background Slideshow (replaces video until real video is ready) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bannerImages[current]}
              alt="Taylor's Tacos Chicago"
              fill
              className="object-cover object-center"
              priority={current === 0}
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay — matches approved design opacity */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(160deg, rgba(14,10,8,0.88) 0%, rgba(14,10,8,0.55) 50%, rgba(85,26,58,0.25) 100%)",
          }}
        />
      </div>

      {/* ── Brand stripe ribbon (top) ────────────────────────────────────────── */}
      <div className="brand-stripe absolute top-0 left-0 right-0 z-30 pointer-events-none" />

      {/* ── Papel Picado flags ───────────────────────────────────────────────── */}
      <div className="absolute left-0 right-0 z-20 flex justify-around pointer-events-none" style={{ top: "10px" }}>
        {papelFlags.map((_, i) => (
          <div key={i} className="papel-flag" />
        ))}
      </div>

      {/* ── Spinning deco ring ───────────────────────────────────────────────── */}
      <div
        className="absolute z-10 rounded-full pointer-events-none"
        style={{
          width: "min(620px, 85vw)",
          height: "min(620px, 85vw)",
          border: "1px solid rgba(251,175,28,0.12)",
          top: "50%", left: "50%",
          animation: "spinSlow 45s linear infinite",
          boxShadow: "inset 0 0 0 24px transparent",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            inset: "24px",
            border: "1px dashed rgba(188,220,154,0.08)",
          }}
        />
      </div>

      {/* ── Hero Content ─────────────────────────────────────────────────────── */}
      {/* NOTE: Character mascot removed — video placeholder. Will be restored with real video. */}
      <div
        style={{
          position: "relative",
          zIndex: 40,
          textAlign: "center",
          padding: "0 clamp(20px, 5vw, 32px)",
          maxWidth: "820px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontSize: "13px",
            letterSpacing: "7px",
            textTransform: "uppercase",
            color: "var(--yellow)",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          Chicago&apos;s Soul &nbsp;·&nbsp; LA&apos;s Flavor &nbsp;·&nbsp; 135 N. Kedzie
        </motion.p>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto mb-6"
          style={{ width: "min(580px, 75vw)", height: "auto" }}
        >
          <Image
            src="/images/logo/main logo full.webp"
            alt="Taylor's Tacos"
            width={580}
            height={220}
            className="w-full h-auto"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.7))" }}
            priority
          />
        </motion.div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          style={{
            fontSize: "clamp(13px, 1.6vw, 17px)",
            color: "rgba(250,246,238,0.72)",
            fontWeight: 300,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          #1 Taco Catering in the Chi
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--red)",
              color: "white",
              padding: "11px 24px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "3px",
              border: "2px solid var(--red)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--red)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--red)";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
          >
            Book Your Event <UtensilsCrossed size={16} strokeWidth={2} />
          </button>
          <button
            onClick={() => scrollTo("#menu")}
            className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--yellow)] hover:text-[var(--yellow)]"
            style={{
              background: "transparent",
              color: "var(--off-white)",
              padding: "11px 24px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "3px",
              border: "2px solid rgba(250,246,238,0.28)",
            }}
          >
            View Menu →
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <span
          style={{
            fontSize: "9px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "rgba(250,246,238,0.4)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, var(--yellow), transparent)",
            animation: "scrollPulse 2s ease infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
