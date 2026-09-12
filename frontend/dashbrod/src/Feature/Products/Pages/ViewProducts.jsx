import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, Star, CheckCircle2 } from 'lucide-react';

export default function ViewProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Classic Cheeseburger',
      category: 'Burgers & Sandwiches',
      price: '$14.99',
      rating: 4.9,
      sales: 342,
      diet: 'Non-Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=140&h=140&q=80',
    },
    {
      id: 2,
      name: 'Spicy Tuna Poke Bowl',
      category: 'Japanese Bowls & Ramen',
      price: '$18.50',
      rating: 4.8,
      sales: 289,
      diet: 'Non-Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=140&h=140&q=80',
    },
    {
      id: 3,
      name: 'Miso Ramen Deluxe',
      category: 'Japanese Bowls & Ramen',
      price: '$16.75',
      rating: 4.9,
      sales: 215,
      diet: 'Non-Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=140&h=140&q=80',
    },
    {
      id: 4,
      name: 'Margherita Woodfired Pizza',
      category: 'Artisan Pizzas',
      price: '$17.00',
      rating: 4.7,
      sales: 187,
      diet: 'Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=140&h=140&q=80',
    },
    {
      id: 5,
      name: 'Truffle Mushroom Burger',
      category: 'Burgers & Sandwiches',
      price: '$19.25',
      rating: 4.9,
      sales: 164,
      diet: 'Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=140&h=140&q=80',
    },
    {
      id: 6,
      name: 'Avocado Toast & Poached Egg',
      category: 'Healthy Salads & Bowls',
      price: '$13.50',
      rating: 4.6,
      sales: 142,
      diet: 'Veg',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=140&h=140&q=80',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this product from the menu?')) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Food Menu Products</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Manage all individual dishes, prices, ratings, and stock status.
          </p>
        </div>

        <Link
          to="/products/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </Link>
      </div>

      <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search dishes or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#131417] border border-[#262830] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ea580c]"
            >
              <option value="All">All Categories</option>
              <option value="Burgers & Sandwiches">Burgers & Sandwiches</option>
              <option value="Japanese Bowls & Ramen">Japanese Bowls & Ramen</option>
              <option value="Artisan Pizzas">Artisan Pizzas</option>
              <option value="Healthy Salads & Bowls">Healthy Salads & Bowls</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#23252d] text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                <th className="py-3 px-3">DISH</th>
                <th className="py-3 px-3">CATEGORY</th>
                <th className="py-3 px-3">PRICE</th>
                <th className="py-3 px-3 text-center">RATING</th>
                <th className="py-3 px-3 text-center">SALES</th>
                <th className="py-3 px-3 text-center">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21232a] text-sm">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-[#1f2127]/60 transition-colors group">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-[#292b34]"
                      />
                      <div>
                        <p className="font-semibold text-white leading-tight">{p.name}</p>
                        <span
                          className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded mt-1 ${
                            p.diet === 'Veg'
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                              : 'bg-red-950/60 text-red-400 border border-red-800/40'
                          }`}
                        >
                          {p.diet}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-gray-300 text-xs font-medium">
                    {p.category}
                  </td>
                  <td className="py-3.5 px-3 font-bold text-white text-sm">
                    {p.price}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold bg-[#2b2214] px-2 py-0.5 rounded-lg border border-amber-800/30">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {p.rating}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-semibold text-white">
                    {p.sales}
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#132c20] text-[#4ade80] border border-[#166534]/50">
                      <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to="/products/add"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#272932] transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
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
