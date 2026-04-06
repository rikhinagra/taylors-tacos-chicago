"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function CharacterSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--deep-purple) 0%, #3d1228 50%, var(--deep-red) 100%)",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* SVG dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 items-center w-full"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "52px" }}
      >
        {/* Floating character */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/logo/Character.webp"
            alt="Taylor's Tacos mascot"
            width={260}
            height={320}
            className="object-contain"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))",
              height: "320px",
              width: "auto",
            }}
          />
        </motion.div>

        {/* Text content */}
        <div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
              fontFamily: "Hannik, sans-serif",
            }}
          >
            We&apos;re Not Just Caterers.{" "}
            <span style={{ color: "var(--green)" }}>
              We Build CommuniTAY.
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.78)",
              fontWeight: 300,
              marginBottom: "24px",
              maxWidth: "520px",
            }}
          >
            Every taco we serve is made with love, culture, and a whole lot of
            flavor. Taylor&apos;s Tacos is more than food — it&apos;s an experience
            that brings people together, one taco at a time.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--green)",
              color: "var(--black)",
              padding: "16px 36px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "3px",
              border: "none",
              cursor: "none",
            }}
          >
            Let&apos;s Create Together 🌮
          </button>
        </div>
      </div>
    </section>
  );
}
