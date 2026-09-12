import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, ArrowLeft, Check, AlertCircle } from 'lucide-react';

export default function AddCategory() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    status: 'Active',
    displayOrder: 1,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/category/view');
    }, 900);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Header with Back button */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </button>
          <h2 className="text-2xl font-bold text-white tracking-tight">Add New Category</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Create a menu category for organizing restaurant items.
          </p>
        </div>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#14281f] border border-emerald-800/60 text-emerald-400 text-sm flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-400" />
          Category created successfully! Redirecting...
        </div>
      )}

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Category Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Burgers, Beverages, Japanese Bowls"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          {/* Slug */}
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
              placeholder="e.g. burgers-and-sandwiches"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short details about this food category..."
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all resize-none"
          />
        </div>

        {/* Image Upload Dropzone */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Category Banner / Thumbnail
          </label>
          <label className="border-2 border-dashed border-[#292b34] hover:border-[#ea580c]/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-[#131417] transition-all group">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-48 rounded-xl object-cover ring-1 ring-[#ea580c]/40"
                />
                <p className="text-xs text-orange-400 mt-2 text-center font-medium">Click to change image</p>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-[#1c1d22] flex items-center justify-center text-gray-400 group-hover:text-[#ea580c] group-hover:bg-[#281b16] transition-colors mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-white">Click or drag & drop category image</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 5MB (Aspect ratio 1:1 or 16:9)</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Status & Display Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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
              <option value="Active">Active (Visible in menu)</option>
              <option value="Inactive">Inactive (Hidden)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Display Sequence
            </label>
            <input
              type="number"
              name="displayOrder"
              min="1"
              value={formData.displayOrder}
              onChange={handleChange}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#23252d]">
          <button
            type="button"
            onClick={() => navigate('/category/view')}
            className="px-5 py-2.5 rounded-xl border border-[#2e303a] text-gray-300 hover:text-white hover:bg-[#202228] text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
          >
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
}
