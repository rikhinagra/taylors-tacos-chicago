"use client";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function CTABand() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #E41D75 0%, #E52D5D 50%, #EA3B48 100%)",
        padding: "clamp(40px, 6vw, 64px) clamp(20px, 4vw, 52px)",
      }}
    >
      {/* Watermark text */}
      <span
        className="absolute pointer-events-none select-none"
        style={{
          right: "-60px",
          top: "-80px",
          fontSize: "300px",
          fontWeight: 900,
          letterSpacing: "8px",
          color: "rgba(255,255,255,0.04)",
          lineHeight: 1,
          fontFamily: "Hannik, sans-serif",
        }}
      >
        BOOK
      </span>

      <div
        className="relative z-10 flex items-center gap-12 flex-wrap"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 58px)",
              color: "white",
              fontWeight: 900,
              lineHeight: 1.05,
              fontFamily: "Hannik, sans-serif",
            }}
          >
            Bring Tacos<br />
            to Your <em style={{ color: "#BCDC9A", fontStyle: "normal" }}>Event</em>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.92)",
              marginTop: "12px",
              maxWidth: "min(440px, 100%)",
              lineHeight: 1.75,
            }}
          >
            Food truck rollouts, staffed catering, corporate lunches, weddings,
            schools, nonprofits. We love feeding the people who feed the people.
          </p>
        </div>
      </div>
    </section>
  );
}
