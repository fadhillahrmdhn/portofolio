export type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
  technologies: string[];
};

export type ProjectProps={
  project: Project;
};