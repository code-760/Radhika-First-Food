import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, ArrowLeft, Check } from 'lucide-react';

export default function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: 'Burgers & Sandwiches',
    price: '',
    discountPrice: '',
    ingredients: '',
    foodType: 'Non-Veg',
    status: 'In Stock',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      navigate('/products/view');
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>
          <h2 className="text-2xl font-bold text-white tracking-tight">Add Food Product</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Add a new dish or beverage to the restaurant menu.
          </p>
        </div>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#14281f] border border-emerald-800/60 text-emerald-400 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          Product successfully added to the menu!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Double Bacon Cheeseburger"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            >
              <option value="Burgers & Sandwiches">Burgers & Sandwiches</option>
              <option value="Japanese Bowls & Ramen">Japanese Bowls & Ramen</option>
              <option value="Artisan Pizzas">Artisan Pizzas</option>
              <option value="Healthy Salads & Bowls">Healthy Salads & Bowls</option>
              <option value="Beverages & Mocktails">Beverages & Mocktails</option>
            </select>
          </div>
        </div>

        {/* Pricing & Diet */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Regular Price ($) *
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              placeholder="24.50"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Discount Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleChange}
              placeholder="19.99"
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Dietary Type
            </label>
            <select
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            >
              <option value="Non-Veg">Non-Vegetarian</option>
              <option value="Veg">Vegetarian</option>
              <option value="Vegan">100% Vegan</option>
            </select>
          </div>
        </div>

        {/* Ingredients */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Key Ingredients
          </label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="e.g. Beef patty, Cheddar cheese, Brioche bun, Secret sauce"
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Item Description
          </label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Detailed description of taste, preparation and allergens..."
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all resize-none"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Product Photography *
          </label>
          <label className="border-2 border-dashed border-[#292b34] hover:border-[#ea580c]/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-[#131417] transition-all group">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Product preview"
                  className="max-h-52 rounded-xl object-cover ring-1 ring-[#ea580c]/40"
                />
                <p className="text-xs text-orange-400 mt-2 text-center font-medium">Click to change photo</p>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-[#1c1d22] flex items-center justify-center text-gray-400 group-hover:text-[#ea580c] group-hover:bg-[#281b16] transition-colors mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-white">Upload high-res food photo</p>
                <p className="text-xs text-gray-500 mt-1">Recommended: 800x800 square image, JPG or PNG</p>
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

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#23252d]">
          <button
            type="button"
            onClick={() => navigate('/products/view')}
            className="px-5 py-2.5 rounded-xl border border-[#2e303a] text-gray-300 hover:text-white hover:bg-[#202228] text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
          >
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
}
