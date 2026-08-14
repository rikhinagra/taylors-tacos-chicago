"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { num: "01", title: "On time, guaranteed", desc: "Delivery windows you can plan a meeting around." },
  { num: "02", title: "Zero-guesswork comms", desc: "A structured sequence from order to driver-en-route." },
  { num: "03", title: "Setup & takedown handled", desc: "So you stay focused on your role, not theirs." },
];

export default function HowCanWeServeYou() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#551A3A",
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 52px) clamp(16px, 2vw, 24px)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span className="section-label">Ready to Book?</span>
          <h2 className="section-title">
            How Can We <em>Serve You?</em>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(250,246,238,0.75)",
              marginTop: "16px",
              maxWidth: "480px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Choose the option that fits your event and fill out the form. We&apos;ll take it from there.
          </p>
        </motion.div>

        {/* Trust badge cards — staggered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(12px, 2vw, 24px)",
          }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.12 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span
                style={{
                  color: "var(--yellow)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {badge.num}
              </span>
              <p
                style={{
                  color: "var(--off-white)",
                  fontFamily: "Hannik, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {badge.title}
              </p>
              <p
                style={{
                  color: "rgba(250,246,238,0.65)",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
