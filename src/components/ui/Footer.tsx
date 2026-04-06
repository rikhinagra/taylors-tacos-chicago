"use client";

import Image from "next/image";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer style={{ background: "#050302", padding: "72px 52px 32px" }}>

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
              src="/images/logo/Taylor's Tacos Horizontal.webp"
              alt="Taylor's Tacos Chicago"
              fill
              className="object-contain"
              style={{ filter: "brightness(1.05)" }}
            />
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(250,246,238,0.4)",
              lineHeight: 1.75,
              maxWidth: "240px",
              fontWeight: 300,
            }}
          >
            Chicago&apos;s soul, LA&apos;s flavor. Bringing the #1 tacos to your next
            event, office, wedding, or block party.
          </p>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <h4
            style={{
              fontSize: "9px",
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
                    fontSize: "13px",
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
              fontSize: "9px",
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
                    fontSize: "13px",
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
              fontSize: "9px",
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
                    wordBreak: "break-all",
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
        <p style={{ fontSize: "11px", color: "rgba(250,246,238,0.3)" }}>
          © {new Date().getFullYear()} Taylor&apos;s Tacos Chicago · Powered by SACHHSOFT
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { label: "IG", href: "https://www.instagram.com/taylorstacoschicago" },
            { label: "FB", href: "https://www.facebook.com/taylorstacoschicago" },
            { label: "TK", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
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
                fontSize: "11px",
                fontWeight: 700,
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
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
