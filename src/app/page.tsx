import { Page1, About } from './_components';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll  h-screen">
      <Page1 />
      <About />
    </main>
  );
}
