import React from 'react';
import { Wallet2, Percent, Coins, Shield } from 'lucide-react';

const features = [
  {
    icon: <Wallet2 className="w-6 h-6" />,
    title: "0% Spot Commission",
    description: "Trade with zero commission on all spot trading pairs"
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "10% Liquidation Rebate",
    description: "Get rewarded with 10% rebate on all liquidations"
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "150+ Trading Pairs",
    description: "Access a wide range of cryptocurrency trading pairs"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Trading",
    description: "Advanced security measures to protect your assets"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Odyssey Exchange</h2>
          <p className="text-gray-400">Experience the next generation of crypto trading</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}