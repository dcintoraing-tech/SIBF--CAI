
'use client';

import { Smartphone, ArrowUpRight, Play, Video, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-16 text-center py-20 px-6 bg-[#0A0A0A]">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.4em] uppercase">ACCESO DIRECTO</span>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-16 bg-[#FF1E2D]/20 blur-[80px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white p-12 shadow-[0_0_50px_rgba(255,30,45,0.2)] border border-white/10 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
          <div className="w-56 h-56 md:w-72 md:h-72">
            <img 
              src="/images/QR.png" 
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full space-y-12">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="flex items-center gap-4 text-sm font-black text-white uppercase tracking-[0.2em]">
            <Smartphone className="w-8 h-8 text-[#FF1E2D]" />
            OPTIMIZADO MÓVIL
          </div>
          <div className="flex items-center gap-4 text-sm font-black text-white uppercase tracking-[0.2em]">
            <ArrowUpRight className="w-8 h-8 text-[#FF1E2D]" />
            ACCESO INSTANTÁNEO
          </div>
        </div>
        
        <div className="space-y-10">
          <p className="text-2xl md:text-3xl text-gray-400 font-bold uppercase tracking-tight leading-snug">
            ESCANEÉ PARA PROBAR EL <span className="text-white font-black text-3xl md:text-6xl px-2">RECONOCIMIENTO FACIAL</span> EN TIEMPO REAL.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-none border-2 border-[#FF1E2D] bg-transparent hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-8 py-6 md:px-10 md:py-8 h-auto text-sm md:text-lg transition-all flex items-center gap-4 group shadow-[0_0_30px_rgba(255,30,45,0.1)] hover:shadow-[0_0_50px_rgba(255,30,45,0.3)]"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF1E2D] group-hover:bg-white flex items-center justify-center transition-colors">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#FF1E2D] fill-current" />
                  </div>
                  TUTORIAL DE REGISTRO
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-black border-[#FF1E2D] border-2 md:border-4 overflow-hidden shadow-2xl">
                <DialogHeader className="p-4 md:p-6 bg-[#1A1A1A] text-white border-b border-white/5">
                  <DialogTitle className="text-base md:text-2xl font-black uppercase italic tracking-widest flex items-center gap-4">
                    <Video className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D]" />
                    <span className="text-[#FF1E2D]">|</span> TUTORIAL DE ALTA
                  </DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-black relative">
                  <video 
                    controls 
                    className="w-full h-full"
                    autoPlay={false}
                  >
                    <source src="/video/video.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-none border-2 border-white/20 bg-transparent hover:bg-white hover:text-[#0A0A0A] text-white font-black uppercase tracking-widest px-8 py-6 md:px-10 md:py-8 h-auto text-sm md:text-lg transition-all flex items-center gap-4 group shadow-xl"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 group-hover:bg-[#0A0A0A] flex items-center justify-center transition-colors">
                    <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-white" />
                  </div>
                  DEMO PASE DE LISTA
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-0 bg-black border-white border-2 md:border-4 overflow-hidden shadow-2xl">
                <DialogHeader className="p-4 md:p-6 bg-[#1A1A1A] text-white border-b border-white/5">
                  <DialogTitle className="text-base md:text-2xl font-black uppercase italic tracking-widest flex items-center gap-4">
                    <Video className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D]" />
                    <span className="text-[#FF1E2D]">|</span> DEMO PASE DE LISTA
                  </DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-black relative">
                  <video 
                    controls 
                    className="w-full h-full"
                    autoPlay={false}
                  >
                    <source src="/video/video2.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="bg-white/5 px-10 py-4 text-white/40 text-xs font-black uppercase tracking-[0.8em] border border-white/10">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA
        </div>
      </div>
    </div>
  );
}
