'use client';

import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet
} from "lucide-react";

const specificObjectives = [
  { icon: Scan, title: "BIOMETRÍA", desc: "IDENTIFICACIÓN SEGURA." },
  { icon: CircleCheckBig, title: "AUTOMATIZACIÓN", desc: "MARCADO EFICIENTE." },
  { icon: Database, title: "CENTRALIZACIÓN", desc: "BASE DE DATOS ÚNICA." },
  { icon: FileSpreadsheet, title: "REPORTES", desc: "INFORMES TIEMPO REAL." },
];

export default function Objectives() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-xl tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-white border-2 border-[#2B2B2B] p-6 md:p-12 shadow-2xl border-l-[12px] md:border-l-[24px] border-l-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1E2D]/10 -mr-12 -mt-12 rotate-45" />
        <h4 className="text-[10px] md:text-lg font-black text-[#FF1E2D] uppercase tracking-[0.4em] mb-4 border-b-2 border-gray-100 pb-2 inline-block">OBJETIVO GENERAL</h4>
        <p className="text-sm md:text-5xl font-black text-[#2B2B2B] leading-[1.1] italic max-w-6xl">
          "Desarrollar un sistema de información para la <span className="text-[#FF1E2D]">gestión de asistencia</span> basado en <span className="text-[#FF1E2D]">reconocimiento facial</span> que permita registrar de forma automática, optimizando la gestión institucional."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-6 md:p-10 border-2 border-[#2B2B2B] shadow-xl text-center flex flex-col items-center justify-center space-y-4 hover:bg-[#FF1E2D]/5 transition-colors">
            <div className="w-12 h-12 md:w-24 md:h-24 red-gradient rounded-full flex items-center justify-center shadow-lg border-2 border-[#2B2B2B]">
              <obj.icon className="w-6 h-6 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-xs md:text-2xl font-black text-[#2B2B2B] uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-[9px] md:text-sm text-[#2B2B2B] font-black uppercase tracking-widest leading-tight">
              {obj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}