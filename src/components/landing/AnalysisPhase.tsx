'use client';

import { 
  ClipboardList, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Fingerprint, 
  ChevronRight, 
  CheckCircle2,
  BarChart3,
  MessageSquare,
  Search
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function AnalysisPhase() {
  const userStories = [
    { role: "Administrador", goal: "gestionar usuarios", benefit: "controlar el acceso al sistema" },
    { role: "Personal", goal: "registrar mi asistencia mediante rostro", benefit: "mayor seguridad y rapidez" },
    { role: "Directivo", goal: "generar reportes automáticos", benefit: "optimizar la toma de decisiones" }
  ];

  const nonFunctional = [
    { title: "Seguridad", value: "Cifrado SSL/TLS y Biometría" },
    { title: "Rendimiento", value: "Respuesta < 2 segundos" },
    { title: "Disponibilidad", value: "99.9% de Uptime" },
    { title: "Usabilidad", value: "Diseño intuitivo y responsivo" }
  ];

  return (
    <div id="analisis" className="space-y-16">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.1.2 Fase de Análisis</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">LEVANTAMIENTO DE REQUERIMIENTOS</h2>
      </div>

      {/* Intro Description */}
      <div className="prose prose-slate max-w-4xl">
        <p className="text-lg text-gray-600 leading-relaxed font-medium uppercase tracking-tight">
          En esta fase crítica, se identificaron y documentaron las necesidades del sistema mediante técnicas de <span className="text-[#FF1E2D] font-bold">entrevistas, observación directa y análisis de entorno</span>, garantizando que la solución técnica responda fielmente a la realidad institucional.
        </p>
      </div>

      {/* Grid de Análisis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proceso de Negocio */}
        <Card className="rounded-none border-t-4 border-[#FF1E2D] shadow-xl hover:shadow-2xl transition-all group">
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 red-gradient flex items-center justify-center mb-4 shadow-lg shadow-red-500/20">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-sm font-black uppercase tracking-widest">Proceso de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">
              Análisis del flujo actual: Se detectaron cuellos de botella en el registro manual y falta de centralización de datos, lo que genera una brecha en la confiabilidad de la asistencia.
            </p>
          </CardContent>
        </Card>

        {/* Requerimientos No Funcionales */}
        <Card className="rounded-none border-t-4 border-[#2B2B2B] shadow-xl hover:shadow-2xl transition-all">
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 bg-[#2B2B2B] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-sm font-black uppercase tracking-widest">Atributos de Calidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {nonFunctional.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[10px] font-black text-gray-400 uppercase">{item.title}</span>
                <span className="text-[10px] font-bold text-[#2B2B2B] uppercase">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Requerimientos del Sistema */}
        <Card className="rounded-none border-t-4 border-[#FF1E2D] shadow-xl hover:shadow-2xl transition-all">
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 red-gradient flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-sm font-black uppercase tracking-widest">Stack Tecnológico</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="rounded-none border-gray-200 text-[9px] font-black uppercase">Firebase Firestore</Badge>
              <Badge variant="outline" className="rounded-none border-gray-200 text-[9px] font-black uppercase">Next.js 15</Badge>
              <Badge variant="outline" className="rounded-none border-gray-200 text-[9px] font-black uppercase">Biometría SDK</Badge>
              <Badge variant="outline" className="rounded-none border-gray-200 text-[9px] font-black uppercase">Cloud Functions</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backlog de Historias de Usuario */}
      <div className="bg-[#2B2B2B] p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4">
          <Users className="w-8 h-8 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">Scrum Backlog: Historias de Usuario</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userStories.map((story, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 space-y-4 hover:border-[#FF1E2D]/50 transition-colors">
              <span className="text-[9px] font-black text-[#FF1E2D] uppercase tracking-[0.2em]">User Story 0{i+1}</span>
              <p className="text-xs text-gray-300 font-medium leading-relaxed uppercase">
                "Como <span className="text-white font-black">{story.role}</span>, quiero <span className="text-white font-black">{story.goal}</span> para <span className="text-white font-black">{story.benefit}</span>."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] font-bold text-gray-400 uppercase">Estado: Priorizado</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usabilidad y Flujo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Fingerprint className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-lg font-black text-[#2B2B2B] uppercase tracking-widest">Estudio de Usabilidad (UX)</h3>
          </div>
          <div className="space-y-6 bg-white p-8 border border-gray-100 shadow-sm">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span>Satisfacción del Usuario</span>
                <span className="text-[#FF1E2D]">95%</span>
              </div>
              <Progress value={95} className="h-1 bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span>Facilidad de Navegación</span>
                <span className="text-[#FF1E2D]">92%</span>
              </div>
              <Progress value={92} className="h-1 bg-gray-100" />
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase italic mt-4">
              Resultados obtenidos mediante pruebas A/B y encuestas de usabilidad con el personal administrativo.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-[#FF1E2D]" />
            <h3 className="text-lg font-black text-[#2B2B2B] uppercase tracking-widest">Flujo del Análisis</h3>
          </div>
          <div className="relative space-y-6 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
            {[
              { t: "Entrevistas Directas", d: "Reuniones con stakeholders clave." },
              { t: "Análisis de Documentos", d: "Revisión de bitácoras actuales." },
              { t: "Modelado de Datos", d: "Definición de entidades y relaciones." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full border-2 border-[#FF1E2D] bg-white z-10" />
                <h4 className="text-xs font-black text-[#2B2B2B] uppercase">{step.t}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}