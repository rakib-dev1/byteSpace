import { PenTool, Smartphone, Monitor, Briefcase, BarChart, Camera } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { id: 1, name: 'Design', icon: PenTool },
  { id: 2, name: 'Development', icon: Smartphone },
  { id: 3, name: 'IT & Software', icon: Monitor },
  { id: 4, name: 'Business', icon: Briefcase },
  { id: 5, name: 'Marketing', icon: BarChart },
  { id: 6, name: 'Photography', icon: Camera },
];

export function CategoriesSection() {
  return (
    <section className="w-full py-16 bg-white pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="text-muted-foreground text-[15px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                href={`/categories/${category.name.toLowerCase()}`}
                key={category.id} 
                className="group flex flex-col items-center justify-center w-36 h-40 bg-white border border-gray-100 rounded-3xl hover:border-gray-200 hover:shadow-xl shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--bytespace-yellow)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="font-medium text-sm text-foreground text-center">{category.name}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
