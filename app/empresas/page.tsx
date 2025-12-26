import { GlassCard } from "@/app/components/ui/glass-card";
import { TechButton } from "@/app/components/ui/tech-button";
import { Building2, Users, FileCheck, ArrowRight } from "lucide-react";
import { ParticleNetwork } from "@/app/components/ui/particle-network";

export const metadata = {
    title: "Posiciona Empresas | Soluciones Corporativas",
    description: "Capacitación SENCE, cierre de brechas y certificación de competencias laborales para su equipo.",
};

export default function EmpresasPage() {
    return (
        <div className="min-h-screen bg-navy-deep relative overflow-hidden pt-24 pb-20">
            {/* Background Particles for Tech Feel */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <ParticleNetwork />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-inst/30 bg-blue-inst/10 text-blue-inst mb-4 font-mono text-xs font-bold uppercase">
                            <Building2 className="w-4 h-4" /> División Corporativa
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
                            Potencia su <span className="text-blue-inst">Capital Humano</span>
                        </h1>
                        <p className="text-xl text-gray-300 font-mono">
                            Soluciones de capacitación a medida, gestión SENCE y certificación de competencias.
                            Eleve los estándares de seguridad y productividad de su organización.
                        </p>
                    </div>

                    <TechButton variant="primary" size="lg" className="h-14">
                        Solicitar Reunión <ArrowRight className="ml-2 w-5 h-5" />
                    </TechButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="border-t-4 border-t-amber-vial">
                        <div className="mb-6 bg-amber-vial/10 w-fit p-3 rounded-lg">
                            <Users className="w-8 h-8 text-amber-vial" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Cierre de Brechas</h3>
                        <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                            Diagnóstico y nivelación para equipos operativos y mandos medios.
                        </p>
                        <ul className="space-y-2 text-gray-300 text-sm mb-8">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-vial rounded-full" /> Alfabetización Digital</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-vial rounded-full" /> Seguridad Industrial</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-vial rounded-full" /> Inglés Técnico TOEIC</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="border-t-4 border-t-blue-inst">
                        <div className="mb-6 bg-blue-inst/10 w-fit p-3 rounded-lg">
                            <FileCheck className="w-8 h-8 text-blue-inst" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Gestión SENCE</h3>
                        <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                            Ejecución de programas con Franquicia Tributaria y Becas Laborales OTIC.
                        </p>
                        <div className="p-3 bg-blue-inst/10 rounded border border-blue-inst/20 text-center">
                            <span className="block text-sm font-bold text-blue-inst uppercase">Experiencia Comprobada</span>
                            <span className="text-xs text-white">Licitaciones Públicas y Privadas</span>
                        </div>
                    </GlassCard>

                    <GlassCard className="border-t-4 border-t-white">
                        <div className="mb-6 bg-white/10 w-fit p-3 rounded-lg">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Alianza WYLAR</h3>
                        <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
                            Certificación de Competencias Laborales (en proceso de acreditación ChileValora).
                        </p>
                        <div className="flex gap-2 justify-center">
                            <div className="p-2 bg-white/5 rounded border border-white/10 text-center w-full">
                                <span className="block text-xl font-black text-white">ISO 9001</span>
                            </div>
                            <div className="p-2 bg-white/5 rounded border border-white/10 text-center w-full">
                                <span className="block text-xl font-black text-white">NCh 2728</span>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
