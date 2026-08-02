'use client';

import React, { useState, useEffect, useMemo } from 'react';
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

  const uxImages = useMemo(() => [
    "/images/1.jpeg", "/images/2.jpeg", "/images/3.jpg", "/images/4.jpg",
    "/images/5.jpg", "/images/6.jpg", "/images/7.png", "/images/8.png",
  ], []);

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
          <button className="relative group overflow-hidden bg-white border-4 border-[#2B2B2B] p-3 md:p-6 flex flex-col items-center gap-4 shadow-xl transition-all hover:scale-[1.05] active:scale-95">
            <div className="absolute inset-0 bg-[#2B2B2B]/95 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-4 text-center">
              <Maximize2 className="w-10 h-10 text-[#FF1E2D] mb-4" />
              <span className="text-white font-black text-[12px] md:text-xl uppercase tracking-widest italic">AMPLIAR VISTA</span>
            </div>
            
            <div className="w-full h-32 md:h-56 bg-slate-50 flex items-center justify-center overflow-hidden border-2 border-gray-100">
               {item.isCarousel ? (
                 <div className="relative w-full h-full flex items-center justify-center bg-gray-200">
                    <img src={item.images[currentUxIdx]} alt={item.name} className="w-full h-full object-cover opacity-60" loading="lazy" />
                    <Layout className="absolute w-12 h-12 text-[#FF1E2D] z-20" />
                 </div>
               ) : item.previewImg ? (
                 <img src={item.previewImg} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
               ) : item.isPdf ? (
                 <FileText className="w-14 h-14 text-[#FF1E2D]" />
               ) : item.img ? (
                 <img src={item.img} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
               ) : (
                 <item.icon className="w-14 h-14 text-[#FF1E2D] opacity-40" />
               )}
            </div>
            <span className="text-[12px] md:text-2xl font-black uppercase tracking-widest truncate w-full text-[#2B2B2B] italic text-center">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[98vw] h-[95vh] p-0 border-[#2B2B2B] border-8 bg-white overflow-hidden flex flex-col rounded-none">
          <DialogHeader className="p-6 bg-[#2B2B2B] text-white shrink-0 z-20 border-b-8 border-[#FF1E2D]">
            <DialogTitle className="text-xl md:text-5xl font-black uppercase italic tracking-widest flex items-center gap-8">
              <span className="w-4 h-12 bg-[#FF1E2D]" /> {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-white flex items-center justify-center p-8">
            {item.isCarousel ? (
              <Carousel className="w-full max-w-7xl" plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {item.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx} className="flex items-center justify-center">
                      <img src={img} alt={`${item.name} ${idx + 1}`} className="max-h-[70vh] w-auto object-contain shadow-2xl border-8 border-[#2B2B2B]" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : item.isPdf ? (
              <iframe src={`${item.img}#toolbar=0&navpanes=0`} className="w-full h-full border-4 border-[#2B2B2B]" title={item.name} />
            ) : (
              <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain shadow-2xl border-8 border-[#2B2B2B]" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[12px] md:text-2xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-4xl md:text-9xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 h-full">
        <div className="space-y-8">
          <div className="flex items-center gap-6 border-b-8 border-[#2B2B2B] pb-4">
            <GitBranch className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-5xl font-black uppercase tracking-widest italic text-[#2B2B2B]">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-6 border-b-8 border-[#2B2B2B] pb-4">
            <Database className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-5xl font-black uppercase tracking-widest italic text-[#2B2B2B]">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>
      </div>
    </div>
  );
}