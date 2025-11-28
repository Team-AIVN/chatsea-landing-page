import React from 'react';
import { Globe, Smartphone, Wifi } from 'lucide-react';

export function Connected() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
       <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Always Connected</h1>
          <p className="text-xl text-slate-500">Seamless communication across devices, oceans, and borders.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
             <div className="space-y-2 border p-4 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold">Global Reach</h3>
                <p className="text-sm text-slate-600">Optimized for low-bandwidth environments, ensuring messages get through even on satellite connections.</p>
             </div>
             <div className="space-y-2 border p-4 rounded-lg">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold">Multi-Device Sync</h3>
                <p className="text-sm text-slate-600">Start a conversation on your phone and finish it on your tablet or ship bridge console.</p>
             </div>
             <div className="space-y-2 border p-4 rounded-lg">
                <Wifi className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold">Offline Mode</h3>
                <p className="text-sm text-slate-600">Queue messages when you're out of range. They'll send automatically when you reconnect.</p>
             </div>
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Reliability at Sea</h2>
            <p>
              Standard messaging apps fail when the connection drops or becomes unstable. ChatSea is built with a "store-and-forward" architecture that is resilient to the intermittent connectivity often found in maritime environments.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
