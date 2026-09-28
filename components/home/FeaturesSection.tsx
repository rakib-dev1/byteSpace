import { CheckCircle2, Star } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="w-full bg-[#F6F6F6]">
      {/* First Feature Block */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground mb-6 leading-tight">
              Your Path to Professional<br/>Growth Starts Here!
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-md">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            
            <div className="flex items-center gap-10 pt-6">
              <div>
                <p className="text-4xl font-extrabold text-[var(--bytespace-blue)]">12K</p>
                <p className="text-sm text-gray-500 mt-1">Students</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[var(--bytespace-blue)]">70+</p>
                <p className="text-sm text-gray-500 mt-1">Courses</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[var(--bytespace-blue)]">16</p>
                <p className="text-sm text-gray-500 mt-1">Creators</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Background Shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <svg width="150" height="200" viewBox="0 0 100 150" fill="none" className="text-[var(--bytespace-yellow)]">
                <path d="M100 20 Q50 20 50 50 T0 80 Q50 80 50 110 T100 140" stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
                alt="Student learning" 
                className="w-[400px] h-[500px] object-cover rounded-3xl shadow-xl relative z-10"
              />
              
              {/* Floating Course Card */}
              <div className="absolute top-20 -left-20 bg-white rounded-2xl p-4 shadow-xl z-20 w-64">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-[10px] font-medium px-2 py-1 rounded-full">17 Lessons</span>
                  <span className="bg-gray-100 text-[10px] font-medium px-2 py-1 rounded-full">2 hours 16 mins</span>
                </div>
                <h4 className="font-bold text-sm text-foreground mb-1">Learn Figma from Basic</h4>
                <p className="text-[10px] text-blue-600 mb-3">by purepixel studio</p>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-[10px] text-gray-500">Beginner</span>
                  <div className="font-bold text-blue-700 text-sm">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></div>
                </div>
              </div>
              
              {/* Floating Progress Card */}
              <div className="absolute top-1/2 -right-16 bg-white rounded-2xl p-5 shadow-xl z-20 w-48">
                <h4 className="font-bold text-sm text-foreground mb-1">Learning Progress</h4>
                <p className="text-3xl font-extrabold text-foreground mb-2">55%</p>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--bytespace-yellow)] w-[55%] h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Feature Block */}
      <div className="container mx-auto px-4 md:px-6 py-20 pb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                alt="Creator" 
                className="w-[400px] h-[500px] object-cover rounded-[3rem] shadow-xl relative z-10"
              />
              
              {/* Decorative zigzag */}
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-0">
                <svg width="100" height="150" viewBox="0 0 50 100" fill="none" className="text-[var(--bytespace-yellow)]">
                  <path d="M0 10 L40 30 L0 50 L40 70 L0 90" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Revenue Card 1 */}
              <div className="absolute top-10 -left-12 bg-[#0B3AE2] rounded-xl p-4 shadow-lg z-20 w-40 text-white">
                <p className="text-[10px] text-white/80 mb-1">Total Revenue</p>
                <p className="text-[10px] text-white/60 mb-2">July 1-28</p>
                <p className="text-xl font-bold">$120.29</p>
              </div>

              {/* Revenue Card 2 */}
              <div className="absolute top-36 -left-12 bg-[#0B3AE2] rounded-xl p-4 shadow-lg z-20 w-40 text-white">
                <p className="text-[10px] text-white/80 mb-1">Year to Date</p>
                <p className="text-[10px] text-white/60 mb-2">2023</p>
                <p className="text-xl font-bold mb-1">$1,200.38</p>
                <span className="bg-[var(--bytespace-yellow)] text-black text-[10px] font-bold px-2 py-0.5 rounded">+12%</span>
              </div>
              
              {/* Happy Students Card */}
              <div className="absolute bottom-16 -right-12 bg-white rounded-2xl p-4 shadow-xl z-20 flex flex-col w-56">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-sm text-foreground">Happy Students</h4>
                  <div className="flex items-center text-xs font-bold">
                    4.5 <Star className="h-3 w-3 fill-[var(--bytespace-yellow)] text-[var(--bytespace-yellow)] ml-1" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=f${i}`} alt="user" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[var(--bytespace-yellow)] flex items-center justify-center text-[10px] font-bold -ml-2 z-10">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground mb-6 leading-tight">
              Create & Manage<br/>Courses Easily.
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-md mb-8">
              <span className="font-bold text-foreground">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[15px] font-medium">
                <CheckCircle2 className="h-5 w-5 text-[#0B3AE2] fill-[#0B3AE2] text-white" />
                Share Your Expertise
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium">
                <CheckCircle2 className="h-5 w-5 text-[#0B3AE2] fill-[#0B3AE2] text-white" />
                Monetize Your Passion
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium">
                <CheckCircle2 className="h-5 w-5 text-[#0B3AE2] fill-[#0B3AE2] text-white" />
                Flexibility and Autonomy
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium">
                <CheckCircle2 className="h-5 w-5 text-[#0B3AE2] fill-[#0B3AE2] text-white" />
                Build a Community
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
