"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(24px, 6vw, 60px) clamp(20px, 5vw, 40px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand stripe top */}
      <div className="brand-stripe" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Mascot */}
      <div style={{ position: "relative", width: "clamp(140px, 28vw, 220px)", marginBottom: "24px" }}>
        <Image
          src="/images/logo/taylors-tacos-chicago-cactus-mascot-character.webp"
          alt="Taylor's Tacos Chicago mascot shrugging on 404 page"
          width={220}
          height={440}
          style={{ width: "100%", height: "auto", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
          priority
        />
      </div>

      {/* 404 heading */}
      <h1
        style={{
          fontFamily: "Hannik, sans-serif",
          fontSize: "clamp(72px, 18vw, 160px)",
          color: "var(--red)",
          lineHeight: 1,
          margin: "0 0 8px",
          textShadow: "0 4px 32px rgba(187,36,35,0.4)",
          letterSpacing: "-2px",
        }}
      >
        404
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "Hannik, sans-serif",
          fontSize: "clamp(18px, 4vw, 28px)",
          color: "var(--yellow)",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Taco Not Found
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "var(--muted)",
          maxWidth: "380px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        Looks like this page ran off with the last taco. Let&apos;s get you back to the good stuff.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--red)",
          color: "white",
          padding: "12px 28px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          borderRadius: "3px",
          textDecoration: "none",
          border: "2px solid var(--red)",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "transparent";
          el.style.color = "var(--red)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--red)";
          el.style.color = "white";
        }}
      >
        ← Back to Home
      </Link>

      {/* Brand stripe bottom */}
      <div className="brand-stripe" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </main>
  );
}
