'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: 'hero',
    label: 'Avaleht',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: 'media',
    label: 'Teenused',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    id: 'team',
    label: 'Meeskond',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    id: 'companies',
    label: 'Partnerid',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Kontakt',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop Sidebar - hidden on smaller screens */}
      <aside
        className={`fixed left-4 top-4 bottom-4 z-50 transition-all duration-500 ease-out rounded-2xl overflow-hidden hidden lg:block ${
          isExpanded ? 'w-52' : 'w-20'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setHoveredItem(null);
        }}
      >
        <div
          className={`relative h-full bg-[#050506]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
            isExpanded ? 'translate-x-0' : '-translate-x-1'
          }`}
        >
          <div 
            className={`absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/50 to-transparent transition-opacity duration-500 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <nav className="flex flex-col justify-evenly h-full py-12">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative flex items-center gap-4 py-6 text-white/70 hover:text-white transition-all duration-300 group"
                aria-label={item.label}
                style={{
                  transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
                }}
              >
                <div
                  className={`absolute inset-0 bg-[rgba(94,106,210,0.15)] transition-all duration-300 origin-left ${
                    hoveredItem === item.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                  style={{ transformOrigin: 'left center' }}
                />
                
                <span
                  className={`relative z-10 w-20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredItem === item.id ? 'scale-125' : 'scale-100'
                  }`}
                >
                  {item.icon}
                </span>
                
                <span
                  className={`relative z-10 text-base font-medium whitespace-nowrap transition-all duration-500 ${
                    isExpanded
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: isExpanded ? `${index * 50 + 100}ms` : '0ms',
                  }}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute right-4 transition-all duration-300 ${
                    hoveredItem === item.id && isExpanded
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-2'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile/Tablet - Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-14 h-14 bg-[#050506]/95 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/[0.08] shadow-xl"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-6">
          <span 
            className={`h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} 
          />
          <span 
            className={`h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} 
          />
          <span 
            className={`h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} 
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#020203]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content - Full screen style */}
        <nav 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-24 h-24 border border-white/10 rounded-full" />
          <div className="absolute bottom-12 right-12 w-32 h-32 border border-white/5 rounded-full" />
          <div className="absolute top-1/4 right-8 w-16 h-16 border border-white/10" />
          
          {/* Menu Items */}
          <div className="flex flex-col gap-2 w-full max-w-xs px-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center gap-5 py-4 text-white/70 hover:text-white transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 80 + 100}ms` : '0ms',
                }}
              >
                {/* Icon with animated border */}
                <span className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="absolute inset-0 border border-white/20 group-hover:border-white/60 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </span>
                
                {/* Label */}
                <span className="text-2xl font-light tracking-wide group-hover:tracking-wider transition-all duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Bottom info */}
          <div 
            className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
          >
            <p className="text-white/30 text-sm tracking-widest uppercase">JP PROD OÜ</p>
          </div>
        </nav>
      </div>
    </>
  );
}
