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
    <div id="analisis-problema" className="space-y-24 md:space-y-48">
      {/* PÁGINA 1: EVOLUCIÓN Y CONTEXTO */}
      <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center space-y-12 md:space-y-24">
        <div className="space-y-4 md:space-y-6">
          <span className="text-[#FF1E2D] font-black text-sm md:text-xl tracking-[0.4em] md:tracking-[0.6em] uppercase">ANTECEDENTES</span>
          <h2 className="text-4xl md:text-8xl lg:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
            PLANTEAMIENTO <br />
            DEL <span className="red-gradient-text">PROBLEMA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          <div className="space-y-8 md:space-y-12">
            <p className="text-xl md:text-5xl text-gray-600 leading-tight font-medium">
              Históricamente, el control de asistencia ha dependido de procesos <span className="text-[#FF1E2D] font-black text-4xl md:text-7xl">ANALÓGICOS</span> que hoy resultan obsoletos ante la demanda de seguridad institucional.
            </p>
            <div className="h-[2px] w-20 md:w-40 bg-[#FF1E2D]" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-12">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start p-6 md:p-12 bg-slate-50 border-l-[8px] md:border-l-[16px] border-[#FF1E2D] shadow-2xl animate-executive-pulse">
              <History className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] shrink-0" />
              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
                <p className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-widest leading-snug">Registros físicos vulnerables y propensos a la alteración de datos.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start p-6 md:p-12 bg-[#2B2B2B] text-white shadow-2xl animate-executive-pulse [animation-delay:1s]">
              <TrendingUp className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] shrink-0" />
              <div className="space-y-2">
                <h4 className="text-xl md:text-2xl font-black uppercase italic">DEMANDA TECNOLÓGICA</h4>
                <p className="text-sm md:text-lg text-gray-500 font-bold uppercase tracking-widest leading-snug">Necesidad urgente de digitalización y trazabilidad en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 2: EL DESAFÍO CRÍTICO */}
      <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center space-y-12 md:space-y-24 border-t border-gray-100 pt-24 md:pt-48">
        <div className="space-y-4 md:space-y-6">
          <span className="text-[#FF1E2D] font-black text-sm md:text-xl tracking-[0.4em] md:tracking-[0.6em] uppercase">EL DESAFÍO</span>
          <h2 className="text-4xl md:text-8xl lg:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
            PUNTOS <span className="red-gradient-text">CRÍTICOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="lg:col-span-6 space-y-10 md:space-y-16">
            <p className="text-xl md:text-5xl text-gray-600 leading-[1.2] md:leading-[1.1] font-medium">
              La falta de integridad nace de sistemas que permiten la <span className="text-[#2B2B2B] font-black text-4xl md:text-7xl">SUPLANTACIÓN</span> de identidad.
            </p>
            <div className="p-8 md:p-16 bg-[#2B2B2B] border-b-[10px] md:border-b-[20px] border-[#FF1E2D] shadow-2xl transform -rotate-1">
              <p className="text-2xl md:text-6xl font-black text-white uppercase italic leading-[0.85] tracking-tighter text-center">
                "LA SEGURIDAD <br /> ESTÁ EN RIESGO"
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#FF1E2D] p-8 md:p-16 shadow-2xl relative overflow-hidden animate-executive-pulse">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 -mr-16 -mt-16 md:-mr-32 md:-mt-32 rotate-45 animate-glow-pulse" />
              <h4 className="text-sm md:text-lg font-black text-white uppercase tracking-[0.4em] md:tracking-[0.6em] mb-8 md:mb-12 border-b border-white/30 pb-4 md:pb-8">VULNERABILIDADES DETECTADAS</h4>
              <div className="grid grid-cols-1 gap-4 md:gap-10">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-8 bg-white/10 p-4 md:p-8 border border-white/10 hover:bg-white/20 transition-all">
                    <item.icon className="w-6 h-6 md:w-12 md:h-12 text-white shrink-0" />
                    <span className="text-sm md:text-2xl font-black text-white tracking-widest uppercase italic leading-tight">{item.text}</span>
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
