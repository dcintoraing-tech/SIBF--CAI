'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  X,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { 
    name: "SPRINT 1", 
    weeks: "Sem. 1-2",
    phases: "Análisis",
    details: [
      "Levantamiento de Requerimientos",
      "HU Alumno y Docente",
      "HU Administrador",
      "Estudio de Usabilidad"
    ],
    progress: 100,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 2", 
    weeks: "Sem. 3-5",
    phases: "Análisis / Diseño",
    details: [
      "Gestión de usuarios V1.1",
      "Administración de catálogos",
      "Diagramas UML Generales",
      "Arquitectura MVC"
    ],
    progress: 100,
    color: "#2B2B2B"
  },
  { 
    name: "SPRINT 3", 
    weeks: "Sem. 6-8",
    phases: "Desarrollo / Pruebas",
    details: [
      "Login y Dashboard Funcional",
      "Implementación Frontend",
      "Validaciones Zod",
      "Pruebas de Autenticación"
    ],
    progress: 100,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 4", 
    weeks: "Sem. 9-11",
    phases: "Backend / Datos",
    details: [
      "Estructura SQL Centralizada",
      "API REST Node.js",
      "Seguridad JWT",
      "Pruebas de Endpoints"
    ],
    progress: 85,
    color: "#2B2B2B"
  },
  { 
    name: "SPRINT 5", 
    weeks: "Sem. 12-14",
    phases: "IA / Integración",
    details: [
      "Integración Biometría Facial",
      "Captura en tiempo real",
      "Sincronización Cloud",
      "Validación Entorno Real"
    ],
    progress: 85,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 6", 
    weeks: "Sem. 15-16",
    phases: "Implementación",
    details: [
      "Despliegue Servidor",
      "Manuales Técnicos",
      "Capacitación Usuarios",
      "Cierre y Retroalimentación"
    ],
    progress: 0,
    color: "#A3A3A3"
  },
];

export default function Methodology() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isFullMode, setIsFullMode] = useState(false);

  const handleNext = () => {
    if (currentStep < sprints.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(-1);
    }
  };

  const startPresentation = () => {
    setCurrentStep(0);
    setIsFullMode(true);
  };

  const exitPresentation = () => {
    setIsFullMode(false);
    setCurrentStep(-1);
  };

  useEffect(() => {
    if (isFullMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isFullMode]);

  return (
    <div id="metodologia" className="space-y-24 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">METODOLOGÍA</span>
          <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ESTRUCTURA ÁGIL</h2>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={startPresentation}
            className="rounded-none bg-[#2B2B2B] hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-12 py-8 h-auto shadow-2xl transition-all flex items-center gap-6 group text-lg"
          >
            <Maximize2 className="w-6 h-6 group-hover:scale-125 transition-transform" />
            PRESENTACIÓN FULL SCREEN
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-slate-50 border-t-[12px] border-[#FF1E2D] text-center space-y-6 shadow-2xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
            <item.icon className="w-16 h-16 text-[#FF1E2D] mx-auto animate-icon-tilt" style={{ animationDelay: `${i * 600}ms` }} />
            <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Static View Timeline */}
      <div className="py-24 relative overflow-hidden hidden md:block bg-[#0A0A0A] p-20 shadow-inner border border-white/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1E2D] to-transparent opacity-50" />
        <div className="flex items-center gap-8 mb-24">
          <Clock className="w-14 h-14 text-[#FF1E2D] animate-pulse" />
          <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">MAPA DE RUTA INTERACTIVO</h3>
        </div>
        
        <div className="relative px-20">
          <div className="absolute top-1/2 left-20 right-20 h-[4px] bg-[#1A1A1A] -translate-y-1/2 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E2D] to-[#A30000] opacity-50" />
          </div>

          <div className="flex justify-between items-center relative z-10">
            {sprints.map((sprint, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center group relative cursor-pointer" 
                onClick={() => {setCurrentStep(i); setIsFullMode(true);}}
              >
                <div 
                  className={cn(
                    "w-16 h-16 rounded-full border-4 border-[#0A0A0A] shadow-2xl flex items-center justify-center text-xl font-black text-white transition-all duration-500",
                    i === 5 ? "bg-[#333] grayscale" : "bg-[#FF1E2D] shadow-[0_0_30px_#FF1E2D]",
                    "group-hover:scale-125 group-hover:shadow-[0_0_50px_#FF1E2D]"
                  )}
                >
                  {i + 1}
                </div>
                <div className="absolute top-20 flex flex-col items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-black uppercase text-white tracking-[0.2em] text-center w-40 drop-shadow-lg">
                    {sprint.name}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{sprint.weeks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL SCREEN PRESENTATION OVERLAY */}
      {isFullMode && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col animate-in fade-in zoom-in duration-500 overflow-hidden">
          <div className="p-8 flex justify-between items-center bg-[#111] border-b border-white/5 z-50">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 red-gradient flex items-center justify-center shadow-[0_0_40px_rgba(255,30,45,0.4)]">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase italic tracking-widest leading-none">
                  SIBF-CAI <span className="text-[#FF1E2D]">METODOLOGÍA</span>
                </h2>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.4em] mt-2">Fase del Proyecto {currentStep + 1} de {sprints.length}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={exitPresentation}
              className="text-white hover:text-[#FF1E2D] hover:bg-white/5 rounded-none p-6 h-auto"
            >
              <X className="w-12 h-12" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center p-12 lg:p-24 gap-16 overflow-y-auto">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-12 shrink-0">
              <div className="relative">
                <div 
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[16px] border-white/5 flex items-center justify-center text-9xl font-black shadow-2xl animate-in zoom-in-50 duration-700 relative z-10"
                  style={{ 
                    backgroundColor: sprints[currentStep].color, 
                    boxShadow: `0 0 120px ${sprints[currentStep].color}44` 
                  }}
                >
                  {currentStep + 1}
                </div>
                <div className="absolute -inset-12 rounded-full border-2 border-[#FF1E2D]/20 animate-spin-slow pointer-events-none" />
              </div>
              <div className="text-center space-y-6">
                <h3 className="text-7xl md:text-[9rem] font-black text-white uppercase italic tracking-tighter">
                  {sprints[currentStep].name}
                </h3>
                <div className="flex items-center justify-center gap-6">
                  <span className="px-8 py-3 bg-white/5 text-white text-sm font-black uppercase tracking-[0.4em] border border-white/10">
                    {sprints[currentStep].weeks}
                  </span>
                  <span className="px-8 py-3 bg-[#FF1E2D] text-white text-sm font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(255,30,45,0.4)]">
                    {sprints[currentStep].progress}% COMPLETADO
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="bg-[#1A1A1A] border-l-[16px] border-[#FF1E2D] p-12 lg:p-20 shadow-2xl animate-in slide-in-from-right-20 duration-700 w-full">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <span className="text-[#FF1E2D] font-black text-base tracking-[0.6em] uppercase">MÓDULO DE TRABAJO</span>
                    <h4 className="text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter border-b-2 border-white/10 pb-8">
                      {sprints[currentStep].phases}
                    </h4>
                  </div>
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <div className="p-3 bg-[#FF1E2D]/10 rounded-sm">
                        <Info className="w-8 h-8 text-[#FF1E2D]" />
                      </div>
                      <span className="text-xl font-black text-white uppercase tracking-widest">ACTIVIDADES CRÍTICAS</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-8">
                      {sprints[currentStep].details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="text-2xl lg:text-3xl font-bold text-gray-300 uppercase flex gap-6 items-start animate-in fade-in slide-in-from-left-4" 
                          style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                          <div className="w-5 h-5 rounded-full bg-[#FF1E2D] mt-3 shrink-0 shadow-[0_0_15px_#FF1E2D]" /> 
                          <span className="leading-tight">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 bg-[#111] border-t border-white/5 flex flex-col gap-8 shrink-0 z-50">
            <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
              <Button 
                onClick={handlePrev}
                disabled={currentStep === -1}
                className="rounded-none bg-white/5 hover:bg-[#FF1E2D] text-white px-12 py-6 h-auto transition-all flex items-center gap-6 font-black uppercase tracking-widest border border-white/10 text-lg disabled:opacity-20"
              >
                <ChevronLeft className="w-8 h-8" />
                <span>ANTERIOR</span>
              </Button>
              <div className="hidden md:flex items-center gap-4">
                {sprints.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentStep(i)}
                    className={cn(
                      "w-4 h-4 rounded-full transition-all duration-500",
                      currentStep === i ? "bg-[#FF1E2D] w-20" : "bg-white/10"
                    )}
                  />
                ))}
              </div>
              <Button 
                onClick={handleNext}
                disabled={currentStep === sprints.length - 1}
                className="rounded-none bg-[#FF1E2D] hover:bg-white hover:text-[#FF1E2D] text-white px-12 py-6 h-auto transition-all flex items-center gap-6 font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,30,45,0.3)] text-lg disabled:opacity-20"
              >
                <span>SIGUIENTE</span>
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}