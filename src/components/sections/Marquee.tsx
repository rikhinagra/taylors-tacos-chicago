"use client";

import { UtensilsCrossed, Briefcase, Heart, Truck, Flame, MapPin } from "lucide-react";

const items = [
  { icon: <UtensilsCrossed size={16} strokeWidth={2} />, label: "Taco Catering" },
  { icon: <Briefcase size={16} strokeWidth={2} />,       label: "Corporate Events" },
  { icon: <Heart size={16} strokeWidth={2} />,           label: "Weddings" },
  { icon: <Truck size={16} strokeWidth={2} />,           label: "Food Truck Chicago" },
  { icon: <Flame size={16} strokeWidth={2} />,           label: "Taco Tuesday" },
  { icon: <MapPin size={16} strokeWidth={2} />,          label: "135 N. Kedzie" },
];

// Duplicate for seamless infinite loop
const track = [...items, ...items];

export default function MarqueeBanner() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "linear-gradient(90deg, var(--deep-red), var(--red), var(--deep-red))",
        padding: "14px 0",
        borderTop: "3px solid var(--yellow)",
        borderBottom: "3px solid var(--yellow)",
      }}
    >
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "18px",
              letterSpacing: "4px",
              color: "white",
              fontWeight: 800,
              textTransform: "uppercase",
              padding: "0 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--yellow)", display: "flex", alignItems: "center" }}>
              {item.icon}
            </span>
            {item.label}
            <span style={{ color: "var(--yellow)", fontSize: "20px", marginLeft: "22px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
