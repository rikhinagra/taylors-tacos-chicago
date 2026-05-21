"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Truck, Package, ArrowRight } from "lucide-react";

const STAFFED_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeqLtvamIT4hFwqVhBUJ3aKYoVeexx41gwGWYdXVrxBR3hXFQ/viewform";
const DELIVERY_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeQZssjIGpR7CAB4M65e2DPGpZuPmzke5rtzmCgVG_MhuIl7g/viewform";

export default function BookingChoice() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="booking-choice"
      ref={ref}
      style={{
        background: "#551A3A",
        padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 52px)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span className="section-label">Ready to Book?</span>
          <h2 className="section-title">
            How Can We <em>Serve You?</em>
          </h2>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(250,246,238,0.75)",
            marginTop: "16px",
            maxWidth: "480px",
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}>
            Choose the option that fits your event and fill out the form. We&apos;ll take it from there.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(16px, 3vw, 32px)",
          }}
        >
          {/* Card 1 — Staffed Events & Food Truck */}
          <motion.a
            href={STAFFED_FORM}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(0,0,0,0.3)",
              border: "2px solid rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "clamp(28px, 4vw, 48px)",
              textDecoration: "none",
              cursor: "none",
              transition: "all 0.35s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(228,29,117,0.14)";
              el.style.borderColor = "rgba(228,29,117,0.55)";
              el.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0,0,0,0.3)";
              el.style.borderColor = "rgba(255,255,255,0.15)";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #E41D75, #FBAF1C)",
              borderRadius: "8px 8px 0 0",
            }} />

            {/* Icons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", color: "var(--yellow)" }}>
              <Users size={36} strokeWidth={1.5} />
              <Truck size={36} strokeWidth={1.5} />
            </div>

            {/* Label */}
            <span style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "10px",
              display: "block",
            }}>
              Weddings · Corporates · Events
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: "Hannik, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(18px, 2.8vw, 32px)",
              color: "var(--off-white)",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}>
              Staffed Events &amp; Food Truck
            </h3>

            {/* Description */}
            <p style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "rgba(250,246,238,0.75)",
              lineHeight: 1.8,
              marginBottom: "32px",
              flex: 1,
            }}>
              Full setup, professional crew, fresh tortillas on-site. Taco bars, live action stations, food truck rental, weddings, and corporate events. We handle everything.
            </p>

            {/* CTA */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#BB2423",
              color: "white",
              padding: "14px 28px",
              borderRadius: "4px",
              fontFamily: "Hannik, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "2px solid white",
              alignSelf: "flex-start",
            }}>
              Book a Staffed Event <ArrowRight size={16} strokeWidth={2} />
            </div>
          </motion.a>

          {/* Card 2 — Delivery & Pickup */}
          <motion.a
            href={DELIVERY_FORM}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.22 }}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(0,0,0,0.3)",
              border: "2px solid rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "clamp(28px, 4vw, 48px)",
              textDecoration: "none",
              cursor: "none",
              transition: "all 0.35s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(251,175,28,0.1)";
              el.style.borderColor = "rgba(251,175,28,0.5)";
              el.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0,0,0,0.3)";
              el.style.borderColor = "rgba(255,255,255,0.15)";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #FBAF1C, #BCDC9A)",
              borderRadius: "8px 8px 0 0",
            }} />

            {/* Icon */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", color: "var(--yellow)" }}>
              <Package size={36} strokeWidth={1.5} />
              <Truck size={36} strokeWidth={1.5} />
            </div>

            {/* Label */}
            <span style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "10px",
              display: "block",
            }}>
              Groups · Offices · Gatherings
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: "Hannik, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(18px, 2.8vw, 32px)",
              color: "var(--off-white)",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}>
              Delivery &amp; Pickup
            </h3>

            {/* Description */}
            <p style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "rgba(250,246,238,0.75)",
              lineHeight: 1.8,
              marginBottom: "32px",
              flex: 1,
            }}>
              Pre-made taco trays, self-serve taco bars, and individual lunches. Hot and fresh, delivered to your door or ready for pickup at 135 N. Kedzie.
            </p>

            {/* CTA */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#BB2423",
              color: "white",
              padding: "14px 28px",
              borderRadius: "4px",
              fontFamily: "Hannik, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "2px solid white",
              alignSelf: "flex-start",
            }}>
              Order Delivery / Pick-Up <ArrowRight size={16} strokeWidth={2} />
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
