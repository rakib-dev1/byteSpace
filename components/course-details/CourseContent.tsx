'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Video, Star } from 'lucide-react';

const TABS = ['About', 'Lesson', 'Reviews'] as const;

const SNEAK_PEEK_IMAGES = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop',
];

const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

export function CourseContent({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('About');

  return (
    <div className="flex-1 min-w-0">
      {/* Video Preview */}
      <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-8 shadow-lg group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
          alt="Course preview"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-[#0B3AE2] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === tab
                ? 'bg-[#D4FB20] text-black border border-[#D4FB20]'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'About' && (
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">Description</h2>
            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
              <p>
                Embark on an enlightening exploration into the world of digital creation with our comprehensive
                course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience
                invites you to delve deep into the intricacies of crafting impactful digital content. From laying the
                groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously
                curated to empower you with the skills essential for navigating the dynamic landscape of digital
                asset creation.
              </p>
              <p>
                In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
                concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                effectively in the digital realm.
              </p>
              <p>
                As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the
                nuances of design principles that drive impactful creations. Uncover the secrets behind effective
                visual communication, exploring color theory, typography, and layout strategies that elevate your
                digital assets to new heights. Engage in hands-on exercises that reinforce your understanding,
                allowing you to apply these principles in practical scenarios.
              </p>
            </div>
          </div>

          {/* Sneak Peek */}
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-5">Sneak Peak</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SNEAK_PEEK_IMAGES.map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-5">Key Points</h2>
            <ul className="space-y-3">
              {KEY_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15px] text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#0B3AE2] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'Lesson' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">Explore the Modules</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Immerse yourself in the course content as we break down each module into comprehensive lessons,
              providing practical insights and hands-on experiences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-6">Lesson List</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Module 1: Introduction to Digital Assets',
                  desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
                },
                {
                  title: 'Module 2: Design Principles for Impact',
                  desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                },
                {
                  title: 'Module 4: User-Centric Design Strategies',
                  desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                },
                {
                  title: 'Module 5: Interactive Media and Engagement',
                  desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
                },
                {
                  title: 'Module 6: Project Showcase and Critique',
                  desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                },
                {
                  title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                  desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                }
              ].map((module, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#D4FB20] flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-foreground mb-1">{module.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">Lesson Content</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Engage with each lesson through captivating video content, detailed textual explanations, and
              interactive elements. Download resources, complete assignments, and test your understanding with
              quizzes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">Lesson Progress Tracking</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
              through your learning journey.
            </p>
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm max-w-md">
              <h4 className="font-bold text-sm text-foreground mb-1">Learning Progress</h4>
              <p className="text-4xl font-extrabold text-foreground mb-4">55%</p>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-[#D4FB20] w-[55%] h-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Reviews' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">What Learners Are Saying</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
              Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
              transformative journey of mastering digital asset creation.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-2xl bg-[#D4FB20] flex flex-col items-center justify-center flex-shrink-0">
              <span className="text-sm font-semibold text-gray-800">Ratings</span>
              <span className="text-5xl font-extrabold text-black mt-1">4.7</span>
            </div>
            
            <div className="flex-1 w-full space-y-3">
              {[
                { stars: 5, count: 720, percent: 80 },
                { stars: 4, count: 120, percent: 20 },
                { stars: 3, count: 21, percent: 5 },
                { stars: 2, count: 12, percent: 3 },
                { stars: 1, count: 16, percent: 4 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4">
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4FB20]" style={{ width: `${row.percent}%` }}></div>
                  </div>
                  <div className="flex items-center gap-1 w-24">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`w-3.5 h-3.5 ${s <= row.stars ? 'fill-gray-700 text-gray-700' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                  <div className="w-8 text-right text-sm text-gray-500">{row.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-foreground mb-4">Individual Reviews:</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="px-5 py-2 rounded-full text-sm font-semibold bg-[#D4FB20] text-black border border-[#D4FB20]">
                All rating
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button key={rating} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-gray-300">
                  <Star className="w-3.5 h-3.5 fill-gray-400 text-gray-400" /> {rating}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  name: 'PurePearl Studio',
                  role: 'UI/UX Designer',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=purepearl',
                  time: 'a year ago',
                  review: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"'
                },
                {
                  name: 'Albert Flores',
                  role: 'UI/UX Designer',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=albert',
                  time: 'a year ago',
                  review: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!'
                },
                {
                  name: 'Cody Fisher',
                  role: 'UI/UX Designer',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cody',
                  time: 'a year ago',
                  review: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.'
                },
                {
                  name: 'Brooklyn Simmons',
                  role: 'UI/UX Designer',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=brooklyn',
                  time: 'a year ago',
                  review: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.'
                }
              ].map((review, i) => (
                <div key={i} className="border border-gray-200 rounded-3xl p-6 shadow-sm bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full bg-gray-100" />
                      <div>
                        <h4 className="font-bold text-[15px] text-foreground">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{review.time}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-gray-700 text-gray-700" />
                    ))}
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {review.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
