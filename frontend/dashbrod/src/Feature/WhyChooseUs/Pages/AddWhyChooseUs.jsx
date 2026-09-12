import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Award, Flame, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function AddWhyChooseUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    iconName: 'Flame',
    status: 'Active',
    order: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const icons = [
    { name: 'Flame', label: 'Fast & Fresh Cooked', icon: Flame },
    { name: 'Clock', label: 'Under 30 Min Delivery', icon: Clock },
    { name: 'ShieldCheck', label: '100% Hygienic Kitchen', icon: ShieldCheck },
    { name: 'Award', label: 'Master Chef Quality', icon: Award },
    { name: 'Heart', label: 'Farm-to-Table Ingredients', icon: Heart },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/why-choose-us/view');
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
            Back to Why Choose Us
          </button>
          <h2 className="text-2xl font-bold text-white tracking-tight">Add Value Proposition</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Highlight special features, guarantees, or qualities that set Foodies apart.
          </p>
        </div>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-[#14281f] border border-emerald-800/60 text-emerald-400 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          Feature point saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Feature Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. 100% Organic & Farm-Fresh Produce"
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Description / Reason *
          </label>
          <textarea
            name="subtitle"
            required
            rows="3"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Describe why customers love this aspect of your food and service..."
            className="w-full bg-[#131417] border border-[#262830] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all resize-none"
          />
        </div>

        {/* Choose Icon */}
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Select Feature Badge Icon
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {icons.map((item) => {
              const Icon = item.icon;
              const isSelected = formData.iconName === item.name;
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setFormData((prev) => ({ ...prev, iconName: item.name }))}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#2b1c16] border-[#ea580c] text-white'
                      : 'bg-[#131417] border-[#262830] text-gray-400 hover:text-white hover:bg-[#1a1b22]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#ea580c] text-white' : 'bg-[#20222a] text-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
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
            onClick={() => navigate('/why-choose-us/view')}
            className="px-5 py-2.5 rounded-xl border border-[#2e303a] text-gray-300 hover:text-white hover:bg-[#202228] text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
          >
            Save Reason
          </button>
        </div>
      </form>
    </div>
  );
}
