export interface IProject {
  id: string;
  image: string;
  title: string;
  description?: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}
