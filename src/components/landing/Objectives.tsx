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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-3xl md:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-16 shadow-inner border-l-[12px] md:border-l-[20px] border-l-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1E2D]/5 -mr-12 -mt-12 rotate-45" />
        <h4 className="text-xs md:text-lg font-black text-[#FF1E2D] uppercase tracking-[0.4em] mb-4 border-b-2 border-red-100 pb-2 inline-block italic">OBJETIVO GENERAL</h4>
        <p className="text-xl md:text-4xl lg:text-5xl font-black text-[#2B2B2B] leading-[1.1] italic max-w-6xl">
          "Desarrollar un sistema de información para la <span className="text-[#FF1E2D]">gestión de asistencia</span> basado en <span className="text-[#FF1E2D]">reconocimiento facial</span> que permita registrar de forma automática, optimizando la gestión institucional."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center flex flex-col items-center justify-center space-y-4 hover:bg-red-50 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 md:w-20 md:h-20 red-gradient rounded-2xl flex items-center justify-center shadow-xl">
              <obj.icon className="w-5 h-5 md:w-10 md:h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-tighter italic leading-none">{obj.title}</h3>
              <p className="text-[8px] md:text-base text-[#2B2B2B] font-black uppercase tracking-widest leading-tight italic opacity-100">
                {obj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
