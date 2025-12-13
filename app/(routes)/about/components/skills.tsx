import Image from "next/image";
import { Cloud, Database, PanelsTopLeft, Server, Settings, Sparkles } from "lucide-react";

const data = [
  {
    category: "Frontend Development",
    icon: <PanelsTopLeft strokeWidth={2} size={32} />,
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript / JavaScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server strokeWidth={2} size={32} />,
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "rest" },
    ],
  },
  {
    category: "Databases",
    icon: <Database strokeWidth={2} size={32} />,
    skills: [
      { name: "MySQL", icon: "sql" },
      { name: "MongoDB", icon: "mongo" },
    ],
  },
  {
    category: "DevOps & Clouds",
    icon: <Cloud strokeWidth={2} size={32} />,
    skills: [
      { name: "Git / GitHub", icon: "git" },
      { name: "Versal", icon: "versal" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <Settings strokeWidth={2} size={32} />,
    skills: [
      { name: "Vite", icon: "vite" },
      { name: "npm", icon: "npm" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma2" },
    ],
  },
  {
    category: "Other Skills",
    icon: <Sparkles strokeWidth={2} size={32} />,
    skills: [
      { name: "Testing (Jest, Jasmine)", icon: "testing" },
      { name: "API Testing (Postman)", icon: "APITesting" },
      { name: "Authentication (JWT, OAuth)", icon: "authentication" },
    ],
  },
];

export const TechnicalSkills = () => {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="w-full text-center text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-100 dark:bg-secondary-foreground text-foreground dark:text-background rounded-3xl p-6 transition-all hover:scale-[102%] h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-muted dark:bg-neutral-200 mr-4 group-hover:bg-muted/80 transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.category}</h3>
              </div>
              <div className="space-y-3 flex-1">
                {item.skills.map((skill) => (
                  <div key={item.category + " " + skill.name}>
                    <div className="flex items-center p-3 rounded-lg transition-all duration-200 group cursor-default hover:bg-muted/60 dark:hover:bg-muted/10">
                      <div className="mr-3">
                        <Image src={`/icons/${skill.icon}.svg`} alt={skill.name} width={24} height={24} />
                      </div>
                      <span className="hover:text-foreground transition-colors duration-200">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
