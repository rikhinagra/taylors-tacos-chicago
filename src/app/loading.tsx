export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {/* Brand stripe top */}
      <div className="brand-stripe" style={{ position: "fixed", top: 0, left: 0, right: 0 }} />

      {/* Logo */}
      <img
        src="/images/logo/taylors-tacos-chicago-logo-stacked.webp"
        alt="Taylor's Tacos Chicago"
        style={{
          width: "clamp(140px, 28vw, 200px)",
          height: "auto",
          opacity: 0.9,
          filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.6))",
          animation: "pulse 1.8s ease-in-out infinite",
        }}
      />

      {/* Loading dots */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--red)",
              display: "inline-block",
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "var(--muted)",
          fontFamily: "Hannik, sans-serif",
        }}
      >
        Loading...
      </p>

      {/* Brand stripe bottom */}
      <div className="brand-stripe" style={{ position: "fixed", bottom: 0, left: 0, right: 0 }} />

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1.2); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.04); }
        }
      `}</style>
    </main>
  );
}
