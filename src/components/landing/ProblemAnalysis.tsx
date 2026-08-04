'use client';

import { ShieldAlert, FileX, Clock, CircleAlert } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN IDENTIDAD" },
    { icon: FileX, text: "FRAGMENTACIÓN DATOS" },
    { icon: Clock, text: "LATENCIA REGISTRO" },
    { icon: CircleAlert, text: "MARGEN ERROR HUMANO" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-8 md:space-y-16 max-w-[1200px] mx-auto text-[#2B2B2B] px-6">
      {/* Cabecera de la diapositiva */}
      <div className="space-y-2 text-center">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[0.9]">
          PLANTEAMIENTO DEL <br /> <span className="red-gradient-text">PROBLEMA</span>
        </h2>
      </div>

      {/* Mensaje Central Impactante */}
      <div className="w-full max-w-5xl">
        <p className="text-xl md:text-4xl lg:text-5xl text-[#2B2B2B] leading-[1.1] font-black uppercase italic border-l-[12px] md:border-l-[20px] border-[#FF1E2D] pl-6 md:pl-10 text-left">
          EL CONTROL DE ASISTENCIA DEPENDE DE PROCESOS <span className="text-[#FF1E2D]">ANALÓGICOS</span> OBSOLETOS Y VULNERABLES.
        </p>
      </div>

      {/* Grid de Desafíos Simplificado para evitar desbordes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full pt-4">
        {challenges.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4 bg-white p-6 md:p-8 rounded-[30px] shadow-xl border border-slate-50 transition-transform hover:scale-105">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-red-50 flex items-center justify-center shadow-inner">
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D]" />
            </div>
            <span className="text-[10px] md:text-base lg:text-lg font-black text-[#2B2B2B] uppercase tracking-tighter text-center leading-none italic">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Nota de pie discreta */}
      <p className="text-[10px] md:text-xl text-[#2B2B2B] font-bold uppercase tracking-tight italic opacity-60 text-center max-w-3xl">
        La ausencia de automatización compromete la integridad de la información y la eficiencia operativa institucional global.
      </p>
    </div>
  );
}
