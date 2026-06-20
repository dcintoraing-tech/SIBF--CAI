'use client';

import { GitBranch, Database, Layout, Network, Search, Maximize2, FileText, Share2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DesignPhase() {
  const umlDiagrams = [
    { 
      name: "PROCESOS", 
      img: "/images/dp.pdf", 
      type: "PDF",
      desc: "Flujo operativo institucional",
      isPdf: true
    },
    { 
      name: "CASOS USO", 
      img: "/images/cugeneral.jpg", 
      type: "DIAGRAMA",
      desc: "Interacciones actores-sistema"
    },
    { 
      name: "CLASES", 
      img: "/images/cgeneral.jpg", 
      type: "DIAGRAMA",
      desc: "Lógica y estructura de objetos" 
    },
    { 
      name: "ARQ. INFO", 
      img: null, 
      type: "DIAGRAMA", 
      desc: "Jerarquía y flujo de datos",
      pending: true
    },
  ];

  const dataDiagrams = [
    {
      name: "ENTIDAD RELACIÓN",
      img: null,
      type: "BASE DATOS",
      desc: "Mapeo centralizado SQL",
      icon: Network,
      pending: true
    },
    {
      name: "DISEÑO UX/UI",
      img: null,
      type: "PROTOTIPO",
      desc: "Alta fidelidad funcional",
      icon: Layout,
      pending: true
    }
  ];

  const renderCard = (item: any, i: number) => {
    if (item.pending) {
      return (
        <div key={i} className="bg-white border-2 border-gray-100 p-6 flex flex-col items-center gap-4 shadow-xl opacity-40 grayscale select-none">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
          <span className="text-lg font-black uppercase text-center leading-tight">{item.name}</span>
          <Badge variant="outline" className="border-gray-200 text-gray-400 font-black text-[10px]">PENDIENTE</Badge>
        </div>
      );
    }

    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white border-2 border-gray-100 p-6 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.02] transition-all duration-300 ease-out">
            <div className="absolute inset-0 bg-[#2B2B2B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 text-center">
              <Maximize2 className="w-8 h-8 text-[#FF1E2D] mb-2 animate-pulse" />
              <span className="text-white font-black text-xs uppercase tracking-widest mb-1">DETALLES HD</span>
              <span className="text-gray-400 text-[9px] font-bold uppercase">{item.desc}</span>
            </div>

            <div className="w-full flex justify-between items-center mb-1">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
              <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[8px] px-2 py-0">ALTA RES.</Badge>
            </div>
            
            <span className="text-lg font-black uppercase tracking-tighter text-center leading-tight">{item.name}</span>
            
            <div className="w-full h-32 bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
               {item.isPdf ? (
                 <div className="flex flex-col items-center gap-2">
                   <FileText className="w-12 h-12 text-[#FF1E2D] opacity-40" />
                   <span className="text-[10px] font-black text-gray-400 uppercase">DOC. TÉCNICO</span>
                 </div>
               ) : (
                 <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
               )}
            </div>
            
            <div className="text-[#FF1E2D] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
              EXPANDIR <Search className="w-3 h-3" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-[#FF1E2D] border-2 bg-white overflow-hidden flex flex-col shadow-2xl">
          <DialogHeader className="p-4 bg-[#2B2B2B] text-white shrink-0 z-20">
            <DialogTitle className="text-xl font-black uppercase italic tracking-widest flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[#FF1E2D]">|</span> {item.name}
              </div>
              <span className="text-[#FF1E2D] text-[10px] font-bold tracking-[0.2em] bg-white/5 px-3 py-1 border border-white/10">SIBF-CAI</span>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-[#F8F9FA] p-0 flex items-stretch justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
            {item.isPdf ? (
              <iframe 
                src={`${item.img}#toolbar=0&navpanes=0&scrollbar=1`} 
                className="w-full h-full border-none"
                title={item.name}
              />
            ) : (
              <div className="p-4 md:p-12 w-full flex justify-center items-start">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-w-none w-auto h-auto min-w-full shadow-2xl bg-white border border-gray-200"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div id="diseno" className="space-y-12 md:space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-base md:text-lg tracking-[0.4em] uppercase">1.7 FASE DE DISEÑO</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">ARQUITECTURA</h2>
      </div>

      <p className="text-xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black underline decoration-2 underline-offset-8">MODELOS TÉCNICOS</span> escalables bajo estándares de ingeniería.
      </p>

      <div className="space-y-16">
        {/* UML Modeling Section */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <GitBranch className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        {/* Data Structure Section - Redesigned to match UML boxes */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <Database className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {dataDiagrams.map((item, i) => (
              <div key={i} className="bg-white border-2 border-[#2B2B2B] p-10 flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF1E2D] -mr-8 -mt-8 rotate-45 opacity-10 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-16 h-16 text-[#FF1E2D]" />
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">{item.name}</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
                <Badge className="bg-[#2B2B2B] text-white rounded-none px-6">FASE 2: IMPLEMENTACIÓN</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
