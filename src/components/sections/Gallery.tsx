"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/banners/taylors-tacos-chicago-menu-board-chicken-beef-shrimp.webp",       label: "Menu Board" },
  { src: "/images/behind-the-scenes/taylors-tacos-chicago-chef-plating-cream-sauce.webp",   label: "Fresh Prep" },
  { src: "/images/behind-the-scenes/taylors-tacos-chicago-staff-preparing-orders.webp",     label: "Behind The Bar" },
  { src: "/images/events/taylors-tacos-chicago-friendsgiving-special-catering.webp",        label: "Friendsgiving" },
  { src: "/images/events/taylors-tacos-chicago-velvet-taco-tuesday-special.webp",           label: "Taco Tuesday" },
  { src: "/images/events/taylors-tacos-chicago-catering-buffet-guests-serving.webp",        label: "Come Hungry" },
  { src: "/images/events/taylors-tacos-chicago-catering-buffet-rice-lime-setup.webp",       label: "The Spread" },
  { src: "/images/events/taylors-tacos-chicago-pride-event-street-food-bowl.webp",          label: "Pride Fest" },
];

// Duplicate array for seamless infinite loop
const reelPhotos = [...photos, ...photos];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      style={{ background: "var(--black)", paddingTop: "0", paddingBottom: "0" }}
    >
      {/* Section header */}
      <div
        ref={ref}
        style={{
          padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 52px) clamp(24px, 4vw, 48px)",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          Behind the Scenes
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
        >
          Our <em>Gallery</em>
        </motion.h2>
      </div>

      {/* ── DESKTOP (1024px+): Hover expand photo strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="gallery-desktop"
        style={{ height: "280px" }}
      >
        {photos.map((photo, i) => (
          <div key={i} className="photo-strip-item" style={{ height: "280px" }}>
            <Image
              src={photo.src}
              alt={photo.label}
              width={400}
              height={280}
              className="photo-strip-img"
            />
            <span className="photo-strip-label">{photo.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── MOBILE & TABLET (< 1024px): Auto-scrolling image reel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="gallery-mobile"
        style={{
          overflow: "hidden",
          paddingBottom: "clamp(40px, 6vw, 60px)",
        }}
      >
        <div className="gallery-scroll-track">
          {reelPhotos.map((photo, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "220px",
                height: "280px",
                marginRight: "12px",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Label gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "28px 12px 14px",
                  background: "linear-gradient(to top, rgba(14,10,8,0.88), transparent)",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "Hannik, sans-serif",
                }}
              >
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
