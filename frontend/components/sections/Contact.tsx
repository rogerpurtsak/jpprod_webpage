'use client';

import { useEffect, useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.contact-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-x-0');
                item.classList.remove('opacity-0', 'translate-x-10');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Let&apos;s Work Together
        </h2>
        <div className="space-y-8">
          <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <a
              href="mailto:info@jpprod.com"
              className="text-xl text-gray-600 hover:text-black transition-colors"
            >
              info@jpprod.com
            </a>
          </div>
          <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-bold mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-xl text-gray-600 hover:text-black transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>
          <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="text-xl text-gray-600">
              Los Angeles, California
            </p>
          </div>
          <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <h3 className="text-2xl font-bold mb-2">Social Media</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xl text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 hover:text-black transition-colors"
              >
                Vimeo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
