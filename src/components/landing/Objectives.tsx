'use client';

import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet
} from "lucide-react";

const specificObjectives = [
  { icon: Scan, title: "BIOMETRÍA", desc: "IDENTIFICACIÓN SEGURA Y CONFIABLE." },
  { icon: CircleCheckBig, title: "AUTOMATIZACIÓN", desc: "MARCADO EFICIENTE SIN INTERVENCIÓN." },
  { icon: Database, title: "CENTRALIZACIÓN", desc: "BASE DE DATOS ÚNICA E INTEGRADA." },
  { icon: FileSpreadsheet, title: "REPORTES", desc: "INFORMES EN TIEMPO REAL PARA TOMA DE DECISIONES." },
];

export default function Objectives() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-8">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-bold text-[10px] md:text-lg tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 md:p-12 shadow-inner border-l-[8px] md:border-l-[16px] border-l-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1E2D]/5 -mr-12 -mt-12 rotate-45" />
        <h4 className="text-[10px] md:text-sm font-black text-[#FF1E2D] uppercase tracking-[0.4em] mb-2 border-b border-red-100 pb-1 inline-block italic">OBJETIVO GENERAL</h4>
        <p className="text-sm md:text-2xl lg:text-3xl font-bold text-[#2B2B2B] leading-[1.2] italic max-w-5xl">
          "Desarrollar un sistema de información para la <span className="text-[#FF1E2D]">gestión de asistencia</span> basado en <span className="text-[#FF1E2D]">reconocimiento facial</span> que permita registrar de forma automática, optimizando la gestión institucional."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center space-y-3 hover:bg-red-50 transition-all hover:-translate-y-1">
            <div className="w-8 h-8 md:w-14 md:h-14 red-gradient rounded-xl flex items-center justify-center shadow-md">
              <obj.icon className="w-4 h-4 md:w-7 md:h-7 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[10px] md:text-lg font-black text-[#2B2B2B] uppercase tracking-tighter italic leading-none">{obj.title}</h3>
              <p className="text-[8px] md:text-sm text-[#2B2B2B] font-bold uppercase tracking-widest leading-tight italic opacity-100">
                {obj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
