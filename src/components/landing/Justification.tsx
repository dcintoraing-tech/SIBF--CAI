import { CheckCircle2, TrendingUp, Users, Shield } from "lucide-react";

export default function Justification() {
  const valueProps = [
    { 
      icon: Shield, 
      title: "Seguridad Certificada", 
      desc: "Eliminación total del fraude de identidad mediante biometría avanzada." 
    },
    { 
      icon: TrendingUp, 
      title: "Optimización de Tiempos", 
      desc: "Reducción del 90% en tiempos de registro y procesamiento de datos." 
    },
    { 
      icon: Users, 
      title: "Mejora Institucional", 
      desc: "Toma de decisiones basada en datos precisos sobre asistencia y puntualidad." 
    }
  ];

  return (
    <section id="valor" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Justificación</h2>
            <h2 className="text-3xl font-bold md:text-5xl text-slate-900 leading-tight">
              Propuesta de <br />
              <span className="text-slate-400">Valor Estratégico</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Este sistema no solo automatiza procesos; redefine la interacción institucional con la tecnología, proporcionando un entorno seguro y transparente para la comunidad académica.
              </p>
              <p>
                La implementación de UniAssist Hub representa un salto cualitativo en la <span className="text-slate-900 font-semibold">transformación digital</span>, garantizando registros inalterables y análisis detallados que impulsan la productividad.
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              {["ROI Operativo", "Escalabilidad", "Precisión 99.9%", "UX Intuitiva"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex gap-6 items-start group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="p-3 rounded-xl bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <prop.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{prop.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}