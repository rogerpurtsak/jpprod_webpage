'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          JPPROD
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out"
        >
          Creating Visual Stories That Matter
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
