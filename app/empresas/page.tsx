import { TechButton } from "@/app/components/ui/tech-button";
import { Suspense } from "react";
import { Users, Building2, Check, Loader2, ArrowRight } from "lucide-react";
import { EmpresasHero } from "@/app/components/empresas/EmpresasHero";
import { ContactForm } from "@/app/components/contact/ContactForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Posiciona Empresas | Soluciones Corporativas",
    description: "Capacitación SENCE, cierre de brechas y certificación de competencias laborales para su equipo.",
};

const capacitacionItems = [
    "Soldadura y Electricidad",
    "Operador de Grúa Horquilla y Maquinaria Pesada",
    "Camión Pluma y Equipos de Izaje",
    "Climatización e Instalador de Gas Clase 3",
    "Desarrollo de Software – Talento Digital",
    "Ley Karin, Prevención de Riesgos y normativas vigentes, entre otros."
];

const certificacionItems = [
    "Certificación de Competencias Laborales (ChileValora)",
    "Instalador(a) Eléctrico Clase D",
    "Cuidador(a) de Personas Mayores",
    "Certificaciones Técnicas Privadas: Soldador, Rigger y Maniobras de Izaje, entre otros."
];

export default function EmpresasHubPage() {
    return (
        <div className="min-h-screen bg-white">
            <EmpresasHero />

            {/* SECCIÓN 1: CAPACITACIÓN Y SENCE */}
            <div className="py-24 md:py-32 bg-white relative z-10 border-b border-gray-100/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">

                        {/* Encabezado y Badge */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50/80 text-amber-700 text-[11px] font-bold border border-amber-100/50 mb-8 tracking-[0.2em] uppercase shadow-sm">
                                <Users className="w-3.5 h-3.5" /> Capacitación Continua
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-deep mb-8 leading-[1.1] tracking-tight">
                                Capacitación <span className="text-amber-vial">y SENCE</span>
                            </h2>
                            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">
                                En <strong className="font-bold text-navy-deep">OTEC Posiciona</strong> desarrollamos cursos y programas de capacitación alineados con las exigencias del mercado y la normativa chilena.
                            </p>
                        </div>

                        {/* Lista de Capacitaciones */}
                        <div className="bg-gray-50/50 rounded-3xl p-8 md:p-12 border border-gray-100 mb-12">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {capacitacionItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 bg-amber-100/50 p-1.5 rounded-full shrink-0">
                                            <Check className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <span className="text-gray-700 text-lg leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cierre Textual */}
                        <div className="text-center space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            <p>
                                Programas con o sin franquicia tributaria SENCE, adaptados a la realidad de su empresa.
                            </p>
                            <p className="text-navy-deep font-black text-2xl md:text-3xl pt-6">
                                Formamos equipos más productivos, seguros y competitivos.
                            </p>
                            <div className="pt-8">
                                <Link href="/empresas/capacitaciones">
                                    <TechButton variant="primary" size="lg" className="h-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        Más Información <ArrowRight className="ml-2 w-5 h-5" />
                                    </TechButton>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SECCIÓN 2: CERTIFICACIÓN DE CALIDAD */}
            <div className="py-24 md:py-32 bg-gray-50 relative z-10 border-b border-gray-100/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">

                        {/* Encabezado y Badge */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 text-blue-700 text-[11px] font-bold border border-blue-100/50 mb-8 tracking-[0.2em] uppercase shadow-sm">
                                <Building2 className="w-3.5 h-3.5" /> Alianza Estratégica
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-deep mb-8 leading-[1.1] tracking-tight">
                                Certificación <span className="text-blue-600">de Calidad</span>
                            </h2>
                            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">
                                En alianza estratégica con <strong className="font-bold text-navy-deep">WYLAR Ltda.</strong>, ofrecemos procesos formales de certificación que validan las competencias de su equipo.
                            </p>
                        </div>

                        {/* Lista de Certificaciones */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                            <ul className="flex flex-col gap-6">
                                {certificacionItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 bg-blue-50 p-1.5 rounded-full shrink-0">
                                            <Check className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 text-lg leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cierre Textual */}
                        <div className="text-center space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            <p>
                                Certifique la experiencia de sus trabajadores y fortalezca su cumplimiento, seguridad y competitividad frente a clientes y mandantes.
                            </p>
                            <p className="text-navy-deep font-black text-2xl md:text-3xl pt-6">
                                Más respaldo. Más confianza. Más oportunidades.
                            </p>

                            <div className="pt-8 mb-10">
                                <Link href="/empresas/certificaciones">
                                    <TechButton variant="primary" size="lg" className="h-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        Ir a Certificaciones <ArrowRight className="ml-2 w-5 h-5" />
                                    </TechButton>
                                </Link>
                            </div>

                            <div className="pt-10 flex justify-center border-t border-gray-200">
                                <Image
                                    src="/imagenes/Timbre Wylar.png"
                                    alt="Logo Wylar Certificadora"
                                    width={160}
                                    height={60}
                                    className="w-36 h-auto object-contain mix-blend-multiply opacity-90"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* SECCIÓN CONTACTO RÁPIDO */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/2 z-0 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-navy-deep mb-4">¿Necesita Asesoría Directa?</h3>
                            <p className="text-gray-500 text-lg">
                                Nuestro equipo comercial está listo para diseñar un plan a medida para su organización.
                            </p>
                        </div>

                        <div className="bg-navy-deep rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-inst/20 rounded-full blur-[80px] pointer-events-none" />
                            <Suspense fallback={<div className="flex justify-center py-10"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm prefilledInterest="Empresas - General" className="md:grid-cols-2" variant="empresa" />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
