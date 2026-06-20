'use client';

import { GitBranch, Database, Layout, Network, Search, Maximize2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
      img: null, 
      type: "DIAGRAMA", 
      desc: "Jerarquía y flujo de datos",
      pending: true
    },
  ];

  const uxImages = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.png",
  ];

  const dataDiagrams = [
    {
      name: "ENTIDAD RELACIÓN",
      img: "/images/ER.jpeg",
      type: "BASE DATOS",
      desc: "Mapeo centralizado NoSQL",
      icon: Network,
      pending: false
    },
    {
      name: "DISEÑO UX/UI",
      images: uxImages,
      type: "PROTOTIPO",
      desc: "Alta fidelidad funcional",
      icon: Layout,
      isCarousel: true,
      pending: false
    }
  ];

  const renderCard = (item: any, i: number, isLarge: boolean = false) => {
    if (item.pending) {
      return (
        <div key={i} className={`bg-white border-2 border-gray-100 p-10 flex flex-col items-center gap-6 shadow-2xl opacity-40 grayscale select-none ${isLarge ? 'p-16 border-4 border-[#2B2B2B]' : ''}`}>
          {item.icon && <item.icon className={isLarge ? "w-24 h-24 text-[#FF1E2D] mb-4" : "w-12 h-12 text-gray-300"} />}
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
          <span className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-black uppercase text-center leading-tight`}>{item.name}</span>
          <Badge variant="outline" className="border-gray-200 text-gray-400 font-black text-xs px-4 py-1">PENDIENTE</Badge>
        </div>
      );
    }

    return (
      <Dialog key={i}>
        <DialogTrigger asChild>
          <button className={`relative group overflow-hidden bg-white border-4 border-gray-100 p-10 flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 animate-executive-pulse ${isLarge ? 'p-16 border-[#2B2B2B]' : ''}`} style={{ animationDelay: `${i * 300}ms` }}>
            <div className="absolute inset-0 bg-[#2B2B2B]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-8 text-center">
              <Maximize2 className="w-12 h-12 text-[#FF1E2D] mb-4 animate-pulse" />
              <span className="text-white font-black text-sm uppercase tracking-widest mb-2">DETALLES ALTA RESOLUCIÓN</span>
              <span className="text-gray-400 text-xs font-bold uppercase">{item.desc}</span>
            </div>

            <div className="w-full flex justify-between items-center mb-2">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
              <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[10px] px-3 py-1 animate-glow-pulse">HD</Badge>
            </div>
            
            <span className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-black uppercase tracking-tighter text-center leading-tight`}>{item.name}</span>
            
            <div className={`w-full ${isLarge ? 'h-64' : 'h-40'} bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden`}>
               {item.isCarousel ? (
                 <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <Layout className="w-12 h-12 text-[#FF1E2D]" />
                      <span className="text-[10px] font-black uppercase text-gray-400">Gallería Interactiva</span>
                    </div>
                 </div>
               ) : item.previewImg ? (
                 <img 
                  src={item.previewImg} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                 />
               ) : item.isPdf ? (
                 <div className="flex flex-col items-center gap-4">
                   <FileText className="w-16 h-16 text-[#FF1E2D] opacity-40" />
                   <span className="text-xs font-black text-gray-400 uppercase">DOC. TÉCNICO</span>
                 </div>
               ) : item.img ? (
                 <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                 />
               ) : (
                 <item.icon className="w-20 h-20 text-[#FF1E2D] opacity-20" />
               )}
            </div>
            
            <div className="text-[#FF1E2D] font-black text-xs uppercase tracking-widest flex items-center gap-3 mt-4">
              EXPANDIR <Search className="w-4 h-4 animate-bounce" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-[#FF1E2D] border-4 bg-white overflow-hidden flex flex-col shadow-2xl">
          <DialogHeader className="p-6 bg-[#2B2B2B] text-white shrink-0 z-20">
            <DialogTitle className="text-2xl font-black uppercase italic tracking-widest flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-[#FF1E2D]">|</span> {item.name}
              </div>
              <span className="text-[#FF1E2D] text-xs font-bold tracking-[0.4em] bg-white/5 px-6 py-2 border border-white/10">SIBF-CAI VISOR</span>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-[#F8F9FA] p-0 flex items-stretch justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px]">
            {item.isCarousel ? (
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <Carousel className="w-full max-w-5xl">
                  <CarouselContent>
                    {item.images.map((img: string, idx: number) => (
                      <CarouselItem key={idx} className="flex items-center justify-center">
                        <div className="p-2 md:p-4 bg-white shadow-2xl border border-gray-100">
                          <img 
                            src={img} 
                            alt={`${item.name} slide ${idx + 1}`} 
                            className="max-h-[70vh] w-auto object-contain mx-auto" 
                          />
                          <div className="mt-4 text-center">
                            <span className="text-xs font-black text-[#FF1E2D] uppercase tracking-widest">PROTOTIPO {idx + 1} DE {item.images.length}</span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:block">
                    <CarouselPrevious className="left-0 -translate-x-1/2 bg-[#2B2B2B] text-white border-none hover:bg-[#FF1E2D]" />
                    <CarouselNext className="right-0 translate-x-1/2 bg-[#2B2B2B] text-white border-none hover:bg-[#FF1E2D]" />
                  </div>
                </Carousel>
              </div>
            ) : item.isPdf ? (
              <iframe 
                src={`${item.img}#toolbar=0&navpanes=0&scrollbar=1`} 
                className="w-full h-full border-none"
                title={item.name}
              />
            ) : (
              <div className="p-12 w-full flex justify-center items-start">
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
    <div id="diseno" className="space-y-32">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">FASE DE DISEÑO</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ARQUITECTURA</h2>
      </div>

      <p className="text-3xl md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black underline decoration-8 underline-offset-[16px]">MODELOS TÉCNICOS</span> escalables bajo estándares de ingeniería.
      </p>

      <div className="space-y-24">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <GitBranch className="w-14 h-14 text-[#FF1E2D]" />
            <h3 className="text-4xl font-black uppercase tracking-widest italic">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {umlDiagrams.map((item, i) => renderCard(item, i))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <Database className="w-14 h-14 text-[#FF1E2D]" />
            <h3 className="text-4xl font-black uppercase tracking-widest italic">ESTRUCTURA Y UX</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {dataDiagrams.map((item, i) => renderCard(item, i, true))}
          </div>
        </div>
      </div>
    </div>
  );
}
