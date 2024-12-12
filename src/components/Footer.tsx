import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Odyssey Exchange</h3>
            <p className="mb-4">The future of crypto trading with zero commission and high rewards.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition"><MessageCircle size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Trading</a></li>
              <li><a href="#" className="hover:text-white transition">Rewards</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <p>&copy; {new Date().getFullYear()} Odyssey Exchange. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-500">
            <div>
              <h5 className="font-semibold mb-2">About Odyssey Exchange</h5>
              <p>The premier memecoin-based cryptocurrency exchange platform offering innovative trading solutions and unmatched rewards.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Trading Features</h5>
              <p>Experience seamless trading on Odyssey Exchange with our advanced platform, featuring zero commission spot trading and generous liquidation rebates.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">ODY Exchange Benefits</h5>
              <p>Join the Odyssey community and enjoy exclusive benefits, including reduced fees, trading rewards, and access to premium features.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Odyssey Memes</h5>
              <p>Trade and earn with the first meme-powered exchange platform, combining humor with serious trading capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}