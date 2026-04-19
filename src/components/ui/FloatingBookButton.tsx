"use client";

import { usePathname } from "next/navigation";
import { UtensilsCrossed } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function FloatingBookButton() {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      scrollTo("#contact");
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="floating-book-pos"
      style={{
        position: "fixed",
        background: "var(--red)",
        color: "white",
        padding: "10px 18px",
        borderRadius: "3px",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        border: "none",
        cursor: "none",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 8px 28px rgba(187,36,35,0.55)",
        fontFamily: "Hannik, sans-serif",
        animation: "floatBounce 2.5s ease-in-out infinite",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(187,36,35,0.7)";
        (e.currentTarget as HTMLElement).style.background = "var(--deep-red)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(187,36,35,0.55)";
        (e.currentTarget as HTMLElement).style.background = "var(--red)";
      }}
    >
      <UtensilsCrossed size={14} strokeWidth={2} /> Book Catering
    </button>
  );
}
