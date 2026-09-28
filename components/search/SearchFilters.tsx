'use client';

import { SlidersHorizontal, BarChart2, Tag, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking',
];

export function SearchFilters() {
  const [active, setActive] = useState('Featured');

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col gap-4">
          {/* Top filter row */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors">
                <SlidersHorizontal className="h-4 w-4" /> Filter
              </button>
              <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors">
                <BarChart2 className="h-4 w-4" /> Level
              </button>
              <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors">
                <Tag className="h-4 w-4" /> Category
              </button>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              <ArrowUpDown className="h-4 w-4" /> Most relevant
            </button>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors ${
                  active === cat
                    ? 'bg-[#D4FB20] border-[#D4FB20] text-black'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
