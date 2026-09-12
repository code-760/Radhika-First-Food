import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0f12] text-gray-100 flex flex-col antialiased selection:bg-[#ea580c] selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area (offset by 256px / 64 on large screens) */}
      <div className="lg:pl-64 flex flex-col flex-1 min-h-screen">
        {/* Sticky Header */}
        <Header onToggleSidebar={() => setSidebarOpen(prev => !prev)} />

        {/* Dynamic Page Outlet */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
