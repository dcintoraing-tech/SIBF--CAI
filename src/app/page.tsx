import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";
import AISummaryTool from "@/components/landing/AISummaryTool";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation - Minimal and floating */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="px-8 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-8">
          <span className="font-black tracking-tighter text-xl">
            UNI<span className="text-primary">ASSIST</span>
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#problema" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Problema</a>
            <a href="#objetivo" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Objetivos</a>
            <div className="w-px h-4 bg-white/10" />
            <a href="mailto:info@launi.edu" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-red-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      <Hero />
      <ProblemStatement />
      <Objectives />
      <Justification />
      <AISummaryTool />

      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container px-4 mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-black mb-2 tracking-tighter">
              UNI<span className="text-primary">ASSIST</span> HUB
            </h2>
            <p className="text-muted-foreground tracking-widest uppercase text-xs font-bold">Universidad La Uni - Facultad de Tecnología</p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            {/* Minimal social/link icons placeholder */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xs font-bold">LN</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xs font-bold">YT</span>
            </div>
          </div>
          <p className="text-muted-foreground text-xs font-body">
            &copy; {new Date().getFullYear()} UniAssist Hub. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
