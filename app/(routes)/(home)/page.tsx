import { Metadata } from "next";

import { Hero } from "./components/hero";
// import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Contact } from "./components/contact-v2";
import { TechnicalSkills } from "./components/skills";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.SITE_URL}`,
  },
};

export default function Home() {
  return (
    <main className="bg-background shadow-2xl md:rounded-b-4xl min-h-screen">
      <Hero />
      <About />
      <TechnicalSkills />
      <Contact />
    </main>
  );
}
