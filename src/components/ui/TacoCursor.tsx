"use client";

import { useEffect } from "react";

export default function TacoCursor() {
  useEffect(() => {
    const taco = document.getElementById("taco-cursor");
    const trail = document.getElementById("cursor-trail");
    if (!taco || !trail) return;

    let mx = 0, my = 0, tx = 0, ty = 0, prevX = 0, curAngle = -15;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - prevX;
      prevX = e.clientX;
      mx = e.clientX;
      my = e.clientY;
      curAngle = Math.max(-35, Math.min(35, dx * 2));
      taco.style.left = mx + "px";
      taco.style.top = my + "px";
      taco.style.transform = `translate(-50%,-50%) rotate(${curAngle}deg)`;
    };

    const animTrail = () => {
      tx += (mx - tx) * 0.13;
      ty += (my - ty) * 0.13;
      trail.style.left = tx + "px";
      trail.style.top = ty + "px";
      raf = requestAnimationFrame(animTrail);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animTrail);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Taco cursor — exact SVG from approved reference */}
      <svg
        id="taco-cursor"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "fixed",
          width: "52px",
          height: "52px",
          pointerEvents: "none",
          zIndex: 99999,
          left: 0,
          top: 0,
          transform: "translate(-50%,-50%) rotate(-15deg)",
          filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.55))",
          willChange: "left,top,transform",
        }}
      >
        <ellipse cx="50" cy="65" rx="44" ry="20" fill="#C49235" />
        <path d="M6 65 Q50 16 94 65" fill="#E8C77A" />
        <path d="M10 65 Q50 22 90 65 Q75 52 50 49 Q25 52 10 65" fill="#D4A84B" opacity="0.5" />
        <path
          d="M16 61 Q22 51 30 59 Q36 49 44 57 Q50 47 56 55 Q63 47 71 55 Q78 50 84 59"
          fill="none"
          stroke="#3A8A3A"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="55" r="5.5" fill="#E04040" />
        <circle cx="52" cy="51" r="5.5" fill="#E04040" />
        <circle cx="72" cy="55" r="5.5" fill="#E04040" />
        <rect x="20" y="57" width="18" height="4.5" rx="2" fill="#F5C030" opacity="0.95" />
        <rect x="44" y="53" width="16" height="4.5" rx="2" fill="#F5C030" opacity="0.95" />
        <rect x="64" y="57" width="16" height="4.5" rx="2" fill="#F5C030" opacity="0.95" />
        <path
          d="M34 59 Q40 53 46 59 Q52 53 58 59"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="38" cy="52" r="2.5" fill="#5DA84A" opacity="0.9" />
        <circle cx="62" cy="52" r="2.5" fill="#5DA84A" opacity="0.9" />
        <ellipse cx="50" cy="84" rx="44" ry="9" fill="#9A6B20" opacity="0.55" />
      </svg>

      {/* Yellow trail ring */}
      <div
        id="cursor-trail"
        style={{
          position: "fixed",
          width: "18px",
          height: "18px",
          border: "2px solid var(--yellow)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          left: 0,
          top: 0,
          transform: "translate(-50%,-50%)",
          opacity: 0.75,
          willChange: "left,top",
        }}
      />
    </>
  );
}
