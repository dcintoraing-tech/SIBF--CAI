'use client';

import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CommercialSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8 md:space-y-12 max-w-[1400px] mx-auto px-6">
      <div className="space-y-2 text-center">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.5em] uppercase">LANZAMIENTO OFICIAL</span>
        <h2 className="text-4xl md:text-8xl lg:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">
          SPOT <span className="red-gradient-text">COMERCIAL</span>
        </h2>
      </div>

      <div className="relative group cursor-pointer w-full max-w-4xl">
        <div className="absolute -inset-10 md:-inset-20 bg-[#FF1E2D]/20 blur-[80px] md:blur-[120px] opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative bg-[#2B2B2B] p-2 rounded-[40px] md:rounded-[60px] shadow-2xl transition-all duration-700 hover:scale-[1.02] active:scale-95 group overflow-hidden border border-white/10">
              <div className="w-full aspect-video rounded-[35px] md:rounded-[55px] overflow-hidden relative">
                {/* Imagen de Portada en Blanco/Tech */}
                <img 
                  src="https://picsum.photos/seed/sibf-cover/1280/720?grayscale" 
                  alt="Spot Comercial SIBF-CAI" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
                  data-ai-hint="technology abstract"
                />
                
                {/* Overlay de Gradiente */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Botón Play Gigante */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-44 md:h-44 bg-[#FF1E2D] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,30,45,0.6)] transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(255,30,45,0.8)]">
                    <Play className="w-12 h-12 md:w-24 md:h-24 text-white fill-current translate-x-1 md:translate-x-2" />
                  </div>
                </div>

                {/* Texto Inferior Overly */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="text-white text-lg md:text-4xl font-black uppercase italic tracking-tighter text-center">
                    SIBF-CAI: EL FUTURO DE LA GESTIÓN HOY
                   </div>
                </div>
              </div>
            </div>
          </DialogTrigger>
          
          <DialogContent className="max-w-[100vw] w-screen h-screen p-0 bg-black border-none z-[600] rounded-none flex flex-col items-center justify-center">
            <div className="w-full h-full relative group/video">
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
                src="/video/COMERCIAL SIBF-CAI.mp4"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-6 opacity-40">
           <div className="h-[2px] w-12 md:w-24 bg-[#2B2B2B]"></div>
           <p className="text-[10px] md:text-xl text-[#2B2B2B] font-black uppercase tracking-[0.6em] italic">EXPERIENCIA AUDIOVISUAL 4K</p>
           <div className="h-[2px] w-12 md:w-24 bg-[#2B2B2B]"></div>
        </div>
      </div>
    </div>
  );
}
