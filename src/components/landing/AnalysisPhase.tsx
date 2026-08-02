'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12 max-w-[1200px] mx-auto text-[#2B2B2B]">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">FASE DE ANÁLISIS</span>
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-sm md:text-2xl lg:text-3xl text-[#2B2B2B] font-bold leading-[1.1] max-w-5xl uppercase italic border-l-4 md:border-l-[12px] border-[#FF1E2D] pl-4 md:pl-8">
        Análisis técnico mediante <span className="text-[#FF1E2D]">ENTREVISTAS DIRECTAS</span> y auditoría de procesos institucionales críticos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <Card className="rounded-3xl border-none bg-white shadow-2xl p-6 md:p-10 hover:bg-[#FF1E2D]/5 transition-colors">
          <CardHeader className="p-0 mb-6">
            <ClipboardList className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-sm md:text-2xl font-black uppercase tracking-widest">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-xs md:text-xl font-bold uppercase leading-tight italic">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información institucional avanzada.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-none bg-white shadow-2xl p-6 md:p-10">
          <CardHeader className="p-0 mb-6">
            <ShieldCheck className="w-8 h-8 md:w-16 md:h-16 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-sm md:text-2xl font-black uppercase tracking-widest">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 md:space-y-6">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[10px] md:text-lg lg:text-xl font-black uppercase tracking-widest">{item}</span>
                <span className="text-[10px] md:text-lg lg:text-xl font-black text-[#FF1E2D] italic">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}