
'use client';

import { 
  Terminal, 
  BrainCircuit, 
  Cloud,
  ScanEye,
  Database
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DevelopmentPhase() {
  return (
    <div id="desarrollo" className="space-y-32">
      <div className="space-y-4 text-left">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">FASE DE DESARROLLO</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">IMPLEMENTACIÓN SIBF-CAI</h2>
      </div>

      <div className="prose prose-slate max-w-6xl border-l-[16px] border-[#FF1E2D] pl-16">
        <p className="text-3xl md:text-5xl text-gray-600 font-bold uppercase tracking-tight leading-snug">
          INTEGRACIÓN DE <span className="text-[#FF1E2D] font-black">INTELIGENCIA ARTIFICIAL</span> EN TIEMPO REAL CON ARQUITECTURA CLOUD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white p-12 shadow-2xl border-t-[12px] border-[#2B2B2B] space-y-8">
          <Terminal className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-widest">FRONTEND STACK</h3>
          <ul className="space-y-5 text-lg font-bold text-gray-500 uppercase">
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> NEXT.JS 15</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> TYPESCRIPT</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> TAILWIND CSS</li>
          </ul>
        </div>
        <div className="bg-white p-12 shadow-2xl border-t-[12px] border-[#FF1E2D] space-y-8">
          <Cloud className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-widest">BACKEND CLOUD</h3>
          <ul className="space-y-5 text-lg font-bold text-gray-500 uppercase">
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> FIREBASE AUTH</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> FIRESTORE DB</li>
            <li className="flex items-center gap-4"><div className="w-3 h-3 bg-[#FF1E2D]" /> REAL-TIME SYNC</li>
          </ul>
        </div>
        <div className="bg-white p-12 shadow-2xl border-t-[12px] border-[#2B2B2B] group hover:border-[#FF1E2D] transition-all flex flex-col justify-center text-center">
          <BrainCircuit className="w-16 h-16 text-[#FF1E2D] mx-auto mb-6" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-widest mb-4">MOTOR DE IA</h3>
          <div className="text-7xl font-black text-[#FF1E2D]">99%</div>
          <p className="text-sm font-black text-gray-400 uppercase mt-4 mb-6">PRECISIÓN DE RECONOCIMIENTO</p>
          <Badge className="bg-[#FF1E2D] text-white border-none rounded-none py-2 px-6">TRANSFORMACIÓN DIGITAL</Badge>
        </div>
      </div>
    </div>
  );
}
