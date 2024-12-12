import React from 'react';
import { ArrowRight, Wallet2, Percent, Coins } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Logo className="w-8 h-8" />
            <div className="text-white font-bold text-xl">Odyssey Exchange</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#trading" className="text-gray-300 hover:text-white transition">Trading</a>
            <a href="#rewards" className="text-gray-300 hover:text-white transition">Rewards</a>
          </div>
        </div>
        <a 
          href="https://ody.lol" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-indigo-700 transition"
        >
          <span>Launch App</span>
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}