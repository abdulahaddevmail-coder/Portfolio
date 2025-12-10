import Link from "next/link";

import { Contact } from "./components/get-in-touch";
import { TechnicalSkills } from "./components/skills";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-background shadow-2xl md:rounded-b-4xl pb-20">
      <div className="h-screen md:h-[50vh] lg:h-screen min-h-[512px] grid place-items-center bg-[url('/about/cover.jpg')] bg-no-repeat bg-fixed bg-cover md:bg-contain lg:bg-cover bg-center md:bg-top bg-black/50 bg-blend-multiply">
        <div className="flex flex-col items-center">
          <p className="text-white flex items-center text-base md:text-lg">
            <Link href="/" className="transition-opacity opacity-60 hover:opacity-100">
              Home
            </Link>{" "}
            <ChevronRight size={16} /> <span>About me</span>
          </p>
          <h1 className="size-full grid place-items-center text-5xl md:text-7xl font-bold text-white">About me</h1>
        </div>
      </div>
      <TechnicalSkills />
      <Contact />
    </main>
  );
}
