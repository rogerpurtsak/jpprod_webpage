'use client';

import { useEffect, useRef } from 'react';

export default function Media() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.media-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-10');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const mediaItems = [
    {
      title: 'Commercial Production',
      description: 'High-quality commercial videos that captivate and convert',
    },
    {
      title: 'Documentary Films',
      description: 'Compelling narratives that tell authentic stories',
    },
    {
      title: 'Corporate Videos',
      description: 'Professional content that elevates your brand',
    },
    {
      title: 'Music Videos',
      description: 'Creative visual experiences for artists',
    },
    {
      title: 'Event Coverage',
      description: 'Capturing your special moments with cinematic quality',
    },
    {
      title: 'Promotional Content',
      description: 'Engaging videos that drive results',
    },
  ];

  return (
    <section
      id="media"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="media-item opacity-0 translate-y-10 transition-all duration-700 ease-out border-2 border-black p-8 hover:bg-black hover:text-white cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
