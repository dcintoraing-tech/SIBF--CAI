'use client';

import { 
  Cpu, 
  Database, 
  Terminal, 
  BrainCircuit, 
  Layers,
  Workflow,
  Code2
} from "lucide-react";

export default function DevelopmentPhase() {
  return (
    <div id="desarrollo" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.7 FASE DE DESARROLLO</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">IMPLEMENTACIÓN</h2>
      </div>

      <div className="prose prose-slate max-w-4xl border-l-8 border-[#FF1E2D] pl-10">
        <p className="text-3xl text-gray-600 font-bold uppercase tracking-tight leading-snug">
          Utilizamos <span className="text-[#FF1E2D] font-black">INTELIGENCIA ARTIFICIAL</span> en tiempo real directamente en el navegador del cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-[#2B2B2B] p-12 shadow-2xl space-y-6">
          <Terminal className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-white uppercase tracking-widest">FRONTEND STACK</h3>
          <ul className="space-y-3 text-sm font-bold text-gray-400 uppercase">
            <li>• NEXT.JS 15</li>
            <li>• TYPESCRIPT</li>
            <li>• TAILWIND CSS</li>
          </ul>
        </div>
        <div className="bg-[#2B2B2B] p-12 shadow-2xl space-y-6">
          <Database className="w-10 h-10 text-white" />
          <h3 className="text-xl font-black text-white uppercase tracking-widest">BACKEND CLOUD</h3>
          <ul className="space-y-3 text-sm font-bold text-gray-400 uppercase">
            <li>• FIREBASE AUTH</li>
            <li>• FIRESTORE DB</li>
            <li>• REAL-TIME SYNC</li>
          </ul>
        </div>
        <div className="bg-[#FF1E2D] p-12 shadow-2xl space-y-6">
          <BrainCircuit className="w-10 h-10 text-white" />
          <h3 className="text-xl font-black text-white uppercase tracking-widest">MOTOR DE IA</h3>
          <div className="text-3xl font-black text-white">99%</div>
          <p className="text-[10px] font-black text-white/70 uppercase">PRECISIÓN BIOMÉTRICA</p>
        </div>
      </div>

      <div className="bg-slate-50 p-16 border border-gray-100 space-y-12">
        <div className="flex items-center gap-6">
          <Code2 className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-2xl font-black text-[#2B2B2B] uppercase">MÓDULOS DEL SISTEMA</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-8 font-mono text-sm shadow-xl">
            <span className="text-[#FF1E2D]">func</span> ReconocimientoFacial() <span className="text-gray-500">{"{ ... }"}</span>
          </div>
          <div className="bg-[#1A1A1A] p-8 font-mono text-sm shadow-xl">
            <span className="text-[#FF1E2D]">func</span> RegistroAsistencia() <span className="text-gray-500">{"{ ... }"}</span>
          </div>
        </div>
        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-widest">
          "Privacidad garantizada: La IA se ejecuta exclusivamente en el cliente."
        </p>
      </div>
    </div>
  );
}
