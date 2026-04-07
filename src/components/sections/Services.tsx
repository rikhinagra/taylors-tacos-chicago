"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Users, Package, Building2, Heart, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: "Food Truck Booking",
    desc: "Roll up our truck to your block party, festival, office, or private event. Full service, full fiesta.",
    link: "Book the truck →",
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Staffed Catering",
    desc: "Full setup, professional crew, fresh tortillas on-site. We handle everything so you enjoy every bite.",
    link: "Book staffed event →",
  },
  {
    icon: <Package size={32} strokeWidth={1.5} />,
    title: "Delivery & Pickup",
    desc: "Hot, fresh tacos delivered right to your door. Minimum orders for groups of all sizes available.",
    link: "Get a quote →",
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Corporate Events",
    desc: "Team lunches, client dinners, company milestones. We make your people feel like VIPs with tacos.",
    link: "Corporate catering →",
  },
  {
    icon: <Heart size={32} strokeWidth={1.5} />,
    title: "Weddings",
    desc: "A taco bar your guests will be raving about for years. Make your big day unforgettable.",
    link: "Wedding catering →",
  },
  {
    icon: <UtensilsCrossed size={32} strokeWidth={1.5} />,
    title: "Taco Tuesday",
    desc: "Chicago's most beloved weekly ritual. Join us every Tuesday for our legendary in-house specials.",
    link: "Learn more →",
  },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      style={{ background: "#120C07", padding: "clamp(60px, 8vw, 112px) clamp(20px, 4vw, 52px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
        >
          Catering for <em>Every</em><br />Occasion
        </motion.h2>

        {/* Cards grid — 3 cols × 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-14">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="service-card relative overflow-hidden transition-all duration-400 hover:-translate-y-1 cursor-none"
              style={{
                background: "rgba(255,255,255,0.025)",
                padding: "clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 34px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(187,36,35,0.09)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
              }}
            >
              {/* Star accent top right */}
              <span
                className="absolute top-3 right-4 transition-opacity duration-300"
                style={{ color: "var(--yellow)", fontSize: "10px", opacity: 0.2 }}
              >
                ✦
              </span>

              <div style={{ color: "var(--yellow)", marginBottom: "20px", display: "block" }}>
                {svc.icon}
              </div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--off-white)",
                  marginBottom: "12px",
                  fontFamily: "Hannik, sans-serif",
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "rgba(250,246,238,0.55)",
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                {svc.desc}
              </p>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 transition-all duration-300"
                style={{
                  fontSize: "16px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--yellow)",
                  fontWeight: 700,
                  background: "none",
                  border: "none",
                  cursor: "none",
                  padding: 0,
                }}
              >
                {svc.link}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
