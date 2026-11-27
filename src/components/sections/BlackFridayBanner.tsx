"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { BLACK_FRIDAY_ACTIVE } from "./blackFridayConfig";
import BlackFridayLink from "@/components/ui/BlackFridayLink";

// Starburst badge points (16 spikes, alternating outer/inner radius)
const STAR_POINTS = Array.from({ length: 32 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 32 - Math.PI / 2;
  const r = i % 2 === 0 ? 50 : 41;
  return `${(50 + r * Math.cos(angle)).toFixed(2)},${(50 + r * Math.sin(angle)).toFixed(2)}`;
}).join(" ");

export default function BlackFridayBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  if (!BLACK_FRIDAY_ACTIVE) return null;

  return (
    <section
      id="black-friday"
      ref={ref}
      style={{
        background: "var(--black)",
        padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 52px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* soft brand glows behind the ticket */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(60% 80% at 15% 50%, rgba(228,29,117,0.28) 0%, transparent 70%), radial-gradient(50% 70% at 90% 40%, rgba(251,175,28,0.14) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
      >
        {/* Ticket */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(120deg, #551A3A 0%, #3a0f27 55%, #1a0a12 100%)",
            border: "2px dashed rgba(251,175,28,0.55)",
            borderRadius: "14px",
            padding: "clamp(28px, 4.5vw, 56px) clamp(24px, 5vw, 64px)",
            boxShadow:
              "0 0 0 6px rgba(251,175,28,0.06), 0 24px 60px rgba(0,0,0,0.55), 0 0 60px rgba(228,29,117,0.18)",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            gap: "clamp(20px, 4vw, 52px)",
          }}
          className="bf-ticket"
        >
          {/* ticket notches */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-17px",
              top: "50%",
              width: "32px",
              height: "32px",
              marginTop: "-16px",
              borderRadius: "50%",
              background: "var(--black)",
              border: "2px dashed rgba(251,175,28,0.55)",
              clipPath: "inset(0 0 0 50%)",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-17px",
              top: "50%",
              width: "32px",
              height: "32px",
              marginTop: "-16px",
              borderRadius: "50%",
              background: "var(--black)",
              border: "2px dashed rgba(251,175,28,0.55)",
              clipPath: "inset(0 50% 0 0)",
            }}
          />

          {/* Starburst badge */}
          <div
            className="bf-badge"
            style={{
              position: "relative",
              width: "clamp(110px, 14vw, 170px)",
              height: "clamp(110px, 14vw, 170px)",
              flexShrink: 0,
              justifySelf: "center",
            }}
          >
            <motion.svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              animate={reduce ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 6px 18px rgba(251,175,28,0.35))",
              }}
            >
              <polygon points={STAR_POINTS} fill="#FBAF1C" />
            </motion.svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#0E0A08",
                fontFamily: "Hannik, sans-serif",
                fontWeight: 900,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              <span style={{ fontSize: "clamp(10px, 1.1vw, 13px)", letterSpacing: "2px" }}>
                Limited
              </span>
              <span style={{ fontSize: "clamp(20px, 2.8vw, 34px)", margin: "3px 0" }}>
                Time
              </span>
              <span style={{ fontSize: "clamp(10px, 1.1vw, 13px)", letterSpacing: "2px" }}>
                Only
              </span>
            </div>
          </div>

          {/* Copy + button */}
          <div style={{ textAlign: "left" }} className="bf-copy">
            <span
              style={{
                display: "block",
                color: "var(--yellow)",
                fontSize: "clamp(11px, 1.2vw, 14px)",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Taylor&apos;s Tacos &nbsp;·&nbsp; Black Friday
            </span>
            <h2
              style={{
                fontFamily: "Hannik, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(34px, 6vw, 74px)",
                lineHeight: 1.02,
                color: "white",
                margin: "0 0 14px",
                textTransform: "uppercase",
              }}
            >
              Black Friday{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #E41D75, #EA3B48, #FBAF1C)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Deal
              </span>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 1.7vw, 19px)",
                lineHeight: 1.7,
                color: "rgba(250,246,238,0.85)",
                maxWidth: "560px",
                margin: "0 0 26px",
              }}
            >
              Our biggest deal of the year is here. Sign up now to claim yours
              before it&apos;s gone.
            </p>

            <BlackFridayLink
              hover
              ariaLabel="Sign up for the Black Friday deal"
              className="bf-cta"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "var(--yellow)",
                color: "#0E0A08",
                padding: "clamp(13px, 1.6vw, 17px) clamp(24px, 3vw, 38px)",
                fontSize: "clamp(14px, 1.5vw, 17px)",
                fontWeight: 900,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "none",
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(251,175,28,0.4)",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                Sign Up for the Deal
              </span>
              <ArrowRight
                size={20}
                strokeWidth={3}
                style={{ position: "relative", zIndex: 1 }}
              />
              <span aria-hidden="true" className="bf-shine" />
            </BlackFridayLink>
          </div>
        </div>
      </motion.div>

      <style>{`
        .bf-shine {
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.65), transparent);
          transform: skewX(-20deg);
          animation: bfShine 3.4s ease-in-out infinite;
        }
        @keyframes bfShine {
          0%, 55% { left: -60%; }
          100% { left: 130%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bf-shine { animation: none; display: none; }
        }
        @media (max-width: 720px) {
          .bf-ticket {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .bf-copy { text-align: center !important; }
          .bf-copy p { margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>
    </section>
  );
}
