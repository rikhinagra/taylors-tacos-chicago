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
        background: "linear-gradient(135deg, var(--deep-purple), var(--deep-red) 60%, var(--deep-purple))",
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

      {/* Bottom dotted stripe */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "5px",
          background: "repeating-linear-gradient(90deg, var(--yellow) 0, var(--yellow) 14px, transparent 14px, transparent 22px)",
        }}
      />

      <div
        className="relative z-10 flex items-center justify-between gap-12 flex-wrap"
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
            to Your <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>Event</em>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.78)",
              marginTop: "12px",
              maxWidth: "min(440px, 100%)",
              lineHeight: 1.75,
            }}
          >
            Food truck rollouts, staffed catering, corporate lunches, weddings,
            schools, nonprofits. We love feeding the people who feed the people.
          </p>
        </div>

        <button
          onClick={() => scrollTo("#contact")}
          className="flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
          style={{
            background: "var(--yellow)",
            color: "var(--black)",
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderRadius: "3px",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(251,175,28,0.35)";
            (e.currentTarget as HTMLElement).style.background = "var(--yellow)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.background = "var(--yellow)";
          }}
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
}
