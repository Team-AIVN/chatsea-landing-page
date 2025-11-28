import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';

export function SecuredChat() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Secured Chat</h1>
          <p className="text-xl text-slate-500">Your conversations belong to you. Period.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-slate-600 text-sm">Messages are encrypted on your device and can only be read by the recipient.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <Lock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Data Collection</h3>
                <p className="text-slate-600 text-sm">We don't track your location, listen to your calls, or scan your messages for ads.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
                <Key className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Self-Destructing Messages</h3>
                <p className="text-slate-600 text-sm">Set timers for sensitive messages to automatically disappear from both devices.</p>
            </div>
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">How it works</h2>
            <p>
              ChatSea uses the Signal Protocol, the industry standard for secure messaging. When you send a message, it is locked with a cryptographic key that only the recipient's device has. This means that even if our servers were compromised, your messages would remain unreadable.
            </p>
          </section>
          
           <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Privacy by Design</h2>
            <p>
              We believe privacy is a fundamental human right. That's why we've built ChatSea from the ground up to collect as little metadata as possible. We don't know who you're messaging or when.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
