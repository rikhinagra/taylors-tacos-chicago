"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { BLACK_FRIDAY_FORM } from "@/components/sections/blackFridayConfig";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  hover?: boolean;
};

/** Black Friday call-to-action: opens the sign-up Google Form in a new tab. */
export default function BlackFridayLink({
  children,
  className,
  style,
  ariaLabel,
  hover = false,
}: Props) {
  const motionProps = hover
    ? { whileHover: { y: -3 }, whileTap: { scale: 0.98 } }
    : {};

  return (
    <motion.a
      href={BLACK_FRIDAY_FORM}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.a>
  );
}
