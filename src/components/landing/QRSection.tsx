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
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6 md:space-y-12 py-4 md:py-8 bg-[#0A0A0A]">
      <div className="space-y-2 text-center">
        <span className="text-[#FF1E2D] font-bold text-[8px] md:text-sm tracking-[0.4em] uppercase">ACCESO DIRECTO</span>
        <h2 className="text-2xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-10 bg-[#FF1E2D]/10 blur-[50px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white p-6 md:p-10 shadow-2xl border border-white/10 flex items-center justify-center">
          <div className="w-40 h-40 md:w-64 md:h-64">
            <img src="/images/QR.png" alt="QR Code" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl space-y-6 md:space-y-10 text-center">
        <p className="text-lg md:text-4xl text-gray-400 font-bold uppercase tracking-tight leading-none">
          ESCANEÉ PARA PROBAR EL <span className="text-white font-black">RECONOCIMIENTO FACIAL</span> EN TIEMPO REAL.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto rounded-none border-2 border-[#FF1E2D] bg-transparent hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-6 py-4 md:px-10 md:py-6 h-auto text-[10px] md:text-base flex items-center gap-3 transition-all shadow-lg"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                TUTORIAL REGISTRO
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-[#FF1E2D] border-2 overflow-hidden">
              <DialogHeader className="p-4 bg-[#1A1A1A] text-white">
                <DialogTitle className="text-xs md:text-xl font-black uppercase italic flex items-center gap-4">
                  <Video className="w-5 h-5 md:w-7 md:h-7 text-[#FF1E2D]" /> TUTORIAL ALTA
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full bg-black">
                <video controls className="w-full h-full" autoPlay={false}>
                  <source src="/video/video.mp4" type="video/mp4" />
                </video>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto rounded-none border-2 border-white/20 bg-transparent hover:bg-white hover:text-black text-white font-black uppercase tracking-widest px-6 py-4 md:px-10 md:py-6 h-auto text-[10px] md:text-base flex items-center gap-3 transition-all shadow-lg"
              >
                <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5 text-white" />
                DEMO PASE LISTA
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-white border-2 overflow-hidden">
              <DialogHeader className="p-4 bg-[#1A1A1A] text-white">
                <DialogTitle className="text-xs md:text-xl font-black uppercase italic flex items-center gap-4">
                  <Video className="w-5 h-5 md:w-7 md:h-7 text-[#FF1E2D]" /> DEMO PASE LISTA
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full bg-black">
                <video controls className="w-full h-full" autoPlay={false}>
                  <source src="/video/video2.mp4" type="video/mp4" />
                </video>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="bg-white/5 px-6 py-2 text-white/40 text-[7px] md:text-xs font-black uppercase tracking-[0.6em] border border-white/10 inline-block">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA
        </div>
      </div>
    </div>
  );
}
