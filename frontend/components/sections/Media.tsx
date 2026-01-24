'use client';

import { useEffect, useRef } from 'react';

type MediaCard =
  | {
      type: 'video';
      title: string;
      subtitle: string;
      src: string; // placeholder video path
    }
  | {
      type: 'gallery';
      title: string;
      subtitle: string;
      images: string[]; // placeholder image paths (3)
    };

export default function Media() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards: MediaCard[] = [
    {
      type: 'video',
      title: 'Muusikavideod',
      subtitle: 'Filmiilikud visuaalid artistidele ja väljaannetele.',
      src: '/videos/placeholder-music.mp4',
    },
    {
      type: 'video',
      title: 'Aftermovied',
      subtitle: 'Energia ja atmosfäär, monteeritud rütmi järgi.',
      src: '/videos/placeholder-aftermovie.mp4',
    },
    {
      type: 'video',
      title: 'Lühivideod',
      subtitle: 'Lühivorm, mis köidab kiiresti ja konverteerib.',
      src: '/videos/placeholder-short.mp4',
    },
    {
      type: 'video',
      title: 'Ürituste videod',
      subtitle: 'Lavast publikuni esiletõstetud kokkuvõtted.',
      src: '/videos/placeholder-event.mp4',
    },
    {
      type: 'gallery',
      title: 'Pulmad',
      subtitle: 'Ajatud, dokumentaalse stiiliga hetked.',
      images: [
        '/images/pulmadjp.jpg',
      ],
    },
    {
      type: 'gallery',
      title: 'Fotograafia',
      subtitle: 'Puhas, kõrge kontrastiga toimetuslik esteetika.',
      images: [
        '/images/raju1.jpg',
        '/images/raju2.jpg',
        '/images/raju3.jpg',
      ],
    },
  ];

 return (
  <section
    id="media"
    ref={sectionRef}
    className="media-section min-h-screen bg-white text-black px-6 py-20 flex items-center justify-center"
  >
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Teenused
        </h2>
        <p className="mt-4 text-black/60 text-lg md:text-xl">
          pikslid, mida silmad mäletama jäävad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-stretch">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="media-card opacity-0 translate-y-6 transition-all duration-700 ease-out"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="group relative border-2 border-black bg-white overflow-hidden">
              {/* TOP MEDIA */}
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black bg-black">
                {card.type === 'video' ? (
                  <>
                    {/* VIDEO PLACEHOLDER (works without any files) */}
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-center px-6">
                        <div className="text-xs tracking-[0.35em] text-white/70">
                          VIDEO NÄIDIS
                        </div>
                        <div className="mt-3 text-2xl font-extrabold text-white">
                          {card.title}
                        </div>
                      </div>
                    </div>

                    {/* Overlay (BW, cinematic) */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/45" />

                    {/* Corner label */}
                    <div className="absolute top-4 left-4 border border-white/40 bg-black/30 backdrop-blur px-3 py-1 text-xs tracking-widest text-white">
                      VIDEO
                    </div>
                  </>
                ) : (
                  <>
                    {/* Render actual gallery images if provided */}
                    {card.images.length === 1 ? (
                    <div className="absolute inset-0">
                      <img
                        src={card.images[0]}
                        alt={card.title}
                        className="h-full w-full object-cover block"
                      />
                    </div>
                  ) : (
                    <div className="grid h-full w-full grid-cols-3 gap-[2px] bg-black">
                      {card.images.slice(0, 3).map((src, i) => (
                        <div key={src + i} className="relative overflow-hidden bg-black">
                          <img
                            src={src}
                            alt={`${card.title} ${i + 1}`}
                            className="h-full w-full object-cover block"
                          />
                        </div>
                      ))}
                    </div>
                  )}


                    <div className="absolute top-4 left-4 border border-white/40 bg-black/30 backdrop-blur px-3 py-1 text-xs tracking-widest text-white">
                      GALERII
                    </div>
                  </>
                )}

                {/* Hover sheen */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/10 rotate-12 blur-2xl animate-media-sheen" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-black/65 leading-relaxed">
                  {card.subtitle}
                </p>

              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
 )};
