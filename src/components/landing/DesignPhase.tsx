'use client';

import { 
  GitBranch, 
  Users, 
  Boxes, 
  Database, 
  Table as TableIcon, 
  Network, 
  Layout, 
  Eye, 
  ArrowRightLeft,
  Activity,
  FileCode
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DesignPhase() {
  const diagrams = [
    { title: "Procesos", icon: Activity, tag: "UML" },
    { title: "Casos de Uso", icon: Users, tag: "UML" },
    { title: "Ficha Técnica", icon: FileCode, tag: "Spec" },
    { title: "Clases", icon: Boxes, tag: "UML" },
    { title: "Secuencia", icon: ArrowRightLeft, tag: "UML" },
    { title: "Actividades", icon: GitBranch, tag: "UML" },
  ];

  return (
    <div id="diseno" className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-blue-600 font-bold text-sm tracking-[0.3em] uppercase">1.6 Fase de Diseño</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">MODELADO Y ARQUITECTURA</h2>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-4xl border-l-4 border-blue-600 pl-6">
        <p className="text-lg text-gray-600 leading-relaxed font-medium uppercase tracking-tight">
          Transformación de requerimientos en <span className="text-blue-600 font-black">MODELOS TÉCNICOS</span>. Definición de la estructura, comportamiento y diseño visual bajo estándares de ingeniería de software.
        </p>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Bloque 1: Diagramas UML */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GitBranch className="w-6 h-6 text-blue-600" />
            <h3 className="text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Modelado Estructural (UML)</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {diagrams.map((d, i) => (
              <div key={i} className="bg-white border border-gray-100 p-4 hover:border-blue-500 transition-all group flex flex-col items-center text-center gap-3 shadow-sm">
                <d.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[9px] font-black uppercase text-gray-500 group-hover:text-[#2B2B2B]">{d.title}</span>
                <Badge variant="outline" className="text-[7px] py-0 h-4 border-blue-100 text-blue-500 font-black">{d.tag}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Bloque 2: Modelado de Datos */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-blue-600" />
            <h3 className="text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Modelado de Datos</h3>
          </div>
          <div className="bg-[#2B2B2B] p-6 space-y-4">
            <div className="flex items-center gap-4 text-white/90 p-3 border border-white/10 hover:bg-white/5 transition-colors">
              <TableIcon className="w-5 h-5 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase">Diagrama Entidad-Relación</span>
                <span className="text-[8px] text-gray-400 uppercase">Mapeo Lógico de Entidades</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/90 p-3 border border-white/10 hover:bg-white/5 transition-colors">
              <Layout className="w-5 h-5 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase">Esquema Relacional</span>
                <span className="text-[8px] text-gray-400 uppercase">PK/FK e Integridad Referencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arquitectura y UX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
        {/* Sitemap */}
        <Card className="rounded-none border-t-4 border-blue-600 shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-blue-50 text-blue-600">
              <Network className="w-5 h-5" />
            </div>
            <CardTitle className="text-xs font-black uppercase tracking-[0.2em]">Arquitectura de Información</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative p-4 border border-blue-50 bg-blue-50/20 text-center">
              <span className="text-[9px] font-black text-blue-600 uppercase">Mapa de Navegación Jerárquico</span>
              <p className="text-[8px] text-gray-400 font-bold uppercase mt-2 italic">Definición de rutas de usuario y flujos de navegación optimizados.</p>
            </div>
          </CardContent>
        </Card>

        {/* UX/UI Design */}
        <Card className="rounded-none border-t-4 border-[#2B2B2B] shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="p-2 bg-gray-100 text-[#2B2B2B]">
              <Layout className="w-5 h-5" />
            </div>
            <CardTitle className="text-xs font-black uppercase tracking-[0.2em]">Diseño de Interfaz (UX/UI)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center">
                  <span className="text-[7px] font-black text-gray-300 uppercase">Wireframe</span>
                </div>
                <span className="text-[8px] font-black uppercase text-gray-400 block text-center">Bocetos</span>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white/50" />
                </div>
                <span className="text-[8px] font-black uppercase text-blue-600 block text-center">Look & Feel</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Fase */}
      <div className="flex justify-between items-center bg-[#F5F5F5] p-6 border border-gray-100">
        <div className="flex gap-4">
          <Badge className="bg-blue-600 rounded-none uppercase text-[8px] font-black tracking-widest">Blueprint</Badge>
          <Badge className="bg-[#2B2B2B] rounded-none uppercase text-[8px] font-black tracking-widest">Arquitectura</Badge>
        </div>
        <button className="text-[9px] font-black uppercase text-blue-600 hover:underline tracking-tighter flex items-center gap-2">
          Ver documentación técnica completa <FileCode className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}