import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ toggleSidebarMenu, isSidebarOpen }) {
  return (
    <header className="flex-shrink-0 border-b">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-3">
          <Link href='/dashboard' className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
            <Image src="https://preview.cruip.com/community/images/logo.svg" width={32} height={32} alt="Community" />
          </Link>
          <button onClick={toggleSidebarMenu} className="p-2 rounded-md focus:outline-none focus:ring">
            <svg className={`w-4 h-4 text-gray-600 ${isSidebarOpen ? 'transform transition-transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navbar right */}
        <div className="flex items-center space-x-4">
          {/* User dropdown */}
          <Link href='/profile' className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring">
            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="User" />
          </Link>
        </div>
      </div>
    </header>
  );
}
