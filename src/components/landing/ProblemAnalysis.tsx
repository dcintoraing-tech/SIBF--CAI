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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[12px] md:text-2xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-4xl md:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[1]">
          PLANTEAMIENTO DEL <br className="hidden md:block" /> <span className="red-gradient-text">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-stretch">
        <div className="space-y-10 flex flex-col justify-center">
          <p className="text-xl md:text-6xl text-[#2B2B2B] leading-[1] font-black uppercase italic border-l-[12px] md:border-l-[24px] border-[#FF1E2D] pl-8">
            El control de asistencia depende de procesos <span className="text-[#FF1E2D]">ANALÓGICOS</span> obsoletos y vulnerables.
          </p>
          <div className="flex gap-8 items-start p-8 md:p-14 bg-white border-4 border-[#2B2B2B] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-[#FF1E2D]" />
            <History className="w-12 h-12 md:w-24 md:h-24 text-[#FF1E2D] shrink-0" />
            <div>
              <h4 className="text-lg md:text-4xl font-black uppercase italic text-[#2B2B2B]">MODELOS TRADICIONALES</h4>
              <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase tracking-widest mt-4 italic">Vulnerables a la alteración intencionada de datos y fraude.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-[#FF1E2D] p-10 md:p-20 shadow-2xl relative overflow-hidden border-8 border-[#2B2B2B] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-32 -mt-32 rotate-45" />
          <h4 className="text-[14px] md:text-3xl font-black text-white uppercase tracking-[0.4em] mb-10 border-b-8 border-white/20 pb-6 inline-block italic">VULNERABILIDADES CRÍTICAS</h4>
          <div className="grid grid-cols-2 gap-6 md:gap-12">
            {challenges.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-6 bg-white p-8 border-4 border-[#2B2B2B] shadow-xl hover:translate-y-[-10px] transition-transform">
                <item.icon className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] shrink-0" />
                <span className="text-[10px] md:text-2xl font-black text-[#2B2B2B] uppercase tracking-tighter text-center leading-none italic">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}