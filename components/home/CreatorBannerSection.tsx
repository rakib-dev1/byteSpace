export function CreatorBannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] py-20 flex items-center justify-center">
      {/* Decorative Shapes */}
      <svg className="absolute left-10 top-10 w-24 h-24 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 50 Q 30 10 50 50 T 90 50" />
      </svg>
      <svg className="absolute right-10 top-10 w-24 h-24 text-[var(--bytespace-yellow)]" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,0 100,100 0,100" />
      </svg>
      <svg className="absolute left-10 bottom-10 w-32 h-32 text-white" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg className="absolute right-10 bottom-10 w-24 h-24 text-[var(--bytespace-yellow)]" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 20 80 L 80 80 Q 50 20 20 80" />
      </svg>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white max-w-2xl mx-auto leading-tight mb-6">
          Unlock Your Potential as a<br/>Creator with ByteSpace
        </h2>
        <p className="max-w-3xl text-[15px] text-white/90 mx-auto mb-10 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        
        <button className="bg-[var(--bytespace-yellow)] text-black font-semibold px-8 py-3 rounded-full hover:bg-[var(--bytespace-yellow)]/90 transition-colors">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
