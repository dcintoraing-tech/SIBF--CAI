'use client';

import { Terminal, BrainCircuit, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DevelopmentPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">FASE DE DESARROLLO</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">IMPLEMENTACIÓN</h2>
      </div>

      <p className="text-sm md:text-4xl text-gray-600 font-bold uppercase leading-tight max-w-4xl border-l-[6px] md:border-l-[12px] border-[#FF1E2D] pl-4 md:pl-8">
        INTEGRACIÓN DE <span className="text-[#FF1E2D] font-black">INTELIGENCIA ARTIFICIAL</span> EN TIEMPO REAL CON CLOUD.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="bg-white p-4 md:p-10 shadow-lg border-t-[4px] md:border-t-[8px] border-[#2B2B2B] space-y-4">
          <Terminal className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D]" />
          <h3 className="text-sm md:text-2xl font-black text-[#2B2B2B] uppercase tracking-widest">FRONTEND</h3>
          <ul className="space-y-2 text-[10px] md:text-lg font-bold text-gray-500 uppercase">
            <li>• NEXT.JS 15</li>
            <li>• TYPESCRIPT</li>
            <li>• TAILWIND CSS</li>
          </ul>
        </div>
        <div className="bg-white p-4 md:p-10 shadow-lg border-t-[4px] md:border-t-[8px] border-[#FF1E2D] space-y-4">
          <Cloud className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D]" />
          <h3 className="text-sm md:text-2xl font-black text-[#2B2B2B] uppercase tracking-widest">BACKEND</h3>
          <ul className="space-y-2 text-[10px] md:text-lg font-bold text-gray-500 uppercase">
            <li>• FIREBASE AUTH</li>
            <li>• FIRESTORE DB</li>
            <li>• REAL-TIME SYNC</li>
          </ul>
        </div>
        <div className="bg-[#2B2B2B] p-4 md:p-10 shadow-lg text-center flex flex-col items-center justify-center">
          <BrainCircuit className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mb-4 animate-bounce" />
          <div className="text-3xl md:text-7xl font-black text-[#FF1E2D]">99%</div>
          <p className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase mt-2 mb-4">PRECISIÓN IA</p>
          <Badge className="bg-[#FF1E2D] text-white rounded-none text-[8px] md:text-[10px] py-1 px-4">TRANSFORMACIÓN</Badge>
        </div>
      </div>
    </div>
  );
}
