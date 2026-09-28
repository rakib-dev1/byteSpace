import { Play, Clock, BookOpen, Award, MessageSquare, Users } from 'lucide-react';

const LESSONS = [
  { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
  { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
];

const INCLUDES = [
  { icon: BookOpen, label: 'Learning Resources' },
  { icon: Play, label: 'Quality Lesson Videos' },
  { icon: Award, label: 'Certificate of Completion' },
  { icon: MessageSquare, label: 'Private Consultation' },
];

export function CourseSidebar() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
      <div className="p-7">
        <h2 className="text-lg font-extrabold text-foreground mb-5">112 Lessons (24 hours)</h2>

        <ul className="space-y-4 mb-4">
          {LESSONS.map((lesson) => (
            <li key={lesson.num} className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-gray-400 mt-0.5 w-5 flex-shrink-0">{lesson.num}</span>
                <span className="text-sm font-medium text-foreground leading-snug">{lesson.title}</span>
              </div>
              <span className="text-xs font-semibold text-[#0B3AE2] flex-shrink-0">{lesson.duration}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-400 mb-6">99 more videos</p>

        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-extrabold text-[#0B3AE2]">$25</span>
          <span className="text-xs text-gray-400">/lifetime</span>
        </div>

        <button className="w-full bg-[#D4FB20] text-black font-bold py-3.5 rounded-xl text-sm hover:bg-[#D4FB20]/90 active:scale-95 transition-all mb-6">
          Enroll Now
        </button>

        <div className="border-t pt-6">
          <h3 className="text-sm font-bold text-foreground mb-4">This course include</h3>
          <ul className="space-y-3">
            {INCLUDES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-gray-600">
                <Icon className="h-4 w-4 text-[#0B3AE2] flex-shrink-0" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t mt-6 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=purepearl"
              alt="Creator"
              className="w-12 h-12 rounded-full border-2 border-gray-100 bg-gray-50"
            />
            <div>
              <p className="font-bold text-sm text-foreground">PurePearl Studio</p>
              <p className="text-xs text-gray-500">Professional Creator</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>
          <button className="w-full border border-gray-200 text-sm font-medium text-foreground py-2.5 rounded-xl hover:border-gray-300 transition-colors">
            See Full Profile
          </button>
        </div>
      </div>
    </div>
  );
}
