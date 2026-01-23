'use client';

import { useEffect, useRef, useState } from 'react';

const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function Logo({ base, alt }: { base: string; alt?: string }) {
  const [tryIndex, setTryIndex] = useState(0);
  const src = `${base}${EXTENSIONS[tryIndex]}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ''}
      className="h-12 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
      loading="lazy"
      onError={() => {
        if (tryIndex + 1 < EXTENSIONS.length) setTryIndex((t) => t + 1);
      }}
    />
  );
}

export default function Companies() {
  const sectionRef = useRef<HTMLElement>(null);

  // (valikuline) sinu olemasolev “grid fade-in” animatsioon jääb alles
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.company-item');
            items.forEach((item, index) => {
              window.setTimeout(() => {
                item.classList.add('opacity-100', 'scale-100');
                item.classList.remove('opacity-0', 'scale-95');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 1..20
  const companyBases = Array.from({ length: 20 }, (_, i) => `/images/${i + 1}`);

  // duplitseerime, et scroll oleks loopis “seamless”
  const track = [...companyBases, ...companyBases];

  return (
    <section
      id="companies"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Meie Partnerid</h2>

        {/* Smooth infinite marquee */}
        <div className="w-full">
          <div className="relative w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-10">
              {track.map((base, i) => (
                <div
                  key={`${base}-${i}`}
                  className="flex items-center justify-center"
                  // logo “tile” suurus – hoiab ühtlase rütmi
                  style={{ minWidth: '160px' }}
                >
                  <Logo base={base} alt={`Company ${((i % companyBases.length) + 1).toString()}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* styled-jsx töötab Next.js App Routeris ka client componentis */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        /* pause on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* liigume täpselt poole track’i ulatuses, sest teine pool on koopia */
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* accessibility: reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
