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
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[1]">
          PLANTEAMIENTO DEL <br className="hidden md:block" /> <span className="red-gradient-text text-4xl md:text-9xl">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
        <div className="space-y-8">
          <p className="text-sm md:text-5xl text-[#2B2B2B] leading-[1.1] font-black uppercase italic">
            El control de asistencia ha dependido históricamente de procesos <span className="text-[#FF1E2D]">ANALÓGICOS</span> obsoletos.
          </p>
          <div className="flex gap-6 items-start p-6 md:p-12 bg-white border-2 border-[#2B2B2B] border-l-[16px] border-l-[#FF1E2D] shadow-2xl">
            <History className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] shrink-0" />
            <div>
              <h4 className="text-sm md:text-3xl font-black uppercase italic text-[#2B2B2B]">MÉTODOS TRADICIONALES</h4>
              <p className="text-[10px] md:text-base text-[#2B2B2B] font-black uppercase tracking-widest mt-2">Vulnerables a la alteración intencionada de datos y fraude de identidad.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-10 bg-[#FF1E2D] p-8 md:p-16 shadow-2xl relative overflow-hidden border-4 border-[#2B2B2B]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rotate-45" />
          <h4 className="text-[12px] md:text-xl font-black text-white uppercase tracking-[0.4em] mb-6 border-b-4 border-white/20 pb-4 inline-block italic">VULNERABILIDADES CRÍTICAS</h4>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {challenges.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 bg-white p-6 border-4 border-[#2B2B2B] shadow-xl hover:scale-105 transition-transform">
                <item.icon className="w-6 h-6 md:w-12 md:h-12 text-[#FF1E2D] shrink-0" />
                <span className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-tighter text-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}