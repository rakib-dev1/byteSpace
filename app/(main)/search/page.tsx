import type { Metadata } from 'next';
import { SearchHero } from '@/components/search/SearchHero';
import { SearchFilters } from '@/components/search/SearchFilters';
import { SearchResults } from '@/components/search/SearchResults';
import { Pagination } from '@/components/search/Pagination';

export const metadata: Metadata = {
  title: 'Find Your Next Course — ByteSpace',
  description: 'Search through hundreds of courses in programming, design, business and more on ByteSpace.',
};

export default function SearchPage() {
  return (
    <>
      <SearchHero />
      <SearchFilters />
      <SearchResults />
      <Pagination />
    </>
  );
}
