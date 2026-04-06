"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const eventTypes = [
  "Corporate Event", "Wedding / Engagement", "Birthday Party",
  "Graduation", "Block Party / Community", "Brand Activation",
  "Nonprofit / Donation", "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    /* Sand background — matches approved design */
    <section
      id="contact"
      style={{ background: "var(--sand)", color: "var(--black)", padding: "112px 52px" }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
      >

        {/* ── LEFT: Contact info ─────────────────────────── */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: "10px", letterSpacing: "6px", textTransform: "uppercase",
              color: "var(--red)", fontWeight: 700, display: "block", marginBottom: "14px",
            }}
          >
            Book Your Event
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
            Let&apos;s Make<br />
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>Taco Magic</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(14,10,8,0.6)", marginTop: "18px" }}
          >
            Fill out the form and a dedicated sales team member will be in touch
            within 24–48 hours. We can&apos;t wait to serve you!
          </motion.p>

          {/* Contact items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {[
              { icon: "📍", label: "Kitchen", val: "135 N. Kedzie @ The Hatchery, Chicago IL 60612" },
              { icon: "📞", label: "Phone", val: "(773) 226-1596" },
              { icon: "✉️", label: "Email", val: "info@taylorstacoschicago.com" },
              { icon: "⏱️", label: "Response", val: "Within 24–48 hrs · Check your spam!" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "46px", height: "46px", background: "var(--red)", borderRadius: "3px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <strong
                    style={{
                      display: "block", fontSize: "9px", letterSpacing: "2px",
                      textTransform: "uppercase", color: "rgba(14,10,8,0.45)",
                      fontWeight: 700, marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </strong>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--black)" }}>
                    {item.val}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Blackout notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: "28px", padding: "16px",
              background: "rgba(187,36,35,0.08)",
              border: "1px solid rgba(187,36,35,0.2)", borderRadius: "4px",
            }}
          >
            <p style={{ fontSize: "12px", color: "rgba(14,10,8,0.65)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--red)" }}>📅 Important:</strong>{" "}
              Blackout dates: March 21 · May 23–25.
              All Sunday bookings require a $2,000 minimum.
              Final payment due 3 days before event.
            </p>
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
              <span style={{ fontSize: "60px", marginBottom: "20px" }}>🌮</span>
              <h3 style={{ fontSize: "28px", fontWeight: 900, color: "var(--off-white)", marginBottom: "12px" }}>
                Somethin&apos; to Taco &apos;Bout!
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(250,246,238,0.6)", lineHeight: 1.7, maxWidth: "320px" }}>
                Your inquiry is received! Our sales team will be in touch within
                24–48 hours. Check your spam folder if needed.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{
                background: "var(--black)", padding: "48px",
                borderRadius: "6px", border: "1px solid rgba(251,175,28,0.15)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px", fontWeight: 800,
                  color: "var(--off-white)", marginBottom: "26px",
                  fontFamily: "Hannik, sans-serif",
                }}
              >
                Tell Us About Your Event
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "First and Last Name", span: true },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com", span: false },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "(000) 000-0000", span: false },
                  { name: "date", label: "Event Date", type: "date", placeholder: "", span: false },
                  { name: "guests", label: "Guest Count", type: "number", placeholder: "e.g. 50", span: false },
                ].map((field) => (
                  <div key={field.name} className={field.span ? "col-span-2" : ""}>
                    <label
                      style={{
                        display: "block", fontSize: "9px", letterSpacing: "2.5px",
                        textTransform: "uppercase", color: "rgba(250,246,238,0.45)",
                        marginBottom: "6px", fontWeight: 700,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      value={(form as Record<string, string>)[field.name]}
                      onChange={handle}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px",
                        padding: "12px 15px", color: "var(--off-white)",
                        fontFamily: "Hannik, sans-serif", fontSize: "13px",
                        outline: "none", colorScheme: "dark",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--yellow)";
                        e.target.style.background = "rgba(251,175,28,0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.background = "rgba(255,255,255,0.05)";
                      }}
                    />
                  </div>
                ))}

                {/* Event Type */}
                <div className="col-span-2">
                  <label style={{ display: "block", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(250,246,238,0.45)", marginBottom: "6px", fontWeight: 700 }}>
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handle}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px",
                      padding: "12px 15px", color: "var(--off-white)",
                      fontFamily: "Hannik, sans-serif", fontSize: "13px", outline: "none",
                    }}
                  >
                    <option value="" style={{ background: "#1C110A" }}>Select event type</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#1C110A" }}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="col-span-2">
                  <label style={{ display: "block", fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(250,246,238,0.45)", marginBottom: "6px", fontWeight: 700 }}>
                    Notes / Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handle}
                    placeholder="Share your vision, budget range, allergies..."
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px",
                      padding: "12px 15px", color: "var(--off-white)",
                      fontFamily: "Hannik, sans-serif", fontSize: "13px", outline: "none",
                      resize: "none",
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%", background: "var(--red)", color: "white",
                  border: "none", padding: "17px", fontSize: "13px", fontWeight: 700,
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
                {loading ? "Sending..." : "Send My Inquiry 🌮"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
