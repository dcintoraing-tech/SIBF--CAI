'use client';

import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  FileSpreadsheet
} from "lucide-react";

export default function Methodology() {
  return (
    <div id="metodologia" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.4 METODOLOGÍA</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">AGILIDAD SCRUM</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-12 bg-white border border-gray-100 shadow-xl text-center space-y-6">
          <Users className="w-16 h-16 text-[#FF1E2D] mx-auto" />
          <h3 className="text-2xl font-black text-[#2B2B2B] uppercase">EQUIPO</h3>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Roles definidos para una gestión de alta eficiencia.</p>
        </div>
        <div className="p-12 bg-white border border-gray-100 shadow-xl text-center space-y-6">
          <RotateCw className="w-16 h-16 text-[#FF1E2D] mx-auto" />
          <h3 className="text-2xl font-black text-[#2B2B2B] uppercase">SPRINTS</h3>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Ciclos de 2 semanas con entregables funcionales.</p>
        </div>
        <div className="p-12 bg-white border border-gray-100 shadow-xl text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-[#FF1E2D] mx-auto" />
          <h3 className="text-2xl font-black text-[#2B2B2B] uppercase">VALOR</h3>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">Entregas continuas alineadas a metas institucionales.</p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-20 text-center space-y-10 shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          <Clock className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black text-white uppercase italic">CRONOGRAMA DE TRABAJO</h3>
        </div>
        <p className="text-xl text-gray-400 font-bold uppercase tracking-[0.2em]">Ejecución total estimada: 16 Semanas</p>
        <div className="flex justify-center">
          <div className="bg-white/10 px-10 py-4 flex items-center gap-6 border border-white/20">
             <FileSpreadsheet className="w-10 h-10 text-[#FF1E2D]" />
             <span className="text-lg font-black text-white uppercase tracking-widest">VER BACKLOG DETALLADO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
