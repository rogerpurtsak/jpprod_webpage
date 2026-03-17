"use client";

import Image from 'next/image';

type Member = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  img?: string;
};

const TEAM: Member[] = [
  { name: "Ott Raud", role: "CEO / Videograaf / Foto", email: "judopoissproduction@gmail.com", img: "/images/DSC04493.jpg" },
  { name: "Karl Säde", role: "Videograaf / Monteerija / Foto", email: "karl.jpprod@gmail.com", img: "/images/DSC04463.jpg" },
  { name: "Carolin Kuusk", role: "Turundus ja müügijuht", email: "carolin.jpprod@gmail.com", img: "/images/3.jpg" },
  { name: "Rasmus Kadak", role: "Videograaf / Monteerija", email: "rasmus.jpprod@gmail.com", img: "/images/4.jpg" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <section
      id="team"
      className="team-section min-h-screen bg-[#020203] text-[#EDEDEF] px-4 md:px-6 py-24 md:py-32 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-[#EDEDEF]">
            Meeskond
          </h2>
          <p className="mt-3 text-[#8A8F98] text-base md:text-xl">
            Väike tiim. Suur tulemus.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group relative bg-white/[0.05] border border-white/[0.08] rounded-xl md:rounded-2xl overflow-hidden
                         transition-all duration-[400ms] hover:bg-white/[0.07] hover:border-white/[0.14]
                         hover:shadow-[0_0_32px_rgba(94,106,210,0.12)]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            >
              {/* Top photo */}
              <div className="relative aspect-[3/4] border-b border-white/[0.08] bg-[#0a0a0c]">
                <Image
                  src={m.img ?? ""}
                  alt={m.name}
                  fill
                  className="absolute inset-0 object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Fallback initials */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-14 w-14 md:h-20 md:w-20 rounded-full border border-white/[0.15] bg-white/[0.06] backdrop-blur text-[#EDEDEF] grid place-items-center text-base md:text-xl font-semibold tracking-widest">
                    {initials(m.name)}
                  </div>
                </div>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020203]/70" />

                {/* Hover sheen */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/[0.06] rotate-12 blur-2xl team-sheen" />
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-5">
                <h3 className="text-sm md:text-base font-bold tracking-tight text-[#EDEDEF] leading-tight">
                  {m.name}
                </h3>
                <p className="mt-1 text-[#8A8F98] text-xs md:text-sm leading-relaxed">
                  {m.role}
                </p>

                {m.email && (
                  <a
                    className="mt-3 hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[#8A8F98] hover:text-[#a5acf5] transition-colors duration-300"
                    href={`mailto:${m.email}`}
                  >
                    <span className="inline-block h-[1px] w-4 bg-[#5E6AD2]/70" />
                    {m.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
