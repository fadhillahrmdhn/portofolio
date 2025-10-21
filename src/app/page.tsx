import { Hero, About, Project, Footer, Experience } from './_components';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Hero />
      <About />
      <Project />
      <Experience />
      <Footer />
    </main>
  );
}
