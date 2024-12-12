import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-black to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Crypto Trading</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            First memecoin-based exchange offering 0% spot commission and 10% liquidation rebate with 150+ crypto pairs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-indigo-700 transition"
            >
              <span>Start Trading</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://www.odyssey.trade/en_US/register?inviteCode=EAATH"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              View Rewards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}