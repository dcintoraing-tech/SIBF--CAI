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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-black text-xs md:text-2xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[0.9]">
          PLANTEAMIENTO DEL <br className="hidden md:block" /> <span className="red-gradient-text text-4xl md:text-9xl">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
        <div className="space-y-6 md:space-y-12">
          <p className="text-lg md:text-5xl text-gray-600 leading-[1.1] font-medium">
            El control de asistencia ha dependido de procesos <span className="text-[#FF1E2D] font-black text-3xl md:text-8xl">ANALÓGICOS</span>.
          </p>
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div className="flex gap-6 items-start p-6 bg-slate-50 border-l-[8px] md:border-l-[16px] border-[#FF1E2D] shadow-xl">
              <History className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-xs md:text-2xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
                <p className="text-[10px] md:text-lg text-gray-400 font-bold uppercase tracking-widest mt-1">Vulnerables a la alteración de datos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-base md:text-4xl text-gray-600 leading-[1.1] font-medium">
            La integridad nace de evitar la <span className="text-[#2B2B2B] font-black text-2xl md:text-7xl">SUPLANTACIÓN</span> de identidad.
          </p>
          <div className="bg-[#FF1E2D] p-6 md:p-12 shadow-[0_20px_60px_-15px_rgba(255,30,45,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rotate-45" />
            <h4 className="text-[10px] md:text-lg font-black text-white uppercase tracking-[0.6em] mb-8 border-b border-white/20 pb-4 inline-block">VULNERABILIDADES</h4>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-6 bg-white/10 p-4 md:p-6 border border-white/10 backdrop-blur-sm">
                  <item.icon className="w-5 h-5 md:w-10 md:h-10 text-white shrink-0" />
                  <span className="text-[10px] md:text-xl font-black text-white uppercase tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
