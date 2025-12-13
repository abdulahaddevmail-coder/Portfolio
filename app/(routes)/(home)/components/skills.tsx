"use client";

import { useMemo, useRef } from "react";

import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "motion/react";

import { useMediaQuery } from "@/hooks/media-query";

import { Activity } from "@/components/ui/activity";
import FloatingIcon from "@/components/ui/floating-icons";

const logosArr = [
  { name: "React", src: "/icons/react.svg", top: "17%", left: "70%" },
  { name: "Nextjs", src: "/icons/nextjs.svg", top: "42%", left: "5%" },
  { name: "Nodejs", src: "/icons/nodejs.svg", top: "14%", left: "12%" },
  { name: "Typescript", src: "/icons/typescript.svg", top: "70%", left: "13%" },
  { name: "Tailwind", src: "/icons/tailwind.svg", top: "56%", left: "33%" },
  { name: "Sql", src: "/icons/sql.svg", top: "67%", left: "84%" },
  { name: "Npm", src: "/icons/npm.svg", top: "10%", left: "35%" },
  { name: "Figma", src: "/icons/figma.svg", top: "78%", left: "65%" },
  { name: "Mongo", src: "/icons/mongo.svg", top: "47%", left: "70%" },
  { name: "Vscode", src: "/icons/vscode.svg", top: "26%", left: "81%" },
  { name: "Express", src: "/icons/express.svg", top: "82%", left: "25%" },
  { name: "Git", src: "/icons/git.svg", top: "25%", left: "25%" },
];

export const TechnicalSkills = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 640px)");

  const logos = useMemo(
    () =>
      logosArr.map((logo) => {
        if (theme === "dark") {
          if (logo.src === "/icons/nextjs.svg") {
            return { ...logo, src: "/icons/nextjs-white.svg" };
          } else if (logo.src === "/icons/express.svg") {
            return { ...logo, src: "/icons/express-white.svg" };
          } else if (logo.src === "/icons/git.svg") {
            return { ...logo, src: "/icons/git-white.svg" };
          }
        }
        return logo;
      }),
    [theme]
  );

  // Scroll progress relative to this section
  const { scrollYProgress } = useScroll({ target: ref });

  // Sequential animation ranges
  const line1Y = useTransform(scrollYProgress, [0.05, 0.3], ["400%", "0%"]);
  const line1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.9]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const line2Y = useTransform(scrollYProgress, [0.3, 0.6], ["400%", "0%"]);
  const line2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]);

  const line3Y = useTransform(scrollYProgress, [0.6, 0.9], ["400%", "0%"]);
  const line3Opacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.9]);
  const scale3 = useTransform(scrollYProgress, [0.6, 0.9], [0.9, 1]);

  return (
    <section ref={ref} className="h-screen md:h-[400vh]">
      <div className="sticky top-0 grid min-h-[660px] h-screen place-items-center overflow-hidden md:px-24 2xl:px-80">
        <div className="pointer-events-none absolute grid place-items-center size-full">
          <div className="relative size-full">
            {logos.map((logo, i) => (
              <FloatingIcon
                key={i}
                ref={ref}
                src={logo.src}
                finalTop={logo.top}
                finalLeft={logo.left}
                delay={0.2}
                size={isMobile ? 50 : 70}
                floatDelay={i * 0.55}
              />
            ))}
          </div>
        </div>
        <div ref={ref}>
          <div className="grid place-items-center gap-y-16 py-20 md:py-0">
            <div className="text-xl font-semibold text-center text-muted-foreground uppercase">My Technical Skills</div>
            <Activity query="up.sm">
              <div className="grid md:hidden gap-y-8">
                <div className="text-nowrap text-center font-black text-5xl md:text-7xl text-shadow-xs">
                  <div>Let&apos;s Build</div>
                </div>
                <div className="text-nowrap text-center font-black text-5xl md:text-7xl text-shadow-xs">
                  <div>Your</div>
                </div>
                <div className="text-nowrap text-center font-black text-5xl md:text-7xl text-shadow-xs">
                  <div>Solution</div>
                </div>
              </div>
            </Activity>
            <Activity query="down.sm">
              <div className="hidden md:grid gap-y-8 md:gap-y-10">
                <div className="text-nowrap text-center font-bold text-5xl md:text-7xl text-shadow-xs">
                  <motion.div style={{ opacity: line1Opacity, y: line1Y, scale: scale1 }}>Let&apos;s Build</motion.div>
                </div>
                <div className="text-nowrap text-center font-bold text-5xl md:text-7xl text-shadow-xs">
                  <motion.div style={{ opacity: line2Opacity, y: line2Y, scale: scale2 }}>Your</motion.div>
                </div>
                <div className="text-nowrap text-center font-bold text-5xl md:text-7xl text-shadow-xs">
                  <motion.div style={{ opacity: line3Opacity, y: line3Y, scale: scale3 }}>Solution</motion.div>
                </div>
              </div>
            </Activity>
          </div>
        </div>
      </div>
    </section>
  );
};
