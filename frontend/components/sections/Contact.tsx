'use client';

import Image from 'next/image';
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

            // pilt ilmub veidi hiljem
            const visual = entry.target.querySelector('.contact-visual');
            if (visual) {
              setTimeout(() => {
                visual.classList.add('opacity-100', 'translate-x-0');
                visual.classList.remove('opacity-0', 'translate-x-10');
              }, 250);
            }
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
      className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          teeme koos kunsti.
        </h2>

        {/* 2 veergu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT: kontakt */}
          <div className="space-y-8">
            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <a
                href="mailto:judopoissproduction@gmail.com"
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                judopoissproduction@gmail.com
              </a>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <a
                href="tel:55539487"
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                5553 9487
              </a>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold mb-2">Asukoht</h3>
              <p className="text-xl text-gray-300">Eesti</p>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold mb-2">Sotsiaalmeedia</h3>
              <div className="flex gap-6 flex-wrap">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: hõljuv pilt */}
          <div className="contact-visual opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <div className="relative w-full max-w-[380px] ml-auto md:mr-[-40px]">

              <div className="relative animate-[floaty-contact_6s_ease-in-out_infinite] will-change-transform">
                <Image
                  src="/images/kaamerareal.png"
                  alt="Camera"
                  width={512}
                  height={512}
                  className="w-full h-auto select-none"
                  priority={false}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
