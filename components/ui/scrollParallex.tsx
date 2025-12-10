"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollParallax({
  children,
  from = 100,
  to = -100,
  className = "",
  dir = "y",
}: {
  from?: number;
  to?: number;
  dir?: "x" | "y";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformValue = useTransform(scrollYProgress, [0, 1], [from, to]);

  const style = dir === "x" ? { x: transformValue } : { y: transformValue };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
}
