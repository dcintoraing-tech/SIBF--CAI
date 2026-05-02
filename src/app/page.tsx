import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] py-0 md:py-12 px-0 md:px-4">
      <div className="max-w-5xl mx-auto presentation-card">
        {/* Header / Cover */}
        <Hero />
        
        {/* Content Body with alternating sections */}
        <div className="divide-y divide-gray-100">
          <section className="p-8 md:p-16 bg-white">
            <ProblemStatement />
          </section>
          
          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <Objectives />
          </section>
          
          <section className="p-8 md:p-16 bg-white">
            <Justification />
          </section>
        </div>

        {/* Institutional Footer */}
        <footer className="bg-[#2B2B2B] py-12 px-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 red-gradient rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">UA</span>
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-widest text-white leading-tight uppercase">
                  UNI<span className="text-[#FF1E2D]">ASSIST</span> HUB
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-semibold">Propuesta de Innovación Tecnológica</p>
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium uppercase tracking-widest">
              &copy; {new Date().getFullYear()} LaUni - Facultad de Tecnología
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}