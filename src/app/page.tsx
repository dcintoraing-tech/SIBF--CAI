'use client';

import { useState, useEffect } from "react";
import Hero from "@/components/landing/Hero";
import ProblemAnalysis from "@/components/landing/ProblemAnalysis";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";
import Methodology from "@/components/landing/Methodology";
import AnalysisPhase from "@/components/landing/AnalysisPhase";
import DesignPhase from "@/components/landing/DesignPhase";
import DevelopmentPhase from "@/components/landing/DevelopmentPhase";
import Conclusions from "@/components/landing/Conclusions";
import Bibliography from "@/components/landing/Bibliography";
import QRSection from "@/components/landing/QRSection";
import { Smartphone, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showRotationHint, setShowRotationHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      setShowRotationHint(true);
      const timer = setTimeout(() => setShowRotationHint(false), 3500);
      return () => clearTimeout(timer);
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Error al cambiar modo pantalla completa:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden relative">
      {/* Botón Global Fullscreen */}
      <div className="fixed top-6 left-6 z-[150] hidden md:block">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-white/80 hover:bg-[#FF1E2D] hover:text-white backdrop-blur-md transition-all rounded-none w-12 h-12 shadow-xl border border-gray-100 group"
          title={isFullscreen ? "Salir de pantalla completa" : "Modo presentación (Pantalla completa)"}
        >
          {isFullscreen ? (
            <Minimize className="w-6 h-6 transition-transform group-active:scale-90" />
          ) : (
            <Maximize className="w-6 h-6 transition-transform group-hover:scale-110 group-active:scale-90" />
          )}
        </Button>
      </div>

      {/* Mobile Rotation Hint */}
      {showRotationHint && (
        <div className="fixed inset-0 z-[200] bg-[#2B2B2B]/95 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-500 backdrop-blur-sm">
          <div className="animate-rotate-phone mb-8">
            <Smartphone className="w-16 h-16 text-[#FF1E2D]" />
          </div>
          <h2 className="text-xl font-black text-center uppercase mb-2">Gire su dispositivo</h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center">Mejor experiencia en horizontal</p>
        </div>
      )}

      <div className="max-w-[1600px] mx-auto bg-white shadow-2xl overflow-hidden">
        <Hero />
        
        <div className="divide-y divide-gray-100">
          <section className="p-10 md:p-32 bg-white">
            <ProblemAnalysis />
          </section>

          <section className="p-10 md:p-32 bg-slate-50/50">
            <AnalysisPhase />
          </section>

          <section className="p-10 md:p-32 bg-white">
            <Objectives />
          </section>
          
          <section className="p-10 md:p-32 bg-slate-50/50">
            <Justification />
          </section>

          <section className="p-10 md:p-32 bg-white">
            <Methodology />
          </section>
          
          <section className="p-10 md:p-32 bg-slate-50/50">
            <DesignPhase />
          </section>

          <section className="p-10 md:p-32 bg-white">
            <DevelopmentPhase />
          </section>

          <section className="p-10 md:p-32 bg-slate-50/30">
            <Conclusions />
          </section>

          <section className="p-10 md:p-32 bg-white">
            <Bibliography />
          </section>

          <section className="p-10 md:p-32 bg-[#0A0A0A]">
            <QRSection />
          </section>
        </div>

        <footer className="bg-[#1A1A1A] py-16 px-12 text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-8">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert" 
              />
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-black tracking-widest text-white leading-tight uppercase italic">
                  SIBF<span className="text-[#FF1E2D]">-CAI</span>
                </h2>
              </div>
            </div>
            <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em] text-center md:text-right leading-loose">
              &copy; {new Date().getFullYear()} SIBF-CAI • PROYECTO EJECUTIVO
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
