import React from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header({ onToggleSidebar }) {
  const location = useLocation();

  // Determine a clean title based on current path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/category')) return 'Category Management';
    if (path.startsWith('/subcategory')) return 'Subcategory Management';
    if (path.startsWith('/orders')) return 'Orders Overview';
    if (path.startsWith('/products')) return 'Products Management';
    if (path.startsWith('/slider')) return 'Slider Showcase';
    if (path.startsWith('/why-choose-us')) return 'Why Choose Us';
    if (path.startsWith('/faq')) return 'FAQ Management';
    return 'Foodies Admin';
  };

  return (
    <header className="sticky top-0 z-30 h-18 bg-[#111215]/95 backdrop-blur-md border-b border-[#202228] px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all">
      {/* Left side: Hamburger (Mobile) + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-[#1f2127] lg:hidden transition-colors"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <h2 className="text-white font-semibold text-lg tracking-tight hidden sm:block">
          {getPageTitle()}
        </h2>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search orders, customers..."
            className="w-full bg-[#18191f] border border-[#272932] rounded-xl pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>
      </div>

      {/* Right side: Notifications & Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Bell */}
        <button
          className="relative p-2 rounded-xl text-gray-400 hover:text-white hover:bg-[#1a1b22] transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ea580c] rounded-full ring-2 ring-[#111215]"></span>
        </button>

        {/* Manager John Profile */}
        <div className="flex items-center gap-3 pl-2 sm:pl-3 border-l border-[#242630]">
          <div className="text-right hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-white tracking-tight">HIMANSHU KUMAWAT</p>
            <p className="text-xs text-gray-400 font-medium">Admin</p>
          </div>
          
          <div className="relative group cursor-pointer">
            <img
              src="https://ik.imagekit.io/zo9aabuxd/IMG_20251125_211434_961(1)(1).png"
              alt="Manager John Avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ea580c]/40 group-hover:ring-[#ea580c] transition-all shadow-md"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              style={{ display: 'none' }}
              className="w-10 h-10 rounded-full bg-[#ea580c] text-white font-bold items-center justify-center text-sm ring-2 ring-[#ea580c]/40"
            >
              MJ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
