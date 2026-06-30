'use client';

import { 
  TrendingDown, 
  CheckCircle2, 
  XCircle,
  Zap,
  BarChart3,
  ShieldCheck
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BusinessProcess() {
  const comparisonData = [
    { feature: "HARDWARE", legacy: "PROPIETARIO COSTOSO", sibf: "DISPOSITIVOS ESTÁNDAR" },
    { feature: "IMPLEMENTACIÓN", legacy: "MESES / SEMANAS", sibf: "DÍAS / HORAS" },
    { feature: "ACTUALIZACIÓN", legacy: "MANUAL / PRESENCIAL", sibf: "NUBE (INSTANTÁNEA)" },
    { feature: "ESCALABILIDAD", legacy: "LIMITADA POR CABLEADO", sibf: "INFINITA (MODULAR)" },
    { feature: "COSTO TOTAL", legacy: "ALTO (MANUAL/SOPORTE)", sibf: "5 VECES MÁS ECONÓMICO" }
  ];

  return (
    <div id="negocio" className="space-y-12 md:space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-sm md:text-base tracking-[0.4em] uppercase">PROCESO DE NEGOCIO</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">COMPETITIVIDAD</h2>
      </div>

      <p className="text-xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Ofrecemos un <span className="text-[#FF1E2D] font-black text-2xl md:text-5xl">80% DE SIMILITUD</span> funcional con sistemas globales, pero con una estructura de costos disruptiva.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        <div className="bg-[#2B2B2B] p-6 md:p-10 text-white shadow-2xl space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <TrendingDown className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase italic">DISRUPCIÓN EN COSTOS</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-[9px] md:text-[11px]">BIOMETRIC-GLOBAL PRO</span>
                <span className="text-[10px] text-gray-500 font-bold">$150,000 MXN aprox.</span>
              </div>
              <span className="text-xl md:text-2xl font-black line-through text-gray-600">$7,500 USD</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <div className="flex flex-col">
                <span className="text-white font-black uppercase tracking-widest text-[9px] md:text-[11px]">SIBF-CAI SOLUTION</span>
                <span className="text-[10px] text-[#FF1E2D] font-bold">$30,000 MXN aprox.</span>
              </div>
              <span className="text-3xl md:text-5xl font-black text-[#FF1E2D]">$1,500 USD</span>
            </div>
            <p className="text-xs md:text-sm font-bold uppercase text-gray-400 leading-relaxed">
              Reducción del presupuesto operativo en un <span className="text-white text-lg font-black">80%</span> al eliminar hardware propietario.
            </p>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <Zap className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-lg md:text-xl font-black text-[#2B2B2B] uppercase tracking-widest italic">VENTAJAS OPERATIVAS</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-xl">
              <CheckCircle2 className="w-5 h-5 text-[#FF1E2D] shrink-0" />
              <p className="text-[11px] md:text-xs font-black text-gray-500 uppercase tracking-tighter">SIN DEPENDENCIAS DE HARDWARE EXTERNO.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-xl">
              <CheckCircle2 className="w-5 h-5 text-[#FF1E2D] shrink-0" />
              <p className="text-[11px] md:text-xs font-black text-gray-500 uppercase tracking-tighter">ACTUALIZACIONES SaaS INSTANTÁNEAS.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-xl">
              <CheckCircle2 className="w-5 h-5 text-[#FF1E2D] shrink-0" />
              <p className="text-[11px] md:text-xs font-black text-gray-500 uppercase tracking-tighter">MODELO POR SUSCRIPCIÓN ESCALABLE.</p>
            </div>
            
            {/* Nueva Política de Mantenimiento */}
            <div className="mt-4 bg-[#FF1E2D]/5 border-l-4 border-[#FF1E2D] p-5 shadow-inner">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#FF1E2D]" />
                <span className="text-xs font-black text-[#2B2B2B] uppercase tracking-widest">PÓLIZA DE MANTENIMIENTO</span>
              </div>
              <p className="text-[10px] md:text-[11px] font-bold text-gray-600 uppercase leading-relaxed tracking-tight">
                MANTENIMIENTO <span className="text-[#FF1E2D]">GRATUITO DURANTE 6 MESES</span>. POSTERIORMENTE, SE REALIZARÁ UN PRESUPUESTO ACORDE A LAS NECESIDADES ESPECÍFICAS DE LA INSTITUCIÓN.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <BarChart3 className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest italic">MATRIZ COMPARATIVA</h3>
        </div>
        
        <div className="overflow-x-auto shadow-2xl">
          <Table className="bg-white border-2 md:border-[3px] border-[#2B2B2B]">
            <TableHeader className="bg-[#2B2B2B]">
              <TableRow className="hover:bg-[#2B2B2B] border-none">
                <TableHead className="text-white font-black uppercase p-3 md:p-4 text-[11px] md:text-xs">FACTOR</TableHead>
                <TableHead className="text-gray-400 font-black uppercase p-3 md:p-4 text-[11px] md:text-xs">BIOMETRIC-GLOBAL PRO</TableHead>
                <TableHead className="text-[#FF1E2D] font-black uppercase p-3 md:p-4 text-xs md:text-sm italic">SIBF-CAI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, i) => (
                <TableRow key={i} className="border-gray-100 hover:bg-slate-50 transition-colors">
                  <TableCell className="p-3 md:p-4 font-black uppercase text-[#2B2B2B] text-[9px] md:text-[11px]">{row.feature}</TableCell>
                  <TableCell className="p-3 md:p-4 font-bold text-gray-400 uppercase text-[9px] md:text-[10px]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-3 h-3 text-gray-300" /> {row.legacy}
                    </div>
                  </TableCell>
                  <TableCell className="p-3 md:p-4 font-black text-[#2B2B2B] uppercase text-[10px] md:text-xs italic">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF1E2D]" /> {row.sibf}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}