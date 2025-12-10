"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, animate, useTransform, useInView } from "motion/react";

interface FloatingIconConfig {
  ref: React.RefObject<HTMLDivElement | null>;
  src: string;
  finalTop: number | string;
  finalLeft: number | string;
  size?: number;
  delay?: number;
  floatDelay?: number;
}
// Logos scatter animation + floating animation
function FloatingIcon({ ref, src, finalTop, finalLeft, size = 90, delay = 0, floatDelay = 0 }: FloatingIconConfig) {
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Floating animation
  useEffect(() => {
    const animX = animate(x, [20, -20, 20], {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: floatDelay,
    });

    const animY = animate(y, [-20, 20, -20], {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: floatDelay,
    });

    return () => {
      animX.stop();
      animY.stop();
    };
  }, [floatDelay, x, y]);

  const translateX = useTransform(x, (v) => `${v}px`);
  const translateY = useTransform(y, (v) => `${v}px`);

  return (
    <>
      {inView && (
        <motion.div
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            top: finalTop,
            left: finalLeft,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay,
            ease: "easeOut",
          }}
          style={{ translateX, translateY }}
          className="absolute z-1"
        >
          <div className="relative overflow-hidden">
            <Image
              src={src}
              width={size}
              height={size}
              alt="logo"
              style={{ width: size, height: size }}
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default FloatingIcon;

// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   useAnimationFrame,
// } from "motion/react";
// import Image from "next/image";
// import { useState, useRef } from "react";

// interface FloatingIconConfig {
//   src: string;
//   finalTop: number | string;
//   finalLeft: number | string;
//   size?: number;
//   delay?: number;
//   floatDelay?: number;
// }

// function FloatingIcon({
//   src,
//   finalTop,
//   finalLeft,
//   size = 90,
//   delay = 0,
//   floatDelay = 0,
// }: FloatingIconConfig) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Store elapsed time to make animation loop continuous
//   const time = useRef(0);

//   // Use animation frame for smooth continuous movement
//   useAnimationFrame((t, delta) => {
//     if (isHovered) return; // pause when hovered

//     // Convert delta to seconds
//     time.current += delta / 1000;

//     // Create natural floating motion
//     const offsetX = Math.sin((time.current + floatDelay) * 0.6) * 20;
//     const offsetY = Math.cos((time.current + floatDelay) * 0.8) * 20;

//     x.set(offsetX);
//     y.set(offsetY);
//   });

//   const translateX = useTransform(x, (v) => `${v}px`);
//   const translateY = useTransform(y, (v) => `${v}px`);

//   return (
//     <motion.div
//       initial={{
//         top: "50%",
//         left: "50%",
//         x: "-50%",
//         y: "-50%",
//       }}
//       animate={{
//         top: finalTop,
//         left: finalLeft,
//         x: 0,
//         y: 0,
//       }}
//       transition={{
//         duration: 1,
//         delay,
//         ease: "easeOut",
//       }}
//       style={{ translateX, translateY }}
//       className="absolute"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative overflow-hidden">
//         <Image
//           src={src}
//           width={size}
//           height={size}
//           alt="logo"
//           style={{ width: size, height: size }}
//           className="object-contain select-none pointer-events-none"
//         />
//       </div>
//     </motion.div>
//   );
// }

// export default FloatingIcon;
