import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SecuritySection } from './components/SecuritySection';
import { Footer } from './components/Footer';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AboutUs } from './components/AboutUs';
import { SecuredChat } from './components/SecuredChat';
import { Connected } from './components/Connected';
import { MCP } from './components/MCP';
import { Blog } from './components/Blog';

export default function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (targetPage: string) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        {page === 'home' && (
          <>
            <Hero />
            <Features />
            <SecuritySection />
          </>
        )}
        {page === 'about' && <AboutUs />}
        {page === 'secured-chat' && <SecuredChat />}
        {page === 'connected' && <Connected />}
        {page === 'mcp' && <MCP />}
        {page === 'blog' && <Blog />}
        {page === 'terms' && <TermsOfService />}
        {page === 'privacy' && <PrivacyPolicy />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
