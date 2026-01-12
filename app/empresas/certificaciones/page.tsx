import { TechButton } from "@/app/components/ui/tech-button";
import { Building2, ArrowRight, ShieldCheck, Check, Mail } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";

export const metadata = {
    title: "Certificación de Competencias y Calidad | Posiciona",
    description: "Certificación de competencias laborales Wylar (ChileValora) y gestión de calidad ISO 9001 / NCh 2728.",
};

export default function CertificacionesEmpresasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Calidad y Normativa"
                video="/imagenes/simulador.mp4"
                title={
                    <>
                        Certificación de <span className="text-white">Competencias Laborales</span>
                    </>
                }
                description="Asegure la calidad de sus procesos y competencias laborales con nuestros servicios de certificación y alianza estratégica Wylar."
                align="left"
                className="pt-32 md:pt-48 pb-20 md:pb-32"
            >
                <a href="#contacto">
                    <TechButton variant="primary" size="lg" className="h-14">
                        Consultar Certificación <ArrowRight className="ml-2 w-5 h-5" />
                    </TechButton>
                </a>
            </PageHero>

            {/* SECCIÓN ALIANZAS Y CALIDAD (Light Theme) */}
            <div className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-blue-inst font-bold tracking-widest text-sm uppercase">Excelencia Corporativa</span>
                        <h2 className="text-3xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Estándares de Calidad
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Validamos el "Saber Hacer" de sus colaboradores y optimizamos sus procesos bajo normativas internacionales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">

                        {/* CARD 1: Alianza WYLAR */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 items-center hover:border-blue-inst/30 transition-all duration-300">
                            <div className="flex-1">
                                <div className="mb-6 bg-blue-inst/10 w-fit p-4 rounded-xl">
                                    <Building2 className="w-8 h-8 text-blue-inst" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy-deep mb-4">Alianza WYLAR</h3>
                                <p className="text-gray-600 mb-6 font-sans text-base leading-relaxed">
                                    Ofrecemos servicios de <strong>Certificación de Competencias Laborales</strong> a través de nuestra alianza estratégica con Wylar (Centro en proceso de acreditación ChileValora).
                                </p>
                                <p className="text-gray-600 font-sans text-base leading-relaxed">
                                    Evalúe y reconozca formalmente los conocimientos, habilidades y aptitudes de sus trabajadores, independientemente de cómo hayan sido adquiridas.
                                </p>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center min-w-[150px]">
                                    <span className="block text-2xl font-black text-navy-deep">ChileValora</span>
                                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">En proceso</span>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: ISO & Calidad */}
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-inst/5 -skew-x-12 translate-x-1/2 z-0" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 mb-6 uppercase tracking-wider">
                                        <ShieldCheck className="w-4 h-4" /> Calidad Asegurada
                                    </div>
                                    <h2 className="text-3xl font-black text-navy-deep mb-6">
                                        ISO 9001:2015 <br />
                                        <span className="text-blue-inst font-bold text-xl block mt-1">Norma Chilena 2728</span>
                                    </h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        En Posiciona, la calidad no es una opción, es nuestro compromiso. Garantizamos procesos de capacitación trazables, evaluables y de alto impacto.
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 bg-white p-1 rounded-full shadow-sm"><Check className="w-3 h-3 text-blue-600" /></div>
                                            <div>
                                                <h4 className="text-navy-deep font-bold text-sm">Mejora Continua</h4>
                                                <p className="text-gray-500 text-sm">Evaluación constante de nuestros relatores.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 bg-white p-1 rounded-full shadow-sm"><Check className="w-3 h-3 text-blue-600" /></div>
                                            <div>
                                                <h4 className="text-navy-deep font-bold text-sm">Satisfacción del Cliente</h4>
                                                <p className="text-gray-500 text-sm">Enfoque en requerimientos específicos.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative">
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                        <div className="aspect-video w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-300 mb-4">
                                            <ShieldCheck className="w-16 h-16 text-gray-400" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Certificación Vigente</p>
                                        </div>
                                    </div>
                                </div>
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
                            <h2 className="text-3xl font-bold text-white mb-4">Cotizar Certificación</h2>
                            <p className="text-gray-400">
                                Conversemos sobre cómo certificar a su equipo o implementar planes de calidad.
                            </p>
                        </div>
                        <div className="relative z-10 max-w-lg mx-auto">
                            <ContactForm prefilledInterest="Empresas - Certificación" className="md:grid-cols-1" />
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
