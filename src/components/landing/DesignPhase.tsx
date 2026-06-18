'use client';

import { GitBranch, Database, Layout, Network, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          
          <div className="grid grid-cols-2 gap-6">
            {diagrams.map((item, i) => (
              item.img ? (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button className="text-left bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] hover:scale-[1.02] transition-all relative group overflow-hidden">
                      <div className="absolute top-2 right-2 text-[#FF1E2D] opacity-40 group-hover:opacity-100 transition-opacity">
                        <Search className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                      <span className="text-lg font-black uppercase">{item.name}</span>
                      <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[10px]">VER DETALLE</Badge>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-[#FF1E2D] border-2 bg-white overflow-hidden">
                    <DialogHeader className="p-4 bg-[#2B2B2B] text-white">
                      <DialogTitle className="text-xl font-black uppercase italic tracking-widest">
                        DIAGRAMA DE {item.name} - VISTA DETALLADA
                      </DialogTitle>
                    </DialogHeader>
                    <div className="p-2 overflow-auto flex items-center justify-center bg-slate-50">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="max-w-full h-auto object-contain cursor-zoom-in"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div key={i} className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl opacity-60">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                  <span className="text-lg font-black uppercase">{item.name}</span>
                  <Badge variant="outline" className="border-gray-200 text-gray-400 font-black text-[10px]">PENDIENTE</Badge>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <Database className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">ESTRUCTURA DE DATOS</h3>
          </div>
          <div className="bg-[#2B2B2B] p-10 space-y-8 shadow-2xl h-full flex flex-col justify-center">
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