import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "Introducing ChatSea 2.0: The Future of Maritime Comms",
      excerpt: "We've completely rebuilt our engine to support the new MCP standards. Here's what that means for you.",
      date: "October 15, 2023",
      author: "Sarah Jenkins",
      category: "Product Update"
    },
    {
      id: 2,
      title: "Why End-to-End Encryption Matters at Sea",
      excerpt: "Maritime cyber security is more important than ever. Learn how encryption protects your crew and cargo data.",
      date: "September 28, 2023",
      author: "David Chen",
      category: "Security"
    },
    {
      id: 3,
      title: "Navigating Low Bandwidth: Tips for Satellite Users",
      excerpt: "Getting the most out of your connection when you're thousands of miles from shore.",
      date: "August 10, 2023",
      author: "Maria Rodriguez",
      category: "Guides"
    },
    {
      id: 4,
      title: "AIVeNautics Partners with Global Shipping Leaders",
      excerpt: "We are excited to announce our new strategic partnerships to bring ChatSea to commercial fleets worldwide.",
      date: "July 22, 2023",
      author: "James Wilson",
      category: "Company News"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">The ChatSea Blog</h1>
        <p className="text-xl text-slate-500 max-w-[700px]">Latest news, updates, and stories from the AIVeNautics team.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                 <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                 <span className="text-blue-600 font-medium px-2 py-0.5 bg-blue-50 rounded-full text-xs">{post.category}</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 flex-1 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t">
                 <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-slate-500" />
                    </div>
                    {post.author}
                 </div>
                 <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
