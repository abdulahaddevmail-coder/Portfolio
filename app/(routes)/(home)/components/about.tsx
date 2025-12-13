"use client";

import Link from "next/link";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/media-query";

import { ScrollParallax } from "@/components/ui/scrollParallex";

export const About = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="w-[90%] lg:w-[75%] mx-auto bg-neutral-200 dark:bg-secondary-foreground rounded-3xl md:rounded-4xl md:px-10 flex flex-col-reverse md:flex-row md:flex-nowrap justify-between items-center gap-10">
      <div className="flex flex-col md:flex-row gap-4.5 md:basis-1/2 overflow-hidden md:h-[380px] lg:h-[448px] rounded-b-4xl md:rounded-none">
        <ScrollParallax from={0} to={-100} dir={isMobile ? "x" : "y"} className="will-change-transform">
          <div className="flex md:flex-col gap-4.5">
            {[1, 2, 3].map((n) => (
              <Image
                key={n}
                loading="eager"
                alt={`About ${n}`}
                src={`/about/${n}.jpg`}
                width={195}
                height={195}
                className="size-[148px] md:size-[153px] lg:size-[195px] rounded-2xl bg-neutral-800 object-cover"
              />
            ))}
          </div>
        </ScrollParallax>
        <ScrollParallax from={-100} to={0} dir={isMobile ? "x" : "y"} className="will-change-transform">
          <div className="flex md:flex-col gap-4.5">
            {[4, 5, 6].map((n) => (
              <Image
                key={n}
                loading="eager"
                alt={`About ${n}`}
                src={`/about/${n}.jpg`}
                width={195}
                height={195}
                className="size-[148px] md:size-[153px] lg:size-[195px] rounded-2xl bg-neutral-800 object-cover"
              />
            ))}
          </div>
        </ScrollParallax>
      </div>
      <div className="flex flex-col md:basis-1/2 pt-12 pb-8 lg:py-20 px-8 md:px-0">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
          I’ve been developing digital solutions for more than <span className="text-nowrap">3 years</span>
        </h2>
        <p className="mb-6 text-black/70 text-sm lg:text-base">
          Vitae enim ut interdum id mi sit id aliquam purus urna ipsum augue lorem est metus turpis tincidunt vitaeniolm
          siet sollicitudin sit aliquet nunc a enim commodo.
        </p>
        <Link
          href="/about"
          className="bg-black/80 transition-all hover:bg-black hover:-translate-y-1 text-white font-bold px-6 py-3.5 rounded-full md:w-fit text-sm grid place-items-center"
        >
          More about me
        </Link>
      </div>
    </section>
  );
};
