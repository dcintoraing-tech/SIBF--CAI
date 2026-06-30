'use client';

import { History, ShieldAlert, FileX, Clock, CircleAlert, TrendingUp } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN DE IDENTIDAD" },
    { icon: FileX, text: "FRAGMENTACIÓN DE DATOS" },
    { icon: Clock, text: "LATENCIA EN REGISTROS" },
    { icon: CircleAlert, text: "VULNERABILIDAD AL ERROR" }
  ];

  return (
    <div id="analisis-problema" className="space-y-16 md:space-y-32">
      {/* PÁGINA 1: EVOLUCIÓN Y CONTEXTO */}
      <div className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center space-y-10 md:space-y-20">
        <div className="space-y-3 md:space-y-5">
          <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] md:tracking-[0.6em] uppercase">ANTECEDENTES</span>
          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
            PLANTEAMIENTO <br />
            DEL <span className="red-gradient-text">PROBLEMA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-10">
            <p className="text-lg md:text-4xl text-gray-600 leading-tight font-medium">
              Históricamente, el control de asistencia ha dependido de procesos <span className="text-[#FF1E2D] font-black text-3xl md:text-6xl">ANALÓGICOS</span> que hoy resultan obsoletos ante la demanda de seguridad institucional.
            </p>
            <div className="h-[2px] w-16 md:w-32 bg-[#FF1E2D]" />
          </div>
          
          <div className="grid grid-cols-1 gap-5 md:gap-10">
            <div className="flex flex-col sm:flex-row gap-5 md:gap-7 items-start p-5 md:p-10 bg-slate-50 border-l-[6px] md:border-l-[12px] border-[#FF1E2D] shadow-2xl animate-executive-pulse">
              <History className="w-8 h-8 md:w-14 md:h-14 text-[#FF1E2D] shrink-0" />
              <div className="space-y-1">
                <h4 className="text-lg md:text-xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
                <p className="text-xs md:text-base text-gray-400 font-bold uppercase tracking-widest leading-snug">Registros físicos vulnerables y propensos a la alteración de datos.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-7 items-start p-5 md:p-10 bg-[#2B2B2B] text-white shadow-2xl animate-executive-pulse [animation-delay:1s]">
              <TrendingUp className="w-8 h-8 md:w-14 md:h-14 text-[#FF1E2D] shrink-0" />
              <div className="space-y-1">
                <h4 className="text-lg md:text-xl font-black uppercase italic">DEMANDA TECNOLÓGICA</h4>
                <p className="text-xs md:text-base text-gray-500 font-bold uppercase tracking-widest leading-snug">Necesidad urgente de digitalización y trazabilidad en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 2: EL DESAFÍO CRÍTICO */}
      <div className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center space-y-10 md:space-y-20 border-t border-gray-100 pt-16 md:pt-32">
        <div className="space-y-3 md:space-y-5">
          <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] md:tracking-[0.6em] uppercase">EL DESAFÍO</span>
          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
            PUNTOS <span className="red-gradient-text">CRÍTICOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8 md:space-y-14">
            <p className="text-lg md:text-4xl text-gray-600 leading-[1.2] md:leading-[1.1] font-medium">
              La falta de integridad nace de sistemas que permiten la <span className="text-[#2B2B2B] font-black text-3xl md:text-6xl">SUPLANTACIÓN</span> de identidad.
            </p>
            <div className="p-6 md:p-12 bg-[#2B2B2B] border-b-[8px] md:border-b-[16px] border-[#FF1E2D] shadow-2xl transform -rotate-1">
              <p className="text-xl md:text-5xl font-black text-white uppercase italic leading-[0.85] tracking-tighter text-center">
                "LA SEGURIDAD <br /> ESTÁ EN RIESGO"
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#FF1E2D] p-6 md:p-12 shadow-2xl relative overflow-hidden animate-executive-pulse">
              <div className="absolute top-0 right-0 w-28 h-28 md:w-56 md:h-56 bg-white/10 -mr-14 -mt-14 md:-mr-28 md:-mt-28 rotate-45 animate-glow-pulse" />
              <h4 className="text-xs md:text-base font-black text-white uppercase tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-10 border-b border-white/30 pb-3 md:pb-6">VULNERABILIDADES DETECTADAS</h4>
              <div className="grid grid-cols-1 gap-3 md:gap-8">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-7 bg-white/10 p-3 md:p-7 border border-white/10 hover:bg-white/20 transition-all">
                    <item.icon className="w-5 h-5 md:w-10 md:h-10 text-white shrink-0" />
                    <span className="text-xs md:text-xl font-black text-white tracking-widest uppercase italic leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
