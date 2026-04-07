"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuCards = [
  {
    tag: "Our Signature",
    name: "Street Tacos",
    img: "/images/food/taylors-tacos-chicago-trio-tacos-newspaper-wrap.webp",
    span2: true,
  },
  {
    tag: "Classic",
    name: "Carne Asada",
    img: "/images/food/taylors-tacos-chicago-taco-banner-colorful-toppings.webp",
  },
  {
    tag: "Fan Favorite",
    name: "Birria Tacos",
    img: "/images/food/taylors-tacos-chicago-birria-tacos-basket-hot-sauce.webp",
  },
  {
    tag: "Fan Favorite",
    name: "Birria Taco",
    img: "/images/food/taylors-tacos-chicago-birria-taco-cotija-cheese.webp",
  },
  {
    tag: "Catering Special",
    name: "Catering Tray",
    img: "/images/food/taylors-tacos-chicago-catering-tray-purple-cabbage.webp",
  },
  {
    tag: "Must Try",
    name: "Asparagus Taco",
    img: "/images/food/taylors-tacos-chicago-asparagus-taco-pickled-onion.webp",
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
      style={{ background: "var(--black)", padding: "clamp(60px, 8vw, 112px) clamp(20px, 4vw, 52px)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }} ref={ref}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
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
              The <em>Menu</em>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            onClick={() => scrollTo("#contact")}
            style={{
              fontSize: "15px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "white",
              fontWeight: 700,
              background: "var(--red)",
              border: "2px solid var(--red)",
              cursor: "none",
              padding: "10px 20px",
              borderRadius: "3px",
              transition: "all 0.3s",
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--red)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--red)";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
          >
            Full Catering Menu →
          </motion.button>
        </div>

        {/* ── Grid ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="menu-grid-responsive"
        >
          {menuCards.map((card) => (
            <div
              key={card.name}
              className={`menu-card group ${card.span2 ? "menu-card-span2" : ""}`}
              style={{
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                cursor: "none",
                aspectRatio: "3/4",
                gridRow: card.span2 ? "span 2" : "span 1",
              }}
            >
              {/* Image — scales on card hover via group */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.img}
                alt={card.name}
                className="object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-110"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Dark gradient overlay */}
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
                    fontSize: "14px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    color: "var(--yellow)",
                    fontWeight: 700,
                    marginBottom: "6px",
                    display: "block",
                  }}
                >
                  {card.tag}
                </span>
                <h3
                  style={{
                    fontSize: "22px",
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


      </div>
    </section>
  );
}
