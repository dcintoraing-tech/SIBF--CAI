'use client';

import { History, ShieldAlert, FileX, Clock, CircleAlert, TrendingUp } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN" },
    { icon: FileX, text: "FRAGMENTACIÓN" },
    { icon: Clock, text: "LATENCIA" },
    { icon: CircleAlert, text: "ERROR HUMANO" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-2 md:space-y-4">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">ANTECEDENTES</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
          PLANTEAMIENTO DEL <span className="red-gradient-text">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
        <div className="space-y-4">
          <p className="text-base md:text-4xl text-gray-600 leading-tight font-medium">
            El control de asistencia ha dependido de procesos <span className="text-[#FF1E2D] font-black text-xl md:text-6xl">ANALÓGICOS</span> obsoletos.
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            <div className="flex gap-4 items-start p-4 bg-slate-50 border-l-[4px] md:border-l-[8px] border-[#FF1E2D] shadow-sm">
              <History className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-[10px] md:text-base font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
                <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase leading-tight">Vulnerables a la alteración de datos.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-[#2B2B2B] text-white border-l-[4px] md:border-l-[8px] border-[#FF1E2D]">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-[10px] md:text-base font-black uppercase italic">DEMANDA TECNOLÓGICA</h4>
                <p className="text-[8px] md:text-xs text-gray-500 font-bold uppercase leading-tight">Digitalización inmediata requerida.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-base md:text-3xl text-gray-600 leading-tight font-medium">
            La integridad nace de sistemas que evitan la <span className="text-[#2B2B2B] font-black text-xl md:text-5xl">SUPLANTACIÓN</span> de identidad.
          </p>
          <div className="bg-[#FF1E2D] p-4 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -mr-12 -mt-12 rotate-45" />
            <h4 className="text-[8px] md:text-xs font-black text-white uppercase tracking-[0.4em] mb-4 border-b border-white/20 pb-2">VULNERABILIDADES</h4>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 bg-white/10 p-2 md:p-4 border border-white/10">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-white shrink-0" />
                  <span className="text-[8px] md:text-sm font-black text-white uppercase leading-none">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
