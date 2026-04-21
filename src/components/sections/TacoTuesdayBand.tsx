"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function TacoTuesdayBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="taco-tuesday"
      ref={ref}
      style={{
        background: "#0A0705",
        padding: "clamp(52px, 7vw, 96px) clamp(20px, 4vw, 52px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand stripe top */}
      <div className="brand-stripe" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(72px, 13vw, 170px)",
          fontWeight: 900,
          fontFamily: "Hannik, sans-serif",
          color: "rgba(251,175,28,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "8px",
          whiteSpace: "nowrap",
        }}
      >
        TUESDAY
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(32px, 5vw, 64px)",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left: text */}
        <div style={{ flex: "1", minWidth: "260px" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Every Tuesday · 135 N. Kedzie
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: "16px" }}
          >
            Taco <em>Tuesday</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(250,246,238,0.55)",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "420px",
            }}
          >
            Chicago&apos;s most beloved weekly ritual. Order fresh tacos online
            every Tuesday on Grubhub, UberEats, or Cash Drop.
          </motion.p>
        </div>

        {/* Right: CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <a
            href="/taco-tuesday"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--yellow)",
              color: "#0E0A08",
              padding: "14px 32px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              borderRadius: "3px",
              textDecoration: "none",
              cursor: "none",
              transition: "all 0.3s",
              boxShadow: "0 8px 28px rgba(251,175,28,0.28)",
              fontFamily: "Hannik, sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#e8a000";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(251,175,28,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--yellow)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(251,175,28,0.28)";
            }}
          >
            <ExternalLink size={15} strokeWidth={2.5} />
            Order Online Now
          </a>
        </motion.div>
      </div>

      {/* Brand stripe bottom */}
      <div className="brand-stripe" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
