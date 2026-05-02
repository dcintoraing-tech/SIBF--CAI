import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Professional & Clean */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">UA</span>
            </div>
            <span className="font-bold tracking-tight text-xl text-slate-900">
              UNI<span className="text-primary">ASSIST</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Planteamiento</a>
            <a href="#objetivo" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Objetivos</a>
            <a href="#valor" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Propuesta de Valor</a>
            <div className="w-px h-4 bg-slate-200" />
            <a href="mailto:info@launi.edu" className="text-sm font-semibold text-primary hover:underline transition-all">Contacto Institucional</a>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Hero />
        <ProblemStatement />
        <Objectives />
        <Justification />
      </div>

      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                UNI<span className="text-primary">ASSIST</span> HUB
              </h2>
              <p className="text-slate-500 text-sm mt-1">Universidad La Uni - Facultad de Tecnología</p>
            </div>
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} UniAssist Hub. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}