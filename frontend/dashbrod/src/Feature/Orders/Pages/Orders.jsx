import React, { useState } from 'react';
import { Search, Eye, Filter, CheckCircle2, Clock, Truck, XCircle } from 'lucide-react';

export default function Orders() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [orders, setOrders] = useState([
    {
      id: '#ORD-9821',
      customer: 'Alice Freeman',
      phone: '+1 (555) 234-5678',
      item: 'Spicy Tuna Bowl x1, Green Tea x1',
      amount: '$24.50',
      time: '12 mins ago',
      payment: 'Credit Card',
      status: 'Preparing',
      statusStyle: 'bg-[#2d2215] text-[#fbbf24] border border-[#784e1b]/50',
    },
    {
      id: '#ORD-9820',
      customer: 'Marcus Johnson',
      phone: '+1 (555) 456-7890',
      item: 'Truffle Burger x1, Crispy Fries x1',
      amount: '$32.00',
      time: '28 mins ago',
      payment: 'Apple Pay',
      status: 'Out for Delivery',
      statusStyle: 'bg-[#172338] text-[#60a5fa] border border-[#1e3a8a]/50',
    },
    {
      id: '#ORD-9819',
      customer: 'Sarah Lee',
      phone: '+1 (555) 890-1234',
      item: 'Avocado Toast with Poached Egg',
      amount: '$18.75',
      time: '45 mins ago',
      payment: 'Cash on Delivery',
      status: 'Completed',
      statusStyle: 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50',
    },
    {
      id: '#ORD-9818',
      customer: 'David Chen',
      phone: '+1 (555) 321-6540',
      item: 'Miso Ramen (Pork Chashu) x1',
      amount: '$21.00',
      time: '1 hour ago',
      payment: 'Credit Card',
      status: 'Completed',
      statusStyle: 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50',
    },
    {
      id: '#ORD-9817',
      customer: 'Emily Davis',
      phone: '+1 (555) 789-0123',
      item: 'Vegan Wrap Combo with Drink',
      amount: '$19.50',
      time: '1 hour ago',
      payment: 'Google Pay',
      status: 'Preparing',
      statusStyle: 'bg-[#2d2215] text-[#fbbf24] border border-[#784e1b]/50',
    },
    {
      id: '#ORD-9816',
      customer: 'Michael Brown',
      phone: '+1 (555) 901-2345',
      item: 'Margherita Pizza 12-inch x2',
      amount: '$34.00',
      time: '2 hours ago',
      payment: 'Credit Card',
      status: 'Completed',
      statusStyle: 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50',
    },
    {
      id: '#ORD-9815',
      customer: 'Jessica Taylor',
      phone: '+1 (555) 678-9012',
      item: 'Cheeseburger Classic Deluxe',
      amount: '$16.50',
      time: '3 hours ago',
      payment: 'Credit Card',
      status: 'Cancelled',
      statusStyle: 'bg-[#2d1719] text-[#f87171] border border-red-900/50',
    },
  ]);

  const tabs = ['All', 'Preparing', 'Out for Delivery', 'Completed', 'Cancelled'];

  const filteredOrders = orders.filter((o) => {
    const matchesTab = activeTab === 'All' || o.status === activeTab;
    const matchesSearch =
      o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.item.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Orders Management</h2>
        <p className="text-sm text-gray-400 mt-0.5">
          Real-time stream of incoming customer food orders and fulfillment statuses.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-[#2b1c16] text-[#ea580c] border border-[#ea580c]/40'
                : 'bg-[#18191d] text-gray-400 hover:text-white border border-[#23252d]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Table Card */}
      <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search order ID, customer or items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#131417] border border-[#262830] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-[#23252d] text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                <th className="py-3 px-3">ORDER ID</th>
                <th className="py-3 px-3">CUSTOMER</th>
                <th className="py-3 px-3">ITEMS</th>
                <th className="py-3 px-3">AMOUNT</th>
                <th className="py-3 px-3">PAYMENT</th>
                <th className="py-3 px-3 text-center">STATUS</th>
                <th className="py-3 px-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#21232a] text-sm">
              {filteredOrders.map((o) => (
                <tr key={o.id} className="hover:bg-[#1f2127]/60 transition-colors group">
                  <td className="py-4 px-3 font-semibold text-gray-300 text-xs">
                    {o.id}
                    <span className="block text-[11px] text-gray-500 font-normal mt-0.5">
                      {o.time}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <p className="font-medium text-white">{o.customer}</p>
                    <p className="text-xs text-gray-500">{o.phone}</p>
                  </td>
                  <td className="py-4 px-3 text-gray-300 text-xs max-w-xs truncate">
                    {o.item}
                  </td>
                  <td className="py-4 px-3 font-semibold text-white">
                    {o.amount}
                  </td>
                  <td className="py-4 px-3 text-xs text-gray-400">
                    {o.payment}
                  </td>
                  <td className="py-4 px-3 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${o.statusStyle}`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-right">
                    <button
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#252832] transition-colors"
                      title="View Order Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
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
