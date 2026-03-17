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
      className="relative min-h-screen bg-[#050506] text-[#EDEDEF] px-4 md:px-6 py-24 md:py-32 flex items-center justify-center overflow-hidden border-t border-white/[0.05]"
    >
      {/* Ambient blob */}
      <div
        className="blob"
        style={{
          width: '500px', height: '500px',
          top: '30%', right: '-10%',
          background: 'rgba(94,106,210,0.08)',
          ['--dur' as string]: '28s',
          ['--delay' as string]: '4s',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-3xl md:text-6xl font-bold mb-10 md:mb-16 text-center text-[#EDEDEF]">
          teeme koos kunsti.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT: kontakt */}
          <div className="space-y-6 md:space-y-8">
            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-base md:text-xl font-semibold mb-1 text-[#8A8F98] uppercase tracking-widest">E-post</h3>
              <a
                href="mailto:info.jpprod@gmail.com"
                className="text-base md:text-xl text-[#EDEDEF] hover:text-[#a5acf5] transition-colors duration-300 break-all"
              >
                info.jpprod@gmail.com
              </a>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-base md:text-xl font-semibold mb-1 text-[#8A8F98] uppercase tracking-widest">Telefon</h3>
              <a
                href="tel:55539487"
                className="text-base md:text-xl text-[#EDEDEF] hover:text-[#a5acf5] transition-colors duration-300"
              >
                5553 9487
              </a>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-base md:text-xl font-semibold mb-1 text-[#8A8F98] uppercase tracking-widest">Asukoht</h3>
              <p className="text-base md:text-xl text-[#EDEDEF]">Eesti</p>
            </div>

            <div className="contact-item opacity-0 translate-x-10 transition-all duration-700 ease-out">
              <h3 className="text-base md:text-xl font-semibold mb-2 text-[#8A8F98] uppercase tracking-widest">Sotsiaalmeedia</h3>
              <div className="flex gap-5 flex-wrap">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-[#EDEDEF] hover:text-[#a5acf5] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-[#EDEDEF] hover:text-[#a5acf5] transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-[#EDEDEF] hover:text-[#a5acf5] transition-colors duration-300"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: hõljuv pilt */}
          <div className="contact-visual opacity-0 translate-x-10 transition-all duration-700 ease-out">
            <div className="relative w-full max-w-[260px] md:max-w-[380px] mx-auto md:ml-auto md:mr-[-40px]">
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
