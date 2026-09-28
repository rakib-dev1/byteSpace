import { Hexagon } from 'lucide-react';

export function LogoStrip() {
  return (
    <div className="w-full bg-[#F5F5F5] py-8 border-b">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center space-x-2 text-gray-500 font-bold text-xl">
            <Hexagon className="h-8 w-8 fill-gray-400" />
            <span>Logoipsum</span>
          </div>
        ))}
      </div>
    </div>
  );
}
