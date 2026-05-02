import { AlertCircle, FileX, Clock, ShieldAlert } from "lucide-react";

export default function ProblemStatement() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN DE IDENTIDAD" },
    { icon: FileX, text: "DISPERSIÓN DE INFORMACIÓN" },
    { icon: Clock, text: "FALTA DE DATOS EN TIEMPO REAL" },
    { icon: AlertCircle, text: "INEFICIENCIA OPERATIVA" }
  ];

  return (
    <div id="problema" className="space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.1 Planteamiento del Problema</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">EL DESAFÍO ACTUAL</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-gray-600">
          <p className="text-lg leading-relaxed">
            Actualmente, el control de asistencia en instituciones como <span className="text-[#2B2B2B] font-bold">LaUni</span> se realiza mediante métodos manuales o poco integrados, como listas, firmas o registros en archivos digitales básicos. 
          </p>
          
          <div className="p-6 bg-[#F5F5F5] border-l-8 border-[#FF1E2D] italic text-[#2B2B2B] font-bold uppercase tracking-tight text-sm">
            "Estos procesos generan errores, pérdida de tiempo y falta de confiabilidad institucional."
          </div>

          <p className="text-base leading-relaxed">
            Existen problemas críticos como la <span className="text-[#FF1E2D] font-bold">suplantación de identidad</span>, registros incorrectos y dispersión de la información en distintos formatos, lo que dificulta la consulta inmediata y la generación de reportes precisos.
          </p>
          
          <p className="text-base leading-relaxed">
            La falta de un sistema automatizado y centralizado limita la eficiencia operativa y el acceso a información precisa en tiempo real.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#2B2B2B] p-8 text-white space-y-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] text-center border-b border-gray-700 pb-4">CRITICAL CHALLENGES</h4>
            <div className="space-y-3">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border border-gray-700 hover:border-[#FF1E2D] transition-colors group">
                  <div className="flex-none text-[#FF1E2D]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest group-hover:text-[#FF1E2D] transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}