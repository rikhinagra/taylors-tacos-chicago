"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, UtensilsCrossed } from "lucide-react";

const eventTypes = [
  "Food Truck Booking",
  "Staffed Catering",
  "Delivery / Pickup",
  "Corporate Event",
  "Wedding",
  "Taco Tuesday",
  "Other",
];

const guestCounts = [
  "Under 50",
  "50 – 100",
  "100 – 250",
  "250 – 500",
  "500+",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    eventType: "", guestCount: "", date: "", location: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        mode: "no-cors",
      });
    } catch (err) {
      console.error("Form submission error:", err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "3px",
    padding: "12px 15px",
    color: "var(--off-white)",
    fontFamily: "Hannik, sans-serif",
    fontSize: "15px",
    outline: "none",
    colorScheme: "dark" as const,
    textTransform: "none" as const,
    letterSpacing: "normal",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    letterSpacing: "2.5px",
    textTransform: "uppercase" as const,
    color: "rgba(250,246,238,0.45)",
    marginBottom: "6px",
    fontWeight: 700,
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--yellow)";
    e.target.style.background = "rgba(251,175,28,0.05)";
  };

  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.05)";
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--sand)", color: "var(--black)", padding: "clamp(60px, 8vw, 112px) clamp(20px, 4vw, 52px)" }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >

        {/* ── LEFT: Contact info ─────────────────────────── */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "14px", letterSpacing: "6px", textTransform: "uppercase",
              color: "var(--red)", fontWeight: 700, display: "block", marginBottom: "14px",
            }}
          >
            Let&apos;s Work Together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(36px,5vw,62px)", fontWeight: 900, lineHeight: 1.04,
              color: "var(--black)", fontFamily: "Hannik, sans-serif",
            }}
          >
            Book Your<br />
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>Catering</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "17px", lineHeight: 1.85, color: "rgba(14,10,8,0.6)", marginTop: "18px" }}
          >
            Ready to bring the #1 tacos in Chicago to your event? Fill out the
            form and we&apos;ll be in touch within 24 hours with a custom quote.
          </motion.p>

          {/* Contact items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {[
              { icon: <MapPin size={20} strokeWidth={1.5} />,  label: "Location",     val: "135 N. Kedzie, Chicago, IL" },
              { icon: <Phone size={20} strokeWidth={1.5} />,   label: "Call or Text", val: "(773) 226-1596" },
              { icon: <Mail size={20} strokeWidth={1.5} />,    label: "Email",        val: "info@taylorstacoschicago.com" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "46px", height: "46px", background: "var(--red)", borderRadius: "3px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "14px", letterSpacing: "2px",
                    textTransform: "uppercase", color: "rgba(14,10,8,0.45)", fontWeight: 700, marginBottom: "2px" }}>
                    {item.label}
                  </strong>
                  <span style={{ fontSize: "16px", fontWeight: 600, color: "var(--black)" }}>
                    {item.val}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Form (dark panel) ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center text-center p-16 rounded-md"
              style={{
                background: "var(--black)", border: "1px solid rgba(251,175,28,0.15)",
                minHeight: "500px",
              }}
            >
              <UtensilsCrossed size={60} strokeWidth={1} style={{ color: "var(--yellow)", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "28px", fontWeight: 900, color: "var(--off-white)", marginBottom: "12px" }}>
                ¡Gracias! We&apos;ll be in touch within 24 hours.
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(250,246,238,0.6)", lineHeight: 1.7, maxWidth: "320px" }}>
                Your catering request is received! Check your spam folder if needed.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{
                background: "var(--black)", padding: "clamp(24px, 4vw, 48px)",
                borderRadius: "6px", border: "1px solid rgba(251,175,28,0.15)",
              }}
            >
              <h3
                style={{
                  fontSize: "26px", fontWeight: 800,
                  color: "var(--off-white)", marginBottom: "26px",
                  fontFamily: "Hannik, sans-serif",
                }}
              >
                Request a Quote
              </h3>

              {/* Row 1: First Name + Last Name */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input type="text" name="firstName" placeholder="Taylor"
                    value={form.firstName} onChange={handle} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input type="text" name="lastName" placeholder="Smith"
                    value={form.lastName} onChange={handle} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" name="phone" placeholder="(312) 000-0000"
                    value={form.phone} onChange={handle} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" placeholder="you@email.com"
                    value={form.email} onChange={handle} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              {/* Row 3: Event Type + Guest Count */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={handle} required
                    style={{ ...inputStyle, colorScheme: undefined }}>
                    <option value="" style={{ background: "#1C110A" }}>Select type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#1C110A" }}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Guest Count</label>
                  <select name="guestCount" value={form.guestCount} onChange={handle} required
                    style={{ ...inputStyle, colorScheme: undefined }}>
                    <option value="" style={{ background: "#1C110A" }}>Select count</option>
                    {guestCounts.map((g) => (
                      <option key={g} value={g} style={{ background: "#1C110A" }}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Event Date + Location/Zip */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>Event Date</label>
                  <input type="date" name="date" value={form.date} onChange={handle} required
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Location / Zip</label>
                  <input type="text" name="location" placeholder="Chicago, IL 60651"
                    value={form.location} onChange={handle}
                    style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              {/* Tell Us About Your Event */}
              <div className="mb-3">
                <label style={labelStyle}>Tell Us About Your Event</label>
                <textarea
                  name="message" rows={3} value={form.message} onChange={handle}
                  placeholder="Special requests, dietary restrictions, anything we should know..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={focusStyle} onBlur={blurStyle}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%", background: "var(--red)", color: "white",
                  border: "none", padding: "13px", fontSize: "18px", fontWeight: 700,
                  letterSpacing: "2.5px", textTransform: "uppercase", borderRadius: "3px",
                  cursor: "none", fontFamily: "Hannik, sans-serif", marginTop: "6px",
                  opacity: loading ? 0.7 : 1, transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.background = "var(--deep-red)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--red)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {loading ? "Sending..." : "Send My Catering Request →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
