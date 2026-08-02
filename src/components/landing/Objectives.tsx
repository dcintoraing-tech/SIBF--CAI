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
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-white border border-gray-100 p-6 md:p-12 shadow-xl border-l-[8px] md:border-l-[16px] border-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF1E2D]/5 -mr-8 -mt-8 rotate-45" />
        <h4 className="text-[8px] md:text-sm font-black text-[#FF1E2D] uppercase tracking-[0.4em] mb-4 border-b border-gray-100 pb-2 inline-block">OBJETIVO GENERAL</h4>
        <p className="text-sm md:text-4xl font-medium text-gray-700 leading-tight italic max-w-5xl">
          "Desarrollar un sistema de información para la <strong>gestión de asistencia</strong> basado en <strong>reconocimiento facial</strong> que permita registrar de forma automática, optimizando la <strong>gestión institucional</strong>."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-4 md:p-8 border-b-[4px] md:border-b-[8px] border-gray-100 shadow-lg text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 md:w-16 md:h-16 red-gradient rounded-full flex items-center justify-center shadow-md">
              <obj.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-[10px] md:text-lg font-black text-[#2B2B2B] uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-[7px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">
              {obj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
