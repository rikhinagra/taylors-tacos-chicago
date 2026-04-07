"use client";

import Image from "next/image";
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer style={{ background: "#050302", padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 52px) 32px" }}>

      {/* Brand stripe */}
      <div
        className="brand-stripe"
        style={{ marginBottom: "48px" }}
      />

      {/* Footer top — 4 columns: 2fr 1fr 1fr 1fr */}
      <div
        className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-[52px]"
        style={{ marginBottom: "52px" }}
      >

        {/* Col 1 — Logo + tagline */}
        <div className="col-span-2 lg:col-span-1">
          <div className="relative mb-3" style={{ width: "160px", height: "52px" }}>
            <Image
              src="/images/logo/taylors-tacos-chicago-logo-horizontal.webp"
              alt="Taylor's Tacos Chicago"
              fill
              className="object-contain"
              style={{ filter: "brightness(1.05)" }}
            />
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(250,246,238,0.4)",
              lineHeight: 1.75,
              maxWidth: "240px",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Chicago&apos;s soul, LA&apos;s flavor. Bringing the #1 tacos to your next
            event, office, wedding, or block party.
          </p>
          {/* Social icons below tagline */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { icon: <InstagramIcon />, href: "https://www.instagram.com/taylorstacoschicago" },
              { icon: <FacebookIcon />,  href: "https://www.facebook.com/taylorstacoschicago" },
              { icon: <TikTokIcon />,    href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "34px",
                  height: "34px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(250,246,238,0.4)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--red)";
                  el.style.color = "var(--red)";
                  el.style.background = "rgba(187,36,35,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "rgba(250,246,238,0.4)";
                  el.style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <h4
            style={{
              fontSize: "14px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "16px",
              fontFamily: "Hannik, sans-serif",
            }}
          >
            Navigate
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Our Story", href: "#about" },
              { label: "Services",  href: "#services" },
              { label: "Menu",      href: "#menu" },
              { label: "Book Now",  href: "#contact" },
            ].map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: "rgba(250,246,238,0.42)",
                    fontSize: "14px",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "none",
                    textAlign: "left",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--off-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,246,238,0.42)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4
            style={{
              fontSize: "14px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "16px",
              fontFamily: "Hannik, sans-serif",
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Food Truck",   href: "#contact" },
              { label: "Corporate",    href: "#contact" },
              { label: "Weddings",     href: "#contact" },
              { label: "Taco Tuesday", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: "rgba(250,246,238,0.42)",
                    fontSize: "14px",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "none",
                    textAlign: "left",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--off-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,246,238,0.42)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4
            style={{
              fontSize: "14px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: "var(--yellow)",
              fontWeight: 700,
              marginBottom: "16px",
              fontFamily: "Hannik, sans-serif",
            }}
          >
            Contact
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "(773) 226-1596", href: "tel:7732261596" },
              { label: "info@taylorstacoschicago.com", href: "mailto:info@taylorstacoschicago.com" },
              { label: "135 N. Kedzie", href: "#" },
              { label: "Chicago, IL 60612", href: "#" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: "rgba(250,246,238,0.42)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    display: "block",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--off-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,246,238,0.42)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        <p style={{ fontSize: "12px", color: "rgba(250,246,238,0.3)" }}>
          © {new Date().getFullYear()} Taylor&apos;s Tacos Chicago · Powered by{" "}
          <a
            href="https://www.sachhsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(250,246,238,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--yellow)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(250,246,238,0.5)")}
          >
            SACHHSOFT
          </a>
        </p>
      </div>
    </footer>
  );
}
