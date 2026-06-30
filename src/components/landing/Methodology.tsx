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
    phase: "ANÁLISIS",
    weeks: "Sem. 1-2",
    goal: "Elicitación de requerimientos y diseño de la arquitectura base del sistema.",
    epics: [
      { name: "Gestión de usuarios", status: "Inicio" },
      { name: "Infraestructura Cloud", status: "Inicio" }
    ],
    details: [
      "Elaboración del Software Requirements Specification (SRS) bajo estándares IEEE.",
      "Modelado de arquitectura de microservicios y esquema NoSQL.",
      "Definición de diagramas de secuencia UML para flujos críticos.",
      "Configuración de entornos de staging y producción.",
      "Establecimiento de protocolos de cifrado AES-256."
    ],
    progress: 100
  },
  { 
    name: "SPRINT 2", 
    phase: "DISEÑO",
    weeks: "Sem. 3-5",
    goal: "Prototipado de alta fidelidad y desarrollo del núcleo de autenticación.",
    epics: [
      { name: "Control de acceso", status: "En progreso" },
      { name: "Captura de dispositivos", status: "Inicio" }
    ],
    details: [
      "Diseño UX/UI mediante enfoque Atomic Design.",
      "Implementación de autenticación robusta JWT.",
      "Desarrollo de middleware de autorización (RBAC).",
      "Pruebas de latencia WebRTC para streaming.",
      "Modelado de entidades para registro histórico."
    ],
    progress: 100
  },
  { 
    name: "SPRINT 3", 
    phase: "CORE IA",
    weeks: "Sem. 6-8",
    goal: "Implementación del motor de visión artificial y biometría facial.",
    epics: [
      { name: "Reconocimiento facial", status: "Inicio" },
      { name: "Registro biométrico", status: "Inicio" }
    ],
    details: [
      "Integración de TensorFlow.js / MediaPipe.",
      "Algoritmos de detección Facial Landmarks.",
      "Extracción de descriptores faciales (Embeddings).",
      "Optimización de inferencia vía WebGPU.",
      "Configuración de umbrales de similitud."
    ],
    progress: 100
  },
  { 
    name: "SPRINT 4", 
    phase: "INTEGRACIÓN",
    weeks: "Sem. 9-11",
    goal: "Desarrollo del sistema de control de asistencia y sincronización Cloud.",
    epics: [
      { name: "Control de asistencia", status: "Inicio" },
      { name: "Sincronización Cloud", status: "Finalización" }
    ],
    details: [
      "Implementación de Geofencing para validación.",
      "Sincronización con Firestore Real-time DB.",
      "Motor de reglas para gestión de horarios.",
      "Optimización de consultas indexadas.",
      "Mecanismos de caché offline (Service Workers)."
    ],
    progress: 100
  },
  { 
    name: "SPRINT 5", 
    phase: "CALIDAD",
    weeks: "Sem. 12-14",
    goal: "Panel administrativo avanzado, reportes y auditoría de seguridad.",
    epics: [
      { name: "Dashboards y reportes", status: "Inicio" },
      { name: "Auditoría y trazabilidad", status: "Inicio" }
    ],
    details: [
      "Dashboards analíticos con Recharts.",
      "Generación de reportes PDF/Excel (SSR).",
      "Logs de auditoría inmutables para trazabilidad.",
      "Pruebas de carga y estrés concurrentes.",
      "Escaneo de vulnerabilidades OWASP Top 10."
    ],
    progress: 100
  },
  { 
    name: "SPRINT 6", 
    phase: "DESPLIEGUE",
    weeks: "Sem. 15-16",
    goal: "Despliegue productivo, optimización final y entrega institucional.",
    epics: [
      { name: "Despliegue final", status: "Finalización" },
      { name: "Reconocimiento facial", status: "Finalización" }
    ],
    details: [
      "Despliegue en Firebase App Hosting / GCP.",
      "Ejecución de pruebas de aceptación (UAT).",
      "Documentación técnica y manuales de operación.",
      "Capacitación técnica al personal institucional.",
      "Monitoreo proactivo y alertas de salud (SRE)."
    ],
    progress: 53
  },
];

export default function Methodology() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isFullMode, setIsFullMode] = useState(false);

  const handleNext = () => {
    if (currentStep < sprints.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else setCurrentStep(-1);
  };

  useEffect(() => {
    if (isFullMode) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isFullMode]);

  return (
    <div id="metodologia" className="space-y-16 md:space-y-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
        <div className="space-y-3">
          <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">METODOLOGÍA</span>
          <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">SCRUM</h2>
        </div>

        <Button 
          onClick={() => {setCurrentStep(0); setIsFullMode(true);}}
          className="rounded-none bg-[#2B2B2B] hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-6 py-4 md:px-12 md:py-8 h-auto shadow-xl transition-all flex items-center gap-3 md:gap-6 group text-sm md:text-lg w-full md:w-auto"
        >
          <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
          VER ROADMAP INTERACTIVO
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {[
          { icon: Users, title: "SCRUM", text: "ROLES Y ARTEFACTOS" },
          { icon: RotateCw, title: "SPRINTS", text: "ITERACIONES DE VALOR" },
          { icon: CheckCircle2, title: "QA", text: "TESTING CONTINUO" }
        ].map((item, i) => (
          <div key={i} className="p-8 md:p-12 bg-slate-50 border-t-[8px] md:border-t-[12px] border-[#FF1E2D] text-center space-y-4 md:space-y-6 shadow-xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
            <item.icon className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] mx-auto" />
            <h3 className="text-xl md:text-3xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      {isFullMode && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col animate-in fade-in zoom-in duration-500">
          <div className="p-4 md:p-6 flex justify-between items-center bg-[#111] border-b border-white/5 z-50">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 red-gradient flex items-center justify-center shadow-lg">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-widest leading-none">
                  ROADMAP <span className="text-[#FF1E2D]">SIBF</span>
                </h2>
                <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-1">{currentStep + 1} / {sprints.length}</p>
              </div>
            </div>
            <Button variant="ghost" onClick={() => setIsFullMode(false)} className="text-white hover:text-[#FF1E2D] p-2 h-auto">
              <X className="w-8 h-8" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-stretch overflow-y-auto p-4 md:p-10 gap-8 md:gap-12">
            {/* Left Side: Sprint Info */}
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center space-y-6 md:space-y-10 shrink-0">
              <div className="w-32 h-32 md:w-64 md:h-64 rounded-full border-[6px] md:border-[12px] border-white/5 flex items-center justify-center text-5xl md:text-8xl font-black shadow-2xl relative" style={{ backgroundColor: sprints[currentStep].progress === 100 ? "#FF1E2D" : "#2B2B2B" }}>
                {currentStep + 1}
              </div>
              <div className="text-center space-y-3 md:space-y-6">
                <span className="text-[#FF1E2D] font-black text-[10px] md:text-sm tracking-[0.4em] uppercase">{sprints[currentStep].phase}</span>
                <h3 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">{sprints[currentStep].name}</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3 py-1 bg-white/5 text-white text-[8px] md:text-xs font-black uppercase tracking-widest border border-white/10">{sprints[currentStep].weeks}</span>
                  <span className={cn("px-3 py-1 text-white text-[8px] md:text-xs font-black uppercase tracking-widest", sprints[currentStep].progress === 100 ? "bg-[#FF1E2D]" : "bg-amber-600")}>{sprints[currentStep].progress}% OK</span>
                </div>
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 md:space-y-10 max-w-4xl">
              <div className="bg-[#1A1A1A] border-l-[6px] border-[#FF1E2D] p-6 md:p-10 shadow-2xl">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-[#FF1E2D] mb-4" />
                <p className="text-lg md:text-3xl font-bold text-white uppercase italic leading-tight">{sprints[currentStep].goal}</p>
              </div>

              <div className="bg-[#1A1A1A] p-6 md:p-10 space-y-6 md:space-y-8 shadow-2xl border border-white/5">
                <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.6em]">ACTIVIDADES TÉCNICAS</span>
                <ul className="space-y-4">
                  {sprints[currentStep].details.map((detail, idx) => (
                    <li key={idx} className="text-sm md:text-xl font-bold text-gray-400 uppercase flex gap-4 items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF1E2D] mt-1.5 shrink-0 shadow-[0_0_10px_#FF1E2D]" /> 
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#111] border-t border-white/5 flex flex-col gap-4 shrink-0">
            <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
              <Button onClick={handlePrev} disabled={currentStep === 0} className="rounded-none bg-white/5 hover:bg-[#FF1E2D] text-white px-6 md:px-12 py-4 h-auto font-black uppercase tracking-widest text-xs md:text-base border border-white/10">
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" /> <span className="hidden sm:inline ml-2">ANTERIOR</span>
              </Button>
              <div className="flex items-center gap-2">
                {sprints.map((_, i) => (
                  <div key={i} className={cn("w-2 h-2 rounded-full transition-all", currentStep === i ? "bg-[#FF1E2D] w-6" : "bg-white/10")} />
                ))}
              </div>
              <Button onClick={handleNext} disabled={currentStep === sprints.length - 1} className="rounded-none bg-[#FF1E2D] hover:bg-white hover:text-[#FF1E2D] text-white px-6 md:px-12 py-4 h-auto font-black uppercase tracking-widest text-xs md:text-base shadow-lg">
                <span className="hidden sm:inline mr-2">SIGUIENTE</span> <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}