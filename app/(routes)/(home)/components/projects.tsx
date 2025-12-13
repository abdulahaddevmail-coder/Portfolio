import Image from "next/image";

import { ExternalLink, Github } from "lucide-react";

import { IProject } from "@/app/common/interfaces";

const projects: IProject[] = [
  {
    id: "portfolio-1",
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description: "A modern and interactive personal portfolio showcasing my projects, skills, and achievement.",
    githubLink: "https://github.com/abdulahaddevmail-coder/Portfolio",
    demoLink: "https://portfolio-tuyk.vercel.app/",
    technologies: ["Nextjs", "React", "Shadcn", "Motion.dev", "Versal"],
  },
];
export const Projects = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing different technologies and approaches to
            problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl group transition-all bg-neutral-200 dark:bg-white/6 dark:hover:bg-white/8 dark:shadow-2xl dark:shadow-white/10"
            >
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="w-full h-[260px] object-cover object-top transition-all duration-300 rounded-2xl group-hover:scale-110"
                />
              </div>
              <div className="p-4 pb-8 text-foreground">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm 2xl:text-base">{project.description}</p>
                <div className="flex items-center gap-1.5 my-3">
                  {project.technologies.map((t) => (
                    <div key={t} className="px-3 py-1 rounded-2xl bg-foreground text-background text-xs">
                      {t}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubLink}
                    className="w-full rounded-lg flex justify-center items-center gap-4 bg-white text-nowrap text-gray-800 py-2 px-4 font-medium shadow-xs"
                  >
                    <Github size={20} />
                    Github
                  </a>
                  <a
                    href={project.demoLink}
                    className="w-full rounded-lg flex justify-center items-center gap-4 bg-black text-nowrap text-white py-2 px-4 font-medium shadow-xs"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
