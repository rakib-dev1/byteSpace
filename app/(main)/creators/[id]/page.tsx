import type { Metadata } from 'next';
import { CreatorHero } from '@/components/creator/CreatorHero';
import { CreatorCourses } from '@/components/creator/CreatorCourses';

export const metadata: Metadata = {
  title: 'PurePearl Studio — Creator Profile',
  description: 'Welcome to the creative world of PurePearl Studio on ByteSpace.',
};

export default function CreatorProfilePage({ params }: { params: { id: string } }) {
  return (
    <>
      <CreatorHero id={params.id} />
      <CreatorCourses />
    </>
  );
}
