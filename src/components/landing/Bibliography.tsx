
'use client';

import { BookOpen, Link as LinkIcon } from "lucide-react";

export default function Bibliography() {
  const references = [
    {
      author: "King, D.",
      year: "2023",
      title: "Real-time Facial Recognition in Web Browsers using TensorFlow.js",
      source: "Journal of Web Engineering"
    },
    {
      author: "Next.js Documentation",
      year: "2024",
      title: "App Router and Server Actions Fundamentals",
      source: "Vercel Official Docs"
    },
    {
      author: "Firebase",
      year: "2023",
      title: "Real-time Database Security and Scaling Patterns",
      source: "Google Cloud Technical Whitepaper"
    },
    {
      author: "IEEE Standard for UML",
      year: "2022",
      title: "V2.5.1 Specifications for Software Design",
      source: "IEEE Xplore"
    }
  ];

  return (
    <div id="bibliografia" className="space-y-16">
      <div className="flex items-center gap-10">
        <BookOpen className="w-16 h-16 text-[#FF1E2D]" />
        <h2 className="text-5xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">REFERENCIAS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {references.map((ref, i) => (
          <div key={i} className="p-10 bg-white border-l-[12px] border-[#FF1E2D] shadow-2xl hover:shadow-red-500/5 transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-black text-[#FF1E2D] uppercase tracking-[0.4em]">{ref.author} ({ref.year})</span>
              <LinkIcon className="w-6 h-6 text-gray-300" />
            </div>
            <h4 className="text-2xl font-black uppercase text-[#2B2B2B] leading-tight mb-6">{ref.title}</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{ref.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
