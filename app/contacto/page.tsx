import { ContactForm } from "@/app/components/contact/ContactForm";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { Suspense } from "react";

export const metadata = {
    title: "Oficina Virtual | Posiciona",
    description: "Contáctanos para más información sobre nuestros cursos de conducción, tecnología y oficios. Sede Arica.",
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            {/* Header */}
            <PageHero
                badge="Oficina Virtual"
                title={
                    <>
                        Comunícate con <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-amber-300">Nosotros</span>
                    </>
                }
                description="Si necesitas conocer más información acerca de nuestros cursos o eres parte de nuestros alumnos, completa el formulario con tu solicitud"
                className="!pt-32 !pb-24 lg:!pt-40 lg:!pb-48"
            />

            <div className="container mx-auto px-4 pb-20 -mt-24 lg:-mt-40 relative z-20">
                <div className="max-w-4xl mx-auto flex flex-col gap-12">
                    {/* Form Card (Main focus) */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative">
                        {/* Decorative subtle background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-vial/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="mb-8 text-center max-w-2xl mx-auto relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black text-navy-deep mb-3 tracking-tight">Formulario de Contacto</h3>
                        </div>

                        <div className="relative z-10">
                            <Suspense fallback={<div className="text-navy-deep text-center py-10">Cargando formulario...</div>}>
                                <ContactForm variant="general" />
                            </Suspense>
                        </div>
                    </div>

                    {/* Contact Info Cards - Subdued Refined Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full mb-12">

                        {/* Atención Telefónica */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Atención Telefónica</h4>
                                <a href="https://wa.me/56984534364" target="_blank" className="font-sans text-lg font-bold text-navy-deep hover:text-blue-600 transition-colors mb-1 block">
                                    +56 9 8453 4364
                                </a>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Lunes a viernes 09:00 a 18:00 hrs</p>
                            </div>
                        </div>

                        {/* Escríbenos */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Escríbenos</h4>
                                <a href="mailto:posiciona@posiciona.org" className="font-sans text-lg font-bold text-navy-deep hover:text-amber-600 transition-colors mb-1 block break-all">
                                    posiciona@posiciona.org
                                </a>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Respondemos a la brevedad</p>
                            </div>
                        </div>

                        {/* Sede Santiago */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                                <Building2 className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Sede Santiago</h4>
                                <p className="font-sans text-lg font-bold text-navy-deep mb-1 line-clamp-1">
                                    Alameda L.B. O'Higgins 252, Of. 21
                                </p>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Santiago Centro</p>
                            </div>
                        </div>

                        {/* Sede Arica */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-amber-vial/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Sede Arica</h4>
                                <p className="font-sans text-lg font-bold text-navy-deep mb-1 line-clamp-1">
                                    21 de mayo 699, piso 2
                                </p>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Arica</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
