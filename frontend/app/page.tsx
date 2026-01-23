import Hero from '@/components/sections/Hero';
import Media from '@/components/sections/Media';
import Companies from '@/components/sections/Companies';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Hero />
      <Media />
      <Companies />
      <Team />
      <Contact />
    </main>
  );
}
