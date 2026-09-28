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

      <svg className="absolute left-10 top-40 w-32 h-32 text-[var(--bytespace-yellow)]" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
      </svg>
      <svg className="absolute right-20 top-20 w-48 h-48 text-[var(--bytespace-yellow)]" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,0 100,100 0,100" />
      </svg>
      <svg className="absolute left-20 bottom-32 w-24 h-24 text-white" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="20" fill="none" />
      </svg>
      <svg className="absolute right-32 bottom-40 w-24 h-24 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="10,50 30,10 50,90 70,10 90,50" />
      </svg>

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
        <div className="relative mt-12 max-w-3xl mx-auto flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--bytespace-yellow)] rounded-full -z-10 mix-blend-normal"></div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            alt="Student learning"
            className="w-[450px] h-[450px] object-cover rounded-full shadow-2xl relative z-10 border-4 border-white"
          />

          <div className="absolute top-10 -left-20 bg-white rounded-2xl p-4 shadow-xl z-20 flex flex-col items-start w-48">
            <h4 className="font-bold text-sm text-foreground">UI/UX Design</h4>
            <p className="text-[10px] text-muted-foreground">200 Courses • 1000+ Students</p>
          </div>

          <div className="absolute bottom-16 -left-12 bg-white rounded-2xl p-4 shadow-xl z-20 flex flex-col w-56">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-sm text-foreground">Happy Students</h4>
              <div className="flex items-center text-xs font-bold">
                4.5 <Star className="h-3 w-3 fill-[var(--bytespace-yellow)] text-[var(--bytespace-yellow)] ml-1" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />
                ))}
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[var(--bytespace-yellow)] flex items-center justify-center text-[10px] font-bold -ml-2 z-10">2K+</div>
            </div>
          </div>

          <div className="absolute top-20 -right-16 bg-white rounded-2xl p-5 shadow-xl z-20 flex flex-col w-48">
            <h4 className="font-bold text-sm text-foreground mb-1">Learning Progress</h4>
            <p className="text-3xl font-extrabold text-foreground mb-2">55%</p>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[var(--bytespace-yellow)] w-[55%] h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
