import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          <div className="w-full lg:w-1/3">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#CBFC01] rounded-sm transform rotate-45 mr-1"></div>
                <div className="w-4 h-4 bg-gray-900 rounded-sm transform rotate-45 -ml-2"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">ByteSpace</span>
            </Link>
            
            <p className="text-[13px] text-gray-500 mb-8 max-w-xs">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <form className="flex space-x-3 mb-4 max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-12 rounded-full border border-gray-200 bg-transparent px-5 text-sm outline-none focus:border-[var(--bytespace-blue)] transition-colors"
              />
              <button 
                type="submit"
                className="h-12 px-8 rounded-full bg-[var(--bytespace-yellow)] text-black text-sm font-semibold hover:bg-[var(--bytespace-yellow)]/90 transition-colors"
              >
                Search
              </button>
            </form>
            
            <p className="text-[11px] text-gray-400 max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-4 text-[13px] text-gray-600">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Featured Courses</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Featured Categories</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Business</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">IT</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Design</Link></li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4 text-[13px] text-gray-600">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Development</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Marketing</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Photography</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Finance</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Sport</Link></li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4 text-[13px] text-gray-600">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Become a Creator</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Affiliate Program</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Help</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">About</Link></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
