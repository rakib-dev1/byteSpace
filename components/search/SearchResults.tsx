import { CourseCard, type Course } from './CourseCard';

const IMAGES = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
];

const TITLES = [
  'Learn Figma from Basic',
  'Build Digital Asset',
  'the Power of Big Data',
  'Balancing Productivity an...',
  'Mastering Money Manage...',
  'From Idea to Startup Succ...',
];

const COURSES: Course[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: TITLES[i % TITLES.length],
  author: 'purepixel studio',
  rating: 4.5,
  price: '$25',
  image: IMAGES[i % IMAGES.length],
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
}));

export function SearchResults() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
