'use client';

import { History, ShieldAlert, FileX, Clock, CircleAlert } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN IDENTIDAD" },
    { icon: FileX, text: "FRAGMENTACIÓN DATOS" },
    { icon: Clock, text: "LATENCIA REGISTRO" },
    { icon: CircleAlert, text: "MARGEN ERROR HUMANO" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[1]">
          PLANTEAMIENTO DEL <span className="red-gradient-text">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-stretch">
        <div className="space-y-8 flex flex-col justify-center">
          <p className="text-lg md:text-4xl text-[#2B2B2B] leading-[1.1] font-black uppercase italic border-l-[8px] md:border-l-[16px] border-[#FF1E2D] pl-6">
            El control de asistencia depende de procesos <span className="text-[#FF1E2D]">ANALÓGICOS</span> obsoletos y vulnerables.
          </p>
          <div className="flex gap-6 items-start p-6 md:p-10 bg-slate-50 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF1E2D]" />
            <History className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] shrink-0" />
            <div>
              <h4 className="text-lg md:text-2xl font-black uppercase italic text-[#2B2B2B]">MODELOS TRADICIONALES</h4>
              <p className="text-sm md:text-lg text-[#2B2B2B] font-bold uppercase tracking-tight mt-2 italic opacity-60">Vulnerables a la alteración intencionada de datos y fraude.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FF1E2D] p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rotate-45" />
          <h4 className="text-xs md:text-lg font-black text-white uppercase tracking-[0.4em] mb-8 border-b-2 border-white/20 pb-4 inline-block italic">VULNERABILIDADES CRÍTICAS</h4>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform">
                <item.icon className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D] shrink-0" />
                <span className="text-[10px] md:text-base font-black text-[#2B2B2B] uppercase tracking-tighter text-center leading-none italic">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
