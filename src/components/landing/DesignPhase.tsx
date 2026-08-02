'use client';

import React, { useState, useEffect } from 'react';
import { GitBranch, Database, Layout, Network, Maximize2, FileText } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function DesignPhase() {
  const [currentUxIdx, setCurrentUxIdx] = useState(0);

  const uxImages = [
    "/images/1.jpeg", "/images/2.jpeg", "/images/3.jpg", "/images/4.jpg",
    "/images/5.jpg", "/images/6.jpg", "/images/7.png", "/images/8.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUxIdx((prev) => (prev + 1) % uxImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [uxImages.length]);

  const umlDiagrams = [
    { name: "PROCESOS", img: "/images/dp.pdf", previewImg: "/images/pgeneral.jpg", type: "PDF", desc: "Flujo operativo", isPdf: true },
    { name: "CASOS USO", img: "/images/cugeneral.jpg", type: "DIAGRAMA", desc: "Actores-sistema" },
    { name: "CLASES", img: "/images/CLA.jpeg", type: "DIAGRAMA", desc: "Lógica objetos" },
    { name: "ARQ. INFO", img: "/images/ar.png", type: "DIAGRAMA", desc: "Flujo datos" },
  ];

  const dataDiagrams = [
    { name: "MODELO DE DATOS", img: "/images/ER.jpeg", type: "BASE DATOS", desc: "Mapeo NoSQL", icon: Network },
    { name: "DISEÑO UX/UI", images: uxImages, type: "PROTOTIPO", desc: "Alta fidelidad", icon: Layout, isCarousel: true }
  ];

  const renderCard = (item: any, i: number) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white border-2 border-[#2B2B2B] p-2 md:p-3 flex flex-col items-center gap-2 shadow-lg transition-all hover:scale-[1.02] active:scale-95">
            <div className="absolute inset-0 bg-[#2B2B2B]/90 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-2 text-center">
              <Maximize2 className="w-6 h-6 text-[#FF1E2D] mb-2" />
              <span className="text-white font-black text-[10px] uppercase tracking-widest">AMPLIAR VISTA</span>
            </div>
            
            <div className="w-full h-24 md:h-40 bg-slate-100 flex items-center justify-center overflow-hidden border border-gray-100">
               {item.isCarousel ? (
                 <div className="relative w-full h-full flex items-center justify-center bg-gray-200">
                    <img src={item.images[currentUxIdx]} alt={item.name} className="w-full h-full object-cover opacity-70" />
                    <Layout className="absolute w-8 h-8 text-[#FF1E2D]" />
                 </div>
               ) : item.previewImg ? (
                 <img src={item.previewImg} alt={item.name} className="w-full h-full object-contain" />
               ) : item.isPdf ? (
                 <FileText className="w-10 h-10 text-[#FF1E2D]" />
               ) : item.img ? (
                 <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
               ) : (
                 <item.icon className="w-10 h-10 text-[#FF1E2D] opacity-40" />
               )}
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest truncate w-full text-[#2B2B2B]">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] h-[92vh] p-0 border-[#FF1E2D] border-[3px] bg-white overflow-hidden flex flex-col">
          <DialogHeader className="p-4 bg-[#2B2B2B] text-white shrink-0 z-20 border-b border-[#FF1E2D]">
            <DialogTitle className="text-sm md:text-2xl font-black uppercase italic tracking-widest flex items-center gap-4">
              <span className="w-2 h-8 bg-[#FF1E2D]" /> {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-white flex items-center justify-center p-4">
            {item.isCarousel ? (
              <Carousel className="w-full max-w-5xl" plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {item.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx} className="flex items-center justify-center">
                      <img src={img} alt={`${item.name} ${idx + 1}`} className="max-h-[75vh] w-auto object-contain shadow-2xl border-4 border-[#2B2B2B]" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : item.isPdf ? (
              <iframe src={`${item.img}#toolbar=0&navpanes=0`} className="w-full h-full border-2 border-[#2B2B2B]" title={item.name} />
            ) : (
              <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain shadow-2xl border-4 border-[#2B2B2B]" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-10">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-3xl md:text-7xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#2B2B2B] pb-2">
            <GitBranch className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            <h3 className="text-sm md:text-3xl font-black uppercase tracking-widest italic text-[#2B2B2B]">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#2B2B2B] pb-2">
            <Database className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            <h3 className="text-sm md:text-3xl font-black uppercase tracking-widest italic text-[#2B2B2B]">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>
      </div>
    </div>
  );
}