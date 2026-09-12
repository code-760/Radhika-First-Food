import React from 'react';
import {
  FileText,
  Banknote,
  Users,
  ClipboardList,
  TrendingUp,
  TrendingDown,
  MoreVertical,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Stat cards matching the reference screenshot
  const statCards = [
    {
      id: 'orders',
      title: 'TOTAL ORDERS',
      value: '1,284',
      change: '+12.4%',
      isPositive: true,
      icon: FileText,
      iconBg: 'bg-[#22242b]',
      iconColor: 'text-gray-300',
    },
    {
      id: 'revenue',
      title: 'TOTAL REVENUE',
      value: '$45,230',
      change: '+8.2%',
      isPositive: true,
      icon: Banknote,
      iconBg: 'bg-[#22242b]',
      iconColor: 'text-emerald-400',
    },
    {
      id: 'users',
      title: 'ACTIVE USERS',
      value: '3,421',
      change: '+15.1%',
      isPositive: true,
      icon: Users,
      iconBg: 'bg-[#22242b]',
      iconColor: 'text-gray-300',
    },
    {
      id: 'pending',
      title: 'PENDING ORDERS',
      value: '23',
      change: '-4.3%',
      isPositive: false,
      icon: ClipboardList,
      iconBg: 'bg-[#2b1f1a]',
      iconColor: 'text-[#ea580c]',
    },
  ];

  // Recent orders matching the reference screenshot
  const recentOrders = [
    {
      id: '#ORD-9821',
      customer: 'Alice Freeman',
      item: 'Spicy Tuna Bowl',
      amount: '$24.50',
      status: 'Preparing',
      statusStyle: 'bg-[#2d2215] text-[#fbbf24] border border-[#784e1b]/50',
    },
    {
      id: '#ORD-9820',
      customer: 'Marcus Johnson',
      item: 'Truffle Burger ..',
      amount: '$32.00',
      status: 'Out for Delivery',
      statusStyle: 'bg-[#172338] text-[#60a5fa] border border-[#1e3a8a]/50',
    },
    {
      id: '#ORD-9819',
      customer: 'Sarah Lee',
      item: 'Avocado Toast...',
      amount: '$18.75',
      status: 'Completed',
      statusStyle: 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50',
    },
    {
      id: '#ORD-9818',
      customer: 'David Chen',
      item: 'Miso Ramen',
      amount: '$21.00',
      status: 'Completed',
      statusStyle: 'bg-[#132c20] text-[#4ade80] border border-[#166534]/50',
    },
    {
      id: '#ORD-9817',
      customer: 'Emily Davis',
      item: 'Vegan Wrap C...',
      amount: '$19.50',
      status: 'Preparing',
      statusStyle: 'bg-[#2d2215] text-[#fbbf24] border border-[#784e1b]/50',
    },
  ];

  // Top selling items matching the reference screenshot
  const topSellingItems = [
    {
      id: 1,
      title: 'Classic Cheeseburger',
      ingredients: 'Beef, Cheddar, Brioche',
      sales: '342',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 2,
      title: 'Spicy Tuna Bowl',
      ingredients: 'Tuna, Avocado, Rice',
      sales: '289',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 3,
      title: 'Miso Ramen',
      ingredients: 'Pork, Egg, Noodles',
      sales: '215',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=160&h=160&q=80',
    },
    {
      id: 4,
      title: 'Margherita Pizza',
      ingredients: 'Tomato, Basil, Mozzarella',
      sales: '187',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=160&h=160&q=80',
    },
  ];

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 shadow-sm hover:border-[#353842] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>

                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    card.isPositive
                      ? 'bg-[#14281f] text-[#22c55e] border border-emerald-800/40'
                      : 'bg-[#2f181b] text-[#f87171] border border-red-900/40'
                  }`}
                >
                  {card.isPositive ? (
                    <TrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5" />
                  )}
                  <span>{card.change}</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[12px] font-bold text-gray-400 tracking-wider">
                  {card.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {card.value}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Recent Orders & Top Selling Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Recent Orders (Spans 2 columns on lg/xl screens) */}
        <div className="lg:col-span-2 bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg tracking-tight">
                Recent Orders
              </h3>
              <Link
                to="/orders"
                className="text-[#ea580c] hover:text-[#f97316] text-sm font-semibold transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Orders Table Container */}
            <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-[#23252d] text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    <th className="py-3 px-3">ID</th>
                    <th className="py-3 px-3">CUSTOMER</th>
                    <th className="py-3 px-3">ITEM</th>
                    <th className="py-3 px-3">AMOUNT</th>
                    <th className="py-3 px-3 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#21232a] text-sm">
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-[#1f2127]/60 transition-colors group"
                    >
                      <td className="py-4 px-3 font-semibold text-gray-300 text-xs">
                        {order.id}
                      </td>
                      <td className="py-4 px-3 font-medium text-white">
                        {order.customer}
                      </td>
                      <td className="py-4 px-3 text-gray-300">
                        {order.item}
                      </td>
                      <td className="py-4 px-3 font-medium text-white">
                        {order.amount}
                      </td>
                      <td className="py-4 px-3 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.statusStyle}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Top Selling Items (Spans 1 column) */}
        <div className="bg-[#18191d] border border-[#25272e] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg tracking-tight">
                Top Selling Items
              </h3>
              <button
                type="button"
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#23252c] transition-colors"
                aria-label="More options"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              {topSellingItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-1.5 rounded-xl hover:bg-[#202228]/50 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-13 h-13 rounded-xl object-cover ring-1 ring-[#2a2c34]"
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&h=120&q=80';
                      }}
                    />
                    <div>
                      <h4 className="text-white font-semibold text-[14px] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-gray-400 mt-1">
                        {item.ingredients}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-white font-bold text-base leading-tight">
                      {item.sales}
                    </p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Sales
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-6 pt-2">
            <Link
              to="/products/view"
              className="w-full block py-2.5 px-4 rounded-xl border border-[#ea580c]/60 text-[#ea580c] hover:bg-[#ea580c]/10 text-center text-sm font-semibold transition-colors"
            >
              View Full Menu Stats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
