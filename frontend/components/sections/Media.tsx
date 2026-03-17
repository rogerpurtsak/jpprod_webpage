'use client';

import Image from 'next/image';
import YouTubeHoverCard from '../YouTubeHoverCard';

type MediaCard =
  | {
      type: 'video';
      title: string;
      subtitle: string;
      src: string;
    }
  | {
      type: 'gallery';
      title: string;
      subtitle: string;
      images: string[];
    };

export default function Media() {
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
      images: ['/images/pulmadjp.jpg'],
    },
    {
      type: 'gallery',
      title: 'Fotograafia',
      subtitle: 'Puhas, kõrge kontrastiga toimetuslik esteetika.',
      images: ['/images/raju1.jpg', '/images/raju2.jpg', '/images/raju3.jpg'],
    },
  ];

  return (
    <section
      id="media"
      className="min-h-screen bg-[#050506] text-[#EDEDEF] px-4 md:px-6 py-24 md:py-32 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-[#EDEDEF]">
            Teenused
          </h2>
          <p className="mt-3 text-[#8A8F98] text-base md:text-xl">
            pikslid, mida silmad mäletama jäävad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <article key={card.title} className="h-full">
              <div
                className="group relative bg-white/[0.05] border border-white/[0.08] rounded-2xl overflow-hidden
                           transition-all duration-[400ms] hover:bg-white/[0.07] hover:border-white/[0.14]
                           hover:shadow-[0_0_32px_rgba(94,106,210,0.12)]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
              >
                {/* TOP MEDIA */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[#0a0a0c]">
                  {card.type === 'video' ? (
                    <>
                      {/* If this is the Muusikavideod card, embed the YouTube hover card */}
                      {card.title === 'Muusikavideod' ? (
                        <div className="absolute inset-0">
                          <YouTubeHoverCard videoId="l5Wn0kHNi2Y" className="w-full h-full" />
                        </div>
                      ) : card.title === 'Aftermovied' ? (
                        <div className="absolute inset-0">
                          <YouTubeHoverCard videoId="84yzuNLO_-Y" className="w-full h-full" />
                        </div>
                      ) : card.title === 'Ürituste videod' ? (
                        <div className="absolute inset-0">
                          <YouTubeHoverCard videoId="tyDIqQYyL_A" className="w-full h-full" />
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 grid place-items-center">
                            <div className="text-center px-6">
                              <div className="text-xs tracking-[0.35em] text-[#8A8F98]">
                                VIDEO NÄIDIS
                              </div>
                              <div className="mt-3 text-2xl font-extrabold text-[#EDEDEF]">
                                {card.title}
                              </div>
                            </div>
                          </div>

                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,106,210,0.08),transparent_60%)]" />
                          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/20 via-transparent to-[#0a0a0c]/50" />
                        </>
                      )}

                      <div className="absolute top-4 left-4 border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm px-3 py-1 text-xs tracking-widest text-[#8A8F98] rounded-md">
                        VIDEO
                      </div>
                    </>
                  ) : (
                    <>
                      {card.images.length === 1 ? (
                        <div className="absolute inset-0">
                          <Image
                            src={card.images[0]}
                            alt={card.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover"
                            quality={80}
                          />
                        </div>
                      ) : (
                        <div className="grid h-full w-full grid-cols-3 gap-[2px] bg-[#020203]">
                          {card.images.slice(0, 3).map((src, i) => (
                            <div key={src + i} className="relative overflow-hidden">
                              <Image
                                src={src}
                                alt={`${card.title} ${i + 1}`}
                                fill
                                priority
                                sizes="(max-width: 768px) 33vw, (max-width: 1280px) 17vw, 11vw"
                                className="object-cover"
                                quality={80}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020203]/40 pointer-events-none" />

                      <div className="absolute top-4 left-4 border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm px-3 py-1 text-xs tracking-widest text-[#8A8F98] rounded-md">
                        GALERII
                      </div>
                    </>
                  )}

                  {/* Hover sheen */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/[0.06] rotate-12 blur-2xl translate-x-[-120%] group-hover:translate-x-[260%] transition-transform duration-700 ease-in-out" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight text-[#EDEDEF]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[#8A8F98] leading-relaxed text-sm">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
