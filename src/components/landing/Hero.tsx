import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse-subtle" />
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-primary uppercase border border-primary/30 rounded-full bg-primary/5 tech-red-glow-effect">
          Universidad La Uni - Proyecto Tecnológico
        </div>
        
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-black leading-tight tracking-tighter md:text-7xl lg:text-8xl">
          SISTEMA INTELIGENTE <br />
          <span className="text-transparent bg-clip-text bg-red-gradient text-red-glow">
            DE ASISTENCIA
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground md:text-xl font-body leading-relaxed">
          Solución innovadora para automatizar y optimizar la gestión de asistencia institucional con reconocimiento facial avanzado.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg font-bold bg-red-gradient button-glow border-none transition-all duration-300 hover:scale-105 active:scale-95"
            asChild
          >
            <a href="#objetivo">
              CONOCER PROYECTO
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg font-bold border-muted-foreground/30 text-white hover:bg-white/5 transition-all"
            asChild
          >
            <a href="#problema">Planteamiento</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
}
