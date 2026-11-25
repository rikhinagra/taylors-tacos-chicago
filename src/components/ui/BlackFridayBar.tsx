"use client";

import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BLACK_FRIDAY_ACTIVE } from "@/components/sections/blackFridayConfig";
import BlackFridayLink from "@/components/ui/BlackFridayLink";

export default function BlackFridayBar() {
  const reduce = useReducedMotion();
  if (!BLACK_FRIDAY_ACTIVE) return null;

  return (
    <BlackFridayLink
      ariaLabel="Black Friday deal is here. Sign up now."
      className="bf-bar"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(8px, 1.4vw, 16px)",
        background: "linear-gradient(90deg, #0E0A08 0%, #2a0f20 50%, #0E0A08 100%)",
        borderBottom: "2px solid var(--yellow)",
        padding: "clamp(8px, 1vw, 11px) clamp(12px, 3vw, 24px)",
        textDecoration: "none",
        cursor: "none",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <motion.span
        aria-hidden="true"
        animate={reduce ? {} : { scale: [1, 1.18, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--red)",
          boxShadow: "0 0 10px 2px rgba(228,29,117,0.8)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          color: "white",
          fontFamily: "Hannik, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(11px, 1.25vw, 15px)",
          letterSpacing: "clamp(1.5px, 0.25vw, 3px)",
          textTransform: "uppercase",
          lineHeight: 1.3,
        }}
      >
        <span style={{ color: "var(--yellow)" }}>Black Friday Deal</span>
        <span className="bf-bar-long"> is here · Sign up now</span>
        <span className="bf-bar-short"> · Sign up</span>
      </span>
      <ArrowRight
        size={16}
        strokeWidth={3}
        style={{ color: "var(--yellow)", flexShrink: 0 }}
        aria-hidden="true"
      />
      <style>{`
        .bf-bar-short { display: none; }
        @media (max-width: 480px) {
          .bf-bar-long { display: none; }
          .bf-bar-short { display: inline; }
        }
      `}</style>
    </BlackFridayLink>
  );
}
