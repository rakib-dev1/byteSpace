import type { Metadata } from 'next';
import { CourseHeader } from '@/components/course-details/CourseHeader';
import { CourseContent } from '@/components/course-details/CourseContent';
import { CourseSidebar } from '@/components/course-details/CourseSidebar';

export const metadata: Metadata = {
  title: 'Build Digital Asset: A Comprehensive Guide — ByteSpace',
  description: 'Unlock the Power of Digital Creation with Expert Guidance. Enroll now on ByteSpace.',
};

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <CourseHeader id={params.id} />

      <div className="container mx-auto px-4 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <CourseContent id={params.id} />
          <aside className="w-full lg:w-[380px] flex-shrink-0">
            <CourseSidebar />
          </aside>
        </div>
      </div>
    </>
  );
}
