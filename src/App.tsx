import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SecuritySection } from './components/SecuritySection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
