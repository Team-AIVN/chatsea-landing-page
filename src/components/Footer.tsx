import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-slate-900 py-8 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} AIVeNautics. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-400 text-sm"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-400 text-sm"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
