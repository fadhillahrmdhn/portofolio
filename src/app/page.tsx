import { Hero, About } from './_components';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <Hero />
      <About />
    </main>
  );
}
