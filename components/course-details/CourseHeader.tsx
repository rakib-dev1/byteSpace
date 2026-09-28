import { BarChart, Star, Users, Share2 } from 'lucide-react';
import Link from 'next/link';

interface CourseHeaderProps {
  id: string;
}

export function CourseHeader({ id }: CourseHeaderProps) {
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
      <div className="container mx-auto px-4 md:px-10 py-12 relative z-10">
        <div className="flex items-start justify-between gap-4 max-w-3xl">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p className="text-white/80 text-sm mb-4">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="text-[13px] mb-5">
              <span className="text-white/60">by </span>
              <Link href="#" className="text-[#D4FB20] font-semibold hover:underline">purepixel studio</Link>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20">
                <BarChart className="h-3.5 w-3.5" /> Intermediate
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20">
                <Star className="h-3.5 w-3.5 fill-[#D4FB20] text-[#D4FB20]" /> 4.8 (172 reviews)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20">
                <Users className="h-3.5 w-3.5" /> 199 Students
              </span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#D4FB20] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#D4FB20]/90 transition-colors flex-shrink-0">
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </div>
    </div>
  );
}
