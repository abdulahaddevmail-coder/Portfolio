import { Metadata } from "next";

import { Hero } from "./components/hero";
import { About } from "./components/about";
import { TechnicalSkills } from "./components/skills";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";

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
      <Projects />
      <Contact />
    </main>
  );
}
