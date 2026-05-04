'use client';

import { useState, useEffect } from "react";
import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import AnalysisPhase from "@/components/landing/AnalysisPhase";
import DesignPhase from "@/components/landing/DesignPhase";
import DevelopmentPhase from "@/components/landing/DevelopmentPhase";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";
import Methodology from "@/components/landing/Methodology";
import QRSection from "@/components/landing/QRSection";
import PresentationMode from "@/components/landing/PresentationMode";
import { Smartphone } from "lucide-react";

export default function Home() {
  const [isPresenting, setIsPresenting] = useState(false);
  const [showRotationHint, setShowRotationHint] = useState(false);

  useEffect(() => {
    // Detect if mobile and show hint
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      setShowRotationHint(true);
      const timer = setTimeout(() => setShowRotationHint(false), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const sections = [
    { id: 'hero', component: <Hero isPresentation onStart={() => setIsPresenting(true)} /> },
    { id: 'problema', title: 'Planteamiento del Problema', component: <ProblemStatement /> },
    { id: 'objetivos', title: 'Objetivos del Proyecto', component: <Objectives /> },
    { id: 'justificacion', title: 'Justificación', component: <Justification /> },
    { id: 'metodologia', title: 'Metodología', component: <Methodology /> },
    { id: 'analisis', title: 'Fase de Análisis', component: <AnalysisPhase /> },
    { id: 'diseno', title: 'Fase de Diseño', component: <DesignPhase /> },
    { id: 'desarrollo', title: 'Fase de Desarrollo', component: <DevelopmentPhase /> },
    { id: 'acceso', title: 'Acceso al Sistema', component: <QRSection /> }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5] py-0 md:py-12 px-0 md:px-4 relative">
      {/* Mobile Rotation Hint Overlay */}
      {showRotationHint && (
        <div className="fixed inset-0 z-[200] bg-[#2B2B2B]/95 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-500 backdrop-blur-sm">
          <div className="animate-rotate-phone mb-8">
            <Smartphone className="w-20 h-20 text-[#FF1E2D]" />
          </div>
          <h2 className="text-xl font-black tracking-widest text-center uppercase mb-2">Gire su dispositivo</h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center">Para una mejor experiencia visual en horizontal</p>
        </div>
      )}

      {isPresenting && (
        <PresentationMode 
          sections={sections} 
          onClose={() => setIsPresenting(false)} 
        />
      )}

      <div className="max-w-5xl mx-auto presentation-card bg-white shadow-2xl">
        <Hero onStartPresentation={() => setIsPresenting(true)} />
        
        <div className="divide-y divide-gray-100">
          <section className="p-8 md:p-16 bg-white">
            <ProblemStatement />
          </section>

          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <Objectives />
          </section>
          
          <section className="p-8 md:p-16 bg-white">
            <Justification />
          </section>

          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <Methodology />
          </section>
          
          <section className="p-8 md:p-16 bg-white">
            <AnalysisPhase />
          </section>

          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <DesignPhase />
          </section>

          <section className="p-8 md:p-16 bg-white">
            <DevelopmentPhase />
          </section>

          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <QRSection />
          </section>
        </div>

        <footer className="bg-[#2B2B2B] py-12 px-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <img 
                src="/images/logo.png" 
                alt="Logo Institucional" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-lg font-bold tracking-widest text-white leading-tight uppercase">
                  SIBF<span className="text-[#FF1E2D]">-CAI</span>
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-semibold">Propuesta de Innovación Tecnológica</p>
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium uppercase tracking-widest text-center md:text-right">
              &copy; {new Date().getFullYear()} LaUni - Ingeniería en Sistemas Computacionales<br />
              Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
