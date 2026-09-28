import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-2 py-12">
      <button
        aria-label="Previous page"
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          aria-label={`Page ${page}`}
          className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
            page === 2
              ? 'bg-[#0B3AE2] text-white border border-[#0B3AE2]'
              : 'border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        aria-label="Next page"
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-800 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
