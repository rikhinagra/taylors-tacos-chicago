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
      style={{ background: "var(--black)", padding: "112px 52px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

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
                src="/images/gallery/founders.webp"
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
                src="/images/gallery/live.webp"
                alt="Live taco service"
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
              <strong style={{ fontSize: "28px", lineHeight: 1 }}>5★</strong>
              Rated in
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
              Building <em>CommuniTAY</em><br />One Taco at a Time
            </motion.h2>

            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(250,246,238,0.7)", marginBottom: "18px", fontWeight: 300 }}>
                Taylor&apos;s Tacos Chicago was born from a simple belief — food is the
                ultimate community builder. Founded by{" "}
                <strong style={{ color: "var(--off-white)" }}>Taylor Mason</strong>,
                we&apos;ve grown from a passion project into Chicago&apos;s most loved
                taco catering brand.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(250,246,238,0.7)", marginBottom: "18px", fontWeight: 300 }}>
                Operating from our production kitchen at{" "}
                <strong style={{ color: "var(--off-white)" }}>
                  135 N. Kedzie @ The Hatchery
                </strong>
                , we craft every taco with bold flavors and genuine care — from
                corporate luncheons to dream weddings.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(250,246,238,0.7)", fontWeight: 300 }}>
                We believe every event deserves something to{" "}
                <em style={{ color: "var(--yellow)" }}>taco &apos;bout</em>.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-3 gap-4 mt-10 pt-10"
              style={{ borderTop: "1px solid rgba(250,246,238,0.1)" }}
            >
              {[
                { num: "500+", label: "Events Catered" },
                { num: "10K+", label: "Tacos Served" },
                { num: "2019", label: "Est. Chicago" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "52px",
                      fontWeight: 900,
                      color: "var(--yellow)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "rgba(250,246,238,0.4)",
                      marginTop: "4px",
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
