'use client';

import { 
  Cpu, 
  Database, 
  Layout, 
  FileCode, 
  Terminal, 
  BrainCircuit, 
  Camera, 
  CheckCircle2, 
  Zap, 
  Workflow, 
  Cloud,
  Layers,
  Code2,
  Box
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DevelopmentPhase() {
  const stack = {
    frontend: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "ShadCN UI", "Lucide React"],
    backend: ["Firebase Authentication", "Firestore (NoSQL Real-time)"],
    tools: ["SheetJS (XLSX)"]
  };

  const aiModels = [
    { title: "Tiny Face Detector", desc: "Detector de rostros ligero optimizado para video en tiempo real." },
    { title: "Face Landmark 68 Model", desc: "Identificación de 68 puntos faciales para alineación del rostro." },
    { title: "Face Recognition Model", desc: "Convierte rostros en vectores numéricos de 128 dimensiones (embeddings)." }
  ];

  const modules = [
    {
      title: "Módulo de Reconocimiento Facial",
      code: ["capturarImagen()", "detectarRostro()", "generarEmbedding()", "compararRostros()"]
    },
    {
      title: "Módulo de Asistencia",
      code: ["registrarEntrada()", "registrarSalida()", "validarHorario()"]
    },
    {
      title: "Módulo de Usuarios",
      code: ["registrarUsuario()", "autenticarUsuario()"]
    },
    {
      title: "Módulo de Reportes",
      code: ["generarReporte()", "exportarExcel()"]
    }
  ];

  return (
    <div id="desarrollo" className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.7 Fase de Desarrollo</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight uppercase">IMPLEMENTACIÓN DE UNILINK ACCESS</h2>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-4xl border-l-4 border-[#FF1E2D] pl-6">
        <p className="text-lg text-gray-600 leading-relaxed font-medium uppercase tracking-tight">
          El sistema fue desarrollado utilizando tecnologías web de <span className="text-[#FF1E2D] font-black">VANGUARDIA</span>, integrando reconocimiento facial en tiempo real mediante IA que se ejecuta directamente en el navegador del cliente.
        </p>
      </div>

      {/* SECCIÓN 1: STACK TECNOLÓGICO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-none border-t-4 border-[#FF1E2D] bg-[#2B2B2B] text-white shadow-xl">
          <CardHeader className="pb-2">
            <Layout className="w-6 h-6 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-xs font-black uppercase tracking-widest">Frontend Stack</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stack.frontend.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                <div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-4 border-white bg-[#2B2B2B] text-white shadow-xl">
          <CardHeader className="pb-2">
            <Cloud className="w-6 h-6 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-xs font-black uppercase tracking-widest">Backend / Cloud</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stack.backend.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                <div className="w-1.5 h-1.5 bg-white" /> {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-4 border-[#FF1E2D] bg-[#2B2B2B] text-white shadow-xl">
          <CardHeader className="pb-2">
            <Box className="w-6 h-6 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-xs font-black uppercase tracking-widest">Herramientas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stack.tools.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                <div className="w-1.5 h-1.5 bg-[#FF1E2D]" /> {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* SECCIÓN 2: INTELIGENCIA ARTIFICIAL */}
      <div className="bg-white border border-gray-100 p-8 md:p-12 space-y-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 text-[#FF1E2D]">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#2B2B2B] uppercase tracking-tighter">Motor de Inteligencia Artificial</h3>
              <p className="text-[10px] font-black text-[#FF1E2D] uppercase tracking-[0.2em]">face-api.js (basado en TensorFlow.js)</p>
            </div>
          </div>
          <div className="bg-[#2B2B2B] px-6 py-3 text-center">
            <span className="text-2xl font-black text-white">99%</span>
            <p className="text-[8px] font-black text-[#FF1E2D] uppercase tracking-widest">Precisión Biométrica</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiModels.map((model, i) => (
            <div key={i} className="space-y-3 p-6 border-l-2 border-gray-100 hover:border-[#FF1E2D] transition-colors">
              <h4 className="text-xs font-black text-[#2B2B2B] uppercase tracking-widest">{model.title}</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>

        {/* Flujo Visual */}
        <div className="pt-8 border-t border-gray-50">
          <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 text-center">Pipeline de Procesamiento en Tiempo Real</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {['Captura', 'Detección', 'Análisis', 'Embedding', 'Validación'].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FF1E2D] flex items-center justify-center text-[10px] font-black text-[#FF1E2D]">
                    0{i+1}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">{step}</span>
                </div>
                {i < arr.length - 1 && <Workflow className="w-4 h-4 text-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: MÓDULOS DEL SISTEMA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, i) => (
          <Card key={i} className="rounded-none border-none bg-[#1a1a1a] shadow-2xl overflow-hidden group">
            <div className="bg-[#2b2b2b] px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <Terminal className="w-3 h-3 text-white/20" />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4 text-[#FF1E2D]" />
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">{module.title}</h4>
              </div>
              <div className="font-mono text-[9px] space-y-1">
                {module.code.map((line, j) => (
                  <div key={j} className="text-gray-400 group-hover:text-white transition-colors">
                    <span className="text-[#FF1E2D]">func</span> {line} <span className="text-gray-600">{"{ ... }"}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SECCIÓN 4: ARQUITECTURA */}
      <div className="bg-[#2B2B2B] p-10 space-y-8">
        <div className="flex items-center gap-4">
          <Workflow className="w-6 h-6 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-white uppercase tracking-tight">Arquitectura de Procesamiento Local</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="p-4 border border-white/10 text-center space-y-2">
            <Camera className="w-5 h-5 text-[#FF1E2D] mx-auto" />
            <span className="text-[8px] font-black text-white uppercase">Cámara</span>
          </div>
          <div className="hidden md:flex justify-center"><Zap className="w-4 h-4 text-white/10" /></div>
          <div className="p-4 border border-[#FF1E2D]/30 bg-[#FF1E2D]/5 text-center space-y-2">
            <Cpu className="w-5 h-5 text-[#FF1E2D] mx-auto" />
            <span className="text-[8px] font-black text-white uppercase">IA en Navegador</span>
          </div>
          <div className="hidden md:flex justify-center"><Zap className="w-4 h-4 text-white/10" /></div>
          <div className="p-4 border border-white/10 text-center space-y-2">
            <Database className="w-5 h-5 text-[#FF1E2D] mx-auto" />
            <span className="text-[8px] font-black text-white uppercase">Firebase Cloud</span>
          </div>
        </div>

        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest text-center italic">
          "La IA se ejecuta exclusivamente en el cliente, garantizando <span className="text-white">PRIVACIDAD</span> absoluta y velocidad de respuesta instantánea."
        </p>
      </div>
    </div>
  );
}
