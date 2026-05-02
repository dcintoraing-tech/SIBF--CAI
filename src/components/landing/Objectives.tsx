import { 
  Scan, 
  Cpu, 
  Database, 
  LayoutList, 
  FileSpreadsheet, 
  ShieldCheck, 
  BarChart3, 
  BellRing,
  Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specificObjectives = [
  { icon: Scan, title: "Identificación Biométrica", desc: "Reconocimiento facial de alta fidelidad." },
  { icon: Cpu, title: "Automatización", desc: "Registro instantáneo sin intervención humana." },
  { icon: Database, title: "Gestión Centralizada", desc: "Arquitectura de datos segura y unificada." },
  { icon: BarChart3, title: "Analítica Predictiva", desc: "Visualización de tendencias en tiempo real." },
  { icon: FileSpreadsheet, title: "Reportería Digital", desc: "Exportación automatizada de informes." },
  { icon: BellRing, title: "Alertas Tempranas", desc: "Notificaciones automáticas ante irregularidades." },
];

export default function Objectives() {
  return (
    <section id="objetivo" className="py-24 bg-slate-50">
      <div className="container px-6 mx-auto">
        {/* General Objective */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Visión Estratégica</h2>
            <h2 className="text-3xl font-bold md:text-5xl text-slate-900 mb-8">Objetivo General</h2>
          </div>
          
          <Card className="presentation-card bg-white overflow-hidden">
            <CardContent className="p-10 md:p-16 text-center">
              <div className="mb-8 inline-block p-4 rounded-2xl bg-primary/5 text-primary">
                <Target className="w-10 h-10" />
              </div>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800">
                "Desarrollar un ecosistema digital de control de asistencia basado en <span className="text-primary font-bold">reconocimiento facial</span> que optimice la seguridad, centralice la información y proporcione inteligencia de datos para la excelencia institucional."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Specific Objectives */}
        <div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Ejes de Implementación</h3>
            <p className="text-slate-500 mt-2">Objetivos operativos específicos del proyecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specificObjectives.map((obj, index) => (
              <Card key={index} className="presentation-card group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <obj.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {obj.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}