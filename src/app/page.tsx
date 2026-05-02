import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Objectives from "@/components/landing/Objectives";
import Justification from "@/components/landing/Justification";
import Methodology from "@/components/landing/Methodology";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] py-0 md:py-12 px-0 md:px-4">
      <div className="max-w-5xl mx-auto presentation-card bg-white shadow-2xl">
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
          
          <section className="p-8 md:p-16 bg-[#F5F5F5]">
            <Methodology />
          </section>
        </div>

        {/* Institutional Footer */}
        <footer className="bg-[#2B2B2B] py-12 px-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <img 
                src="/images/logo.png" 
                alt="Logo Institucional" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-lg font-bold tracking-widest text-white leading-tight uppercase">
                  SIBF<span className="text-[#FF1E2D]">-CAI</span>
                </h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-semibold">Propuesta de Innovación Tecnológica</p>
              </div>
            </div>
            <div className="text-gray-500 text-xs font-medium uppercase tracking-widest text-center md:text-right">
              &copy; {new Date().getFullYear()} LaUni - Ingeniería en Sistemas Computacionales<br />
              Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
