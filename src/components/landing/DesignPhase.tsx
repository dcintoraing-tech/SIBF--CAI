'use client';

import { GitBranch, Database, Layout, Network, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DesignPhase() {
  const diagrams = [
    { name: "PROCESOS", img: "/images/pgeneral.jpg", type: "DIAGRAMA" },
    { name: "CASOS USO", img: "/images/cugeneral.jpg", type: "DIAGRAMA" },
    { name: "CLASES", img: null, type: "DIAGRAMA" },
    { name: "SECUENCIA", img: null, type: "DIAGRAMA" },
  ];

  return (
    <div id="diseno" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.7 FASE DE DISEÑO</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">ARQUITECTURA</h2>
      </div>

      <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black underline">MODELOS TÉCNICOS</span> escalables bajo estándares de ingeniería.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <GitBranch className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">MODELADO UML</h3>
          </div>
          <TooltipProvider>
            <div className="grid grid-cols-2 gap-6">
              {diagrams.map((item, i) => (
                <Tooltip key={i} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className={`bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] transition-all cursor-help relative group overflow-hidden`}>
                      {item.img && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4 text-[#FF1E2D]" />
                        </div>
                      )}
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                      <span className="text-lg font-black uppercase">{item.name}</span>
                      <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[10px]">UML V2.5</Badge>
                    </div>
                  </TooltipTrigger>
                  {item.img && (
                    <TooltipContent side="top" className="p-0 border-none bg-transparent shadow-none" sideOffset={10}>
                      <div className="w-[400px] h-auto bg-white p-2 shadow-2xl border-2 border-[#FF1E2D] animate-in zoom-in-95 duration-300">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-auto object-contain"
                        />
                        <div className="bg-[#FF1E2D] text-white text-[10px] font-black p-2 uppercase text-center">
                          VISTA PREVIA: {item.name} GENERAL
                        </div>
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <Database className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">ESTRUCTURA DE DATOS</h3>
          </div>
          <div className="bg-[#2B2B2B] p-10 space-y-8 shadow-2xl h-full">
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors">
              <Network className="w-8 h-8 text-[#FF1E2D]" />
              <div>
                <span className="text-lg font-black uppercase">MAPEO ENTIDAD-RELACIÓN</span>
                <p className="text-xs text-gray-500 uppercase font-bold">Base de datos centralizada</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors">
              <Layout className="w-8 h-8 text-[#FF1E2D]" />
              <div>
                <span className="text-lg font-black uppercase">DISEÑO DE INTERFAZ UX</span>
                <p className="text-xs text-gray-500 uppercase font-bold">Prototipado de alta fidelidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}