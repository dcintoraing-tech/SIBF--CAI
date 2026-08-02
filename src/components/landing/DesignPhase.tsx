'use client';

import React from 'react';
import { GitBranch, Layout, Maximize2 } from "lucide-react";
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
    { name: "PROCESOS OPERATIVOS", img: "/images/pgeneral.jpg" },
    { name: "CASOS DE USO", img: "/images/cugeneral.jpg" },
    { name: "DIAGRAMA DE CLASES", img: "/images/CLA.jpeg" },
    { name: "ARQUITECTURA INFO.", img: "/images/ar.png" },
  ];

  const renderCard = (item: any, i: number) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl transition-all w-full border border-slate-50">
            <div className="absolute inset-0 bg-[#FF1E2D]/95 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-6">
              <Maximize2 className="w-10 h-10 text-white mb-3" />
              <span className="text-white font-black text-xs uppercase tracking-[0.3em] italic">AMPLIAR DIAGRAMA</span>
            </div>
            <div className="w-full h-32 md:h-44 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100">
               <img src={item.img} alt={item.name} className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <span className="text-xs md:text-lg font-black uppercase text-[#2B2B2B] italic text-center truncate w-full">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden flex flex-col bg-white border-none shadow-2xl z-[400]">
          <DialogHeader className="p-6 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
            <DialogTitle className="text-2xl md:text-4xl font-black uppercase italic tracking-widest text-center">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-slate-50 p-6 md:p-12 flex items-center justify-center">
             <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain shadow-2xl rounded-3xl" />
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-8 max-w-[1500px] mx-auto px-6">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* UML Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-6 border-b-2 border-slate-100 pb-4">
            <GitBranch className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-3xl font-black uppercase italic text-[#2B2B2B]">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        {/* Prototyping Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-6 border-b-2 border-slate-100 pb-4">
            <Layout className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-3xl font-black uppercase italic text-[#2B2B2B]">PROTOTIPOS UX/UI</h3>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative group w-full h-full min-h-[300px] md:min-h-[440px] bg-slate-100 rounded-[40px] overflow-hidden border-2 border-dashed border-slate-200 shadow-xl">
                <div className="absolute inset-0 bg-[#FF1E2D]/90 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center z-10 duration-500">
                   <Layout className="w-16 h-16 text-white mb-4 animate-bounce" />
                   <span className="text-white text-lg font-black uppercase tracking-[0.3em] italic">VER CARRUSEL DE INTERFACES</span>
                </div>
                <div className="grid grid-cols-2 h-full opacity-60">
                   {uxImages.slice(0, 4).map((img, i) => (
                     <img key={i} src={img} className="w-full h-full object-cover" alt="UX" />
                   ))}
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden flex flex-col bg-white border-none z-[400]">
              <DialogHeader className="p-6 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
                <DialogTitle className="text-3xl md:text-5xl font-black uppercase italic text-center">DISEÑO DE INTERFACES SIBF-CAI</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-slate-50">
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {uxImages.map((img, i) => (
                      <div key={i} className="aspect-[9/16] relative group rounded-[30px] overflow-hidden shadow-2xl border border-white hover:scale-105 transition-transform duration-500">
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
