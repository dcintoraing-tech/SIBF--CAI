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
  { icon: Scan, title: "Reconocimiento Facial", desc: "Identificación biométrica precisa" },
  { icon: Cpu, title: "Registro Automático", desc: "Optimización de tiempos de ingreso" },
  { icon: Database, title: "Base de Datos", desc: "Almacenamiento centralizado y seguro" },
  { icon: LayoutList, title: "Organización", desc: "Estructura eficiente de registros" },
  { icon: FileSpreadsheet, title: "Reportes Excel", desc: "Generación automatizada de informes" },
  { icon: ShieldCheck, title: "Validación", desc: "Integridad total del sistema" },
  { icon: BarChart3, title: "Análisis de Datos", desc: "Visualización en tiempo real" },
  { icon: BellRing, title: "Alertas", desc: "Notificaciones académicas automáticas" },
];

export default function Objectives() {
  return (
    <section id="objetivo" className="py-24 bg-black relative">
      <div className="container px-4 mx-auto">
        {/* General Objective */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black md:text-4xl mb-4">
                OBJETIVO <span className="text-primary">GENERAL</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            </div>
            
            <Card className="bg-zinc-900/50 border-primary/20 overflow-hidden group">
              <CardContent className="p-12 text-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-32 h-32" />
                </div>
                <p className="text-2xl md:text-3xl font-body leading-snug text-white font-medium italic">
                  "Desarrollar un sistema inteligente de control de asistencia basado en reconocimiento facial que automatice el registro, centralice la información y genere análisis en tiempo real, mejorando la precisión, seguridad y eficiencia operativa institucional."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specific Objectives */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black md:text-4xl mb-4">
              OBJETIVOS <span className="text-muted-foreground">ESPECÍFICOS</span>
            </h2>
            <p className="text-muted-foreground tracking-widest uppercase text-sm">Metas detalladas del proyecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specificObjectives.map((obj, index) => (
              <Card 
                key={index} 
                className="bg-zinc-900 border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 cursor-default"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red-gradient transition-colors duration-300">
                    <obj.icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    {obj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
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
