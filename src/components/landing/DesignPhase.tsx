'use client';

import React, { useState, useEffect } from 'react';
import { GitBranch, Database, Layout, Network, Search, Maximize2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

  const renderCard = (item: any, i: number, isLarge: boolean = false) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white border border-gray-100 p-2 md:p-4 flex flex-col items-center gap-2 shadow-md transition-all">
            <div className="absolute inset-0 bg-[#2B2B2B]/95 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-2 text-center">
              <Maximize2 className="w-6 h-6 text-[#FF1E2D] mb-2" />
              <span className="text-white font-black text-[8px] uppercase tracking-widest">VER ALTA RESOLUCIÓN</span>
            </div>
            
            <div className="w-full h-20 md:h-32 bg-slate-50 flex items-center justify-center overflow-hidden">
               {item.isCarousel ? (
                 <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                    <img src={item.images[currentUxIdx]} alt={item.name} className="w-full h-full object-cover opacity-60" />
                    <Layout className="absolute w-6 h-6 text-[#FF1E2D]" />
                 </div>
               ) : item.previewImg ? (
                 <img src={item.previewImg} alt={item.name} className="w-full h-full object-cover" />
               ) : item.isPdf ? (
                 <FileText className="w-8 h-8 text-[#FF1E2D] opacity-40" />
               ) : item.img ? (
                 <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
               ) : (
                 <item.icon className="w-8 h-8 text-[#FF1E2D] opacity-20" />
               )}
            </div>
            <span className="text-[8px] md:text-xs font-black uppercase tracking-widest truncate w-full">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 border-[#FF1E2D] border-2 bg-white overflow-hidden flex flex-col">
          <DialogHeader className="p-4 bg-[#2B2B2B] text-white shrink-0 z-20">
            <DialogTitle className="text-sm md:text-xl font-black uppercase italic tracking-widest">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-[#F8F9FA] flex items-stretch justify-center relative">
            {item.isCarousel ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <Carousel className="w-full max-w-4xl" plugins={[Autoplay({ delay: 3000 })]}>
                  <CarouselContent>
                    {item.images.map((img: string, idx: number) => (
                      <CarouselItem key={idx} className="flex items-center justify-center">
                        <img src={img} alt={`${item.name} ${idx + 1}`} className="max-h-[70vh] w-auto object-contain shadow-lg" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ) : item.isPdf ? (
              <iframe src={`${item.img}#toolbar=0&navpanes=0`} className="w-full h-full" title={item.name} />
            ) : (
              <div className="p-4 w-full flex justify-center items-start overflow-auto">
                <img src={item.img} alt={item.name} className="max-w-none md:max-w-full h-auto shadow-2xl bg-white" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <GitBranch className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-xs md:text-2xl font-black uppercase tracking-widest italic text-gray-500">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-xs md:text-2xl font-black uppercase tracking-widest italic text-gray-500">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataDiagrams.map((item, i) => renderCard(item, i, true))}
          </div>
        </div>
      </div>
    </div>
  );
}
