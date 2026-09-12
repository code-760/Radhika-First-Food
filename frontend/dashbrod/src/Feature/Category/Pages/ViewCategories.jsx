import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, CheckCircle2, XCircle } from 'lucide-react';

export default function ViewCategories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Burgers & Sandwiches',
      slug: 'burgers-sandwiches',
      description: 'Gourmet handcrafted burgers with prime patties',
      productsCount: 14,
      displayOrder: 1,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 2,
      name: 'Japanese Bowls & Ramen',
      slug: 'japanese-bowls-ramen',
      description: 'Authentic ramen and fresh tuna poke bowls',
      productsCount: 18,
      displayOrder: 2,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 3,
      name: 'Artisan Pizzas',
      slug: 'artisan-pizzas',
      description: 'Woodfired sourdough crust pizzas with premium cheese',
      productsCount: 12,
      displayOrder: 3,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 4,
      name: 'Healthy Salads & Bowls',
      slug: 'healthy-salads-bowls',
      description: 'Organic greens, quinoa bowls, and fresh wraps',
      productsCount: 9,
      displayOrder: 4,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 5,
      name: 'Beverages & Mocktails',
      slug: 'beverages-mocktails',
      description: 'Cold brew coffees, fresh juices and craft mocktails',
      productsCount: 16,
      displayOrder: 5,
      status: 'Inactive',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=120&h=120&q=80',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this category?')) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  const filteredCategories = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Food Categories</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Manage your restaurant main menu categories and listings.
          </p>
        </div>

        <Link
          to="/category/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </Link>
      </div>

      {/* Main Table Container */}
      <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search category name or slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="text-xs text-gray-400 font-medium">
            Total Categories: <span className="text-white font-bold">{categories.length}</span>
          </div>
        </div>

        {/* Categories Table */}
        <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#23252d] text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                <th className="py-3 px-3">CATEGORY</th>
                <th className="py-3 px-3">SLUG</th>
                <th className="py-3 px-3 text-center">ITEMS</th>
                <th className="py-3 px-3 text-center">ORDER</th>
                <th className="py-3 px-3 text-center">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21232a] text-sm">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-[#1f2127]/60 transition-colors group">
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-11 h-11 rounded-xl object-cover ring-1 ring-[#292b34]"
                        />
                        <div>
                          <p className="font-semibold text-white leading-tight">{cat.name}</p>
                          <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{cat.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-gray-400 font-mono text-xs">
                      {cat.slug}
                    </td>
                    <td className="py-3.5 px-3 text-center font-semibold text-white">
                      {cat.productsCount}
                    </td>
                    <td className="py-3.5 px-3 text-center text-gray-300 font-medium">
                      #{cat.displayOrder}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          cat.status === 'Active'
                            ? 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50'
                            : 'bg-[#292020] text-gray-400 border border-gray-700/50'
                        }`}
                      >
                        {cat.status === 'Active' ? (
                          <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
                        ) : (
                          <XCircle className="w-3 h-3 text-gray-500" />
                        )}
                        {cat.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to="/category/add"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#272932] transition-colors"
                          title="Edit Category"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-500 text-sm">
                    No categories found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
