"use client";

type Member = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  img?: string; // optional: /images/ott.jpg jne
};

const TEAM: Member[] = [
  { name: "Ott Raud", role: "CEO / Videograaf / Foto", email: "judopoissproduction@gmail.com", img: "/images/1.jpg" },
  { name: "Karl Säde", role: "Videograaf / Monteerija / Foto", email: "karl.jpprod@gmail.com", img: "/images/2.jpg" },
  { name: "Carolin Kuusk", role: "Sotsiaalmeedia juht", email: "carolin.jpprod@gmail.com", img: "/images/3.jpg" },
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
      className="team-section min-h-screen bg-white text-black px-6 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Meeskond
          </h2>
          <p className="mt-4 text-black/60 text-lg md:text-xl">
            Väike tiim. Suur tulemus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group relative border-2 border-black bg-white overflow-hidden"
            >
              {/* Top photo */}
              <div className="relative aspect-square border-b-2 border-black bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img ?? ""}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 opacity-95"
                  onError={(e) => {
                    // hide broken img
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Fallback initials (visible even if img hidden) */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-24 w-24 rounded-full border border-white/25 bg-white/10 backdrop-blur text-white grid place-items-center text-2xl font-semibold tracking-widest">
                    {initials(m.name)}
                  </div>
                </div>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

                {/* Corner label */}
                <div className="absolute top-4 left-4 border border-white/40 bg-black/30 backdrop-blur px-3 py-1 text-xs tracking-widest text-white">
                  MEESKOND
                </div>

                {/* Hover sheen */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/10 rotate-12 blur-2xl team-sheen" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-2 text-black/65 leading-relaxed">
                  {m.role}
                </p>

                {m.email && (
                  <a
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black/80 hover:text-black transition-colors"
                    href={`mailto:${m.email}`}
                  >
                    <span className="inline-block h-[2px] w-6 bg-black/70 group-hover:w-10 transition-all duration-300" />
                    {m.email}
                  </a>
                )}
              </div>

              {/* Hover invert: clean “lux” effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-black" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
