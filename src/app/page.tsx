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
import CybersecuritySlide from "@/components/landing/CybersecuritySlide";
import Conclusions from "@/components/landing/Conclusions";
import Bibliography from "@/components/landing/Bibliography";
import QRSection from "@/components/landing/QRSection";
import CommercialSlide from "@/components/landing/CommercialSlide";
import PresentationMode from "@/components/landing/PresentationMode";
import { Smartphone, Maximize, Minimize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
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

  const sections = [
    { id: "hero", title: "PORTADA", component: <Hero /> },
    { id: "problema", title: "PLANTEAMIENTO DEL PROBLEMA", component: <ProblemAnalysis /> },
    { id: "requerimientos", title: "ANÁLISIS DE REQUERIMIENTOS", component: <AnalysisPhase /> },
    { id: "objetivos", title: "OBJETIVOS DEL PROYECTO", component: <Objectives /> },
    { id: "justificacion", title: "JUSTIFICACIÓN TÉCNICA", component: <Justification /> },
    { id: "metodologia", title: "METODOLOGÍA SCRUM", component: <Methodology /> },
    { id: "diseno", title: "DISEÑO Y ARQUITECTURA", component: <DesignPhase /> },
    { id: "desarrollo", title: "IMPLEMENTACIÓN Y STACK", component: <DevelopmentPhase /> },
    { id: "seguridad", title: "CIBERSEGURIDAD", component: <CybersecuritySlide /> },
    { id: "conclusiones", title: "CONCLUSIONES FINALES", component: <Conclusions /> },
    { id: "bibliografia", title: "BIBLIOGRAFÍA", component: <Bibliography /> },
    { id: "qr", title: "DEMO INTERACTIVA", component: <div className="w-full h-full flex items-center justify-center"><QRSection /></div> },
    { id: "comercial", title: "SPOT COMERCIAL", component: <CommercialSlide /> },
  ];

  if (showIntro) {
    return (
      <main className="h-screen w-screen bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-1000">
        <div className="max-w-2xl w-full space-y-12 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-50 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/images/qrqr.png" 
              alt="SIBF-CAI QR" 
              className="relative w-48 h-48 md:w-96 md:h-96 object-contain animate-float"
            />
          </div>
          
          <Button 
            onClick={() => setShowIntro(false)}
            variant="ghost"
            className="group relative p-6 md:p-8 h-auto rounded-full hover:bg-red-50 transition-all duration-500 hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 bg-red-100/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            <ArrowRight className="w-12 h-12 md:w-20 md:h-20 text-[#FF1E2D] relative z-10 transition-transform group-hover:translate-x-2" />
          </Button>

          <div className="text-center space-y-2">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">CLICK PARA INICIAR SIBF-CAI</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden relative animate-in fade-in zoom-in-95 duration-1000">
      <div className="fixed top-4 right-4 z-[150]">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-white/80 hover:bg-[#FF1E2D] hover:text-white backdrop-blur-md transition-all rounded-full w-10 h-10 md:w-12 md:h-12 shadow-xl border border-gray-100 group"
        >
          {isFullscreen ? (
            <Minimize className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Maximize className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </Button>
      </div>

      {showRotationHint && (
        <div className="fixed inset-0 z-[200] bg-[#2B2B2B]/95 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-500 backdrop-blur-sm">
          <div className="animate-rotate-phone mb-8">
            <Smartphone className="w-16 h-16 text-[#FF1E2D]" />
          </div>
          <h2 className="text-xl font-black text-center uppercase mb-2">Gire su dispositivo</h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center">Mejor experiencia en horizontal</p>
        </div>
      )}

      <PresentationMode sections={sections} onClose={() => setShowIntro(true)} />
    </main>
  );
}
