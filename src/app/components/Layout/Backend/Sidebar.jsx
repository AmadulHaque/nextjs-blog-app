"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { usePathname } from "next/navigation";


export default function Sidebar({ isSidebarOpen, toggleSidebarMenu, menuItems }) {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const pathname = usePathname();

  const toggleSubmenu = (title) => {
    setOpenSubmenus(prev => ({
      // ...prev,
      [title]: !prev[title]
    }));
  };

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      {/* Sidebar backdrop */}
      <Transition
        show={isSidebarOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-20"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-20"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
          style={{
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        ></div>
      </Transition>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${
          !isSidebarOpen ? '-translate-x-full lg:translate-x-0 lg:w-20' : ''
        }`}
      >
        {/* Sidebar header */}
        <div className={`flex items-center justify-between flex-shrink-0 p-2 ${ !isSidebarOpen ? 'lg:justify-center' : '' }`} >
          <Link href='/dashboard' className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap flex gap-1">
            <Image src="https://preview.cruip.com/community/images/logo.svg" width={32} height={32} alt="Community" />
            <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
              My Blog
            </span>
          </Link>
          <button  onClick={toggleSidebarMenu}  className="p-2 rounded-md lg:hidden">
            <svg    className="w-6 h-6 text-gray-600"    xmlns="http://www.w3.org/2000/svg"    fill="none"    viewBox="0 0 24 24"    stroke="currentColor"  >
              <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 overflow-hidden">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} onClick={() => item.subMenu.length > 0 ? toggleSubmenu(item.title) : ""}  className={`flex ${  isActive(item.href) ? 'bg-gray-200' : '' }  items-center p-2  rounded-md hover:bg-gray-100 ${    !isSidebarOpen ? 'justify-center' : ''  }`}>
                  <span>
                    {item.icon}
                  </span>
                  <span className={`ml-2 ${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                    {item.title}
                  </span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <span    className="ml-auto flex items-center justify-center p-2">
                      <svg  className={`w-4 h-4 text-gray-400 transition-transform ${    openSubmenus[item.title] ? 'rotate-180' : ''  }`}  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                        <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  )}
                </Link>
                {item.subMenu && openSubmenus[item.title] && (
                  <ul className="pl-4">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.title}>
                        <Link href={subItem.href} className={`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${ !isSidebarOpen ? 'justify-center' : '' }`} >
                          <span>
                               {' ->  '}
                          </span>
                          <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                            {subItem.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="flex-shrink-0 p-2 border-t max-h-14">
          <button className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
            <span>
              <svg  className="w-6 h-6"  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="2"  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </span>
            <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}