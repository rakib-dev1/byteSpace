import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <div className="w-full flex-1 bg-[#0B3AE2] relative flex flex-col items-center justify-center overflow-hidden py-32 min-h-[700px] lg:min-h-[800px]">
          {/* Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '120px 120px',
            }}
          />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* The giant 404 in the background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] -z-10 select-none flex items-center justify-center pointer-events-none w-full">
              <span 
                className="text-[250px] md:text-[400px] lg:text-[500px] font-black leading-none tracking-tight"
                style={{
                  background: 'linear-gradient(180deg, #D4FB20 30%, rgba(212, 251, 32, 0) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                404
              </span>
            </div>
            
            <div className="mt-16 md:mt-24 lg:mt-32 pt-60">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                The page you are looking<br />for doesn't exist
              </h1>
              <p className="text-white/90 text-sm md:text-base lg:text-lg mb-10">
                Try to use a correct url or go back to homepage to start again
              </p>
              <Link 
                href="/" 
                className="inline-block bg-[#D4FB20] text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#D4FB20]/90 transition-transform active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
