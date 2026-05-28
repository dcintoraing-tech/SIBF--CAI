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
import { Smartphone } from "lucide-react";

export default function Home() {
  const [showRotationHint, setShowRotationHint] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      setShowRotationHint(true);
      const timer = setTimeout(() => setShowRotationHint(false), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Mobile Rotation Hint */}
      {showRotationHint && (
        <div className="fixed inset-0 z-[200] bg-[#2B2B2B]/95 flex flex-col items-center justify-center text-white p-6 animate-in fade-in duration-500 backdrop-blur-sm">
          <div className="animate-rotate-phone mb-8">
            <Smartphone className="w-20 h-20 text-[#FF1E2D]" />
          </div>
          <h2 className="text-2xl font-black text-center uppercase mb-2">Gire su dispositivo</h2>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center">Mejor experiencia en horizontal</p>
        </div>
      )}

      <div className="max-w-6xl mx-auto border-x border-gray-100 shadow-2xl bg-white">
        <Hero />
        
        <div className="divide-y divide-gray-100">
          <section className="p-12 md:p-24 bg-white">
            <ProblemStatement />
          </section>

          <section className="p-12 md:p-24 bg-slate-50">
            <Objectives />
          </section>
          
          <section className="p-12 md:p-24 bg-white">
            <Justification />
          </section>

          <section className="p-12 md:p-24 bg-slate-50">
            <Methodology />
          </section>
          
          <section className="p-12 md:p-24 bg-white">
            <AnalysisPhase />
          </section>

          <section className="p-12 md:p-24 bg-slate-50">
            <DesignPhase />
          </section>

          <section className="p-12 md:p-24 bg-white">
            <DevelopmentPhase />
          </section>

          <section className="p-12 md:p-24 bg-slate-50">
            <QRSection />
          </section>
        </div>

        <footer className="bg-[#2B2B2B] py-20 px-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-8">
              <img 
                src="/images/logo.png" 
                alt="Logo Institucional" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-widest text-white leading-tight uppercase">
                  SIBF<span className="text-[#FF1E2D]">-CAI</span>
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-semibold">Ingeniería de vanguardia</p>
              </div>
            </div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-widest text-center md:text-right">
              &copy; {new Date().getFullYear()} LaUni - Sistemas Computacionales<br />
              Documento de Propuesta Tecnológica
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
