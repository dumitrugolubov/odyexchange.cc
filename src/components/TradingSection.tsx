import React from 'react';

export function TradingSection() {
  return (
    <section id="trading" className="py-20 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Advanced Trading Platform</h2>
            <p className="text-gray-300 mb-8">
              Experience lightning-fast execution, professional charting tools, and advanced order types on our cutting-edge trading platform.
            </p>
            <div className="space-y-4">
              {[
                "Real-time market data",
                "Advanced charting tools",
                "Multiple order types",
                "Professional trading interface"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"
              alt="Trading Platform"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}