import { Suspense } from "react";
import { Users, Mail, Loader2 } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { ContactForm } from "@/app/components/contact/ContactForm";
import Image from "next/image";

export const metadata = {
    title: "Capacitación Empresas y Franquicia SENCE | Posiciona",
    description: "Cierre de brechas de competencias y gestión experta de franquicia tributaria SENCE para su empresa.",
};

const coursesList = [
    { title: "Soldadura y Electricidad", img: "/imagenes/soldador.jpeg" },
    { title: "Operador de Grúa Horquilla y Maquinaria Pesada", img: "/imagenes/grua-horquilla.jpeg" },
    { title: "Camión Pluma y Equipos de Izaje", img: "/imagenes/camion-pluma.png" },
    { title: "Climatización e Instalador de Gas Clase 3", img: "/imagenes/climatizacion.jpeg" },
    { title: "Desarrollo de Software – Talento Digital", img: "/imagenes/desarrollo-front.jpeg" },
    { title: "Ley Karin, Prevención de Riesgos y normativas vigentes, entre otros.", img: "/imagenes/ley-karin.jpeg" },
];
export default function CapacitacionesEmpresasPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Soluciones Corporativas"
                title={
                    <>
                        Capacitación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Gestión SENCE</span>
                    </>
                }
                description="Programas de formación a medida para cerrar brechas de competencias y maximizar el uso de su franquicia tributaria."
            />

            {/* SECCIÓN CURSOS Y OTEC */}
            <div className="py-24 md:py-32 bg-gray-50 relative z-10 border-b border-gray-100/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">

                        {/* Encabezado Principal */}
                        <div className="text-center mb-16 max-w-4xl mx-auto">
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

                        {/* Grid de Imágenes de Cursos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {coursesList.map((course, idx) => {
                                const isChileValora = course.title.toLowerCase().includes("chilevalora");

                                return (
                                    <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-amber-vial/30 transition-all duration-300 flex flex-col h-full">
                                        <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                                            <Image
                                                src={course.img}
                                                alt={course.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                            {/* Badge ChileValora */}
                                            {isChileValora && (
                                                <Image
                                                    src="/imagenes/logo_chilevalora.webp"
                                                    alt="Sello ChileValora"
                                                    width={90}
                                                    height={30}
                                                    className="absolute top-3 right-3 z-10 object-contain drop-shadow-md"
                                                />
                                            )}
                                        </div>
                                        <div className="p-6 flex-grow flex items-center justify-center text-center">
                                            <h3 className="text-lg font-bold text-navy-deep leading-snug group-hover:text-amber-vial transition-colors">
                                                {course.title}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Cierre Textual */}
                        <div className="text-center space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            <p>
                                Programas con o sin franquicia tributaria SENCE, adaptados a la realidad de su empresa.
                            </p>
                            <p className="text-navy-deep font-black text-2xl md:text-3xl pt-6">
                                Formamos equipos más productivos, seguros y competitivos.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* CONTACTO */}
            <section id="contacto" className="py-24 bg-navy-deep relative border-t border-gray-800">
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
                                <ContactForm prefilledInterest="Capacitación Empresa" className="md:grid-cols-1" variant="empresa" />
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
