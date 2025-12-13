"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";

import { Activity } from "@/components/ui/activity";

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

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      {/* Top Line */}
      <motion.path
        d="M4 6H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isOpen ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 50%" }}
      />

      {/* Bottom Line */}
      <motion.path
        d="M4 14H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isOpen ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </svg>
  );
};

const menu = [
  { name: "Home", href: "/", icon: "/icons/home.svg" },
  { name: "About", href: "/about", icon: "/icons/person.svg" },
  // { name: "blogs", href: "/blogs", icon: "/icons/pencil.svg" },
  { name: "Contact", href: "/contact", icon: "/icons/mail.svg" },
];

const listVariants = {
  open: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  closed: {},
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const isLightMode = useMemo(() => theme === "light", [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const audio = new Audio("/water-tap.mp3"); // Make sure the sound file is in the /public directory
    audio.play();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="sticky top-0 z-10">
        <motion.div
          className={`w-[90%] sm:w-[548px] bg-[hsla(0,0%,93%,0.1)] backdrop-blur-xl rounded-4xl! border border-foreground/10 absolute top-8 left-1/2 -translate-x-1/2 overflow-hidden`}
          animate={{
            height: isOpen ? "auto" : "56px",
          }}
        >
          <div className={`w-full flex justify-between items-center px-6 sm:px-8 h-14`}>
            <div className="w-10 flex basis-1/5">
              <div className="relative rounded-full p-1">
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
            <Activity query="down.sm">
              <div className="flex basis-[60%] justify-center items-center gap-4">
                {menu.map((item) => (
                  <Link key={item.name} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </Activity>
            <div className="flex items-center basis-1/5 justify-end gap-1">
              <button aria-label="switch-theme" onClick={handleClick} className="cursor-pointer">
                <SunMoonIcon isLightMode={!isLightMode} />
              </button>
              <Activity query="up.sm">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="rounded-12 px-2.5 focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)]"
                >
                  <MenuIcon isOpen={isOpen} />
                </button>
              </Activity>
            </div>
          </div>
          {/* Mobile Menu */}
          <Activity query="up.sm">
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  initial={false}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: "easeInOut" },
                      opacity: { duration: 0.25, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.35, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="overflow-hidden w-full"
                >
                  <motion.ul variants={listVariants} className="flex flex-col gap-6 px-8 py-4">
                    {menu.map((item) => (
                      <motion.li variants={itemVariants} key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-semibold hover:opacity-80 block"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </Activity>
        </motion.div>
      </header>
    </>
  );
};
