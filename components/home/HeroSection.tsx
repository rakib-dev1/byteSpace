'use client';

import { Search, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export function HeroSection() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    const q = inputRef.current?.value.trim() ?? '';
    router.push(`/search${q ? `?q=${encodeURIComponent(q)}` : ''}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch();
  }

  return (
    <section className="relative w-full overflow-hidden bg-[var(--bytespace-blue)] pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[900px] flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <img src="/images/hero/shape-zigzag-yellow.png" alt="Decoration" className="absolute left-0 top-32 w-48 h-auto object-contain -z-0 opacity-90 hidden lg:block" />
      <img src="/images/hero/shape-torus-white.png" alt="Decoration" className="absolute left-16 bottom-32 w-56 h-auto object-contain -z-0 opacity-90 hidden lg:block" />
      
      {/* Top Left small white zigzag */}
      <img src="/images/hero/shape-zigzag-white-bottom.png" alt="Decoration" className="absolute left-[20%] top-[40%] w-24 h-auto object-contain -z-0 opacity-90 hidden lg:block rotate-12" />

      <img src="/images/hero/shape-cylinder-yellow.png" alt="Decoration" className="absolute -right-20 top-20 w-80 h-auto object-contain -z-0 opacity-90 hidden lg:block" />
      <img src="/images/hero/shape-pyramid-white.png" alt="Decoration" className="absolute right-32 bottom-72 w-32 h-auto object-contain -z-0 opacity-90 hidden lg:block" />
      <img src="/images/hero/shape-zigzag-white-bottom.png" alt="Decoration" className="absolute right-10 bottom-24 w-40 h-auto object-contain -z-0 opacity-90 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl text-white max-w-4xl mx-auto leading-tight mb-6">
          Get Access to Hundreds<br/>Courses Available
        </h1>
        <p className="max-w-2xl text-lg text-white/80 mx-auto mb-10">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-lg mx-auto relative z-20 mb-16">
          <div className="pl-4 text-muted-foreground">
            <Search className="h-5 w-5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Course, topic, creator"
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none px-4 text-foreground placeholder:text-muted-foreground text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-[var(--bytespace-yellow)] text-black font-semibold px-8 py-3 rounded-full hover:bg-[var(--bytespace-yellow)]/90 transition-colors"
          >
            Search
          </button>
        </div>

        {/* Hero Image & Floating Cards */}
        <div className="relative mt-12 max-w-4xl mx-auto flex justify-center w-full">
          {/* Yellow circle background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--bytespace-yellow)] rounded-full -z-10 mt-10"></div>

          <img
            src="/images/hero/hero-student.png"
            alt="Student learning"
            className="w-[600px] h-auto object-contain relative z-10 block"
          />

          <div className="absolute top-20 left-10 lg:-left-4 bg-white rounded-2xl p-5 shadow-xl z-20 flex flex-col items-start w-56 animate-in slide-in-from-bottom-10 duration-700">
            <h4 className="font-bold text-[15px] text-foreground">UI/UX Design</h4>
            <p className="text-xs text-muted-foreground mt-1">200 Courses • 1000+ Students</p>
          </div>

          <div className="absolute bottom-20 left-10 lg:-left-20 bg-white rounded-2xl p-4 shadow-xl z-20 flex flex-col w-64 animate-in slide-in-from-bottom-10 duration-700 delay-150">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-sm text-foreground">Happy Students</h4>
              <div className="flex items-center text-xs font-bold text-muted-foreground">
                <span className="text-foreground mr-1">4.5</span> (240) <Star className="h-3.5 w-3.5 fill-[var(--bytespace-yellow)] text-[var(--bytespace-yellow)] ml-1" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <img key={i} src={`/images/hero/avatar-${i}.png`} alt={`user ${i}`} className="w-8 h-8 rounded-full border-[3px] border-white object-cover bg-gray-100" />
                ))}
              </div>
              <div className="w-8 h-8 rounded-full border-[3px] border-white bg-[var(--bytespace-yellow)] flex items-center justify-center text-[9px] font-bold -ml-3 z-10 text-black">
                2K+
              </div>
            </div>
          </div>

          <div className="absolute top-48 right-0 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl z-20 flex flex-col w-56 animate-in slide-in-from-bottom-10 duration-700 delay-300">
            <h4 className="font-bold text-[13px] text-muted-foreground mb-1">Learning Progress</h4>
            <p className="text-[40px] font-extrabold text-foreground mb-3 leading-none">55%</p>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-[var(--bytespace-yellow)] w-[55%] h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
