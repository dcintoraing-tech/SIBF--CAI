'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-sm md:text-4xl text-gray-600 font-medium leading-tight max-w-4xl">
        Identificamos necesidades críticas mediante <span className="text-[#FF1E2D] font-black text-xl md:text-5xl">ENTREVISTAS DIRECTAS</span> y análisis técnico profundo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <Card className="rounded-none border-t-[4px] md:border-t-[6px] border-[#FF1E2D] shadow-lg p-6 md:p-10">
          <CardHeader className="p-0 mb-4">
            <ClipboardList className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-sm md:text-2xl font-black uppercase tracking-widest">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[10px] md:text-lg text-gray-500 font-bold uppercase leading-snug">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-[4px] md:border-t-[6px] border-[#2B2B2B] shadow-lg p-6 md:p-10">
          <CardHeader className="p-0 mb-4">
            <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-[#2B2B2B] mb-2" />
            <CardTitle className="text-sm md:text-2xl font-black uppercase tracking-widest">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 md:space-y-4">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[8px] md:text-sm font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[7px] md:text-[10px] font-black text-[#FF1E2D]">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
