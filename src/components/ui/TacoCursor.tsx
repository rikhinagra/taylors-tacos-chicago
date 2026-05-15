"use client";

import { useEffect } from "react";

export default function TacoCursor() {
  useEffect(() => {
    const taco = document.getElementById("taco-cursor");
    const trail = document.getElementById("cursor-trail");
    if (!taco || !trail) return;

    // Hide on touch devices (mobile & tablet) — no mouse cursor exists
    const isTouch =
      "ontouchstart" in window ||
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      taco.style.display = "none";
      trail.style.display = "none";
      return;
    }

    let mx = 0, my = 0, tx = 0, ty = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      taco.style.left = mx + "px";
      taco.style.top = my + "px";
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
      {/* Cactus cursor image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="taco-cursor"
        src="/images/logo/cactus-cursor.webp"
        alt=""
        style={{
          position: "fixed",
          width: "112px",
          height: "auto",
          pointerEvents: "none",
          zIndex: 99999,
          left: 0,
          top: 0,
          transform: "translate(-50%,-50%)",
          filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.4))",
          willChange: "left,top",
        }}
      />

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
