'use client';

import { TrendingDown, CheckCircle2, XCircle, Zap, ShieldCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BusinessProcess() {
  const comparisonData = [
    { feature: "HARDWARE", legacy: "PROPIETARIO", sibf: "ESTÁNDAR" },
    { feature: "IMPLEMENTACIÓN", legacy: "SEMANAS", sibf: "HORAS" },
    { feature: "ACTUALIZACIÓN", legacy: "MANUAL", sibf: "NUBE" },
    { feature: "ESCALABILIDAD", legacy: "LIMITADA", sibf: "INFINITA" },
    { feature: "COSTO TOTAL", legacy: "ALTO", sibf: "80% MENOS" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-8">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-bold text-[8px] md:text-lg tracking-[0.4em] uppercase">PROCESO DE NEGOCIO</span>
        <h2 className="text-xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">COMPETITIVIDAD</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        <div className="bg-[#2B2B2B] p-4 md:p-10 text-white shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <TrendingDown className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-xs md:text-2xl font-black uppercase italic">AHORRO MASIVO</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-[8px] md:text-xs text-gray-500 font-bold uppercase">BIOMETRIC-GLOBAL PRO</span>
              <span className="text-xs md:text-2xl font-black line-through text-gray-600">$150,000 MXN</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-2">
              <span className="text-[8px] md:text-xs text-white font-black uppercase">SIBF-CAI SOLUTION</span>
              <span className="text-xl md:text-5xl font-black text-[#FF1E2D]">$30,000 MXN</span>
            </div>
            <p className="text-[8px] md:text-xs font-bold uppercase text-gray-400">
              Reducción del presupuesto operativo en un <span className="text-white font-black text-xs md:text-lg">80%</span>.
            </p>
          </div>
        </div>

        <div className="space-y-3 bg-slate-50 p-4 md:p-10 shadow-inner">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-widest italic">VENTAJAS SaaS</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-3 h-3 text-[#FF1E2D]" />
              <p className="text-[7px] md:text-[10px] font-black text-gray-500 uppercase">SIN DEPENDENCIAS DE HARDWARE EXTERNO.</p>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-3 h-3 text-[#FF1E2D]" />
              <p className="text-[7px] md:text-[10px] font-black text-gray-500 uppercase">ACTUALIZACIONES SaaS INSTANTÁNEAS.</p>
            </div>
            <div className="bg-[#FF1E2D]/5 border-l-4 border-[#FF1E2D] p-3 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-3 h-3 text-[#FF1E2D]" />
                <span className="text-[7px] md:text-[9px] font-black text-[#2B2B2B] uppercase tracking-widest">MANTENIMIENTO</span>
              </div>
              <p className="text-[7px] md:text-[9px] font-bold text-gray-600 uppercase leading-none">
                <span className="text-[#FF1E2D]">GRATIS 6 MESES</span>. LUEGO PRESUPUESTO SEGÚN NECESIDAD.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg bg-white">
        <Table className="border-[1px] border-[#2B2B2B] min-w-[300px]">
          <TableHeader className="bg-[#2B2B2B]">
            <TableRow className="hover:bg-[#2B2B2B] border-none">
              <TableHead className="text-white font-black uppercase text-[7px] md:text-[10px]">FACTOR</TableHead>
              <TableHead className="text-gray-500 font-black uppercase text-[7px] md:text-[10px]">GLOBAL PRO</TableHead>
              <TableHead className="text-[#FF1E2D] font-black uppercase text-[8px] md:text-[12px] italic">SIBF-CAI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, i) => (
              <TableRow key={i} className="border-gray-100 hover:bg-slate-50">
                <TableCell className="p-2 font-black uppercase text-[#2B2B2B] text-[7px] md:text-[10px]">{row.feature}</TableCell>
                <TableCell className="p-2 font-bold text-gray-400 uppercase text-[6px] md:text-[9px]">{row.legacy}</TableCell>
                <TableCell className="p-2 font-black text-[#2B2B2B] uppercase text-[7px] md:text-[10px] italic flex items-center gap-1">
                  <CheckCircle2 className="w-2 h-2 text-[#FF1E2D]" /> {row.sibf}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
