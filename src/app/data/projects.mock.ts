import { Project } from '@/types/projects.types';
export const projects: Project[] = [
  {
    title: 'Digipedia',
    image: '/assets/images/desktop_digipedia_app.png',
    description: 'Digipedia is a modern, responsive web app that offers an engaging encyclopedia experience for Digimon fans.',
    link: 'https://digipedia-app.vercel.app/',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Axios','Next.js']
  },
  {
    title: 'Kantorku',
    image: '/assets/images/desktop_kantorku_app.png',
    description: 'KantorKu is a web app that helps users easily find and rent office spaces in different cities. Its modern and responsive design offers a quick, easy, and informative search experience.',
    link: 'https://kantorku.vercel.app/',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Next.js']
  },
];
