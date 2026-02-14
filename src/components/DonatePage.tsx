import { useState } from 'react';
import { Heart, DollarSign, TrendingUp, Users, Award } from 'lucide-react';

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [purpose, setPurpose] = useState('scholarship');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000, 100000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    alert(`Thank you for your donation of ₦${amount.toLocaleString()}!`);
  };

  const stats = [
    { label: 'Total Raised', value: '₦5.2M', icon: TrendingUp },
    { label: 'Donors', value: '245', icon: Users },
    { label: 'Scholarships', value: '28', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-[#dc2626] mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Support DEMOSA</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps fund scholarships, improve school facilities, and support current students
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div className="text-3xl font-bold text-[#1e293b] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Make a Donation</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 rounded-lg font-semibold transition-all ${
                      selectedAmount === amount
                        ? 'bg-[#1e40af] text-white'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-[#1e40af]'
                    }`}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Or enter custom amount"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Donation Purpose
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none"
                required
              >
                <option value="scholarship">Student Scholarships</option>
                <option value="infrastructure">School Infrastructure</option>
                <option value="equipment">Learning Equipment</option>
                <option value="general">General DEMOSA Fund</option>
              </select>
            </div>

            {/* Anonymous */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 text-[#1e40af] border-gray-300 rounded focus:ring-[#1e40af]"
              />
              <label htmlFor="anonymous" className="ml-3 text-sm font-semibold text-gray-700">
                Make this donation anonymous
              </label>
            </div>

            <button
              type="submit"
              disabled={!selectedAmount && !customAmount}
              className="w-full bg-[#dc2626] hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Complete Donation
            </button>
          </form>
        </div>

        {/* Impact Section */}
        <div className="mt-12 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">₦10,000</h4>
              <p className="text-blue-100 text-sm">Provides textbooks for 5 students</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">₦50,000</h4>
              <p className="text-blue-100 text-sm">Funds a semester scholarship</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">₦100,000</h4>
              <p className="text-blue-100 text-sm">Equips a science laboratory</p>
            </div>
          </div>
        </div>

        {/* Recent Donors */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#1e293b] mb-6">Recent Donors</h3>
          <div className="bg-white rounded-xl shadow-md divide-y">
            {[
              { name: 'Adebayo Johnson', amount: 100000, purpose: 'Scholarship Fund' },
              { name: 'Anonymous', amount: 50000, purpose: 'Infrastructure' },
              { name: 'Chioma Okafor', amount: 25000, purpose: 'General Fund' },
            ].map((donor, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1e293b]">{donor.name}</p>
                  <p className="text-sm text-gray-600">{donor.purpose}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1e40af]">₦{donor.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
