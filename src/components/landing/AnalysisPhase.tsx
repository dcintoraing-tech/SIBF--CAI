'use client';

import { 
  ClipboardList, 
  Users, 
  ShieldCheck, 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div id="requerimientos" className="space-y-16 md:space-y-24">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic">REQUERIMIENTOS</h2>
      </div>

      <p className="text-xl md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Identificamos necesidades críticas mediante <span className="text-[#FF1E2D] font-black text-3xl md:text-7xl">ENTREVISTAS DIRECTAS</span> y análisis institucional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Card className="rounded-none border-t-[8px] md:border-t-[12px] border-[#FF1E2D] shadow-2xl p-6 md:p-10 animate-executive-pulse">
          <CardHeader>
            <ClipboardList className="w-12 h-12 md:w-16 md:h-16 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-2xl md:text-3xl font-black uppercase tracking-widest">Proceso de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base md:text-xl text-gray-500 font-bold uppercase leading-relaxed">
              Detectamos fallos en la confiabilidad de los registros manuales y falta de centralización operativa.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-[8px] md:border-t-[12px] border-[#2B2B2B] shadow-2xl p-6 md:p-10 animate-executive-pulse [animation-delay:500ms]">
          <CardHeader>
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-2xl md:text-3xl font-black uppercase tracking-widest">Atributos de Calidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-sm md:text-lg font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[10px] md:text-xs font-black text-[#FF1E2D]">✓ CUMPLIDO</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#2B2B2B] p-8 md:p-20 space-y-8 md:space-y-16 shadow-2xl">
        <div className="flex items-center gap-6 md:gap-8">
          <Users className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D]" />
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic">HISTORIAS DE USUARIO</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="border-l-[8px] md:border-l-[12px] border-[#FF1E2D] pl-6 md:pl-12 space-y-4">
            <span className="text-[10px] md:text-sm font-black text-[#FF1E2D] uppercase tracking-widest">PERSONAL</span>
            <p className="text-lg md:text-3xl text-gray-300 font-bold uppercase leading-snug">"REGISTRO DE ASISTENCIA MEDIANTE ROSTRO PARA MAYOR SEGURIDAD."</p>
          </div>
          <div className="border-l-[8px] md:border-l-[12px] border-white/20 pl-6 md:pl-12 space-y-4">
            <span className="text-[10px] md:text-sm font-black text-white/50 uppercase tracking-widest">DIRECTIVO</span>
            <p className="text-lg md:text-3xl text-gray-300 font-bold uppercase leading-snug">"GENERAR REPORTES AUTOMÁTICOS PARA TOMA DE DECISIONES."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
