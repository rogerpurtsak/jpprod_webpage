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
  const subtitle = 'me teeme päris asju.';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero relative min-h-screen flex items-center justify-center text-white px-6 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="hero-bg absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-center bg-cover transform-gpu will-change-transform animate-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/80 via-[#020203]/40 to-[#020203]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,2,3,0.80))]" />
        <div className="hero-noise absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" />
        {/* Ambient blobs */}
        <div
          className="blob"
          style={{
            width: '420px', height: '420px',
            top: '20%', left: '15%',
            background: 'rgba(94,106,210,0.10)',
            ['--dur' as string]: '24s',
            ['--delay' as string]: '0s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '320px', height: '320px',
            bottom: '20%', right: '12%',
            background: 'rgba(94,106,210,0.07)',
            ['--dur' as string]: '30s',
            ['--delay' as string]: '8s',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 gap-10 flex flex-col">
        {/* TITLE: letters */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95]">
          <img
            src="/images/jp-prod-logo-transparent-white.png"
            alt={title}
            className="inline-block h-[1.25em] sm:h-[1em] w-auto"
            aria-label={title}
          />
        </h1>

        {/* SUBTITLE: word-by-word (näeb väga clean välja) */}
        <p className="hero-reveal text-xl md:text-2xl lg:text-3xl text-[#8A8F98]">
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
            className="cta group relative inline-block px-8 py-4 bg-[#5E6AD2] rounded-2xl
                       hover:bg-[#6b77e3] transition-all duration-[400ms] text-lg font-semibold
                       shadow-[0_0_40px_rgba(94,106,210,0.35)] hover:shadow-[0_0_56px_rgba(94,106,210,0.50)]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
          >
            <span className="relative z-10">võta ühendust</span>
            <span className="sheen pointer-events-none absolute -inset-1 rounded-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
