'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);
    
    // Automatically redirect after 2 seconds
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue="admin@mail.com"
            placeholder="designer@example.com"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-[#0B3AE2] focus:ring-2 focus:ring-[#0B3AE2]/10 transition-all"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            defaultValue="adminadmin"
            placeholder="••••••••"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-[#0B3AE2] focus:ring-2 focus:ring-[#0B3AE2]/10 transition-all"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-[#D4FB20] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#D4FB20]/90 active:scale-95 transition-all text-sm"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#D4FB20]/20 text-[#D4FB20] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-[#7bb800]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h3>
            <p className="text-gray-500 mb-6">Successfully signed in. Redirecting you to the home page...</p>
          </div>
        </div>
      )}
    </>
  );
}
