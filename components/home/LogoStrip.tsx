import { Hexagon } from 'lucide-react';

export function LogoStrip() {
  return (
    <div className="w-full bg-[#F5F5F5] py-8 border-b overflow-hidden flex whitespace-nowrap">
      <div className="flex w-max animate-marquee opacity-60 hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12">
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div key={j} className="flex items-center space-x-2 text-gray-500 font-bold text-xl">
                <Hexagon className="h-8 w-8 fill-gray-400" />
                <span>Logoipsum</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
