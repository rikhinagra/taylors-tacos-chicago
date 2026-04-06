"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/gallery/header image.webp",  label: "Our Setup" },
  { src: "/images/gallery/live.webp",           label: "Live Events" },
  { src: "/images/gallery/_31A7978.webp",       label: "Taco Bar" },
  { src: "/images/gallery/Taco Tuesday.webp",   label: "Taco Tuesday" },
  { src: "/images/gallery/_31A8024.webp",       label: "Fresh Tacos" },
  { src: "/images/gallery/come hungry.webp",    label: "Come Hungry" },
  { src: "/images/gallery/_31A8039.webp",       label: "The Service" },
  { src: "/images/gallery/friendsgiving.webp",  label: "Friendsgiving" },
];

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
        style={{ padding: "80px 52px 48px", maxWidth: "1280px", margin: "0 auto" }}
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

      {/* Photo Strip — flex expand on hover (exact match to approved design) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex overflow-hidden"
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
    </section>
  );
}
