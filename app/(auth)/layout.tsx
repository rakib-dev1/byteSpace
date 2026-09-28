import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ByteSpace — Authentication',
  description: 'Sign in or create an account on ByteSpace.',
};

export default function AuthGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
