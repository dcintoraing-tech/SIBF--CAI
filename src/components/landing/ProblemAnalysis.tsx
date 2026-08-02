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
    <div className="w-full h-full flex flex-col justify-center space-y-8 md:space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-black text-xs md:text-2xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[0.9]">
          PLANTEAMIENTO DEL <br className="hidden md:block" /> <span className="red-gradient-text text-4xl md:text-9xl">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="space-y-10">
          <p className="text-lg md:text-6xl text-gray-600 leading-[1.1] font-medium">
            El control de asistencia institucional ha dependido históricamente de procesos <span className="text-[#FF1E2D] font-black text-3xl md:text-8xl">ANALÓGICOS</span>.
          </p>
          <div className="flex gap-8 items-start p-8 bg-slate-50 border-l-[10px] md:border-l-[20px] border-[#FF1E2D] shadow-2xl">
            <History className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] shrink-0" />
            <div>
              <h4 className="text-sm md:text-3xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
              <p className="text-[10px] md:text-xl text-gray-400 font-bold uppercase tracking-widest mt-2">Altamente vulnerables a la alteración intencionada de datos.</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 bg-[#FF1E2D] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rotate-45" />
          <h4 className="text-[12px] md:text-xl font-black text-white uppercase tracking-[0.6em] mb-10 border-b border-white/20 pb-6 inline-block">VULNERABILIDADES CRÍTICAS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {challenges.map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8 bg-white/10 p-6 md:p-8 border border-white/10 backdrop-blur-md">
                <item.icon className="w-6 h-6 md:w-12 md:h-12 text-white shrink-0" />
                <span className="text-[12px] md:text-2xl font-black text-white uppercase tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
