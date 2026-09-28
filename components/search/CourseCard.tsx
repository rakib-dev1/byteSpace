import { Star, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export interface Course {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: string;
  image: string;
  lessons: string;
  duration: string;
  comments: string;
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 rounded-2xl h-full">
      <div className="relative aspect-[4/3] overflow-hidden p-3 pb-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-6 right-6 flex gap-2 flex-wrap">
          <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">
            {course.lessons}
          </span>
          <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">
            {course.duration}
          </span>
          <span className="bg-white/90 backdrop-blur text-[10px] font-medium px-2 py-1 rounded-full shadow-sm">
            {course.comments}
          </span>
        </div>
      </div>
      <CardContent className="p-5 pt-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-[15px] text-foreground truncate max-w-[80%] group-hover:text-[#0B3AE2] transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 text-xs font-bold flex-shrink-0">
            {course.rating} <Star className="h-3.5 w-3.5 fill-gray-300 text-gray-300" />
          </div>
        </div>
        <p className="text-xs text-[#0B3AE2] mb-4 font-medium">by {course.author}</p>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100 mb-4">
          <div className="flex items-center text-xs text-gray-500 font-medium gap-1">
            <BarChart className="w-3 h-3" /> Beginner
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.id}${i}`}
                  alt="user"
                  className="w-6 h-6 rounded-full border border-white bg-gray-100"
                />
              ))}
            </div>
            <div className="w-6 h-6 rounded-full border border-white bg-[#D4FB20] flex items-center justify-center text-[8px] font-bold -ml-2 z-10">
              26+
            </div>
          </div>
        </div>

        <div className="flex items-baseline">
          <span className="text-lg font-bold text-[#0B3AE2]">{course.price}</span>
          <span className="text-xs text-gray-400 ml-1">/lifetime</span>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
}
