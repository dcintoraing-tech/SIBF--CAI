
'use client';

import { Smartphone, Play, Video, ClipboardCheck } from "lucide-react";
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
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6 md:space-y-10 py-4">
      <div className="space-y-1 text-center">
        <span className="text-[#FF1E2D] font-bold text-xs md:text-lg tracking-[0.4em] uppercase">ACCESO DIRECTO</span>
        <h2 className="text-3xl md:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-10 bg-[#FF1E2D]/10 blur-[50px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white p-6 shadow-2xl rounded-3xl border border-slate-100 flex items-center justify-center">
          <div className="w-32 h-32 md:w-56 md:h-56">
            <img src="/images/QR.png" alt="QR Code" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-6 text-center">
        <p className="text-lg md:text-3xl text-[#2B2B2B] font-bold uppercase tracking-tight leading-none italic">
          ESCANEÉ PARA PROBAR EL <span className="text-[#FF1E2D] font-black">RECONOCIMIENTO FACIAL</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full sm:w-auto rounded-full bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white font-black uppercase tracking-widest px-8 py-6 h-auto text-sm md:text-lg flex items-center gap-3 transition-all shadow-xl"
              >
                <Play className="w-5 h-5 fill-current" />
                VER TUTORIAL REGISTRO
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-[#FF1E2D] border-4 overflow-hidden z-[300]">
              <DialogHeader className="p-4 bg-[#1A1A1A] text-white">
                <DialogTitle className="text-lg md:text-2xl font-black uppercase italic flex items-center gap-4">
                  <Video className="w-7 h-7 text-[#FF1E2D]" /> TUTORIAL ALTA
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
                className="w-full sm:w-auto rounded-full border-2 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white text-[#2B2B2B] font-black uppercase tracking-widest px-8 py-6 h-auto text-sm md:text-lg flex items-center gap-3 transition-all shadow-xl"
              >
                <ClipboardCheck className="w-5 h-5" />
                DEMO PASE LISTA
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-[#2B2B2B] border-4 overflow-hidden z-[300]">
              <DialogHeader className="p-4 bg-[#1A1A1A] text-white">
                <DialogTitle className="text-lg md:text-2xl font-black uppercase italic flex items-center gap-4">
                  <Video className="w-7 h-7 text-[#FF1E2D]" /> DEMO PASE LISTA
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <video controls className="w-full h-full" src="/video/video2.mp4" autoPlay />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="text-[#2B2B2B]/40 text-[8px] md:text-xs font-black uppercase tracking-[0.6em] border-t border-slate-100 pt-4 inline-block">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA
        </div>
      </div>
    </div>
  );
}
