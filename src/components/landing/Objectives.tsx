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
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[12px] md:text-2xl tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-4xl md:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-white border-4 border-[#2B2B2B] p-8 md:p-16 shadow-2xl border-l-[16px] md:border-l-[32px] border-l-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E2D]/10 -mr-16 -mt-16 rotate-45" />
        <h4 className="text-[12px] md:text-2xl font-black text-[#FF1E2D] uppercase tracking-[0.4em] mb-6 border-b-4 border-gray-100 pb-2 inline-block italic">OBJETIVO GENERAL</h4>
        <p className="text-xl md:text-6xl font-black text-[#2B2B2B] leading-[1] italic max-w-7xl">
          "Desarrollar un sistema de información para la <span className="text-[#FF1E2D]">gestión de asistencia</span> basado en <span className="text-[#FF1E2D]">reconocimiento facial</span> que permita registrar de forma automática, optimizando la gestión institucional."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-8 md:p-12 border-4 border-[#2B2B2B] shadow-xl text-center flex flex-col items-center justify-center space-y-6 hover:bg-[#FF1E2D]/5 transition-colors">
            <div className="w-14 h-14 md:w-28 md:h-28 red-gradient rounded-none flex items-center justify-center shadow-lg border-4 border-[#2B2B2B]">
              <obj.icon className="w-8 h-8 md:w-14 md:h-14 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm md:text-3xl font-black text-[#2B2B2B] uppercase tracking-tighter italic">{obj.title}</h3>
              <p className="text-[10px] md:text-xl text-[#2B2B2B] font-black uppercase tracking-widest leading-tight italic">
                {obj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}