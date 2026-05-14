"use client";

import Image from "next/image";

export default function PinkBanner() {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #E41D75 0%, #E52D5D 50%, #EA3B48 100%)",
        padding: "10px clamp(20px, 4vw, 52px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        zIndex: 60,
        position: "relative",
      }}
    >
      {/* Logo — left */}
      <div className="relative flex-shrink-0" style={{ width: "130px", height: "48px" }}>
        <Image
          src="/images/logo/taylors-tacos-chicago-logo-horizontal.webp"
          alt="Taylor's Tacos Chicago"
          fill
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
          priority
        />
      </div>

      {/* Tagline — center */}
      <p
        style={{
          fontSize: "clamp(11px, 1.4vw, 14px)",
          letterSpacing: "clamp(2px, 0.5vw, 5px)",
          textTransform: "uppercase",
          color: "white",
          fontWeight: 700,
          textAlign: "center",
          flex: 1,
          textShadow: "0 1px 6px rgba(0,0,0,0.25)",
          fontFamily: "Hannik, sans-serif",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Building CommuniTAY one taco at a time
      </p>

      {/* Book CTA — right */}
      <a
        href="/#contact"
        style={{
          flexShrink: 0,
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.5)",
          color: "white",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          padding: "6px 16px",
          borderRadius: "3px",
          textDecoration: "none",
          transition: "all 0.25s",
          fontFamily: "Hannik, sans-serif",
          whiteSpace: "nowrap",
          cursor: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)";
        }}
      >
        Book Now →
      </a>
    </div>
  );
}
