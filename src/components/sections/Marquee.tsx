"use client";

const items = [
  "🌮 Taco Catering",
  "🎉 Corporate Events",
  "💍 Weddings",
  "🚚 Food Truck Chicago",
  "🌶️ Taco Tuesday",
  "📍 135 N. Kedzie",
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
              gap: "32px",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--yellow)", fontSize: "20px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
