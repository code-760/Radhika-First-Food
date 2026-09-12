import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderTree,
  Layers,
  ShoppingBag,
  UtensilsCrossed,
  Images,
  Award,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Plus,
  ListFilter,
  X,
  Sparkles
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  // Navigation menu definitions strictly matching requirements
  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      id: 'category',
      title: 'Category',
      icon: FolderTree,
      subItems: [
        { title: 'Add Category', path: '/category/add', icon: Plus },
        { title: 'View Categories', path: '/category/view', icon: ListFilter },
      ],
    },
    {
      id: 'subcategory',
      title: 'Subcategory',
      icon: Layers,
      subItems: [
        { title: 'Add Subcategory', path: '/subcategory/add', icon: Plus },
        { title: 'View Subcategories', path: '/subcategory/view', icon: ListFilter },
      ],
    },
    {
      id: 'orders',
      title: 'Orders',
      icon: ShoppingBag,
      path: '/orders',
    },
    {
      id: 'products',
      title: 'Products',
      icon: UtensilsCrossed,
      subItems: [
        { title: 'Add Product', path: '/products/add', icon: Plus },
        { title: 'View Products', path: '/products/view', icon: ListFilter },
      ],
    },
    {
      id: 'slider',
      title: 'Slider',
      icon: Images,
      subItems: [
        { title: 'Add Slider', path: '/slider/add', icon: Plus },
        { title: 'View Sliders', path: '/slider/view', icon: ListFilter },
      ],
    },
    {
      id: 'why-choose-us',
      title: 'Why Choose Us',
      icon: Award,
      subItems: [
        { title: 'Add Why Choose Us', path: '/why-choose-us/add', icon: Plus },
        { title: 'View Why Choose Us', path: '/why-choose-us/view', icon: ListFilter },
      ],
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: HelpCircle,
      subItems: [
        { title: 'Add FAQ', path: '/faq/add', icon: Plus },
        { title: 'View FAQs', path: '/faq/view', icon: ListFilter },
      ],
    },
  ];

  // State to track open submenus
  const [openMenus, setOpenMenus] = useState(() => {
    const initial = {};
    menuItems.forEach((item) => {
      if (item.subItems) {
        // Automatically open if currently on one of the child routes
        const isChildActive = item.subItems.some((sub) => location.pathname === sub.path);
        if (isChildActive) {
          initial[item.id] = true;
        }
      }
    });
    return initial;
  });

  // Keep parent menu open whenever route changes to a child route
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.subItems) {
        const isChildActive = item.subItems.some((sub) => location.pathname === sub.path);
        if (isChildActive) {
          setOpenMenus((prev) => ({ ...prev, [item.id]: true }));
        }
      }
    });
  }, [location.pathname]);

  const toggleSubmenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#141518] border-r border-[#22242a] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#202228]">
          {/* Logo Section */}
          <div className="flex items-center w-40 sm:w-44">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm"
            >
              <defs>
                <linearGradient id="orange" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#FF3D00" />
                </linearGradient>
              </defs>

              {/* Burger Icon */}
              <rect x="10" y="15" width="120" height="120" rx="30" fill="url(#orange)" />

              <path d="M33 65C35 45 52 34 70 34C90 34 107 45 109 65H33Z" fill="#FFF7ED" />

              <path d="M30 69H112C117 69 119 73 116 78L113 82H29L26 78C23 73 25 69 30 69Z" fill="#FFD166" />

              <path d="M34 85H108L102 101C100 106 95 109 89 109H53C47 109 42 106 40 101L34 85Z" fill="#FFF7ED" />

              {/* Sesame */}
              <circle cx="50" cy="50" r="2.5" fill="#FF7A00" />
              <circle cx="64" cy="44" r="2.5" fill="#FF7A00" />
              <circle cx="79" cy="46" r="2.5" fill="#FF7A00" />
              <circle cx="94" cy="52" r="2.5" fill="#FF7A00" />

              {/* Radhika */}
              <text
                x="145"
                y="72"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="52"
                fontWeight="800"
                fill="#FF5A00"
              >
                Radhika
              </text>

              {/* FAST FOOD */}
              <text
                x="148"
                y="108"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="27"
                fontWeight="700"
                letterSpacing="5"
                fill="#ff59008f"
              >
                FAST FOOD
              </text>

              {/* Tagline */}
              <text
                x="148"
                y="132"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="12"
                fontWeight="600"
                letterSpacing="2"
                fill="#f79058ff"
              >
                CRISPY • CHEESY • CRAVEABLE
              </text>
            </svg>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#202228] lg:hidden transition-colors"
            aria-label="Close sidebar"
          >
            {/* Agar aap lucide-react ka X icon use kar rahe hain toh aise rakhein */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items List */}
        <nav className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5 custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;

            // Simple direct link (Dashboard, Orders)
            if (!item.subItems) {
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-[14px] font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#2b1c16] text-[#ea580c] border border-[#ea580c]/30 shadow-xs'
                      : 'text-gray-300 hover:text-white hover:bg-[#1c1d22]'
                  }`}
                >
                  <Icon
                    className={`w-[19px] h-[19px] transition-colors ${isActive ? 'text-[#ea580c]' : 'text-gray-400'}`}
                  />
                  <span>{item.title}</span>
                </NavLink>
              );
            }

            // Expandable menu item
            const isChildActive = item.subItems.some((sub) => location.pathname === sub.path);
            const isMenuOpen = !!openMenus[item.id];

            return (
              <div key={item.id} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleSubmenu(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-[14px] font-medium transition-all duration-150 ${
                    isChildActive
                      ? 'bg-[#221a17] text-orange-400 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-[#1c1d22]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={`w-[19px] h-[19px] transition-colors ${
                        isChildActive ? 'text-[#ea580c]' : 'text-gray-400'
                      }`}
                    />
                    <span>{item.title}</span>
                  </div>
                  {isMenuOpen ? (
                    <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 transition-transform duration-200" />
                  )}
                </button>

                {/* Submenu List */}
                {isMenuOpen && (
                  <div className="pl-6 pr-1 py-1 space-y-1 border-l-2 border-[#2b2d35] ml-4 animate-fadeIn">
                    {item.subItems.map((sub) => {
                      const isSubActive = location.pathname === sub.path;
                      const SubIcon = sub.icon;

                      return (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={() => onClose && onClose()}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                            isSubActive
                              ? 'bg-[#2d1c16] text-[#ea580c] border border-[#ea580c]/30 font-semibold shadow-xs'
                              : 'text-gray-400 hover:text-gray-100 hover:bg-[#1a1b20]'
                          }`}
                        >
                          <SubIcon className={`w-3.5 h-3.5 ${isSubActive ? 'text-[#ea580c]' : 'text-gray-500'}`} />
                          <span>{sub.title}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer Subtle Status */}
        <div className="p-3.5 border-t border-[#202228] bg-[#111215]/60">
          <div className="flex items-center justify-between px-2 py-1.5 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Himanshu kumawat
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
