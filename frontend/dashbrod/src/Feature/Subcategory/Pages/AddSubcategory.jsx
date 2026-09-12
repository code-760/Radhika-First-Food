import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

export default function AddSubcategory() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentCategory: 'Burgers & Sandwiches',
    name: '',
    slug: '',
    status: 'Active',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Burgers & Sandwiches',
    'Japanese Bowls & Ramen',
    'Artisan Pizzas',
    'Healthy Salads & Bowls',
    'Beverages & Mocktails',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'name' && !prev.slug) {
        updated.slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/subcategory/view');
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Subcategories
          </button>
          <h2 className="text-2xl font-bold text-white tracking-tight">Add Subcategory</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Link a subcategory under an existing parent category.
          </p>
        </div>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#14281f] border border-emerald-800/60 text-emerald-400 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          Subcategory added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        {/* Parent Category Selection */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Parent Category *
          </label>
          <select
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleChange}
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Name & Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Subcategory Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Smashed Burgers, Tonkotsu Ramen"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              URL Slug *
            </label>
            <input
              type="text"
              name="slug"
              required
              value={formData.slug}
              onChange={handleChange}
              placeholder="e.g. smashed-burgers"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#23252d]">
          <button
            type="button"
            onClick={() => navigate('/subcategory/view')}
            className="px-5 py-2.5 rounded-xl border border-[#2e303a] text-gray-300 hover:text-white hover:bg-[#202228] text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
          >
            Save Subcategory
          </button>
        </div>
      </form>
    </div>
  );
}
