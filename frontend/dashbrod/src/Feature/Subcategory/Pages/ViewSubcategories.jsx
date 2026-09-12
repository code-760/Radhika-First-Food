import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, CheckCircle2, XCircle } from 'lucide-react';

export default function ViewSubcategories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const [subcategories, setSubcategories] = useState([
    {
      id: 1,
      name: 'Smashed Beef Burgers',
      slug: 'smashed-beef-burgers',
      parentCategory: 'Burgers & Sandwiches',
      itemsCount: 8,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Crispy Chicken Burgers',
      slug: 'crispy-chicken-burgers',
      parentCategory: 'Burgers & Sandwiches',
      itemsCount: 6,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Tonkotsu & Miso Ramen',
      slug: 'tonkotsu-miso-ramen',
      parentCategory: 'Japanese Bowls & Ramen',
      itemsCount: 10,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Seafood Poke Bowls',
      slug: 'seafood-poke-bowls',
      parentCategory: 'Japanese Bowls & Ramen',
      itemsCount: 8,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Classic Margherita & Cheese',
      slug: 'classic-margherita-cheese',
      parentCategory: 'Artisan Pizzas',
      itemsCount: 7,
      status: 'Active',
    },
    {
      id: 6,
      name: 'Loaded Pepperoni & Meats',
      slug: 'loaded-pepperoni-meats',
      parentCategory: 'Artisan Pizzas',
      itemsCount: 5,
      status: 'Active',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this subcategory?')) {
      setSubcategories((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const filtered = subcategories.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.parentCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'All' || sub.parentCategory === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Subcategories</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Organize nested menu groupings by parent category.
          </p>
        </div>

        <Link
          to="/subcategory/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Subcategory
        </Link>
      </div>

      <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search subcategories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-[#131417] border border-[#262830] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ea580c]"
            >
              <option value="All">All Parent Categories</option>
              <option value="Burgers & Sandwiches">Burgers & Sandwiches</option>
              <option value="Japanese Bowls & Ramen">Japanese Bowls & Ramen</option>
              <option value="Artisan Pizzas">Artisan Pizzas</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#23252d] text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                <th className="py-3 px-3">SUBCATEGORY</th>
                <th className="py-3 px-3">PARENT CATEGORY</th>
                <th className="py-3 px-3 text-center">ITEMS COUNT</th>
                <th className="py-3 px-3 text-center">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21232a] text-sm">
              {filtered.map((sub) => (
                <tr key={sub.id} className="hover:bg-[#1f2127]/60 transition-colors group">
                  <td className="py-3.5 px-3">
                    <p className="font-semibold text-white">{sub.name}</p>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">{sub.slug}</p>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-[#22242c] text-xs text-gray-300 font-medium">
                      {sub.parentCategory}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-semibold text-white">
                    {sub.itemsCount}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#132c20] text-[#4ade80] border border-[#166534]/50">
                      <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to="/subcategory/add"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#272932] transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
