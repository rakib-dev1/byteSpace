import { Check } from 'lucide-react';

export function CreatorHero({ id }: { id: string }) {
  return (
    <div className="w-full bg-[#0B3AE2] relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      
      <div className="container mx-auto px-4 md:px-10 pt-16 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=purepearl"
            alt="PurePearl Studio"
            className="w-24 h-24 rounded-3xl bg-pink-200 border-2 border-white/20 object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-extrabold text-white">PurePearl Studio</h1>
              <span className="bg-[#D4FB20] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Creator
              </span>
            </div>
            <p className="text-white/80 text-[15px] mb-6 font-medium">Passionate UI/UX, Web designer</p>
            <p className="text-white/90 text-sm leading-relaxed max-w-4xl">
              Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 mt-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-2">
              <span className="font-extrabold text-[#0B3AE2]">3</span>
              <span className="text-sm font-semibold text-gray-700">Products</span>
            </div>
            <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-2">
              <span className="font-extrabold text-[#0B3AE2]">12</span>
              <span className="text-sm font-semibold text-gray-700">Followers</span>
            </div>
          </div>
          <button className="bg-[#D4FB20] hover:bg-[#D4FB20]/90 text-black font-bold px-8 py-3 rounded-full text-sm transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
