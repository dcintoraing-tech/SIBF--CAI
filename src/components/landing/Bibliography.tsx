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
    <div id="bibliografia" className="space-y-12">
      <div className="flex items-center gap-6">
        <BookOpen className="w-10 h-10 text-[#FF1E2D]" />
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight uppercase italic">REFERENCIAS BIBLIOGRÁFICAS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((ref, i) => (
          <div key={i} className="p-6 bg-white border-l-4 border-[#FF1E2D] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black text-[#FF1E2D] uppercase tracking-widest">{ref.author} ({ref.year})</span>
              <LinkIcon className="w-4 h-4 text-gray-300" />
            </div>
            <h4 className="text-sm font-black uppercase text-[#2B2B2B] leading-tight mb-2">{ref.title}</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase">{ref.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
