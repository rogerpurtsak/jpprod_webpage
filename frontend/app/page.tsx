import Hero from '@/components/sections/Hero';
import Media from '@/components/sections/Media';
import Companies from '@/components/sections/Companies';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Media />
      <Companies />
      <Contact />
    </main>
  );
}
