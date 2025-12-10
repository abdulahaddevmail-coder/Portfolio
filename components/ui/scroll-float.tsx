"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// interface ScrollFloatProps {
//   children: React.ReactNode;
//   containerClassName?: string;
//   textClassName?: string;
//   revealStartOffset?: number; // 0 = starts immediately
//   revealEndOffset?: number; // 1 = finishes when section leaves
//   fromYPercent?: number; // how far from below it starts, default 120
// }

// export default function ScrollFloat({
//   children,
//   containerClassName = "",
//   textClassName = "",
//   revealStartOffset = 0,
//   revealEndOffset = 0.4,
//   fromYPercent = 120,
// }: ScrollFloatProps) {
//   const ref = useRef<HTMLHeadingElement>(null);

//   // Observe scroll progress relative to this element
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // triggers when element enters/leaves viewport
//   });

//   // Animate upward & fade in as you scroll
//   const y = useTransform(
//     scrollYProgress,
//     [revealStartOffset, revealEndOffset],
//     [`${fromYPercent}%`, "0%"]
//   );

//   const opacity = useTransform(
//     scrollYProgress,
//     [revealStartOffset, revealEndOffset],
//     [0, 1]
//   );

//   return (
//     <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
//       <motion.div
//         style={{
//           y,
//           opacity,
//           display: "inline-block",
//           transformOrigin: "50% 0%",
//         }}
//         className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.1] ${textClassName}`}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

export default function StickyScrollLines() {
  const ref = useRef<HTMLDivElement>(null);

  // scroll progress mapped to 0 → 1 while scrolling through the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //
  // LINE 1 animation: 0   → 0.4
  //
  const y1 = useTransform(scrollYProgress, [0.0, 0.4], ["400%", "0%"]);
  const o1 = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);

  //
  // LINE 2 animation: 0.4 → 0.8
  //
  const y2 = useTransform(scrollYProgress, [0.4, 0.8], ["400%", "0%"]);
  const o2 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-background">
      {/* Sticky part — freezes while animations happen */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center space-y-12">
        <motion.p
          style={{ y: y1, opacity: o1 }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold text-center"
        >
          Technical Stack
        </motion.p>

        <motion.p
          style={{ y: y2, opacity: o2 }}
          className="text-lg max-w-2xl text-center text-foreground/80"
        >
          A comprehensive overview of the technologies and tools I use to bring
          ideas to life.
        </motion.p>
      </div>
    </section>
  );
}
