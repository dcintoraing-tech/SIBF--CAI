"use client";

import { useState } from "react";
import { generateAIProjectSummary } from "@/ai/flows/ai-project-summary-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, RefreshCcw } from "lucide-react";

export default function AISummaryTool() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const projectData = {
    problemStatement: "Actualmente, el control de asistencia se realiza mediante métodos manuales o poco integrados, lo que genera errores, pérdida de tiempo y falta de confiabilidad. Además, la dispersión de información y la suplantación de identidad afectan la precisión de los registros, limitando la eficiencia operativa.",
    generalObjective: "Desarrollar un sistema inteligente de control de asistencia basado en reconocimiento facial que automatice el registro, centralice la información y genere análisis en tiempo real, mejorando la precisión, seguridad y eficiencia operativa institucional.",
    specificObjectives: [
      "Reconocimiento facial biométrico",
      "Registro automático en tiempo real",
      "Base de datos centralizada",
      "Reportes automatizados en Excel",
      "Alertas académicas preventivas"
    ],
    justification: "Este sistema ofrece una solución rápida, segura y automatizada que elimina errores humanos y reduce tiempos administrativos. El reconocimiento facial evita fraudes y garantiza registros confiables en tiempo real, permitiendo centralizar la información para una mejor toma de decisiones."
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateAIProjectSummary(projectData);
      setSummary(result.summary);
    } catch (error) {
      console.error("Error generating summary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <Card className="max-w-4xl mx-auto bg-zinc-900/50 border-primary/30 tech-red-glow-effect overflow-hidden">
          <CardHeader className="text-center border-b border-white/5 pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/40 animate-pulse">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-black">RESUMEN EJECUTIVO IA</CardTitle>
            <CardDescription className="uppercase tracking-widest text-xs font-bold text-muted-foreground">
              Generado dinámicamente para presentaciones rápidas
            </CardDescription>
          </CardHeader>
          <CardContent className="p-10 text-center">
            {!summary && !loading ? (
              <div className="space-y-6">
                <p className="text-muted-foreground font-body">
                  Usa nuestra inteligencia artificial para generar una síntesis profesional del proyecto lista para ser compartida.
                </p>
                <Button 
                  onClick={handleGenerate} 
                  className="bg-red-gradient h-12 px-8 font-bold text-lg button-glow"
                >
                  GENERAR RESUMEN AHORA
                </Button>
              </div>
            ) : loading ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-primary font-bold tracking-widest uppercase animate-pulse">Analizando parámetros del proyecto...</p>
              </div>
            ) : (
              <div className="text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-8 bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                  <p className="text-xl font-body text-white leading-relaxed italic">
                    {summary}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    onClick={handleGenerate}
                    className="text-muted-foreground hover:text-white hover:bg-white/5"
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Regenerar versión alternativa
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
