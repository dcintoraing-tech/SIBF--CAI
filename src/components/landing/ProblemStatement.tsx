import { AlertCircle } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section id="problema" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-black md:text-4xl lg:text-5xl">
                PLANTEAMIENTO <span className="text-muted-foreground">DEL PROBLEMA</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-xl font-body text-muted-foreground leading-relaxed border-l-4 border-primary pl-8 py-2">
                Actualmente, el control de asistencia se realiza mediante métodos manuales o poco integrados, lo que genera errores, pérdida de tiempo y falta de confiabilidad.
              </p>
              <p className="text-xl font-body text-muted-foreground leading-relaxed pl-9">
                Además, la dispersión de información y la suplantación de identidad afectan la precisión de los registros, limitando la eficiencia operativa institucional en entornos académicos de alta concurrencia.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-1 bg-red-gradient rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-8 bg-zinc-900 rounded-3xl border border-white/10 tech-grid">
                <div className="flex flex-col gap-6">
                  {[
                    "Métodos manuales lentos",
                    "Fraude de identidad",
                    "Información descentralizada",
                    "Baja confiabilidad de datos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 transition-transform hover:translate-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold tracking-wider uppercase text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
