'use client';

import { useEffect, useRef } from 'react';

export default function Companies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.company-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'scale-100');
                item.classList.remove('opacity-0', 'scale-95');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const companies = [
    'ACME Corp',
    'TechVision',
    'MediaFirst',
    'BrandWorks',
    'Creative Studio',
    'Global Ventures',
    'Innovation Labs',
    'Digital Agency',
    'Future Media',
    'Prime Productions',
    'NextGen Studios',
    'Visionary Group',
  ];

  return (
    <section
      id="companies"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Trusted By
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="company-item opacity-0 scale-95 transition-all duration-500 ease-out flex items-center justify-center p-6 border border-white/20 hover:border-white hover:bg-white/5"
            >
              <span className="text-lg md:text-xl font-semibold text-center">
                {company}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-gray-400 text-lg">
          And many more companies worldwide
        </p>
      </div>
    </section>
  );
}
