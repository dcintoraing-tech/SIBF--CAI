'use client';

import { Play, Video, ClipboardCheck } from "lucide-react";
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
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6 md:space-y-10 max-w-[1400px] mx-auto px-6">
      <div className="space-y-1 text-center">
        <span className="text-[#FF1E2D] font-bold text-xs md:text-lg tracking-[0.4em] uppercase">ACCESO DIRECTO</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-16 bg-[#FF1E2D]/20 blur-[60px] opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        <div className="relative bg-white p-8 shadow-2xl rounded-[40px] border border-slate-100 flex items-center justify-center hover:scale-105 transition-transform duration-500">
          <div className="w-40 h-40 md:w-72 md:h-72">
            <img src="/images/QR.png" alt="QR Code" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl space-y-8 text-center">
        <p className="text-xl md:text-4xl text-[#2B2B2B] font-black uppercase tracking-tight leading-none italic">
          ESCANEÉ PARA PROBAR EL <span className="text-[#FF1E2D]">RECONOCIMIENTO FACIAL</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full sm:w-auto rounded-full bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white font-black uppercase tracking-[0.2em] px-12 py-8 h-auto text-sm md:text-xl flex items-center gap-4 transition-all shadow-2xl active:scale-95"
              >
                <Play className="w-6 h-6 fill-current" />
                VER TUTORIAL REGISTRO
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 bg-black border-4 border-[#FF1E2D] overflow-hidden z-[400] rounded-[30px]">
              <DialogHeader className="p-6 bg-[#1A1A1A] text-white border-b border-[#FF1E2D]/20">
                <DialogTitle className="text-xl md:text-3xl font-black uppercase italic flex items-center gap-6">
                  <Video className="w-8 h-8 text-[#FF1E2D]" /> TUTORIAL DE ALTA
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <video controls className="w-full h-full" src="/video/video.mp4" autoPlay />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="w-full sm:w-auto rounded-full border-4 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-[#2B2B2B] font-black uppercase tracking-[0.2em] px-12 py-8 h-auto text-sm md:text-xl flex items-center gap-4 transition-all shadow-2xl active:scale-95 bg-white/50 backdrop-blur-sm"
              >
                <ClipboardCheck className="w-6 h-6" />
                DEMO PASE LISTA
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl p-0 bg-black border-4 border-[#2B2B2B] overflow-hidden z-[400] rounded-[30px]">
              <DialogHeader className="p-6 bg-[#1A1A1A] text-white border-b border-white/10">
                <DialogTitle className="text-xl md:text-3xl font-black uppercase italic flex items-center gap-6">
                  <Video className="w-8 h-8 text-[#FF1E2D]" /> DEMOSTRACIÓN PASE LISTA
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <video controls className="w-full h-full" src="/video/video2.mp4" autoPlay />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="text-[#2B2B2B] text-[10px] md:text-sm font-black uppercase tracking-[0.6em] border-t-2 border-slate-100 pt-6 inline-block opacity-40 italic">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA AVANZADA
        </div>
      </div>
    </div>
  );
}
