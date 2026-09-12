import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, CheckCircle2, Flame, Clock, ShieldCheck, Award, Heart } from 'lucide-react';

export default function ViewWhyChooseUs() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Fast & Freshly Cooked',
      description: 'Every order is made-to-order in small batches with pristine culinary standards.',
      icon: Flame,
      order: 1,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Guaranteed 30-Min Delivery',
      description: 'Insulated thermal carriers keep food piping hot right to your doorstep.',
      icon: Clock,
      order: 2,
      status: 'Active',
    },
    {
      id: 3,
      title: '100% Hygienic Kitchen',
      description: 'Certified 5-star cleanliness ratings and strict contact-free food packing.',
      icon: ShieldCheck,
      order: 3,
      status: 'Active',
    },
    {
      id: 4,
      title: 'Award Winning Recipes',
      description: 'Crafted by executive chefs with 15+ years of fine dining gastronomy experience.',
      icon: Award,
      order: 4,
      status: 'Active',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this feature card?')) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Why Choose Us Highlights</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Key brand value propositions showcased to diners on the restaurant app.
          </p>
        </div>

        <Link
          to="/why-choose-us/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Reason
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-[#18191d] border border-[#25272e] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#383a46] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2b1c16] border border-[#ea580c]/30 flex items-center justify-center text-[#ea580c]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#132c20] text-[#4ade80] border border-[#166534]/50">
                    <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#22242c] flex items-center justify-between text-xs text-gray-500">
                <span>Display Priority #{item.order}</span>
                <div className="flex items-center gap-2">
                  <Link
                    to="/why-choose-us/add"
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252832] transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
