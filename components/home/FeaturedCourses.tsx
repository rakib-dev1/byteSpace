import { Star, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const CATEGORIES = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", 
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", 
  "Productivity", "Web Development", "Data Science", "Cooking", "+ More"
];

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepixel studio",
    rating: 4.5,
    price: "$25",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments"
  }
];

export function FeaturedCourses() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">Discover Your Passion,<br/>Build Your Skills</h2>
          <p className="text-muted-foreground">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-5xl mx-auto">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={i} 
              className={`px-5 py-2 text-sm font-medium rounded-full border ${
                cat === 'Featured' 
                ? 'bg-[var(--bytespace-yellow)] border-[var(--bytespace-yellow)] text-black' 
                : cat === '+ More' 
                ? 'bg-transparent border-transparent text-blue-600 font-bold'
                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {COURSES.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="block group">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 rounded-2xl h-full">
              <div className="relative aspect-[4/3] overflow-hidden p-3 pb-0">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-3 left-6 right-6 flex justify-center gap-2">
                  <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">{course.lessons}</span>
                  <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">{course.duration}</span>
                  <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">{course.comments}</span>
                </div>
              </div>
              <CardContent className="p-5 pt-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-foreground truncate max-w-[80%]">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-sm">{course.rating}</span>
                    <Star className="h-4 w-4 fill-gray-300 text-gray-300" />
                  </div>
                </div>
                <p className="text-xs text-blue-600 mb-4 font-medium">by {course.author}</p>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 mb-4">
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <BarChart className="w-3 h-3 mr-1" /> Beginner
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=c${course.id}${i}`} alt="user" className="w-6 h-6 rounded-full border border-white bg-gray-100" />
                      ))}
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white bg-[var(--bytespace-yellow)] flex items-center justify-center text-[8px] font-bold -ml-2 z-10">
                      26+
                    </div>
                  </div>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-blue-700">{course.price}</span>
                  <span className="text-xs text-gray-400 ml-1">/lifetime</span>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
