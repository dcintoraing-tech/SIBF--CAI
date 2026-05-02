import { CheckCircle2 } from "lucide-react";

export default function Justification() {
  const benefits = [
    "Eliminación de errores humanos",
    "Prevención de fraudes de identidad",
    "Centralización de información",
    "Escalabilidad institucional"
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-zinc-900 border border-white/5 rounded-2xl flex flex-col gap-4 group hover:bg-zinc-800 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <span className="text-sm font-bold tracking-wider uppercase text-white/90 leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl mb-8">
              JUSTIFICACIÓN <br />
              <span className="text-primary font-bold">DE VALOR</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                Este sistema ofrece una solución rápida, segura y automatizada que elimina errores humanos y reduce tiempos administrativos. El reconocimiento facial evita fraudes y garantiza registros confiables en tiempo real. 
              </p>
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                Además, permite centralizar la información y generar análisis para una mejor toma de decisiones. Es una solución innovadora, accesible y escalable que mejora la eficiencia institucional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
