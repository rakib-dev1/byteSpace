import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent text-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#CBFC01] rounded-sm transform rotate-45 mr-1"></div>
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45 -ml-2"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">ByteSpace</span>
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
            <Link href="/courses" className="text-white/80 hover:text-white transition-colors">Courses</Link>
            <Link href="/creators" className="text-white/80 hover:text-white transition-colors">Creators</Link>
          </nav>
        </div>
          
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/login" className="text-white hover:text-white/80 transition-colors">Sign In</Link>
          <Link href="/register" className="text-white hover:text-white/80 transition-colors">Join Us</Link>
          <button className="text-white hover:text-white/80 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        <button className="md:hidden ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
