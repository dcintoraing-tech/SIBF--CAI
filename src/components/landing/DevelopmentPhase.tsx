'use client';

import { 
  Cpu, 
  Database, 
  Terminal, 
  BrainCircuit, 
  Cloud,
  Layers,
  Code2,
  ScanEye
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
          <Badge className="bg-[#FF1E2D] text-white border-none rounded-none">FACE-API.JS</Badge>
        </div>
      </div>

      <div className="bg-white p-16 border border-gray-100 shadow-2xl space-y-12">
        <div className="flex items-center gap-6">
          <Code2 className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-2xl font-black text-[#2B2B2B] uppercase">MÓDULOS DEL SISTEMA (SERVERLESS)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 border-l-4 border-[#2B2B2B] group hover:border-[#FF1E2D] transition-all">
            <h4 className="text-sm font-black text-[#FF1E2D] mb-4 uppercase">BIOMETRÍA FACIAL</h4>
            <div className="font-mono text-[13px] text-gray-600 space-y-2">
              <p><span className="text-blue-600">const</span> <span className="text-purple-600">faceDetect</span> = <span className="text-blue-600">async</span> () {"=>"} {"{ ... }"}</p>
              <p><span className="text-blue-600">const</span> <span className="text-purple-600">matchEmbed</span> = <span className="text-blue-600">await</span> ai.compare(f);</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-[#2B2B2B] group hover:border-[#FF1E2D] transition-all">
            <h4 className="text-sm font-black text-[#FF1E2D] mb-4 uppercase">CONTROL DE ASISTENCIA</h4>
            <div className="font-mono text-[13px] text-gray-600 space-y-2">
              <p><span className="text-blue-600">export</span> <span className="text-blue-600">function</span> <span className="text-purple-600">saveRecord</span>(u, t) {"{ ... }"}</p>
              <p><span className="text-blue-600">return</span> db.collection(<span className="text-green-600">'logs'</span>).add(u);</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6">
          <div className="flex items-center gap-3">
            <ScanEye className="w-6 h-6 text-[#FF1E2D]" />
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">PRIVACIDAD: PROCESAMIENTO EN CLIENTE</span>
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-[#2B2B2B]" />
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">ESTADO: 100% FUNCIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}