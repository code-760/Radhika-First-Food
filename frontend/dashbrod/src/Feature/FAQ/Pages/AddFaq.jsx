import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

export default function AddFaq() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'Orders & Delivery',
    status: 'Active',
    order: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/faq/view');
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
            Back to FAQs
          </button>
          <h2 className="text-2xl font-bold text-white tracking-tight">Add Frequently Asked Question</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Answer common diner questions regarding food orders, delivery, and dietary concerns.
          </p>
        </div>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#14281f] border border-emerald-800/60 text-emerald-400 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          FAQ successfully added!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Question *
          </label>
          <input
            type="text"
            name="question"
            required
            value={formData.question}
            onChange={handleChange}
            placeholder="e.g. How do I customize ingredients or report allergies?"
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          >
            <option value="Orders & Delivery">Orders & Delivery</option>
            <option value="Menu & Ingredients">Menu & Ingredients</option>
            <option value="Payments & Discounts">Payments & Discounts</option>
            <option value="Reservations & Catering">Reservations & Catering</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Answer *
          </label>
          <textarea
            name="answer"
            required
            rows="4"
            value={formData.answer}
            onChange={handleChange}
            placeholder="Detailed and clear response to help the customer..."
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Display Sequence
            </label>
            <input
              type="number"
              name="order"
              min="1"
              value={formData.order}
              onChange={handleChange}
              className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
            />
          </div>

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
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#23252d]">
          <button
            type="button"
            onClick={() => navigate('/faq/view')}
            className="px-5 py-2.5 rounded-xl border border-[#2e303a] text-gray-300 hover:text-white hover:bg-[#202228] text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
          >
            Save FAQ
          </button>
        </div>
      </form>
    </div>
  );
}
