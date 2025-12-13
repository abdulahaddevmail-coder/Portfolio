"use client";

import Link from "next/link";
import Image from "next/image";

import TrueFocus from "@/components/ui/true-focus";
import { Activity } from "@/components/ui/activity";

export const Hero = () => {
  return (
    <section className="min-h-[660px] lg:h-screen w-full flex flex-col justify-center px-8 sm:px-10">
      <p className="text-xl font-semibold text-center text-muted-foreground uppercase">Welcome to My Portfolio</p>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4 sm:mb-6 text-center mt-8">
        <Activity query="down.sm">
          <TrueFocus
            words={["Hi, ", "I am"]}
            manualMode={false}
            blurAmount={5}
            borderColor="var(--foreground)"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </Activity>
        <Activity query="up.sm">
          <span className="block text-foreground font-extrabold text-4xl">Hi, I am</span>
        </Activity>
        <span className="block mt-2 text-5xl md:text-6xl font-extrabold sm:font-bold text-gradient bg-linear-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
          {" "}
          Abdul Ahad
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 text-center mt-8">
        Crafting clean, efficient, and elegant <span className="text-foreground font-medium">digital experiences</span>
      </h2>
      <div className="flex justify-center gap-4 mt-8">
        <Link
          href="/contact"
          className="flex items-center gap-2 group bg-foreground text-background rounded-full px-3 py-2"
        >
          <span>Let’s chat!</span>
          <Image src="/message.png" alt="message-icon" width={14} height={14} className="group-hover:animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
