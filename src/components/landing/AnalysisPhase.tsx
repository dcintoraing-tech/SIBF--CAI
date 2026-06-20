
'use client';

import { 
  ClipboardList, 
  Users, 
  ShieldCheck, 
  Fingerprint, 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AnalysisPhase() {
  return (
    <div id="analisis" className="space-y-32">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">FASE DE ANÁLISIS</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic">REQUERIMIENTOS</h2>
      </div>

      <p className="text-3xl md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Identificamos necesidades críticas mediante <span className="text-[#FF1E2D] font-black underline decoration-8 underline-offset-[12px]">ENTREVISTAS DIRECTAS</span> y análisis institucional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="rounded-none border-t-[12px] border-[#FF1E2D] shadow-2xl p-10">
          <CardHeader>
            <ClipboardList className="w-16 h-16 text-[#FF1E2D] mb-6" />
            <CardTitle className="text-3xl font-black uppercase tracking-widest">Proceso de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-gray-500 font-bold uppercase leading-relaxed">
              Detectamos fallos en la confiabilidad de los registros manuales y falta de centralización operativa.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-[12px] border-[#2B2B2B] shadow-2xl p-10">
          <CardHeader>
            <ShieldCheck className="w-16 h-16 text-[#2B2B2B] mb-6" />
            <CardTitle className="text-3xl font-black uppercase tracking-widest">Atributos de Calidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-6">
                <span className="text-lg font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-xs font-black text-[#FF1E2D]">✓ CUMPLIDO</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#2B2B2B] p-20 space-y-16 shadow-2xl">
        <div className="flex items-center gap-8">
          <Users className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black text-white uppercase italic">HISTORIAS DE USUARIO</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-l-[12px] border-[#FF1E2D] pl-12 space-y-6">
            <span className="text-sm font-black text-[#FF1E2D] uppercase tracking-widest">PERSONAL</span>
            <p className="text-2xl md:text-3xl text-gray-300 font-bold uppercase leading-snug">"REGISTRO DE ASISTENCIA MEDIANTE ROSTRO PARA MAYOR SEGURIDAD."</p>
          </div>
          <div className="border-l-[12px] border-white/20 pl-12 space-y-6">
            <span className="text-sm font-black text-white/50 uppercase tracking-widest">DIRECTIVO</span>
            <p className="text-2xl md:text-3xl text-gray-300 font-bold uppercase leading-snug">"GENERAR REPORTES AUTOMÁTICOS PARA TOMA DE DECISIONES."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
