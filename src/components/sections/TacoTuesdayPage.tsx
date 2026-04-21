"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, MapPin, Clock, UtensilsCrossed } from "lucide-react";

const platforms = [
  {
    name: "Grubhub",
    tagline: "Delivery and pickup. Fast and easy.",
    desc: "Order Taylor's Tacos Chicago on Grubhub for delivery straight to your door or schedule a pickup at 135 N. Kedzie.",
    cta: "Order on Grubhub",
    href: "https://www.grubhub.com/restaurant/taylors-tacos---the-hatchery-135-n-kedzie-ave-chicago/2409345",
    accent: "var(--red)",
    accentBg: "rgba(187,36,35,0.08)",
    accentBorder: "rgba(187,36,35,0.2)",
  },
  {
    name: "UberEats",
    tagline: "Real-time tracking. Delivered hot.",
    desc: "Track your taco order in real time on UberEats. Available for delivery and pickup from our 135 N. Kedzie location.",
    cta: "Order on UberEats",
    href: "https://www.ubereats.com/store/taylors-tacos/uMAKNe3_WY-kX75Bsb0APw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE2NDIlMjBTJTIwQWxiYW55JTIwQXZlJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyaGVyZSUzQWFmJTNBc3RyZWV0c2VjdGlvbiUzQUtkMG11TlZxcnFhTFRGVTZ3bVBzOEElM0FDZ2NJQkNDVWk4VkxFQUVhQkRFMk5ESSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJoZXJlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDEuODU3NzklMkMlMjJsb25naXR1ZGUlMjIlM0EtODcuNzAzMTMlN0Q%3D&ps=1&surfaceName=",
    accent: "var(--green)",
    accentBg: "rgba(188,220,154,0.07)",
    accentBorder: "rgba(188,220,154,0.18)",
  },
  {
    name: "Cash Drop",
    tagline: "Support local. Order direct.",
    desc: "Order directly through Cash Drop, a Chicago-based platform. Support local and get your tacos delivered or picked up your way.",
    cta: "Order on Cash Drop",
    href: "https://cashdrop.com/taylorstacoschicago",
    accent: "var(--yellow)",
    accentBg: "rgba(251,175,28,0.07)",
    accentBorder: "rgba(251,175,28,0.2)",
  },
];

export default function TacoTuesdayPage() {
  const platformsRef = useRef(null);
  const platformsInView = useInView(platformsRef, { once: true, margin: "-80px" });

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "var(--black)",
          minHeight: "clamp(380px, 55vw, 560px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "clamp(100px, 12vw, 140px) clamp(20px, 4vw, 52px) clamp(60px, 8vw, 96px)",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/food/taylors-tacos-chicago-birria-tacos-basket-hot-sauce.webp"
            alt="Taylor's Tacos Chicago birria tacos"
            fill
            className="object-cover object-center"
            priority
            quality={80}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(14,10,8,0.88) 0%, rgba(14,10,8,0.72) 60%, rgba(85,26,58,0.15) 100%)",
            }}
          />
        </div>

        {/* Brand stripe top */}
        <div className="brand-stripe absolute top-0 left-0 right-0 z-20 pointer-events-none" />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: "720px",
            width: "100%",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "block",
              fontSize: "12px",
              letterSpacing: "7px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "20px",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)",
            }}
          >
            Every Tuesday · 135 N. Kedzie · Chicago
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "clamp(44px, 8vw, 88px)",
              fontWeight: 900,
              fontFamily: "Hannik, sans-serif",
              color: "var(--off-white)",
              lineHeight: 1.0,
              letterSpacing: "-1px",
              marginBottom: "24px",
              textShadow: "0 4px 32px rgba(0,0,0,0.8)",
            }}
          >
            Taco{" "}
            <em style={{ color: "var(--yellow)", fontStyle: "italic" }}>
              Tuesday
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(250,246,238,0.75)",
              lineHeight: 1.75,
              fontWeight: 300,
              letterSpacing: "1px",
              textShadow: "0 2px 12px rgba(0,0,0,0.9)",
            }}
          >
            Chicago&apos;s most beloved weekly ritual. Every Tuesday, in-store or
            online. Pick your platform and order fresh tacos your way.
          </motion.p>
        </div>

        {/* Brand stripe bottom */}
        <div className="brand-stripe absolute bottom-0 left-0 right-0 z-20 pointer-events-none" />
      </section>

      {/* ── Order Online Platforms ────────────────────────────────────── */}
      <section
        style={{
          background: "#120C07",
          padding: "clamp(60px, 8vw, 112px) clamp(20px, 4vw, 52px)",
        }}
        ref={platformsRef}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 72px)" }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={platformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Order Online
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={platformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
              style={{ marginBottom: "16px" }}
            >
              Choose Your <em>Platform</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={platformsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "clamp(15px, 1.6vw, 17px)",
                color: "rgba(250,246,238,0.5)",
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Three ways to get your Tuesday tacos: delivery, pickup, or support
              local with Cash Drop.
            </motion.p>
          </div>

          {/* Platform Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 50 }}
                animate={platformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                style={{
                  background: p.accentBg,
                  border: `1px solid ${p.accentBorder}`,
                  borderRadius: "8px",
                  padding: "clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Accent line top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: p.accent,
                    borderRadius: "8px 8px 0 0",
                  }}
                />

                {/* Platform name */}
                <h3
                  style={{
                    fontSize: "clamp(28px, 4vw, 38px)",
                    fontWeight: 900,
                    fontFamily: "Hannik, sans-serif",
                    color: p.accent,
                    lineHeight: 1,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {p.name}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: "13px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(250,246,238,0.4)",
                    fontWeight: 700,
                  }}
                >
                  {p.tagline}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(250,246,238,0.6)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                {/* CTA */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: p.accent,
                    color: p.name === "UberEats" || p.name === "Cash Drop" ? "#0E0A08" : "white",
                    padding: "12px 22px",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    borderRadius: "3px",
                    textDecoration: "none",
                    cursor: "none",
                    transition: "all 0.3s",
                    alignSelf: "flex-start",
                    fontFamily: "Hannik, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {p.cta} <ExternalLink size={13} strokeWidth={2.5} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Us / Info Band ──────────────────────────────────────── */}
      <section
        ref={infoRef}
        style={{
          background: "var(--black)",
          padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 52px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
          <div
            className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start"
            style={{ gap: "clamp(24px, 5vw, 52px)", width: "100%", maxWidth: "1280px", margin: "0 auto" }}
          >
            {[
              { icon: <MapPin size={18} strokeWidth={1.5} />, label: "Location", value: "135 N. Kedzie, Chicago, IL 60612" },
              { icon: <Clock size={18} strokeWidth={1.5} />, label: "Taco Tuesday", value: "Every Tuesday, in-store and online" },
              { icon: <UtensilsCrossed size={18} strokeWidth={1.5} />, label: "Dine In", value: "Walk in and enjoy at the restaurant" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start w-full md:w-auto"
                style={{ gap: "14px" }}
              >
                <span style={{ color: "var(--yellow)", marginTop: "2px", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "rgba(250,246,238,0.35)",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(250,246,238,0.72)",
                      fontWeight: 400,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
      </section>
    </>
  );
}
