'use client';

import { History, ShieldAlert, FileX, Clock, CircleAlert } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN" },
    { icon: FileX, text: "FRAGMENTACIÓN" },
    { icon: Clock, text: "LATENCIA" },
    { icon: CircleAlert, text: "ERROR HUMANO" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[1]">
          PLANTEAMIENTO DEL <br className="hidden md:block" /> <span className="red-gradient-text text-3xl md:text-7xl">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="space-y-6 md:space-y-10">
          <p className="text-sm md:text-4xl text-gray-600 leading-[1.2] font-medium">
            El control de asistencia institucional ha dependido históricamente de procesos <span className="text-[#FF1E2D] font-black text-xl md:text-5xl">ANALÓGICOS</span>.
          </p>
          <div className="flex gap-4 md:gap-8 items-start p-6 md:p-10 bg-slate-50 border-l-[6px] md:border-l-[12px] border-[#FF1E2D] shadow-xl">
            <History className="w-8 h-8 md:w-14 md:h-14 text-[#FF1E2D] shrink-0" />
            <div>
              <h4 className="text-xs md:text-2xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
              <p className="text-[8px] md:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Altamente vulnerables a la alteración intencionada de datos.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 bg-[#FF1E2D] p-6 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rotate-45" />
          <h4 className="text-[10px] md:text-sm font-black text-white uppercase tracking-[0.4em] mb-4 border-b border-white/20 pb-4 inline-block">VULNERABILIDADES CRÍTICAS</h4>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4 bg-white/10 p-4 md:p-6 border border-white/10 backdrop-blur-md">
                <item.icon className="w-4 h-4 md:w-8 md:h-8 text-white shrink-0" />
                <span className="text-[8px] md:text-lg font-black text-white uppercase tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
