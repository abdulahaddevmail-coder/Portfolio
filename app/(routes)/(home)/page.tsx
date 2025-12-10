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
      {/* <div className="py-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center rounded-2xl bg-foreground text-background p-6 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">
              <span className="count-up-text">10</span>+
            </div>
            <div className="text-background/70">Projects</div>
          </div>
          <div className="text-center rounded-2xl bg-foreground text-background p-6 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">
              <span className="count-up-text">3</span>
            </div>
            <div className="text-background/70">Major Platforms</div>
          </div>
          <div className="text-center rounded-2xl bg-foreground text-background p-6 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">
              <span className="count-up-text">2025</span>
            </div>
            <div className="text-background/70">Latest Certification</div>
          </div>
        </div>
      </div> */}
      <About />
      <TechnicalSkills />
      <Contact />
    </main>
  );
}
