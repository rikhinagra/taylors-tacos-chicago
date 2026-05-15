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
        background: "linear-gradient(90deg, #E41D75 0%, #E52D5D 50%, #EA3B48 100%)",
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
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(20px, 3vw, 40px)" }}
      >
        {/* Floating character */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/logo/taylors-tacos-chicago-cactus-mascot-character.webp"
            alt="Taylor's Tacos Chicago cactus mascot character"
            width={260}
            height={320}
            className="object-contain"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))",
              height: "clamp(180px, 30vw, 320px)",
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
            Bring Tacos to Your{" "}
            <span style={{ color: "var(--green)" }}>
              Event
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.92)",
              fontWeight: 300,
              marginBottom: "24px",
              maxWidth: "520px",
            }}
          >
            From food truck rollouts and staffed catering to corporate lunches,
            weddings, schools, and nonprofits. We love feeding the people who
            feed the people. Built on bold flavors and real community,
            Taylor&apos;s Tacos brings the soul to every event.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--green)",
              color: "var(--black)",
              padding: "12px 28px",
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "3px",
              border: "2px solid white",
              cursor: "none",
            }}
          >
            Book Us for Your Event →
          </button>
        </div>
      </div>
    </section>
  );
}
