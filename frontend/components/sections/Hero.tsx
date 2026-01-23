'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible');
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    // optional parallax
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', String(x));
      el.style.setProperty('--my', String(y));
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const title = 'JPPROD';
  const subtitle = 'Creating Visual Stories That Matter';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero relative min-h-screen flex items-center justify-center text-white px-6 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="hero-bg absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-center bg-cover transform-gpu will-change-transform animate-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.75))]" />
        <div className="hero-noise absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 gap-10 flex flex-col">
        {/* TITLE: letters */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95]">
          <span
            className="typewriter gradient-text"
            style={{ ['--chars' as any]: title.length }}
            aria-label={title}
          >
            {title}
          </span>
        </h1>

        {/* SUBTITLE: word-by-word (näeb väga clean välja) */}
        <p className="hero-reveal text-xl md:text-2xl lg:text-3xl text-white/70">
          {subtitle.split(' ').map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="word"
              style={{ animationDelay: `${720 + i * 90}ms` }}
            >
              {w}&nbsp;
            </span>
          ))}
        </p>

        <div className="hero-reveal mt-12">
          <a
            href="#contact"
            className="cta group relative inline-block px-8 py-4 border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl
                       hover:bg-white/15 transition-all duration-300 text-lg font-semibold"
          >
            <span className="relative z-10">võta ühendust</span>
            <span className="sheen pointer-events-none absolute -inset-1 rounded-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
