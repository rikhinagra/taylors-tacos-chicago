"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "📦",
    title: "Delivery & Pick-Up",
    desc: "Self-serve taco bars, pre-made taco trays & individual lunches. We prep everything — you enjoy. Perfect for any size gathering.",
    bullets: [
      "Taco Trays — $59/tray (3 min)",
      "XS Bar (10–15 guests) — $149",
      "SM Bar (30–50 guests) — $499",
      "MD Bar (50–75 guests) — $749",
      "LG Bar (100–150 guests) — $1,499",
    ],
    link: "#contact",
  },
  {
    icon: "👨‍🍳",
    title: "Staffed Events",
    desc: "Our tacobae team comes to you. Live action taco stations, buffet setups, or taco bite tables. Full set-up, service & breakdown included.",
    bullets: [
      "Made 2 Order — from $17/pp",
      "Staffed Buffet — from $15/pp",
      "Taco Bite Table — from $25/pp",
      "3 hrs qualiTAY service included",
      "Host Helpers & Bar services avail.",
    ],
    link: "#contact",
  },
  {
    icon: "🚚",
    title: "Food Truck",
    desc: "Book the truck! Bring the full Taylor's Tacos experience directly to your event. Ideal for festivals, brand activations & big celebrations.",
    bullets: [
      "$499 booking fee",
      "125 taco minimum",
      "Up to 40 miles from kitchen",
      "Full truck crew included",
      "Perfect for activations & vending",
    ],
    link: "#contact",
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
      style={{ background: "#120C07", padding: "112px 52px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          What We Offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
        >
          Three Ways to <em>Taco</em>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-14">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="service-card relative overflow-hidden transition-all duration-400 hover:-translate-y-1 cursor-none"
              style={{
                background: "rgba(255,255,255,0.025)",
                padding: "40px 34px",
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

              <span style={{ fontSize: "36px", marginBottom: "20px", display: "block" }}>
                {svc.icon}
              </span>
              <h3
                style={{
                  fontSize: "22px",
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
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "rgba(250,246,238,0.55)",
                  fontWeight: 300,
                  marginBottom: "18px",
                }}
              >
                {svc.desc}
              </p>

              <ul className="space-y-1 mb-6">
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: "12px",
                      color: "rgba(250,246,238,0.5)",
                      paddingLeft: "12px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--yellow)",
                      }}
                    >
                      ·
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo(svc.link)}
                className="flex items-center gap-2 transition-all duration-300 group-hover:gap-4"
                style={{
                  fontSize: "10px",
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
                Book This Service →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
