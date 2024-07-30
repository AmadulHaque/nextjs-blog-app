"use client";
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Sidebar from '@/app/components/Layout/Backend/Sidebar';
import Navbar from '@/app/components/Layout/Backend/Navbar';
import { getMenu } from '@/app/components/Navigation';

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebarMenu = () => setSidebarOpen(!isSidebarOpen);

  const menuItems = getMenu(1);

  return (
    <div className="flex h-screen overflow-y-hidden bg-white">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebarMenu={toggleSidebarMenu} menuItems={menuItems} />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Navbar */}
        <Navbar toggleSidebarMenu={toggleSidebarMenu} isSidebarOpen={isSidebarOpen} />
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          
           {children}

       
        </main>
      </div>
    </div>
  );
}
