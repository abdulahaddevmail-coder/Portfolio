import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { ChevronRight } from "lucide-react";

import { Faqs } from "./components/faqs";
import { ContactForm } from "./components/form";

import { Activity } from "@/components/ui/activity";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.SITE_URL}/contact`,
  },
};

export default function Page() {
  return (
    <main className="bg-background shadow-2xl md:rounded-b-4xl min-h-screen pt-40 pb-20">
      <section className="w-[90%] md:w-[80%] mx-auto flex flex-wrap lg:flex-nowrap gap-8">
        <div className="flex flex-col gap-8 baiss-full lg:basis-[40%]">
          <div className="bg-secondary-foreground dark:bg-secondary text-background dark:text-foreground p-12 rounded-2xl dark:shadow-lg">
            <p className="text-white flex items-center text-sm">
              <Link href="/" className="transition-opacity opacity-60 hover:opacity-100">
                Home
              </Link>{" "}
              <ChevronRight size={18} /> <span>Contact</span>
            </p>
            <h1 className="text-4xl font-bold leading-none mb-4">Contact me</h1>
            <p className="color-neutral-100 mb-6">
              Sagittis posuere quisque nulla tincidunt ac lectus at lectus scelerisque sodalem ipsum praesent
              <span className="text-no-wrap">fames at</span>
            </p>
            <div className="flex flex-col gap-3.5 text-sm font-bold">
              <a
                href="mailto:abdulahad.devmail@gmail.com"
                className="inline-flex items-center gap-4 transition hover:scale-[1.03]"
              >
                <Image
                  src="/email.png"
                  loading="eager"
                  alt="Email Icon Contact"
                  width={18}
                  height={18}
                  className="size-4.5 object-contain"
                />
                <div className="">abdulahad.devmail@gmail.com</div>
              </a>
              <a href="tel:(+92)313-6624697" className="inline-flex items-center gap-4 transition hover:scale-[1.03]">
                <Image
                  src="/phone.png"
                  loading="eager"
                  alt="Phone Icon Contact"
                  width={18}
                  height={18}
                  className="size-4.5 object-contain"
                />
                <div className="">(+92) 313 - 6624697</div>
              </a>
            </div>
          </div>
          {/* Faq */}
          <Activity query="down.lg">
            <Faqs />
          </Activity>
        </div>
        <div className=" bg-neutral-200 dark:bg-secondary-foreground text-foreground dark:text-background p-6 md:p-12 flex baiss-full lg:basis-[60%] rounded-2xl w-full">
          <ContactForm />
        </div>
        {/* Faq */}
        <Activity query="up.lg">
          <Faqs />
        </Activity>
      </section>
    </main>
  );
}
