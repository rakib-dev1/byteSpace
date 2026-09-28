import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';

export const metadata: Metadata = {
  title: 'Create Account — ByteSpace',
  description: 'Register for a free ByteSpace account and start learning today.',
};

export default function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <p className="text-sm font-semibold text-[#0B3AE2] mb-2 tracking-wide">Create an Account</p>
      <h1 className="text-4xl font-extrabold text-foreground mb-10 leading-tight">
        Welcome to<br />ByteSpace
      </h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-[#0B3AE2] focus:ring-2 focus:ring-[#0B3AE2]/10 transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
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
            autoComplete="new-password"
            placeholder="••••••••"
            className="w-full h-14 rounded-xl border border-gray-200 px-5 text-sm text-foreground placeholder:text-gray-400 outline-none focus:border-[#0B3AE2] focus:ring-2 focus:ring-[#0B3AE2]/10 transition-all"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-[#D4FB20] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#D4FB20]/90 active:scale-95 transition-all text-sm"
          >
            Continue
          </button>
        </div>
      </form>

      <p className="text-center text-sm text-gray-500 mt-10">
        Already have an account?{' '}
        <Link href="/login" className="text-[#0B3AE2] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
