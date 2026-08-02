'use client';

import React from 'react';
import { GitBranch, Layout, Maximize2 } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

  // Auto-play cada 1 segundo (1000ms) y sin detenerse al interactuar
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const renderCard = (item: any, i: number) => {
    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className="relative group overflow-hidden bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transition-all w-full border border-slate-50">
            <div className="absolute inset-0 bg-[#FF1E2D]/95 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-4">
              <Maximize2 className="w-8 h-8 text-white mb-2" />
              <span className="text-white font-black text-[10px] uppercase tracking-widest italic">AMPLIAR DIAGRAMA</span>
            </div>
            <div className="w-full h-24 md:h-32 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100">
               <img src={item.img} alt={item.name} className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase text-[#2B2B2B] italic text-center truncate w-full">{item.name}</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 overflow-hidden flex flex-col bg-white border-none shadow-2xl z-[500]">
          <DialogHeader className="p-4 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
            <DialogTitle className="text-xl md:text-3xl font-black uppercase italic tracking-widest text-center">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-white p-4 md:p-8 flex items-center justify-center">
             <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl" />
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 max-w-[1400px] mx-auto px-6">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* UML Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-2">
            <GitBranch className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D]" />
            <h3 className="text-lg md:text-2xl font-black uppercase italic text-[#2B2B2B]">MODELADO TÉCNICO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        {/* Prototyping Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-2">
            <Layout className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D]" />
            <h3 className="text-lg md:text-2xl font-black uppercase italic text-[#2B2B2B]">INTERFACES DE ALTA FIDELIDAD</h3>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative group w-full h-[250px] md:h-[350px] bg-white rounded-[40px] overflow-hidden border-2 border-dashed border-slate-200 shadow-xl transition-all hover:border-[#FF1E2D]/50 p-2">
                <div className="absolute inset-0 bg-[#FF1E2D]/90 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center z-20 duration-500 rounded-[40px]">
                   <Maximize2 className="w-12 h-12 text-white mb-2" />
                   <span className="text-white text-xs font-black uppercase tracking-[0.2em] italic">VER CARRUSEL INTERACTIVO</span>
                </div>
                <div className="grid grid-cols-4 h-full opacity-60 rounded-[35px] overflow-hidden">
                   {uxImages.slice(0, 4).map((img, i) => (
                     <img key={i} src={img} className="w-full h-full object-cover" alt="UX Preview" />
                   ))}
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 overflow-hidden flex flex-col bg-white border-none z-[500] shadow-2xl">
              <DialogHeader className="p-4 bg-[#2B2B2B] text-white border-b-4 border-[#FF1E2D]">
                <DialogTitle className="text-xl md:text-3xl font-black uppercase italic text-center">UX/UI PROTOTYPES - SIBF-CAI</DialogTitle>
              </DialogHeader>
              <div className="flex-1 flex items-center justify-center bg-white p-4 md:p-8 overflow-hidden">
                <Carousel 
                  plugins={[plugin.current]}
                  opts={{
                    loop: true,
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <CarouselContent className="h-full">
                    {uxImages.map((img, i) => (
                      <CarouselItem key={i} className="flex justify-center items-center h-full">
                        <div className="relative w-full h-full flex items-center justify-center bg-white">
                          <img 
                            src={img} 
                            className={cn(
                              "h-[80vh] md:h-[85vh] w-auto max-w-full object-contain shadow-2xl rounded-2xl border-2 border-slate-100 transition-transform duration-300",
                              i === 0 && "rotate-90" // Rotar la primera imagen hacia la derecha
                            )} 
                            alt={`Interface ${i + 1}`} 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 md:left-10 h-16 w-16 bg-white/80 border-2 border-slate-200 text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white transition-all shadow-2xl rounded-full z-[600]" />
                  <CarouselNext className="right-4 md:right-10 h-16 w-16 bg-white/80 border-2 border-slate-200 text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white transition-all shadow-2xl rounded-full z-[600]" />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
