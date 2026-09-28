import type { Metadata } from 'next';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';

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

      <RegisterForm />

      <p className="text-center text-sm text-gray-500 mt-10">
        Already have an account?{' '}
        <Link href="/login" className="text-[#0B3AE2] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
