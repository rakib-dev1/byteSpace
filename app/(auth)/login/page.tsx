import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Sign In — ByteSpace',
  description: 'Sign in to your ByteSpace account and access hundreds of courses.',
};

export default function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-sm font-semibold text-[#0B3AE2] mb-2 tracking-wide">Sign In</p>
      <h1 className="text-4xl font-extrabold text-foreground mb-10 leading-tight">Welcome Back</h1>

      <LoginForm />

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-sm active:scale-95 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
            <path d="M24 12.073C24 5.41 18.627 0 12 0 5.373 0 0 5.41 0 12.073c0 6.027 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.929-1.956 1.882v2.273h3.328l-.532 3.49h-2.796v8.437C19.612 23.095 24 18.1 24 12.073z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-sm active:scale-95 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-10">
        New user?{' '}
        <Link href="/register" className="text-[#0B3AE2] font-semibold hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
