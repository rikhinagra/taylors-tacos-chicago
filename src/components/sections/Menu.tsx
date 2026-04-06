"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const menuCards = [
  {
    tag: "Signature",
    name: "Self-Serve Taco Bar",
    img: "/images/gallery/MD Main.webp",
    span2: true,
  },
  {
    tag: "Staffed",
    name: "Live Action Station",
    img: "/images/gallery/live.webp",
  },
  {
    tag: "Pick-Up",
    name: "Individual Lunches",
    img: "/images/gallery/lunch special.webp",
  },
  {
    tag: "Trending",
    name: "Taco Tuesday Spread",
    img: "/images/gallery/Taco Tuesday.webp",
  },
  {
    tag: "Specialty",
    name: "Staffed + Customized",
    img: "/images/gallery/features.webp",
  },
  {
    tag: "Community",
    name: "Friendsgiving Event",
    img: "/images/gallery/friendsgiving.webp",
  },
  {
    tag: "Catering",
    name: "Come Hungry",
    img: "/images/gallery/come hungry.webp",
  },
];

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      style={{ background: "var(--black)", padding: "112px 52px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        {/* Header row */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-5">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              What We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Our <em>Full Menu</em>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => scrollTo("#contact")}
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              background: "none",
              border: "none",
              cursor: "none",
            }}
          >
            View Full Menu →
          </motion.button>
        </div>

        {/* Asymmetric 4-col grid — first card spans 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[14px]"
        >
          {menuCards.map((card, i) => (
            <div
              key={card.name}
              className="menu-card relative rounded-md overflow-hidden cursor-none"
              style={{
                gridRow: card.span2 ? "span 2" : "span 1",
                aspectRatio: card.span2 ? "3/4" : "3/4",
              }}
            >
              <Image
                src={card.img}
                alt={card.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(14,10,8,0.93) 0%, transparent 65%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "22px",
                }}
              >
                <span
                  style={{
                    fontSize: "8px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--yellow)",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {card.tag}
                </span>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.1,
                    fontFamily: "Hannik, sans-serif",
                  }}
                >
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Toppings note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 p-6 rounded-md"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(251,175,28,0.15)" }}
        >
          <p style={{ fontSize: "12px", color: "rgba(250,246,238,0.55)", letterSpacing: "0.5px" }}>
            <span style={{ color: "var(--yellow)", fontWeight: 700, marginRight: "8px" }}>
              🌮 Always Included:
            </span>
            Secret Salsa · Cilantro · Cheese · Limes · Maya&apos;s Pickled Red Cabbage
            &nbsp;|&nbsp; Add-ons: Salsa VerTAY, Jalapeños, Sazon Tomatoes, Tangy Onions +$10 each
          </p>
        </motion.div>
      </div>
    </section>
  );
}
