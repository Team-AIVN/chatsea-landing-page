import React from 'react';

export function AboutUs() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About AIVeNautics</h1>
          <p className="text-xl text-slate-500">Pioneering communication solutions for the modern world and the open seas.</p>
        </div>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Our Mission</h2>
            <p>
              At AIVeNautics, we believe that communication should be boundless, secure, and reliable, whether you are in the comfort of your home or navigating the vast oceans. ChatSea is our flagship product, designed to bridge the gap between land and sea, providing robust connectivity where it matters most.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Who We Are</h2>
            <p>
              Founded by a team of maritime experts and software engineers, AIVeNautics is dedicated to solving the unique challenges of maritime communication. We combine cutting-edge satellite technology with intuitive user interfaces to create software that feels familiar yet performs under the most demanding conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">The Future</h2>
            <p>
              We are constantly innovating to bring better connectivity standards to the maritime industry. Through initiatives like the Maritime Connectivity Platform (MCP), we are setting new standards for how data is exchanged at sea.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
