import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, CheckCircle2, Eye, ExternalLink } from 'lucide-react';

export default function ViewSliders() {
  const [sliders, setSliders] = useState([
    {
      id: 1,
      title: '50% Off Gourmet Smashed Burgers',
      subtitle: 'Chef-curated blend with aged cheddar cheese',
      buttonText: 'Order Online',
      linkUrl: '/products/view',
      status: 'Active',
      order: 1,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&h=300&q=80',
    },
    {
      id: 2,
      title: 'Steaming Hot Traditional Ramen',
      subtitle: 'Simmered broth for 14 hours with chashu pork',
      buttonText: 'Explore Menu',
      linkUrl: '/products/view',
      status: 'Active',
      order: 2,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&h=300&q=80',
    },
    {
      id: 3,
      title: 'Authentic Woodfired Pizza Fiesta',
      subtitle: 'Fresh buffalo mozzarella and Italian basil',
      buttonText: 'Get Pizza',
      linkUrl: '/products/view',
      status: 'Inactive',
      order: 3,
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&h=300&q=80',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Remove this slider banner?')) {
      setSliders((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Sliders & Promotional Banners</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Manage dynamic hero carousel banners appearing on the food app home screen.
          </p>
        </div>

        <Link
          to="/slider/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Slider
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliders.map((s) => (
          <div
            key={s.id}
            className="bg-[#18191d] border border-[#25272e] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#3a3d48] transition-colors"
          >
            {/* Banner Preview */}
            <div className="relative h-44 bg-[#111215]">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                    s.status === 'Active'
                      ? 'bg-[#132c20]/90 text-[#4ade80] border border-[#166534]'
                      : 'bg-[#262830]/90 text-gray-400 border border-gray-600'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {s.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="px-2 py-0.5 rounded bg-black/70 text-[11px] font-bold text-white">
                  Sequence #{s.order}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-white font-bold text-base leading-snug">{s.title}</h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{s.subtitle}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-orange-400 font-medium">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>CTA: "{s.buttonText}" &rarr; {s.linkUrl}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-[#23252d] flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">ID: #{s.id}</span>
                <div className="flex items-center gap-2">
                  <Link
                    to="/slider/add"
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252832] transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
