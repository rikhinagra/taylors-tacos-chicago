"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      style={{ background: "var(--black)", padding: "clamp(60px, 8vw, 112px) clamp(20px, 4vw, 52px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left: Image Stack ─────────────────────────── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden"
              style={{ border: "3px solid rgba(251,175,28,0.2)" }}
            >
              <Image
                src="/images/logo/taylors-tacos-chicago-mascot-founders-branding.webp"
                alt="Taylor Mason — Founder, Taylor's Tacos Chicago"
                fill
                className="object-cover"
              />
            </div>

            {/* Accent image — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute rounded-md overflow-hidden hidden sm:block"
              style={{
                bottom: "-36px",
                right: "-36px",
                width: "52%",
                aspectRatio: "1",
                border: "4px solid var(--black)",
              }}
            >
              <Image
                src="/images/behind-the-scenes/taylors-tacos-chicago-owners-holding-taco-board.webp"
                alt="Taylor Mason and the Taylor's Tacos Chicago team holding the signature taco board"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Yellow badge — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, type: "spring", stiffness: 200 }}
              className="absolute flex flex-col items-center justify-center text-center"
              style={{
                top: "32px",
                left: "-28px",
                background: "var(--yellow)",
                color: "var(--black)",
                width: "108px",
                height: "108px",
                borderRadius: "50%",
                fontWeight: 900,
                fontSize: "12px",
                letterSpacing: "1px",
                lineHeight: 1.2,
                boxShadow: "0 16px 40px rgba(251,175,28,0.4)",
                border: "2px dashed rgba(251,175,28,0.4)",
                outline: "6px solid transparent",
              }}
            >
              <strong style={{ fontSize: "28px", lineHeight: 1 }}>10+</strong>
              Years in
              Chicago
            </motion.div>
          </motion.div>

          {/* ── Right: Content ────────────────────────────── */}
          <div className="pt-8 lg:pt-0 pl-0 lg:pl-3">
            <motion.span
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="section-label"
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="section-title mb-5"
            >
              From <em>LA</em><br />to Chicago Soul
            </motion.h2>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p style={{ fontSize: "18px", lineHeight: 2.0, color: "rgba(250,246,238,0.7)", marginBottom: "28px", fontWeight: 300 }}>
                Taylor&apos;s Tacos was born from a love of authentic Mexican street
                food and Chicago&apos;s unstoppable spirit. We brought LA&apos;s bold
                taco culture north and fused it with the heart and hustle of the Chi.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 2.0, color: "rgba(250,246,238,0.7)", fontWeight: 300 }}>
                Planted at 135 N. Kedzie, we&apos;re not just a taco shop. We&apos;re
                a full-service catering company that shows up for your community,
                your corporate team, your wedding day and everything in between.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                borderTop: "1px solid rgba(250,246,238,0.1)",
                marginTop: "36px",
                paddingTop: "36px",
                gap: "clamp(12px, 4vw, 48px)",
              }}
            >
              {[
                { num: "500+", label: "Events Catered" },
                { num: "1M+",  label: "Tacos Served" },
                { num: "5★",   label: "Avg Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 52px)",
                      fontWeight: 900,
                      color: "var(--yellow)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "rgba(250,246,238,0.4)",
                      marginTop: "6px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
