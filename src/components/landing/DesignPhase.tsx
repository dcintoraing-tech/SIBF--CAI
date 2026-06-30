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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function DesignPhase() {
  const [currentUxIdx, setCurrentUxIdx] = useState(0);

  const uxImages = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.png",
    "/images/8.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUxIdx((prev) => (prev + 1) % uxImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [uxImages.length]);

  const umlDiagrams = [
    { 
      name: "PROCESOS", 
      img: "/images/dp.pdf", 
      previewImg: "/images/pgeneral.jpg",
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
      img: "/images/CLA.jpeg", 
      type: "DIAGRAMA",
      desc: "Lógica y estructura de objetos" 
    },
    { 
      name: "ARQ. INFO", 
      img: "/images/ar.png", 
      type: "DIAGRAMA", 
      desc: "Jerarquía y flujo de datos"
    },
  ];

  const dataDiagrams = [
    {
      name: "MODELO DE DATOS",
      img: "/images/ER.jpeg",
      type: "BASE DATOS",
      desc: "Mapeo centralizado NoSQL",
      icon: Network
    },
    {
      name: "DISEÑO UX/UI",
      images: uxImages,
      type: "PROTOTIPO",
      desc: "Alta fidelidad funcional",
      icon: Layout,
      isCarousel: true
    }
  ];

  const renderCard = (item: any, i: number, isLarge: boolean = false) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className={`relative group overflow-hidden bg-white border-2 md:border-4 border-gray-100 p-6 md:p-10 flex flex-col items-center gap-4 md:gap-6 shadow-xl transition-all duration-300 animate-executive-pulse ${isLarge ? 'md:p-16 md:border-[#2B2B2B]' : ''}`} style={{ animationDelay: `${i * 300}ms` }}>
            <div className="absolute inset-0 bg-[#2B2B2B]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
              <Maximize2 className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mb-4 animate-pulse" />
              <span className="text-white font-black text-[10px] md:text-sm uppercase tracking-widest mb-2">VER EN ALTA RESOLUCIÓN</span>
              <span className="text-gray-400 text-[8px] md:text-xs font-bold uppercase">{item.desc}</span>
            </div>

            <div className="w-full flex justify-between items-center mb-2">
              <span className="text-[8px] md:text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
              <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[8px] md:text-[10px] px-2 py-0.5 animate-glow-pulse">HD</Badge>
            </div>
            
            <span className={`${isLarge ? 'text-xl md:text-4xl' : 'text-base md:text-2xl'} font-black uppercase tracking-tighter text-center leading-tight`}>{item.name}</span>
            
            <div className={`w-full ${isLarge ? 'h-40 md:h-64' : 'h-24 md:h-40'} bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden`}>
               {item.isCarousel ? (
                 <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                    <img 
                      key={currentUxIdx}
                      src={item.images[currentUxIdx]} 
                      alt={item.name} 
                      className="w-full h-full object-cover opacity-60 animate-in fade-in duration-700" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
                      <Layout className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] drop-shadow-lg" />
                    </div>
                 </div>
               ) : item.previewImg ? (
                 <img 
                  src={item.previewImg} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                 />
               ) : item.isPdf ? (
                 <div className="flex flex-col items-center gap-2">
                   <FileText className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] opacity-40" />
                 </div>
               ) : item.img ? (
                 <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                 />
               ) : (
                 <item.icon className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] opacity-20" />
               )}
            </div>
            
            <div className="text-[#FF1E2D] font-black text-[9px] md:text-xs uppercase tracking-widest flex items-center gap-2 mt-2 md:mt-4">
              EXPANDIR <Search className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[98vw] md:max-w-[95vw] w-full h-[90vh] p-0 border-[#FF1E2D] border-2 md:border-4 bg-white overflow-hidden flex flex-col shadow-2xl">
          <DialogHeader className="p-4 md:p-6 bg-[#2B2B2B] text-white shrink-0 z-20">
            <DialogTitle className="text-sm md:text-2xl font-black uppercase italic tracking-widest flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-6">
                <span className="text-[#FF1E2D]">|</span> {item.name}
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-[#F8F9FA] p-0 flex items-stretch justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
            {item.isCarousel ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <Carousel className="w-full max-w-5xl" plugins={[Autoplay({ delay: 3000 })]}>
                  <CarouselContent>
                    {item.images.map((img: string, idx: number) => (
                      <CarouselItem key={idx} className="flex items-center justify-center">
                        <div className="p-2 bg-white shadow-xl border border-gray-100">
                          <img src={img} alt={`${item.name} ${idx + 1}`} className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain mx-auto" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            ) : item.isPdf ? (
              <iframe src={`${item.img}#toolbar=0&navpanes=0&scrollbar=1`} className="w-full h-full border-none" title={item.name} />
            ) : (
              <div className="p-4 md:p-12 w-full flex justify-center items-start overflow-auto">
                <img src={item.img} alt={item.name} className="max-w-none md:max-w-full h-auto shadow-2xl bg-white" />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div id="diseno" className="space-y-16 md:space-y-32">
      <div className="space-y-3">
        <span className="text-[#FF1E2D] font-bold text-xs md:text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <p className="text-lg md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black text-2xl md:text-7xl">MODELOS TÉCNICOS</span> escalables.
      </p>

      <div className="space-y-16 md:space-y-24">
        <div className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <GitBranch className="w-8 h-8 md:w-14 md:h-14 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-4xl font-black uppercase tracking-widest italic">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <Database className="w-8 h-8 md:w-14 md:h-14 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-4xl font-black uppercase tracking-widest italic">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {dataDiagrams.map((item, i) => renderCard(item, i, true))}
          </div>
        </div>
      </div>
    </div>
  );
}