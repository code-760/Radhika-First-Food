import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, ChevronDown, ChevronUp, Edit2, Trash2, CheckCircle2 } from 'lucide-react';

export default function ViewFaqs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      category: 'Orders & Delivery',
      question: 'How long does average food delivery take?',
      answer:
        'Our guaranteed delivery time is under 30 minutes for locations within a 7-mile radius. In peak hours or adverse weather, you will be notified in real-time on your live order tracker.',
      status: 'Active',
      order: 1,
    },
    {
      id: 2,
      category: 'Menu & Ingredients',
      question: 'Are there vegan and gluten-free options available?',
      answer:
        'Yes! We have extensive vegan bowls, gluten-free crust pizzas, and organic salads clearly tagged in our menu. You can also specify dietary preferences in the order notes.',
      status: 'Active',
      order: 2,
    },
    {
      id: 3,
      category: 'Orders & Delivery',
      question: 'Can I track my delivery rider in real-time?',
      answer:
        'Yes, as soon as our kitchen hands off your package to the rider, a live GPS tracking link is activated in your app and sent via SMS.',
      status: 'Active',
      order: 3,
    },
    {
      id: 4,
      category: 'Payments & Discounts',
      question: 'Which payment methods are accepted at checkout?',
      answer:
        'We accept all major credit/debit cards (Visa, MasterCard, Amex), Apple Pay, Google Pay, and Cash on Delivery.',
      status: 'Active',
      order: 4,
    },
  ]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this FAQ entry?')) {
      setFaqs((prev) => prev.filter((f) => f.id !== id));
    }
  };

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Manage diner FAQs, categories, and published answers.
          </p>
        </div>

        <Link
          to="/faq/add"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-sm font-semibold shadow-lg shadow-orange-950/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </Link>
      </div>

      <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search FAQs by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#131417] border border-[#262830] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3 pt-2">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-[#141519] border border-[#23252d] rounded-xl overflow-hidden transition-all"
              >
                <div
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-[#1a1b22] text-left transition-colors select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-md bg-[#22242c] text-[11px] font-semibold text-orange-400">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm">{item.question}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-[#132c20] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.status}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 py-4 bg-[#111215] border-t border-[#23252d] text-sm text-gray-300 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="flex-1">{item.answer}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to="/faq/add"
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
