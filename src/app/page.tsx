import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto presentation-card">
        {/* Header / Cover */}
        <Hero />
        
        {/* Content Body */}
        <div className="p-8 md:p-16 space-y-24">
          <ProblemStatement />
          <Objectives />
          <Justification />
        </div>

        {/* Institutional Footer */}
        <footer className="bg-slate-50/50 py-12 px-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-sm">UA</span>
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">
                  UNI<span className="text-primary">ASSIST</span> HUB
                </h2>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Propuesta de Innovación Tecnológica</p>
              </div>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} LaUni - Facultad de Tecnología
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}