'use client';

import { 
  Terminal, 
  BrainCircuit, 
  Cloud,
  Code2,
  ScanEye,
  Database
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DevelopmentPhase() {
  return (
    <div id="desarrollo" className="space-y-20">
      <div className="space-y-4 text-left">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.8 FASE DE DESARROLLO</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">IMPLEMENTACIÓN SIBF-CAI</h2>
      </div>

      <div className="prose prose-slate max-w-4xl border-l-8 border-[#FF1E2D] pl-10">
        <p className="text-2xl text-gray-600 font-bold uppercase tracking-tight leading-snug">
          INTEGRACIÓN DE <span className="text-[#FF1E2D] font-black">INTELIGENCIA ARTIFICIAL</span> EN TIEMPO REAL CON ARQUITECTURA CLOUD ESCALABLE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-10 shadow-xl border-t-8 border-[#2B2B2B] space-y-6">
          <Terminal className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-[#2B2B2B] uppercase tracking-widest">FRONTEND STACK</h3>
          <ul className="space-y-3 text-sm font-bold text-gray-500 uppercase">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> NEXT.JS 15</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> TYPESCRIPT</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> TAILWIND CSS</li>
          </ul>
        </div>
        <div className="bg-white p-10 shadow-xl border-t-8 border-[#FF1E2D] space-y-6">
          <Cloud className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-[#2B2B2B] uppercase tracking-widest">BACKEND CLOUD</h3>
          <ul className="space-y-3 text-sm font-bold text-gray-500 uppercase">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> FIREBASE AUTH</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> FIRESTORE DB</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> REAL-TIME SYNC</li>
          </ul>
        </div>
        <div className="bg-white p-10 shadow-xl border-t-8 border-[#2B2B2B] group hover:border-[#FF1E2D] transition-all">
          <BrainCircuit className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-[#2B2B2B] uppercase tracking-widest">MOTOR DE IA</h3>
          <div className="text-5xl font-black text-[#FF1E2D]">99%</div>
          <p className="text-[10px] font-black text-gray-400 uppercase">PRECISIÓN DE RECONOCIMIENTO</p>
          <Badge className="bg-[#FF1E2D] text-white border-none rounded-none">TRANSFORMACIÓN DIGITAL</Badge>
        </div>
      </div>

      <div className="bg-white p-16 border border-gray-100 shadow-2xl space-y-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center">
            <ScanEye className="w-20 h-20 text-[#FF1E2D] animate-pulse" />
          </div>
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-tighter">SISTEMA DE ALTA DISPONIBILIDAD</h3>
          <p className="text-lg text-gray-500 font-bold uppercase">
            El sistema opera bajo un entorno distribuido que garantiza que cada registro biométrico se procese en menos de 2 segundos, asegurando la eficiencia institucional total.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6">
            <div className="flex items-center gap-3">
              <ScanEye className="w-6 h-6 text-[#FF1E2D]" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">PRIVACIDAD ASEGURADA</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-[#2B2B2B]" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">ESTADO: 100% OPERATIVO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}