"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

import { motion } from "motion/react";
import { useTheme } from "next-themes";

const SunMoonIcon: React.FC<{ isLightMode: boolean }> = ({ isLightMode = true }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      initial={false}
      animate={{ rotate: isLightMode ? 0 : 180 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Sun */}
      <motion.circle
        cx="12"
        cy="12"
        r="5"
        fill="rgb(249,200,120)"
        animate={{ opacity: isLightMode ? 1 : 0, scale: isLightMode ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Sun Rays */}
      <motion.g
        stroke="orange"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ opacity: isLightMode ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>

      {/* Moon */}
      <motion.path
        fill="gray"
        d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
        animate={{ opacity: isLightMode ? 0 : 1, scale: isLightMode ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
};

const menu = [
  { name: "Home", href: "/", icon: "/icons/home.svg" },
  { name: "About", href: "/about", icon: "/icons/person.svg" },
  { name: "blogs", href: "/blogs", icon: "/icons/pencil.svg" },
  { name: "Contact", href: "/contact", icon: "/icons/mail.svg" },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const isLightMode = useMemo(() => theme === "light", [theme]);

  const handleClick = () => {
    const audio = new Audio("/water-tap.mp3"); // Make sure the sound file is in the /public directory
    audio.play();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-10">
      <div className="w-[548px] hidden md:flex h-14 backdrop-blur-md bg-glass border border-foreground/10 rounded-full absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="w-full flex justify-between items-center px-8">
          <div className="w-10 flex basis-1/5">
            <div className="relative bg-background rounded-full p-1">
              <motion.div
                animate={{ rotate: [10, -10, 10] }} // smooth keyframes
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image src="/avatar.jpg" width={40} height={40} alt="Avatar" className="rounded-full" />
              </motion.div>
              <div className="size-2 bg-green-500 rounded-full absolute top-1 right-1.5" />
            </div>
          </div>
          <div className="flex basis-[60%] justify-center items-center gap-4">
            {menu.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <button aria-label="switch-theme" onClick={handleClick} className="flex basis-1/5 justify-end cursor-pointer">
            <SunMoonIcon isLightMode={!isLightMode} />
          </button>
        </div>
      </div>
    </header>
  );
};
