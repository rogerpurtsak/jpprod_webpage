"use client";

type Member = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
};

const TEAM: Member[] = [
  {
    name: 'Ott Raud',
    role: 'CEO / Videograaf / Foto',
    email: 'judopoissproduction@gmail.com',
  },
  {
    name: 'Karl Säde',
    role: 'Videograaf / Monteerija / Foto',
    email: 'karl.jpprod@gmail.com',
  },
  {
    name: 'Carolin Kuusk',
    role: 'Sotsiaalmeedia juht',
    email: 'carolin.jpprod@gmail.com',
  },
  {
    name: 'Rasmus Kadak',
    role: 'Videograaf / Monteerija',
    email: 'rasmus.jpprod@gmail.com',
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-xl font-semibold text-white">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6 py-20 font-sans">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-12 leading-relaxed">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Meeskond</h2>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((m, i) => (
              <div key={m.name} className="flex flex-col items-center text-center p-6 bg-white/0 rounded-xl">
                {/* image placeholder: try numbered images in /images, fallback to initials */}
                <div className="w-60 h-60 rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${i + 1}.jpg`}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute w-28 h-28 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">
                    {m.name
                      .split(' ')
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join('')
                      .toUpperCase()}
                  </div>
                </div>

                <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight text-gray-900">{m.name}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">{m.role}</p>
                {m.email && (
                  <a className="mt-3 text-sm text-blue-600 hover:underline" href={`mailto:${m.email}`}>
                    {m.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
