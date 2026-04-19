"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Truck, Users, Package, UtensilsCrossed, Sparkles, Star,
  ChevronDown, CheckCircle, MapPin, Clock, Phone, Heart,
} from "lucide-react";

/* ─── STAFFED EVENTS DATA ────────────────────────────────────── */
const staffedServiceStyles = [
  {
    icon: <UtensilsCrossed size={28} strokeWidth={1.5} />,
    title: "Taco Bar Buffet",
    desc: "Your customized parTAY menu deconstructed in chafers and deco bowls for guests to build their own tacos. The tacobae team sets up, maintains, and breaks down your buffet.",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Made 2 Order / Live Action",
    desc: "Guests order directly from our TAYqueros for a live taco action experience based on your customized choices. Indoor set-up preferred; outdoor available for an additional fee.",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    title: "Food Truck Rental (NEW!)",
    desc: "$499 booking fee. 100 taco minimum. Max travel 40 miles roundtrip from our kitchen at 135 North Kedzie, Chicago, IL.",
  },
  {
    icon: <Package size={28} strokeWidth={1.5} />,
    title: "Taco Bite Table / Passed Apps",
    desc: "Your selection of tacos or apps pre-made on site and served individually on a decorative table. The tacobae team is on site to set up, prep, serve, maintain, and break down.",
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Special Events / Activations",
    desc: "We love partnering with brands, non-profits, and companies of all kinds. Taylor's Tacos allocates one sponsored/donation request per quarter.",
  },
];

const staffedSignatureTacos = [
  { name: "CHICKEN", desc: "Extra-juicy", badge: "gf" },
  { name: "STEAK", desc: "Savory", badge: null },
  { name: "BEEF", desc: "Bangin'", badge: null },
  { name: "SHRIMP", desc: "Really, sexy", badge: "gf" },
  { name: "POTATO", desc: "Sweet poppin'", badge: "gf · v" },
];

const staffedSpecialtyTacos = [
  { name: "SHRIMP", desc: "Sexy, crispy. Award-winning!", seasonal: null },
  { name: "PORTABELLA", desc: "Pretty", seasonal: null },
  { name: "SALMON", desc: "Slammin'", seasonal: null },
  { name: "FISH", desc: "Soul battered", seasonal: null },
  { name: "GROUND TURKEY", desc: "Gorgeous", seasonal: null },
  { name: "AF ASPARAGUS", desc: "Awesome", seasonal: "April – September ONLY" },
];

const staffedNotTacos = [
  { name: "Quesadilla Trays", price: "$65", desc: "10 quesadillas cut in threes: plain, chicken, steak, or portabella", serves: "10–15 guests" },
  { name: "Burrito Trays", price: "$75", desc: "9 burritos cut in half: chicken, steak, or portabella", serves: "9–18 guests" },
  { name: "'Panada Trays", price: "$30", desc: "6 flour empanadas: chicken, beef, or portabella", serves: "2–6 guests" },
  { name: "MuliTAY Tray", price: "$65", desc: "12 corn tortilla quesadillas with cheese: chicken, steak, or portabella", serves: "6–12 guests" },
];

const staffedSides = [
  { name: "GUAC + chips", badge: "vegan · gf", desc: "Creamy avocado mixed with red pepper, onion, jalapeño, and seasoning, served with Tay's Tortilla Chips" },
  { name: "eloTAY CORN + street mix", badge: "gf · vegetarian", desc: "Corn off the cob served with tajin and chili powder + mayo/butter/cotija mix on the side" },
  { name: "nice Rice", badge: "vegan", desc: "Garlic cilantro seasoned white rice. Simple, satisfying, and very popular!" },
  { name: "seasoned Beans", badge: "vegan · gf", desc: "Pinto beans seasoned to perfection! Your aunty's beans." },
  { name: "sw soul salad + tortilla strips + ranch dressing", badge: "vegetarian", desc: "Mixed greens, tomato, cucumber, red onion, and corn + tortilla strips and ranch dressing. Agave lime vin +$5" },
  { name: "QUESO + Chips", badge: "gf", desc: "White cheese blend mixed with red + hatch peppers served with Tay's Tortilla Chips" },
  { name: "Pico Fresca Salad", badge: "June – August ONLY · Mkt. Price", desc: "Cucumber and tomato salad with red onion, cilantro, and jalapeño tossed in a house-made agave lime vinaigrette" },
  { name: "Maya's Shrimp Ceviche", badge: "June – August ONLY · Mkt. Price", desc: "Shrimp, tomato, and cucumber salad cured in lime juice served with tostadas, avocados, and hot salsa" },
];

const staffedExtras = [
  { name: "Sazon tomatoes", badge: "v", desc: "Diced tomatoes tossed in sazon seasoning" },
  { name: "Tangy onions", badge: "v", desc: "Salted white onion" },
  { name: "Jalapenos", badge: "v", desc: "Pickled nacho style" },
  { name: "Secret salsa", badge: null, desc: "Our famous salsa, need we say more?" },
  { name: "Salsa verTAY", badge: null, desc: "She may have just gotten to the parTAY, but she's staying all night" },
  { name: "Salsa Salsa", badge: null, desc: "Chunky red salsa to dip your chip. Not spicy, vegan-friendly." },
];

/* ─── DELIVERY + PICK-UP DATA ────────────────────────────────── */
const deliveryServiceStyles = [
  {
    title: "Pre Made Taco Trays",
    price: "$59 / tray",
    highlight: "3 tray minimum",
    desc: "12 pre-assembled tacos with corn tortillas served plain, toppings on the side. One taco option per tray. Includes 12oz of each topping for every three trays.",
  },
  {
    title: "Self Serve Taco Bar",
    price: "From $149",
    highlight: "Guests build their own",
    desc: "Deconstructed tacos: tortillas, taco options, and toppings. Each taco bar includes at least two tacos per person.",
    tiers: [
      { label: "XS Bar", price: "$149", serves: "10–15", tacos: "2 taco options" },
      { label: "SM Bar", price: "$499", serves: "30–50", tacos: "3 taco options" },
      { label: "MED Bar", price: "$749", serves: "50–75", tacos: "3 taco options" },
      { label: "LG Bar", price: "$1,499", serves: "100–150", tacos: "3 taco options" },
    ],
    addon: "30 taco add-on +$50",
  },
  {
    title: "Individual Lunches",
    price: "$18 / person",
    highlight: "12 lunch minimum",
    desc: "3 pre-made tacos served with cilantro and cheese, plus your choice of corn or guac on the side, dinner napkin, and cutlery. $2+ additional side. One taco option per order: Chicken, Steak, or Potato only.",
  },
];

const deliverySignatureTacos = [
  { name: "CHICKEN", desc: "Extra-juicy", badge: "gf" },
  { name: "STEAK", desc: "Savory", badge: null },
  { name: "POTATO", desc: "Sweet poppin'", badge: "gf · v" },
  { name: "BEEF", desc: "Bangin'", badge: null },
];

const deliverySpecialtyTacos = [
  { name: "SHRIMP", desc: "Really sexy", badge: "gf" },
  { name: "PORTABELLA", desc: "Pretty", badge: "v" },
  { name: "SALMON", desc: "Slammin'", badge: "gf · subject to MP" },
];

const deliveryNotTacos = [
  { name: "Quesadilla Trays", price: "$75", desc: "10 quesadillas cut in threes: plain, chicken, steak, or portabella", serves: "10–15 guests" },
  { name: "Burrito Trays", price: "$75", desc: "9 burritos cut in half: chicken, steak, or portabella", serves: "9–18 guests" },
  { name: "'Panada Trays", price: "$30", desc: "6 flour empanadas: chicken, beef, or portabella", serves: "2–6 guests" },
  { name: "MuliTAY Tray", price: "$65", desc: "12 corn tortilla quesadillas with cheese: chicken, steak, or portabella", serves: "6–12 guests" },
];

const deliverySides = [
  { name: "GUAC + chips", badge: "vegan · gf", desc: "Creamy avocado spread with red pepper + onion served with Tay's Tortilla Chips" },
  { name: "eloTAY CORN + street mix", badge: "vegetarian · gf", desc: "Corn off the cob with tajin and chili powder + mayo/butter/cotija mix on the side" },
  { name: "nice Rice", badge: "vegan", desc: "Garlic cilantro seasoned white rice" },
  { name: "seasoned Beans", badge: "vegan · gf", desc: "Pinto beans seasoned to perfection! Crowd fave." },
  { name: "sw soul salad", badge: "vegetarian", desc: "Mixed greens, tomato, cucumber, red onion, and corn + tortilla strips + ranch dressing" },
  { name: "QUESO + chips", badge: "vegetarian · gf", desc: "White cheese and pepper blend served with Tay's Tortilla Chips" },
];

const deliveryExtras = [
  { name: "Salsa verTAY", desc: "The other famous salsa. Green and SPICY in the best way." },
  { name: "Salsa salsa", desc: "Our basic, NOT SPICY, vegan salsa" },
  { name: "Sazon tomatoes", desc: "Diced tomatoes tossed in sazon seasoning" },
  { name: "Tangy onions", desc: "Salted white onion" },
  { name: "Jalapenos", desc: "Pickled nacho style" },
  { name: "More Secret salsa", desc: "It's famous for a reason!" },
];

const deliveryOptions = [
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Pick Up",
    price: "FREE",
    desc: "From our catering production kitchen at 135 North Kedzie, Chicago, IL (Door #4). Parking lot entrance on Albany Street. 15-minute pick-up window.",
  },
  {
    icon: <Truck size={22} strokeWidth={1.5} />,
    title: "Curbside Delivery",
    price: "Starting at $50",
    desc: "Our in-house drivers will meet you for a hand-off delivery during your window. Does not include set up.",
  },
  {
    icon: <Package size={22} strokeWidth={1.5} />,
    title: "Dock Delivery / Set Up",
    price: "Starting at $75",
    desc: "Our in-house drivers meet you inside your location and set up your order. Only available for orders with service items.",
  },
];

/* ─── SHARED: TOPPINGS ───────────────────────────────────────── */
const toppingsIncluded = [
  { name: "Secret salsa", note: "contains sour cream" },
  { name: "Cilantro", note: "v" },
  { name: "Cheese", note: "dairy" },
  { name: "Limes", note: "v" },
  { name: "Maya's pickled red cabbage", note: "v" },
];

/* ─── HOUSE RULES DATA ───────────────────────────────────────── */
const houseRules = [
  {
    title: "1. Booking Your Event",
    body: "Fill out the appropriate inquiry as best you can — ideal guest count, service style, and budget are helpful. We require a 3-day notice for all orders. Orders placed in less time will incur a non-negotiable $75 rush fee. We do not HOLD dates — your date is booked when payment is received.",
  },
  {
    title: "2. Payment & Securing Your Date",
    body: "A non-refundable 50% deposit applied toward the total event cost is required to secure your date, or payment in full. Events booked within 7 days of the event date require full payment at time of booking. We accept credit/debit cards and Apple Pay. The remaining balance is due no later than 3 days before your event. Late payments may result in late fees, service delays, or cancellation.",
  },
  {
    title: "3. Cancellations",
    body: "All cancellations must be submitted in writing to info@taylorstacoschicago.com. More than 7 days before your event: Taylor's Tacos will issue a catering credit for the non-refundable amount paid (non-transferable, no cash value, expires 1 year from payment date). Less than 3 days before your event: no refunds or credits will be issued.",
  },
  {
    title: "4. Changes to Your Event",
    body: "Any changes to guest count, menu selections, service style, or event details must be submitted at least 3 days prior to the event and are subject to approval. We will allow one date change without penalty — additional changes may incur charges. Event time changes must be confirmed with the Kitchen Manager.",
  },
  {
    title: "5. Event Day Expectations",
    body: "Please ensure we have access to the venue at the agreed time, adequate space for setup, and clear parking instructions. Taylor's Tacos is not responsible for delays caused by venue access issues, parking restrictions, weather, or traffic conditions beyond our control.",
  },
  {
    title: "6. Pick-Up Orders",
    body: "All pickups take place at our catering kitchen at The Hatchery: 135 N. Kedzie Ave, West Side, Chicago, IL 60612. Enter through the parking lot on Albany Ave. and pull up to Door #4. Upon arrival, call (773) 226-1596 and a team member will bring your order to your car. If you are more than 15 minutes late, your order will be left at the front desk.",
  },
  {
    title: "7. Our Promise",
    body: "We use qualiTAY ingredients and pride ourselves on quality-TAY service. Your order is guaranteed to arrive within the agreed delivery window excluding circumstances beyond our control. If we miss the window under normal conditions, your tacos are on us!",
  },
];

/* ─── HELPER: BADGE ──────────────────────────────────────────── */
function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "var(--green)",
        border: "1px solid rgba(188,220,154,0.3)",
        borderRadius: "2px",
        padding: "2px 6px",
        marginLeft: "6px",
        verticalAlign: "middle",
      }}
    >
      {text}
    </span>
  );
}

/* ─── HELPER: SECTION HEADING ────────────────────────────────── */
function SectionHeading({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <span className="section-label">{label}</span>
      <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
        {title}
      </h2>
    </div>
  );
}

/* ─── TACO GRID (Signature / Specialty) ─────────────────────── */
function TacoGrid({ tacos, specialty = false }: {
  tacos: { name: string; desc: string; badge?: string | null; seasonal?: string | null }[];
  specialty?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "10px",
      }}
    >
      {tacos.map((t) => (
        <div
          key={t.name}
          style={{
            background: specialty ? "rgba(85,26,58,0.18)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${specialty ? "rgba(85,26,58,0.5)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: "4px",
            padding: "14px 16px",
            position: "relative",
          }}
        >
          {specialty && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--deep-purple), var(--lt-purple))",
                borderRadius: "4px 4px 0 0",
              }}
            />
          )}
          <div
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              letterSpacing: "1px",
              marginBottom: "4px",
              textTransform: "uppercase",
            }}
          >
            {t.desc}
          </div>
          <div
            style={{
              fontFamily: "Hannik, sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              color: specialty ? "var(--lt-purple)" : "var(--off-white)",
            }}
          >
            {t.name}
          </div>
          {(t.badge) && <Badge text={t.badge} />}
          {t.seasonal && (
            <div
              style={{
                marginTop: "6px",
                fontSize: "10px",
                color: "var(--yellow)",
                letterSpacing: "0.5px",
              }}
            >
              {t.seasonal}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── NOT TACOS GRID ─────────────────────────────────────────── */
function NotTacosGrid({ items }: {
  items: { name: string; price: string; desc: string; serves: string }[];
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            background: "rgba(251,175,28,0.05)",
            border: "1px solid rgba(251,175,28,0.15)",
            borderRadius: "4px",
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
            <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 800, fontSize: "15px", color: "var(--off-white)" }}>
              {item.name}
            </span>
            <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "16px", color: "var(--yellow)", whiteSpace: "nowrap", marginLeft: "8px" }}>
              {item.price}
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "6px" }}>{item.desc}</p>
          <p style={{ fontSize: "11px", color: "rgba(251,175,28,0.6)", letterSpacing: "1px", textTransform: "uppercase" }}>
            Serves {item.serves}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── SIDES GRID ─────────────────────────────────────────────── */
function SidesGrid({ items }: { items: { name: string; badge: string; desc: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "4px",
            padding: "14px 16px",
          }}
        >
          <div style={{ marginBottom: "4px" }}>
            <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--off-white)" }}>
              {item.name}
            </span>
            <Badge text={item.badge} />
          </div>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── EXTRAS GRID ────────────────────────────────────────────── */
function ExtrasGrid({ items }: { items: { name: string; desc: string; badge?: string | null }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px" }}>
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
            padding: "12px 14px",
          }}
        >
          <div style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "13px", color: "var(--off-white)", marginBottom: "4px" }}>
            {item.name} {item.badge && <Badge text={item.badge} />}
          </div>
          <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── DIVIDER ────────────────────────────────────────────────── */
function Divider() {
  return (
    <div
      style={{
        height: "1px",
        background: "rgba(255,255,255,0.07)",
        margin: "36px 0",
      }}
    />
  );
}

/* ─── ACCORDION ITEM ─────────────────────────────────────────── */
function AccordionItem({
  rule,
  open,
  onToggle,
}: {
  rule: { title: string; body: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "4px",
        overflow: "hidden",
        background: open ? "rgba(187,36,35,0.06)" : "rgba(255,255,255,0.02)",
        transition: "background 0.3s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px",
          background: "none",
          border: "none",
          cursor: "none",
          textAlign: "left",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "Hannik, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 2vw, 17px)",
            color: open ? "var(--yellow)" : "var(--off-white)",
            transition: "color 0.3s",
            letterSpacing: "0.5px",
          }}
        >
          {rule.title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0, color: open ? "var(--yellow)" : "var(--muted)" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 20px 20px",
                fontSize: "clamp(13px, 1.8vw, 15px)",
                color: "rgba(250,246,238,0.65)",
                lineHeight: 1.8,
              }}
            >
              {rule.body}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── BOOK BUTTON ────────────────────────────────────────────── */
function BookButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "var(--red)",
        color: "white",
        padding: "14px 32px",
        borderRadius: "3px",
        fontFamily: "Hannik, sans-serif",
        fontWeight: 700,
        fontSize: "14px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        textDecoration: "none",
        border: "2px solid var(--red)",
        cursor: "none",
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
      {label} <UtensilsCrossed size={16} strokeWidth={2} />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function CateringMenu() {
  const [activeTab, setActiveTab] = useState<"staffed" | "delivery">("staffed");
  const [openRules, setOpenRules] = useState<number[]>([]);

  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  const menuRef = useRef(null);
  const rulesRef = useRef(null);
  const zolaRef = useRef(null);

  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const menuInView  = useInView(menuRef, { once: true, margin: "-80px" });
  const rulesInView = useInView(rulesRef, { once: true, margin: "-80px" });
  const zolaInView  = useInView(zolaRef, { once: true, margin: "-80px" });

  const toggleRule = (i: number) =>
    setOpenRules((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "clamp(340px, 50vh, 520px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "var(--black)",
          paddingTop: "80px",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/banners/taylors-tacos-chicago-catering-live-service-collage.webp"
          alt="Taylor's Tacos Chicago live catering service"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.28 }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(14,10,8,0.6) 0%, rgba(14,10,8,0.3) 50%, rgba(14,10,8,0.85) 100%)",
          }}
        />

        {/* Brand stripe top */}
        <div className="brand-stripe" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)",
            maxWidth: "760px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Building CommuniTAY one taco at a time
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: "Hannik, sans-serif",
              fontSize: "clamp(48px, 10vw, 96px)",
              fontWeight: 900,
              color: "var(--off-white)",
              lineHeight: 0.95,
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            The <em style={{ color: "var(--yellow)", fontStyle: "italic" }}>Menu</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontSize: "clamp(15px, 2.2vw, 18px)",
              color: "rgba(250,246,238,0.6)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Staffed events, delivery, pick-up, and everything in between.
            Chicago&apos;s best tacos, crafted your way.
          </motion.p>
        </div>

        {/* Brand stripe bottom */}
        <div className="brand-stripe" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── HOW TO ORDER ─────────────────────────────────────── */}
      <section
        ref={stepsRef}
        style={{
          background: "#120C07",
          padding: "clamp(52px, 7vw, 96px) clamp(20px, 4vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <span className="section-label">It&apos;s Simple</span>
            <h2 className="section-title" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              How to <em>Order</em>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(16px, 3vw, 32px)",
            }}
          >
            {[
              {
                num: "01",
                title: "Choose Your Service",
                desc: "Pick from staffed catering, delivery, pick-up, or food truck rental. Select your taco options and add-ons.",
              },
              {
                num: "02",
                title: "Fill Out the Form",
                desc: "Submit the inquiry form for your service type. Share your event date, guest count, budget, and menu preferences.",
              },
              {
                num: "03",
                title: "We Show Up",
                desc: "A dedicated sales or event manager follows up to confirm details and lock in your date. Then we bring the tacos!",
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "4px",
                  padding: "clamp(24px, 3vw, 36px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Step number background */}
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "16px",
                    fontFamily: "Hannik, sans-serif",
                    fontWeight: 900,
                    fontSize: "80px",
                    color: "rgba(251,175,28,0.06)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontFamily: "Hannik, sans-serif",
                    fontWeight: 900,
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "Hannik, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(18px, 2.2vw, 22px)",
                    color: "var(--off-white)",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB SWITCHER + MENU CONTENT ──────────────────────── */}
      <section
        ref={menuRef}
        style={{
          background: "var(--black)",
          padding: "clamp(52px, 7vw, 96px) clamp(20px, 4vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Tab switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={menuInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "48px" }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                padding: "4px",
                position: "relative",
                width: "100%",
                maxWidth: "520px",
              }}
            >
              {(["staffed", "delivery"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: "clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 24px)",
                    borderRadius: "3px",
                    fontFamily: "Hannik, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(11px, 1.8vw, 14px)",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "none",
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.3s",
                    color: activeTab === tab ? "var(--black)" : "var(--muted)",
                    background: "transparent",
                  }}
                >
                  {tab === "staffed" ? "Staffed Events" : "Delivery + Pick-Up"}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-bg"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--yellow)",
                        borderRadius: "3px",
                        zIndex: -1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "staffed" ? (
              <motion.div
                key="staffed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {/* Service Styles */}
                <SectionHeading label="Service Styles" title={<>Choose Your <em>Experience</em></>} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "2px",
                    marginBottom: "0",
                  }}
                >
                  {staffedServiceStyles.map((svc, i) => (
                    <div
                      key={svc.title}
                      className="service-card"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "clamp(20px, 2.5vw, 32px)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "background 0.3s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(187,36,35,0.09)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)")}
                    >
                      <span style={{ position: "absolute", top: "12px", right: "16px", color: "var(--yellow)", fontSize: "10px", opacity: 0.25 }}>✦</span>
                      <div style={{ color: "var(--yellow)", marginBottom: "14px" }}>{svc.icon}</div>
                      <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--off-white)", marginBottom: "10px" }}>
                        {svc.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.75 }}>{svc.desc}</p>
                    </div>
                  ))}
                </div>

                <Divider />

                {/* Pricing */}
                <SectionHeading label="Pricing" title={<>Taco <em>Options</em></>} />
                <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.6 }}>
                  Includes at least 3 tacos per person. Add $1/pp if any specialty tacos are selected.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "10px",
                    marginBottom: "32px",
                  }}
                >
                  {[
                    { label: "2 Taco Option", price: "$15", unit: "pp" },
                    { label: "3 Taco Option", price: "$17", unit: "pp" },
                    { label: "4 Taco Option", price: "$22", unit: "pp" },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      style={{
                        background: "rgba(187,36,35,0.08)",
                        border: "1px solid rgba(187,36,35,0.25)",
                        borderRadius: "4px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Hannik, sans-serif",
                          fontSize: "clamp(32px, 5vw, 48px)",
                          fontWeight: 900,
                          color: "var(--yellow)",
                          lineHeight: 1,
                        }}
                      >
                        {opt.price}
                        <span style={{ fontSize: "14px", color: "var(--muted)", marginLeft: "4px" }}>
                          {opt.unit}
                        </span>
                      </div>
                      <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)", marginTop: "8px" }}>
                        {opt.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Signature Tacos */}
                <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--yellow)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>
                  Signature Tacos
                </h3>
                <TacoGrid tacos={staffedSignatureTacos} />

                <div style={{ margin: "20px 0" }} />

                {/* Specialty Tacos */}
                <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--lt-purple)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Specialty Tacos
                  <span style={{ fontSize: "12px", color: "var(--muted)", marginLeft: "10px", textTransform: "none", letterSpacing: "0" }}>+$1/pp</span>
                </h3>
                <TacoGrid tacos={staffedSpecialtyTacos} specialty />

                {/* Toppings */}
                <div style={{ marginTop: "24px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--yellow)", fontWeight: 700, marginBottom: "10px" }}>
                    Toppings Included
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[...toppingsIncluded, { name: "Salsa VerTAY", note: "spicy" }].map((t) => (
                      <span
                        key={t.name}
                        style={{
                          fontSize: "12px",
                          color: "rgba(250,246,238,0.6)",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "2px",
                          padding: "4px 10px",
                        }}
                      >
                        {t.name}
                        {t.note && <span style={{ color: "var(--muted)", marginLeft: "4px", fontSize: "10px" }}>({t.note})</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <Divider />

                {/* #NotTACOS */}
                <SectionHeading label="Not Just Tacos" title={<><em>#NotTACOS</em> Selection</>} />
                <NotTacosGrid items={staffedNotTacos} />

                <Divider />

                {/* Sides */}
                <SectionHeading label="Sides — $50 each · serves 25+ guests" title={<>The <em>Sides</em></>} />
                <SidesGrid items={staffedSides} />
                <p style={{ marginTop: "12px", fontSize: "12px", color: "var(--muted)" }}>
                  * Prices may vary for seasonal items. MP = Market Price.
                </p>

                <Divider />

                {/* Extras */}
                <SectionHeading label="Extras — $10 each · 16oz · serves 15+" title={<>The <em>Extras</em></>} />
                <ExtrasGrid items={staffedExtras} />

                <Divider />

                {/* Dessert */}
                <SectionHeading label="Something Sweet" title={<><em>Dessert</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
                  {[
                    { name: "Churro Minis", price: "$1 each", desc: "Fried dough filled with chocolate and covered with cinna-sugar!" },
                    { name: "HORCHATA Ice Cream Sandos", price: "$10.50 each", desc: "A Bartleby's × Taylor's Tacos collab. Cinnamon rice milk ice cream between two decadent blondies. 10 sando minimum." },
                    { name: "Lindsay Italian Ice", price: "$4 each", desc: "Great vegan option! Minimum 24. Flavors: Mango, Lemon, Watermelon, or Strawberry." },
                  ].map((d) => (
                    <div key={d.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--off-white)" }}>{d.name}</span>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "14px", color: "var(--yellow)", whiteSpace: "nowrap", marginLeft: "8px" }}>{d.price}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Drinks */}
                <div style={{ marginTop: "20px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--yellow)", fontWeight: 700, marginBottom: "10px" }}>
                    Drinks (minimum 24)
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[
                      "Bottled Water · $2",
                      "Ruby Fine Hibiscus Tea · $3.50",
                      "Sparkling Water · $3.50",
                    ].map((d) => (
                      <span key={d} style={{ fontSize: "13px", color: "rgba(250,246,238,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "4px 12px" }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <Divider />

                {/* Production Fee */}
                <div
                  style={{
                    background: "rgba(187,36,35,0.07)",
                    border: "1px solid rgba(187,36,35,0.2)",
                    borderRadius: "4px",
                    padding: "clamp(20px, 3vw, 32px)",
                    marginBottom: "32px",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <CheckCircle size={22} color="var(--green)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 2vw, 20px)", color: "var(--off-white)", marginBottom: "8px" }}>
                        Production Fee (Included)
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.8 }}>
                        For each customized event, our team comes prepared with eco plates, napkins, cutlery, serving utensils, heating elements, menu/labels, at least two team members, and three hours of qualiTAY service including set-up and breakdown. Production costs vary by distance, guest count, service staff, and decorative items. Note: additional fee applies for events on Sundays or national bank holidays.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <SectionHeading label="Add On" title={<>Additional <em>Services</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px", marginBottom: "40px" }}>
                  {[
                    { icon: <Users size={20} strokeWidth={1.5} />, title: "Host Helpers", desc: "Staff for moving furniture, bussing tables, cake cutting, dishwashing, and more. Prices vary. 4-hour minimum." },
                    { icon: <Star size={20} strokeWidth={1.5} />, title: "Mixology Services", desc: "Licensed and insured bartenders prep, serve, and clean up the bar station (alcohol not included). $75–$125/hr. 4-hour minimum." },
                    { icon: <Sparkles size={20} strokeWidth={1.5} />, title: "Bar Services", desc: "Taylor's Tacos works with multiple bar partners that we are happy to connect you with!" },
                  ].map((svc) => (
                    <div key={svc.title} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "18px" }}>
                      <div style={{ color: "var(--yellow)", marginBottom: "10px" }}>{svc.icon}</div>
                      <h4 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "15px", color: "var(--off-white)", marginBottom: "6px" }}>{svc.title}</h4>
                      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{svc.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookButton label="Book a Staffed Event" href="https://docs.google.com/forms/d/e/1FAIpQLSct3q6ZxsjN8B57GQrikpoykClJVBHwCs9AyadMdvO3qOr3oA/viewform" />
                </div>
              </motion.div>

            ) : (
              /* ── DELIVERY + PICK-UP TAB ── */
              <motion.div
                key="delivery"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {/* Service Styles */}
                <SectionHeading label="Service Styles" title={<>Select Your <em>Style</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px", marginBottom: "0" }}>
                  {deliveryServiceStyles.map((svc) => (
                    <div
                      key={svc.title}
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "4px",
                        padding: "clamp(18px, 2.5vw, 28px)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 2vw, 19px)", color: "var(--off-white)", flex: 1 }}>
                          {svc.title}
                        </h3>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "16px", color: "var(--yellow)", marginLeft: "12px", whiteSpace: "nowrap" }}>
                          {svc.price}
                        </span>
                      </div>
                      <div style={{ display: "inline-block", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--red)", border: "1px solid rgba(187,36,35,0.35)", borderRadius: "2px", padding: "2px 8px", marginBottom: "10px" }}>
                        {svc.highlight}
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.75 }}>{svc.desc}</p>

                      {svc.tiers && (
                        <div style={{ marginTop: "14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                          {svc.tiers.map((tier) => (
                            <div key={tier.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "3px", padding: "8px 10px" }}>
                              <div style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "15px", color: "var(--yellow)" }}>{tier.price}</div>
                              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{tier.label} · {tier.serves} guests</div>
                              <div style={{ fontSize: "10px", color: "rgba(188,220,154,0.7)", marginTop: "2px" }}>{tier.tacos}</div>
                            </div>
                          ))}
                          <div style={{ gridColumn: "1 / -1", fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>
                            {svc.addon}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Divider />

                {/* Signature Tacos */}
                <SectionHeading label="Taco Options" title={<>Pick Your <em>Tacos</em></>} />
                <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--yellow)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>
                  Signature Tacos
                </h3>
                <TacoGrid tacos={deliverySignatureTacos} />

                <div style={{ margin: "20px 0" }} />

                <h3 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2vw, 18px)", color: "var(--lt-purple)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Specialty Tacos
                  <span style={{ fontSize: "12px", color: "var(--muted)", marginLeft: "10px", textTransform: "none", letterSpacing: "0" }}>subject to market price</span>
                </h3>
                <TacoGrid tacos={deliverySpecialtyTacos} specialty />

                {/* Toppings */}
                <div style={{ marginTop: "24px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--yellow)", fontWeight: 700, marginBottom: "10px" }}>
                    Toppings Included
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    {toppingsIncluded.map((t) => (
                      <span key={t.name} style={{ fontSize: "12px", color: "rgba(250,246,238,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "4px 10px" }}>
                        {t.name}
                        {t.note && <span style={{ color: "var(--muted)", marginLeft: "4px", fontSize: "10px" }}>({t.note})</span>}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--muted)", fontStyle: "italic" }}>
                    Need a vegan salsa? Add on our Salsa Salsa!
                  </p>
                </div>

                <Divider />

                {/* #NotTACOS */}
                <SectionHeading label="Not Just Tacos" title={<><em>#NotTACOS</em> Selection</>} />
                <NotTacosGrid items={deliveryNotTacos} />

                <Divider />

                {/* Sides */}
                <SectionHeading label="Sides — $50 each · serves 25+ guests" title={<>The <em>Sides</em></>} />
                <SidesGrid items={deliverySides} />
                <p style={{ marginTop: "10px", fontSize: "12px", color: "var(--muted)" }}>
                  XS sides available for guac + chip, eloTAY corn, and queso + chips. Feeds 10–15 guests at <strong style={{ color: "var(--off-white)" }}>$35 each</strong>.
                </p>

                <Divider />

                {/* Extras */}
                <SectionHeading label="Extras — $10 each · 16oz · serves 15+" title={<>The <em>Extras</em></>} />
                <ExtrasGrid items={deliveryExtras.map((e) => ({ ...e, badge: null }))} />

                <Divider />

                {/* Dessert */}
                <SectionHeading label="Something Sweet" title={<><em>Dessert</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
                  {[
                    { name: "Churro Minis", price: "$1 each", desc: "Fried dough filled with chocolate and covered with cinna-sugar!" },
                    { name: "Lindsay's Italian Ice", price: "$4 each", desc: "24 minimum, need at least 72hr notice. Mango, Watermelon, or Lemon." },
                  ].map((d) => (
                    <div key={d.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--off-white)" }}>{d.name}</span>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "14px", color: "var(--yellow)", marginLeft: "8px" }}>{d.price}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{d.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Drinks */}
                <div style={{ marginTop: "16px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--yellow)", fontWeight: 700, marginBottom: "10px" }}>
                    Drinks (minimum 24)
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["Bottled Water · $2", "Ruby Fine Hibiscus Tea · $3.50", "Sparkling Water · $3.50"].map((d) => (
                      <span key={d} style={{ fontSize: "13px", color: "rgba(250,246,238,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "4px 12px" }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <Divider />

                {/* Service Items */}
                <SectionHeading label="Optional Add-Ons" title={<>Service <em>Items</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginBottom: "32px" }}>
                  {[
                    { item: "Serving Utensils", price: "FREE", note: "by request only" },
                    { item: "Chafing Rack + Pan Insert + Sterno Heater", price: "$20" },
                    { item: "Plate + Napkin + Cutlery", price: "$1/pp" },
                  ].map((s) => (
                    <div key={s.item} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "14px" }}>
                      <div style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "18px", color: "var(--yellow)", marginBottom: "4px" }}>{s.price}</div>
                      <div style={{ fontSize: "13px", color: "var(--off-white)", lineHeight: 1.5 }}>{s.item}</div>
                      {s.note && <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{s.note}</div>}
                    </div>
                  ))}
                </div>

                <Divider />

                {/* Delivery Options */}
                <SectionHeading label="Pick Up or Delivery" title={<>How You <em>Get It</em></>} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px", marginBottom: "40px" }}>
                  {deliveryOptions.map((opt) => (
                    <div
                      key={opt.title}
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "4px",
                        padding: "20px",
                      }}
                    >
                      <div style={{ color: "var(--yellow)", marginBottom: "10px" }}>{opt.icon}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <h4 style={{ fontFamily: "Hannik, sans-serif", fontWeight: 800, fontSize: "16px", color: "var(--off-white)" }}>{opt.title}</h4>
                        <span style={{ fontFamily: "Hannik, sans-serif", fontWeight: 900, fontSize: "14px", color: "var(--yellow)", marginLeft: "8px", whiteSpace: "nowrap" }}>{opt.price}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7 }}>{opt.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <BookButton label="Order Delivery / Pick-Up" href="https://docs.google.com/forms/d/11AL2hjhX9QtyOsrDAFwsY_gV9yMb1PjKdJMJYQbyfKc/viewform" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── HOUSE RULES ──────────────────────────────────────── */}
      <section
        ref={rulesRef}
        style={{
          background: "#120C07",
          padding: "clamp(52px, 7vw, 96px) clamp(20px, 4vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={rulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <span className="section-label">Before You Book</span>
            <h2 className="section-title" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              Taco &apos;Bout Our <em>House Rules!</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {houseRules.map((rule, i) => (
              <AccordionItem
                key={i}
                rule={rule}
                open={openRules.includes(i)}
                onToggle={() => toggleRule(i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ZOLA / WEDDING SECTION ───────────────────────────── */}
      <section
        ref={zolaRef}
        style={{
          position: "relative",
          background: "var(--black)",
          padding: "clamp(52px, 7vw, 96px) clamp(20px, 4vw, 52px)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/events/taylors-tacos-chicago-catering-buffet-guests-serving.webp"
          alt="Taylor's Tacos Chicago wedding catering"
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, var(--black) 0%, rgba(85,26,58,0.35) 50%, var(--black) 100%)",
          }}
        />

        {/* Brand stripe top */}
        <div className="brand-stripe" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        {/* Decorative large Heart behind content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <Heart
            size={320}
            strokeWidth={0.5}
            style={{ color: "rgba(175,152,202,0.06)" }}
          />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={zolaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: "var(--lt-purple)" }}>
              Wedding SZN
            </span>
            <h2
              style={{
                fontFamily: "Hannik, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 64px)",
                color: "var(--off-white)",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Make Your Big Day{" "}
              <em style={{ color: "var(--yellow)", fontStyle: "italic" }}>
                Unforgettable
              </em>
            </h2>
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
                color: "rgba(250,246,238,0.55)",
                lineHeight: 1.75,
                marginBottom: "32px",
                maxWidth: "480px",
                margin: "0 auto 32px",
              }}
            >
              Taylor&apos;s Tacos is Chicago&apos;s go-to wedding caterer. Authentic street tacos,
              live action stations, and a dedicated team that makes sure your guests
              are raving about the food for years.
            </p>
          </motion.div>

          {/* Social proof badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={zolaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "36px",
            }}
          >
            {[
              { icon: <Star size={13} strokeWidth={2} fill="currentColor" />, label: "5.0 Rating on Zola" },
              { icon: <Users size={13} strokeWidth={1.5} />, label: "31 Couples Booked" },
              { icon: <Sparkles size={13} strokeWidth={1.5} />, label: "Best of Zola 2025" },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(175,152,202,0.1)",
                  border: "1px solid rgba(175,152,202,0.25)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--lt-purple)",
                }}
              >
                {badge.icon} {badge.label}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={zolaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a
              href="https://www.zola.com/wedding-vendors/wedding-catering/taylor-s-tacos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--yellow)",
                color: "var(--black)",
                padding: "16px 40px",
                borderRadius: "3px",
                fontFamily: "Hannik, sans-serif",
                fontWeight: 900,
                fontSize: "14px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid var(--yellow)",
                cursor: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "var(--yellow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--yellow)";
                el.style.color = "var(--black)";
              }}
            >
              <Heart size={16} strokeWidth={2} />
              Brides — Book with Zola
            </a>
          </motion.div>
        </div>

        {/* Brand stripe bottom */}
        <div className="brand-stripe" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section
        style={{
          background: "#120C07",
          padding: "clamp(52px, 7vw, 80px) clamp(20px, 4vw, 52px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background number */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span style={{ fontFamily: "Hannik, sans-serif", fontSize: "clamp(120px, 24vw, 280px)", fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>
            ?
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label">
            Questions? We&apos;ve Got Answers
          </span>
          <h2
            style={{
              fontFamily: "Hannik, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4.5vw, 52px)",
              color: "var(--off-white)",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Ready to <em style={{ color: "var(--yellow)", fontStyle: "italic" }}>Book?</em>
          </h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(250,246,238,0.6)", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto 36px" }}>
            Email us or call and a dedicated team member will be in touch. We can&apos;t wait to serve you!
          </p>

          {/* Email Us button */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <a
              href="mailto:info@taylorstacoschicago.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--red)",
                color: "white",
                padding: "14px 36px",
                borderRadius: "3px",
                fontFamily: "Hannik, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "2px solid var(--red)",
                cursor: "none",
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
              Email Us
            </a>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="tel:7732261596"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "rgba(250,246,238,0.5)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--off-white)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,246,238,0.5)")}
            >
              <Phone size={14} strokeWidth={1.5} /> (773) 226-1596
            </a>
            <a
              href="https://maps.google.com/?q=135+N+Kedzie+Chicago+IL+60612"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "rgba(250,246,238,0.5)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--off-white)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,246,238,0.5)")}
            >
              <MapPin size={14} strokeWidth={1.5} /> 135 N. Kedzie, Chicago, IL 60612
            </a>
            <a
              href="mailto:info@taylorstacoschicago.com"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "rgba(250,246,238,0.5)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--off-white)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,246,238,0.5)")}
            >
              <Clock size={14} strokeWidth={1.5} /> info@taylorstacoschicago.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
