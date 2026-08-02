
'use client';

import React, { useState } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  ChevronLeft,
  ChevronRight,
  Target,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { name: "SPRINT 1", phase: "ANÁLISIS", goal: "Requerimientos y Arquitectura IEEE." },
  { name: "SPRINT 2", phase: "DISEÑO", goal: "UX/UI y Autenticación JWT." },
  { name: "SPRINT 3", phase: "CORE IA", goal: "Motor Biométrico TensorFlow.js." },
  { name: "SPRINT 4", phase: "INTEGRACIÓN", goal: "Sincronización Cloud Real-time." },
  { name: "SPRINT 5", phase: "CALIDAD", goal: "Panel Administrativo y Auditoría." },
  { name: "SPRINT 6", phase: "DESPLIEGUE", goal: "Entrega Final y Capacitación." },
];

export default function Methodology() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < sprints.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12 max-w-6xl mx-auto">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">METODOLOGÍA</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM</h2>
      </div>

      {/* Línea del Tiempo Animada */}
      <div className="relative pt-12 pb-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-[#FF1E2D] -translate-y-1/2 transition-all duration-700 ease-in-out" 
          style={{ width: `${(currentStep / (sprints.length - 1)) * 100}%` }}
        />

        <div className="flex justify-between items-center relative z-10">
          {sprints.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={cn(
                "w-8 h-8 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                currentStep >= i ? "bg-[#FF1E2D] border-[#FF1E2D] text-white" : "bg-white border-slate-100 text-slate-300"
              )}
            >
              <span className="text-[10px] md:text-base font-black">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Card del Paso Actual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 shadow-2xl rounded-3xl animate-in zoom-in duration-500">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#FF1E2D] text-white px-4 py-1 text-xs md:text-sm font-black uppercase tracking-widest italic">
              {sprints[currentStep].phase}
            </div>
            <h3 className="text-2xl md:text-5xl font-black text-[#2B2B2B] italic uppercase">{sprints[currentStep].name}</h3>
          </div>
          <p className="text-xl md:text-3xl text-[#2B2B2B] font-bold uppercase leading-tight italic">
            {sprints[currentStep].goal}
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={handlePrev} 
              disabled={currentStep === 0}
              variant="outline"
              className="rounded-full border-[#FF1E2D] text-[#FF1E2D] hover:bg-[#FF1E2D] hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === sprints.length - 1}
              className="bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
             <div className="absolute -inset-10 bg-[#FF1E2D]/10 blur-[50px] rounded-full animate-glow-pulse" />
             <RotateCw className="w-32 h-32 md:w-48 md:h-48 text-[#FF1E2D] animate-spin-slow" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Target className="w-12 h-12 md:w-20 md:h-20 text-[#2B2B2B]" />
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Users, label: "ROLES" },
          { icon: Layers, label: "SPRINTS" },
          { icon: CheckCircle2, label: "QUALTY" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl">
            <item.icon className="w-6 h-6 text-[#FF1E2D]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#2B2B2B]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
