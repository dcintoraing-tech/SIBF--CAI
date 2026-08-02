'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-base md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Identificamos necesidades críticas mediante <span className="text-[#FF1E2D] font-black text-xl md:text-7xl">ENTREVISTAS DIRECTAS</span> y análisis técnico profundo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <Card className="rounded-none border-t-[4px] md:border-t-[8px] border-[#FF1E2D] shadow-xl p-6 md:p-12">
          <CardHeader className="p-0 mb-6">
            <ClipboardList className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-lg md:text-4xl font-black uppercase tracking-widest">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-sm md:text-2xl text-gray-500 font-bold uppercase leading-snug">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-[4px] md:border-t-[8px] border-[#2B2B2B] shadow-xl p-6 md:p-12">
          <CardHeader className="p-0 mb-6">
            <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-lg md:text-4xl font-black uppercase tracking-widest">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 md:space-y-6">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[8px] md:text-xs font-black text-[#FF1E2D]">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
