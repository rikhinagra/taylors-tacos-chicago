"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <div style={{ width: "clamp(120px, 24vw, 180px)", marginBottom: "24px" }}>
        <img
          src="/images/logo/taylors-tacos-chicago-cactus-mascot-character.webp"
          alt="Taylor's Tacos Chicago mascot on error page"
          style={{ width: "100%", height: "auto", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "Hannik, sans-serif",
          fontSize: "clamp(18px, 4vw, 28px)",
          color: "var(--yellow)",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Something Went Wrong
      </h1>

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
        Even the best taco spots hit a bump sometimes. Try again or head back home.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Try Again */}
        <button
          onClick={reset}
          style={{
            background: "var(--red)",
            color: "white",
            padding: "12px 28px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderRadius: "3px",
            border: "2px solid var(--red)",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "transparent";
            el.style.color = "var(--red)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = "var(--red)";
            el.style.color = "white";
          }}
        >
          Try Again
        </button>

        {/* Back to Home */}
        <a
          href="/"
          style={{
            background: "transparent",
            color: "var(--off-white)",
            padding: "12px 28px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderRadius: "3px",
            border: "2px solid rgba(250,246,238,0.28)",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--yellow)";
            el.style.color = "var(--yellow)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "rgba(250,246,238,0.28)";
            el.style.color = "var(--off-white)";
          }}
        >
          ← Back to Home
        </a>
      </div>

      {/* Brand stripe bottom */}
      <div className="brand-stripe" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </main>
  );
}
