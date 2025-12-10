"use client";
import Image from "next/image";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

const list = [
  {
    question: "Are you open for new projects?",
    answer: "Yes, I’m available for new projects! 😁",
  },
  {
    question: "How many years of experience do you have?",
    answer: "I’ve currently more than 3 years 🕰️",
  },
  {
    question: "Are you currently looking for full-time roles?",
    answer: "I’m only open for freelance projects 🤓",
  },
];

export const Faqs = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    } else if (current === 0) {
      setCurrent(list.length - 1);
    }
  };

  const handleNext = () => {
    if (current < list.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (current === list.length - 1) {
      setCurrent(0);
    }
  };

  return (
    <div className="w-full bg-neutral-200 dark:bg-secondary-foreground text-foreground dark:text-background px-7 pt-5 pb-8 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-start items-center">
          <Image
            src="/emoji/thoughtful.png"
            loading="eager"
            alt="FAQs Thoughtful Face Emoji"
            width={28}
            height={28}
            className="size-7"
          />
          <div className="text-400 bold color-neutral-800">&nbsp;</div>
          <h2 className="text-xl font-bold">FAQ’s</h2>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            aria-label="faq-prev"
            className="bg-secondary transition hover:bg-foreground rounded-sm shadow-lg p-1 size-6 grid place-items-center group dark:hover:shadow"
          >
            <ArrowLeft
              size={16}
              className="dark:text-white transition-colors group-hover:text-white dark:group-hover:text-black"
            />
          </button>

          <button
            onClick={handleNext}
            aria-label="faq-next"
            className="bg-secondary transition hover:bg-foreground rounded-sm shadow-lg p-1 size-6 grid place-items-center group dark:hover:shadow"
          >
            <ArrowRight
              size={16}
              className="dark:text-white transition-colors group-hover:text-white dark:group-hover:text-black"
            />
          </button>
        </div>
      </div>
      <div className="bg-muted-foreground w-full h-[0.5px] mt-5 mb-7" />
      <div className="w-slide" aria-label={`${current + 1} of ${list.length}`} role="group">
        <h3 className="text-sm font-bold">{list[current].question}</h3>

        <div className="mt-2">
          <div className="text-2xl font-bold">{list[current].answer}</div>
        </div>
      </div>
    </div>
  );
};
