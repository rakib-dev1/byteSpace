'use client';

import { Search, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export function SearchHero({ defaultQuery = '' }: { defaultQuery?: string }) {
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
    <div className="w-full bg-[#0B3AE2] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 flex flex-col items-center py-14 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
          Find Your Next Course
        </h1>
        <div className="flex items-center w-full max-w-xl gap-0 bg-white rounded-full overflow-hidden shadow-lg">
          <div className="flex items-center flex-1 px-5 gap-2">
            <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              defaultValue={defaultQuery}
              onKeyDown={handleKeyDown}
              className="flex-1 py-3.5 text-sm text-foreground placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-[#D4FB20] text-black font-semibold text-sm px-6 py-3.5 hover:bg-[#D4FB20]/90 transition-colors"
          >
            Courses <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
