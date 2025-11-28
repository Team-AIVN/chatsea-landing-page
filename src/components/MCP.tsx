import React from 'react';

export function MCP() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
       <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
             Technology
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Maritime Connectivity Platform (MCP)</h1>
          <p className="text-xl text-slate-500">The digital framework for the future of maritime navigation and communication.</p>
        </div>
        
        <div className="space-y-8 text-slate-700 leading-relaxed mt-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">What is MCP?</h2>
            <p>
              The Maritime Connectivity Platform (MCP) is an open-source communication framework that enables efficient, secure, and reliable information exchange between maritime actors. It acts as a "maritime internet," providing a standardized way for ships, shore stations, and other entities to discover and connect with each other.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Identity Management</h2>
            <p>
              At the core of MCP is the Maritime Identity Registry (MIR). ChatSea utilizes this registry to authenticate users and vessels, ensuring that you know exactly who you are communicating with. This eliminates the risk of spoofing and unauthorized access in critical maritime communications.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Service Registry</h2>
            <p>
              MCP includes a Maritime Service Registry (MSR) that allows vessels to broadcast their capabilities and subscribe to relevant services (like weather updates, navigational warnings, or port logistics) dynamically.
            </p>
          </section>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Why it matters for ChatSea users</h3>
              <p className="text-slate-600">
                  By integrating with MCP, ChatSea isn't just a chat app—it's a certified maritime communication tool. It allows for official communication channels that are recognized by maritime authorities, seamlessly blended with the ease of use of a modern messaging application.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
