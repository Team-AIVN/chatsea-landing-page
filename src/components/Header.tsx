import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 fill-blue-700 text-blue-700" />
          <span className="text-xl font-bold text-slate-900">ChatSea</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {/* Add nav links if needed, purely visual here based on image */}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-slate-700 hover:text-slate-900 font-medium">
            Log in
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
