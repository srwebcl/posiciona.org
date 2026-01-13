import { TechButton } from "@/app/components/ui/tech-button";
import { Suspense } from "react";
import { Users, FileCheck, ArrowRight, Check, Mail, Loader2 } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Capacitación Empresas y Franquicia SENCE | Posiciona",
    description: "Cierre de brechas de competencias y gestión experta de franquicia tributaria SENCE para su empresa.",
};

export default function CapacitacionesEmpresasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Soluciones Corporativas"
                video="/imagenes/cursos.mp4"
                title={
                    <>
                        Capacitación y <span className="text-blue-inst">Gestión SENCE</span>
                    </>
                }
                description="Programas de formación a medida para cerrar brechas de competencias y maximizar el uso de su franquicia tributaria."
                align="left"
                className="pt-32 md:pt-48 pb-20 md:pb-32"
            >
                <a href="#contacto">
                    <TechButton variant="primary" size="lg" className="h-14">
                        Cotizar Capacitación <ArrowRight className="ml-2 w-5 h-5" />
                    </TechButton>
                </a>
            </PageHero>

            {/* SECCIÓN SOLUCIONES (Light Theme) */}
            <div className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Nuestra Metodología</span>
                        <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Formación de Alto Impacto
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Combinamos tecnología educativa, instructores expertos y gestión administrativa eficiente para garantizar resultados medibles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* CARD 1: Cierre de Brechas */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 min-h-[420px] flex flex-col hover:border-amber-vial/30 transition-all duration-300">
                            <div className="mb-6 bg-amber-vial/10 w-fit p-4 rounded-xl">
                                <Users className="w-8 h-8 text-amber-vial" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-deep mb-4">Cierre de Brechas</h3>
                            <p className="text-gray-600 mb-8 font-sans text-base leading-relaxed flex-grow">
                                Diagnóstico y nivelación para equipos operativos y mandos medios. Diseñamos programas específicos para potenciar habilidades críticas y mejorar la productividad.
                            </p>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li className="flex items-center gap-3"><div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-600" /></div> Alfabetización Digital</li>
                                <li className="flex items-center gap-3"><div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-600" /></div> Habilidades Blandas y Liderazgo</li>
                                <li className="flex items-center gap-3"><div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-600" /></div> Inglés Técnico TOEIC</li>
                                <li className="flex items-center gap-3"><div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-600" /></div> Seguridad Operacional</li>
                            </ul>
                        </div>

                        {/* CARD 2: Gestión SENCE */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 min-h-[420px] flex flex-col hover:border-blue-inst/30 transition-all duration-300">
                            <div className="mb-6 bg-blue-inst/10 w-fit p-4 rounded-xl">
                                <FileCheck className="w-8 h-8 text-blue-inst" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy-deep mb-4">Gestión SENCE</h3>
                            <p className="text-gray-600 mb-8 font-sans text-base leading-relaxed flex-grow">
                                Maximizamos el uso de su Franquicia Tributaria SENCE. Nos encargamos de la gestión administrativa y ejecución experta de sus planes de capacitación.
                            </p>
                            <ul className="space-y-4 text-gray-600 text-sm mb-8">
                                <li className="flex items-center gap-3"><div className="bg-blue-100 p-1 rounded-full"><Check className="w-3 h-3 text-blue-600" /></div> Franquicia Tributaria</li>
                                <li className="flex items-center gap-3"><div className="bg-blue-100 p-1 rounded-full"><Check className="w-3 h-3 text-blue-600" /></div> Becas Laborales OTIC</li>
                                <li className="flex items-center gap-3"><div className="bg-blue-100 p-1 rounded-full"><Check className="w-3 h-3 text-blue-600" /></div> Precontratos de Capacitación</li>
                            </ul>
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center mt-auto">
                                <span className="block text-sm font-bold text-blue-inst uppercase mb-1">Experiencia Comprobada</span>
                                <span className="text-xs text-gray-500">Licitaciones Públicas y Privadas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACTO */}
            <section id="contacto" className="py-24 bg-navy-deep relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-vial/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="text-center mb-10 relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Cotizar Capacitación</h2>
                            <p className="text-gray-400">
                                Envíenos sus requerimientos y nuestro equipo comercial corporativo le contactará a la brevedad.
                            </p>
                        </div>
                        <div className="relative z-10 max-w-lg mx-auto">
                            <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm prefilledInterest="Capacitación Empresa" className="md:grid-cols-1" />
                            </Suspense>
                            <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-8 text-sm">
                                <a href="mailto:posiciona@posiciona.org" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" /> posiciona@posiciona.org
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
