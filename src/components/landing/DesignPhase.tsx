
'use client';

import React, { useState } from 'react';
import { GitBranch, Database, Layout, Network, Maximize2, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DesignPhase() {
  const uxImages = [
    "/images/1.jpeg", "/images/2.jpeg", "/images/3.jpg", "/images/4.jpg",
    "/images/5.jpg", "/images/6.jpg", "/images/7.png", "/images/8.png",
  ];

  const umlDiagrams = [
    { name: "PROCESOS", img: "/images/pgeneral.jpg", type: "PDF", desc: "Flujo operativo" },
    { name: "CASOS USO", img: "/images/cugeneral.jpg", type: "DIAGRAMA", desc: "Actores-sistema" },
    { name: "CLASES", img: "/images/CLA.jpeg", type: "DIAGRAMA", desc: "Lógica objetos" },
    { name: "ARQ. INFO", img: "/images/ar.png", type: "DIAGRAMA", desc: "Flujo datos" },
  ];

  const renderCard = (item: any, i: number) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white rounded-2xl p-4 flex flex-col items-center gap-2 shadow-lg hover:shadow-2xl transition-all w-full border border-gray-100">
            <div className="absolute inset-0 bg-[#FF1E2D]/90 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-4">
              <Maximize2 className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-black text-[10px] uppercase tracking-widest italic">VER DETALLE</span>
            </div>
            <div className="w-full h-24 md:h-32 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden">
               <img src={item.img || uxImages[0]} alt={item.name} className="w-full h-full object-contain opacity-80" />
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase text-[#2B2B2B] italic text-center truncate w-full">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 overflow-hidden flex flex-col bg-white border-none shadow-2xl z-[300]">
          <DialogHeader className="p-4 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
            <DialogTitle className="text-xl md:text-3xl font-black uppercase italic tracking-widest">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-slate-50 p-4 md:p-8 flex items-center justify-center">
             <img src={item.img || uxImages[0]} alt={item.name} className="max-w-full max-h-full object-contain shadow-2xl rounded-xl" />
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-10 max-w-7xl mx-auto">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-4xl md:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-2">
            <GitBranch className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            <h3 className="text-lg md:text-2xl font-black uppercase italic text-[#2B2B2B]">DIAGRAMAS UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-2">
            <Layout className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            <h3 className="text-lg md:text-2xl font-black uppercase italic text-[#2B2B2B]">UX/UI PROTOTIPOS</h3>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative group w-full h-40 md:h-64 bg-slate-100 rounded-3xl overflow-hidden border-2 border-dashed border-slate-200">
                <div className="absolute inset-0 bg-[#FF1E2D]/80 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center z-10">
                   <Layout className="w-12 h-12 text-white mb-2" />
                   <span className="text-white font-black uppercase tracking-widest italic">ABRIR CARRUSEL</span>
                </div>
                <div className="grid grid-cols-4 h-full">
                   {uxImages.slice(0, 4).map((img, i) => (
                     <img key={i} src={img} className="w-full h-full object-cover" alt="UX" />
                   ))}
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden flex flex-col bg-white">
              <DialogHeader className="p-4 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
                <DialogTitle className="text-2xl md:text-4xl font-black uppercase italic">DISEÑO DE INTERFACES</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-4 md:p-12">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {uxImages.map((img, i) => (
                      <div key={i} className="aspect-[9/16] relative group rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <img src={img} className="w-full h-full object-cover" alt={`UI ${i}`} />
                      </div>
                    ))}
                 </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
