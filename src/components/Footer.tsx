import React from 'react';
import { MessageCircle, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">ChatSea</span>
            </div>
            <p className="text-sm">
              Secure, private, and connected. The best way to chat with your loved ones.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
             <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Social</h3>
             <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ChatSea Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
