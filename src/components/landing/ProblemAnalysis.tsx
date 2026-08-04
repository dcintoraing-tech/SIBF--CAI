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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12 max-w-[1300px] mx-auto text-[#2B2B2B]">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.5em] uppercase">ANTECEDENTES</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-[0.9]">
          PLANTEAMIENTO DEL <br /> <span className="red-gradient-text">PROBLEMA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center pt-4">
        <div className="space-y-8 md:space-y-12 flex flex-col justify-center">
          <p className="text-2xl md:text-5xl lg:text-6xl text-[#2B2B2B] leading-[1.05] font-black uppercase italic border-l-[16px] md:border-l-[24px] border-[#FF1E2D] pl-6 md:pl-12">
            LAS INSTITUCIONES ENFRENTAN <span className="text-[#FF1E2D]">BRECHAS CRÍTICAS</span> DE SEGURIDAD POR LA AUSENCIA DE SISTEMAS AUTOMATIZADOS.
          </p>
          <p className="text-sm md:text-2xl text-[#2B2B2B] font-bold uppercase tracking-tight italic opacity-70 leading-tight">
            La dependencia de registros manuales y métodos obsoletos compromete la integridad de la información y la eficiencia operativa global.
          </p>
        </div>

        <div className="bg-[#FF1E2D] p-8 md:p-16 rounded-[50px] shadow-2xl relative overflow-hidden flex flex-col justify-center border-b-[16px] border-red-800/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 -mr-40 -mt-40 rotate-45" />
          <h4 className="text-xs md:text-xl font-black text-white uppercase tracking-[0.4em] mb-12 border-b-2 border-white/20 pb-4 inline-block italic">DESAFÍOS INSTITUCIONALES</h4>
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            {challenges.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-6 bg-white p-8 md:p-10 rounded-[40px] shadow-xl hover:scale-105 transition-transform duration-300">
                <item.icon className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] shrink-0" />
                <span className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-tighter text-center leading-none italic">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
