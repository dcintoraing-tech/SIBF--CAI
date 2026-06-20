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
  Layers,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { 
    name: "SPRINT 1", 
    weeks: "Sem. 1-2",
    goal: "Elicitación de requerimientos y diseño de la arquitectura base del sistema.",
    epics: [
      { name: "Gestión de usuarios y control de acceso", status: "Inicio" },
      { name: "Infraestructura, despliegue y monitoreo", status: "Inicio" }
    ],
    details: [
      "Elaboración del Software Requirements Specification (SRS) bajo estándares IEEE.",
      "Modelado de arquitectura de microservicios y esquema de persistencia NoSQL.",
      "Definición de diagramas de secuencia y colaboración UML para flujos críticos.",
      "Configuración de entornos de staging y producción con pipeline CI/CD.",
      "Establecimiento de protocolos de cifrado AES-256 para datos sensibles."
    ],
    progress: 100,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 2", 
    weeks: "Sem. 3-5",
    goal: "Prototipado de alta fidelidad y desarrollo del núcleo de autenticación.",
    epics: [
      { name: "Gestión de usuarios y control de acceso", status: "En progreso" },
      { name: "Integración de dispositivos de captura y cámaras", status: "Inicio" }
    ],
    details: [
      "Diseño UX/UI de interfaces reactivas mediante enfoque Atomic Design.",
      "Implementación de lógica de autenticación robusta mediante tokens JWT.",
      "Desarrollo del middleware de autorización basado en roles (RBAC).",
      "Pruebas de latencia en la captura de frames mediante flujos de WebRTC.",
      "Modelado de entidades para el registro histórico de eventos institucionales."
    ],
    progress: 100,
    color: "#2B2B2B"
  },
  { 
    name: "SPRINT 3", 
    weeks: "Sem. 6-8",
    goal: "Implementación del motor de visión artificial y biometría facial.",
    epics: [
      { name: "Motor de reconocimiento facial", status: "Inicio" },
      { name: "Registro biométrico facial institucional", status: "Inicio" }
    ],
    details: [
      "Integración de librerías de Deep Learning (TensorFlow.js / MediaPipe).",
      "Desarrollo de algoritmos de detección de 'Facial Landmarks' en tiempo real.",
      "Implementación de procesos de normalización y extracción de descriptores faciales.",
      "Optimización de la inferencia del modelo mediante aceleración por hardware (WebGPU).",
      "Configuración de umbrales de similitud para minimización de falsos positivos."
    ],
    progress: 100,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 4", 
    weeks: "Sem. 9-11",
    goal: "Desarrollo del sistema de control de asistencia y sincronización Cloud.",
    epics: [
      { name: "Gestión y control de asistencia", status: "Inicio" },
      { name: "Registro biométrico facial institucional", status: "Finalización" }
    ],
    details: [
      "Implementación de lógica de Geofencing para validación de presencia física.",
      "Sincronización bidireccional de registros biométricos con Firestore Real-time DB.",
      "Desarrollo del motor de reglas para gestión de horarios y tolerancia.",
      "Optimización de consultas indexadas para la recuperación de logs masivos.",
      "Implementación de mecanismos de caché offline (Service Workers/PWA)."
    ],
    progress: 100,
    color: "#2B2B2B"
  },
  { 
    name: "SPRINT 5", 
    weeks: "Sem. 12-14",
    goal: "Panel administrativo avanzado, reportes y auditoría de seguridad.",
    epics: [
      { name: "Panel administrativo y reportes", status: "Inicio" },
      { name: "Seguridad, auditoría y trazabilidad", status: "Inicio" }
    ],
    details: [
      "Desarrollo de Dashboards analíticos con visualización de datos en Recharts.",
      "Generación automatizada de reportes PDF/Excel mediante Server-Side Rendering.",
      "Implementación de logs de auditoría inmutables para trazabilidad de accesos.",
      "Pruebas de estrés (Load Testing) para simulación de concurrencia institucional.",
      "Refuerzo de seguridad mediante escaneo de vulnerabilidades y OWASP Top 10."
    ],
    progress: 100,
    color: "#FF1E2D"
  },
  { 
    name: "SPRINT 6", 
    weeks: "Sem. 15-16",
    goal: "Despliegue productivo, optimización final y entrega institucional.",
    epics: [
      { name: "Infraestructura, despliegue y monitoreo", status: "Finalización" },
      { name: "Motor de reconocimiento facial", status: "Finalización" }
    ],
    details: [
      "Despliegue final en infraestructura escalable (Firebase App Hosting/GCP).",
      "Ejecución de pruebas de aceptación de usuario (UAT) en entorno real.",
      "Elaboración de documentación técnica (API Docs) y manuales de operación.",
      "Transferencia de conocimiento y capacitación técnica al personal institucional.",
      "Configuración de monitoreo proactivo y alertas de salud del sistema (SRE)."
    ],
    progress: 53,
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
          <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">SCRUM</h2>
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
          { icon: Users, title: "SCRUM", text: "ROLES Y ARTEFACTOS TÉCNICOS" },
          { icon: RotateCw, title: "SPRINTS", text: "ITERACIONES DE VALOR" },
          { icon: CheckCircle2, title: "QA", text: "TESTING CONTINUO" }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-slate-50 border-t-[12px] border-[#FF1E2D] text-center space-y-6 shadow-2xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
            <item.icon className="w-16 h-16 text-[#FF1E2D] mx-auto animate-icon-tilt" />
            <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Interactive Roadmap Desktop Preview */}
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
                    sprint.progress < 100 ? "bg-[#333] grayscale" : "bg-[#FF1E2D] shadow-[0_0_30px_#FF1E2D]",
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

      {isFullMode && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col animate-in fade-in zoom-in duration-500 overflow-hidden">
          <div className="p-4 md:p-6 flex justify-between items-center bg-[#111] border-b border-white/5 z-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 red-gradient flex items-center justify-center shadow-[0_0_40px_rgba(255,30,45,0.4)]">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-widest leading-none">
                  SIBF-CAI <span className="text-[#FF1E2D]">SCRUM</span>
                </h2>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-1">Fase {currentStep + 1} / {sprints.length}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={exitPresentation}
              className="text-white hover:text-[#FF1E2D] hover:bg-white/5 rounded-none p-4 h-auto"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center p-4 lg:p-8 gap-12 overflow-y-auto">
            {/* Left Side: Sprint Info */}
            <div className="w-full md:w-2/5 flex flex-col items-center justify-center space-y-8 shrink-0">
              <div className="relative">
                <div 
                  className="w-48 h-48 md:w-72 md:h-72 rounded-full border-[8px] border-white/5 flex items-center justify-center text-7xl md:text-9xl font-black shadow-2xl animate-in zoom-in-50 duration-700 relative z-10"
                  style={{ 
                    backgroundColor: sprints[currentStep].progress === 100 ? "#FF1E2D" : "#2B2B2B", 
                    boxShadow: `0 0 100px ${sprints[currentStep].progress === 100 ? "#FF1E2D" : "#2B2B2B"}44` 
                  }}
                >
                  {currentStep + 1}
                </div>
                <div className="absolute -inset-8 rounded-full border-2 border-[#FF1E2D]/20 animate-spin-slow pointer-events-none" />
              </div>
              
              <div className="text-center space-y-6">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter">
                  {sprints[currentStep].name}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <span className="px-6 py-2 bg-white/5 text-white text-xs font-black uppercase tracking-[0.4em] border border-white/10">
                    {sprints[currentStep].weeks}
                  </span>
                  <span className={cn(
                    "px-6 py-2 text-white text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(255,30,45,0.4)]",
                    sprints[currentStep].progress === 100 ? "bg-[#FF1E2D]" : "bg-amber-600"
                  )}>
                    {sprints[currentStep].progress}% COMPLETADO
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Technical Details */}
            <div className="w-full md:w-3/5 flex flex-col justify-center max-w-5xl space-y-8">
              {/* Objetivo */}
              <div className="bg-[#1A1A1A] border-l-[6px] border-[#FF1E2D] p-8 shadow-2xl animate-in slide-in-from-right-20 duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="w-6 h-6 text-[#FF1E2D]" />
                  <span className="text-[#FF1E2D] font-black text-xs tracking-[0.6em] uppercase">OBJETIVO DEL SPRINT</span>
                </div>
                <p className="text-xl md:text-3xl font-bold text-white uppercase italic leading-tight">
                  {sprints[currentStep].goal}
                </p>
              </div>

              {/* Épicas Involucradas */}
              <div className="bg-white/5 p-8 border border-white/10 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <Layers className="w-6 h-6 text-[#FF1E2D]" />
                  <span className="text-white font-black text-xs tracking-[0.6em] uppercase">ÉPICAS INVOLUCRADAS</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {sprints[currentStep].epics.map((epic, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-black/40 p-4 border border-white/5">
                      <span className="text-lg font-black text-white/80 uppercase">{epic.name}</span>
                      <span className={cn(
                        "text-[10px] font-black uppercase px-3 py-1 rounded-none",
                        epic.status === "Inicio" ? "bg-blue-600" : 
                        epic.status === "En progreso" ? "bg-amber-600" : "bg-emerald-600"
                      )}>
                        {epic.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actividades Técnicas */}
              <div className="bg-[#1A1A1A] p-8 space-y-8 shadow-2xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-1.5 bg-[#FF1E2D]/10 rounded-sm">
                    <Info className="w-5 h-5 text-[#FF1E2D]" />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-[0.6em]">ACTIVIDADES TÉCNICAS</span>
                </div>
                <ul className="grid grid-cols-1 gap-5">
                  {sprints[currentStep].details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-lg lg:text-xl font-bold text-gray-400 uppercase flex gap-5 items-start animate-in fade-in slide-in-from-left-4" 
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#FF1E2D] mt-2 shrink-0 shadow-[0_0_15px_#FF1E2D]" /> 
                      <span className="leading-tight">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="p-4 bg-[#111] border-t border-white/5 flex flex-col gap-4 shrink-0 z-50">
            <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
              <Button 
                onClick={handlePrev}
                disabled={currentStep === -1}
                className="rounded-none bg-white/5 hover:bg-[#FF1E2D] text-white px-12 py-6 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest border border-white/10 text-base disabled:opacity-20"
              >
                <ChevronLeft className="w-6 h-6" />
                <span>ANTERIOR</span>
              </Button>
              <div className="hidden md:flex items-center gap-3">
                {sprints.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentStep(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-500",
                      currentStep === i ? "bg-[#FF1E2D] w-16" : "bg-white/10"
                    )}
                  />
                ))}
              </div>
              <Button 
                onClick={handleNext}
                disabled={currentStep === sprints.length - 1}
                className="rounded-none bg-[#FF1E2D] hover:bg-white hover:text-[#FF1E2D] text-white px-12 py-6 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,30,45,0.3)] text-base disabled:opacity-20"
              >
                <span>SIGUIENTE</span>
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
