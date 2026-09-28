import { Star, BarChart } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

function CourseCardMockup() {
  return (
    <div className="relative w-[380px] h-[440px] flex-shrink-0">
      {/* Background card (behind) */}
      <div className="absolute bottom-0 left-0 w-60 bg-white rounded-2xl shadow-xl p-4 z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-gray-100 text-[10px] font-medium px-2 py-1 rounded-full">17 Lessons</span>
        </div>
        <h4 className="font-extrabold text-base text-foreground">Build Digit...</h4>
        <p className="text-[11px] text-[#0B3AE2] mb-3 font-medium">by purepixel studio</p>
        <div className="flex justify-between items-center mb-3 border-t pt-2">
          <div className="flex items-center text-[11px] text-gray-500 gap-1">
            <BarChart className="w-3 h-3" /> Beginner
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=a${i}`} alt="" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
            ))}
            <div className="w-6 h-6 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border-2 border-white -ml-2 z-10">26+</div>
          </div>
        </div>
        <p className="font-bold text-blue-700 text-base">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></p>
      </div>

      {/* Front main course card */}
      <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
            alt="course"
            className="w-full h-36 object-cover"
          />
          <div className="absolute bottom-2 left-3 right-3 flex gap-2">
            <span className="bg-black/50 backdrop-blur text-white text-[9px] px-2 py-0.5 rounded-full">17 Lessons</span>
            <span className="bg-black/50 backdrop-blur text-white text-[9px] px-2 py-0.5 rounded-full">2 hours 16 mins</span>
            <span className="bg-black/50 backdrop-blur text-white text-[9px] px-2 py-0.5 rounded-full">59 Comments</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-extrabold text-base text-foreground">the Power of Big Data</h4>
            <div className="flex items-center gap-1 text-xs font-bold">
              4.5 <Star className="w-3.5 h-3.5 fill-[#D4FB20] text-[#D4FB20]" />
            </div>
          </div>
          <p className="text-[11px] text-[#0B3AE2] mb-3 font-medium">by purepixel studio</p>
          <div className="flex justify-between items-center mb-3 border-t pt-2">
            <div className="flex items-center text-[11px] text-gray-500 gap-1">
              <BarChart className="w-3 h-3" /> Beginner
            </div>
            <div className="flex -space-x-2">
              {[5, 6, 7, 8].map(i => (
                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=b${i}`} alt="" className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />
              ))}
              <div className="w-6 h-6 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border-2 border-white -ml-2 z-10">26+</div>
            </div>
          </div>
          <p className="font-bold text-blue-700 text-base">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></p>
        </div>
      </div>

      {/* Happy Students card */}
      <div className="absolute bottom-8 right-0 bg-[#D4FB20] rounded-2xl p-3 shadow-xl z-30 w-44">
        <h5 className="font-bold text-sm text-black mb-1">Happy Students</h5>
        <div className="flex items-center gap-1 text-xs font-bold text-black mb-2">
          4.5 (240) <Star className="w-3 h-3 fill-black text-black" />
        </div>
        <div className="flex -space-x-2">
          {[9, 10, 11, 12, 13].map(i => (
            <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=c${i}`} alt="" className="w-7 h-7 rounded-full border-2 border-[#D4FB20] bg-gray-100" />
          ))}
          <div className="w-7 h-7 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-[#D4FB20] -ml-2 z-10">2K+</div>
        </div>
      </div>

      {/* Decorative yellow circle */}
      <div className="absolute top-12 left-16 w-14 h-14 rounded-full border-[10px] border-[#D4FB20] z-0"></div>

      {/* Decorative yellow triangle */}
      <svg className="absolute bottom-28 left-2 z-0" width="50" height="55" viewBox="0 0 50 55" fill="#D4FB20">
        <polygon points="25,0 50,55 0,55" />
      </svg>

      {/* Decorative white squiggle */}
      <svg className="absolute bottom-40 right-2 z-30" width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round">
        <path d="M5 25 Q 15 10 25 25 T 45 25" />
        <path d="M5 35 Q 15 20 25 35 T 45 35" />
      </svg>
    </div>
  );
}

interface AuthLayoutProps {
  tagline: string;
  description: string;
  children: ReactNode;
}

export function AuthLayout({ tagline, description, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Blue */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0B3AE2] relative overflow-hidden flex-col px-16 py-14">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 relative z-10 mb-16">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute w-5 h-5 rounded-full bg-[#D4FB20] top-0 left-0" />
            <div className="absolute w-3 h-5 bg-[#D4FB20] top-0 left-3 rounded-r-full" />
          </div>
          <span className="sr-only">ByteSpace</span>
        </Link>

        {/* Text */}
        <div className="relative z-10 mb-16">
          <h2 className="text-2xl font-extrabold text-white mb-4">{tagline}</h2>
          <p className="text-white/80 text-[15px] leading-relaxed max-w-xs">{description}</p>
        </div>

        {/* Course card mockup */}
        <div className="relative z-10 flex-1 flex items-end">
          <CourseCardMockup />
        </div>
      </div>

      {/* Right Panel — White */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-14">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.10)] p-10 md:p-14">
          {children}
        </div>
      </div>
    </div>
  );
}
