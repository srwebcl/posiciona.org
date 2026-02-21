import { ContactForm } from "@/app/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, Loader2, Building2 } from "lucide-react";
import { PageHero } from "@/app/components/ui/PageHero";
import { Suspense } from "react";

export const metadata = {
    title: "Contacto Empresas | Posiciona",
    description: "Solicite una reunión con nuestro equipo corporativo. Planes de capacitación a medida y certificación de competencias.",
};

export default function EmpresasContactPage() {
    return (
        <div className="bg-white min-h-screen pb-24">
            <PageHero
                badge="Atención Empresas"
                video="/imagenes/cursos.mp4"
                title={
                    <>
                        Hablemos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Negocios</span>
                    </>
                }
                description="¿Necesita un plan de capacitación a medida o certificar a su equipo? Nuestro departamento comercial corporativo está listo para asesorarle."
                align="center"
            />

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* LEFT: Information & Context */}
                    <div className="pt-10">

                        <div className="space-y-8">


                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-blue-inst border border-gray-100">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg mb-2">Nuestras Sedes</h3>
                                    <p className="text-navy-deep font-bold text-sm">Sede Santiago</p>
                                    <p className="text-gray-500 text-sm mb-2">Alameda Libertador Bernardo Ohiggins 252 Ofic. 21, Santiago</p>
                                    <p className="text-navy-deep font-bold text-sm">Sede Arica</p>
                                    <p className="text-gray-500 text-sm">21 de mayo 699 piso 2, Arica</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-amber-vial border border-gray-100">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg">Contacto Comercial</h3>
                                    <p className="text-gray-500 mb-1">Llámenos o escribanos al WhatsApp</p>
                                    <a href="https://wa.me/56984534364" target="_blank" className="text-xl font-bold text-blue-600 hover:text-amber-vial transition-colors block">
                                        +56 9 8453 4364
                                    </a>
                                    <p className="text-gray-500 mt-1 text-sm">Lunes a viernes 09:00 a 18:00 hrs</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-blue-inst border border-gray-100">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg">Email Corporativo</h3>
                                    <p className="text-gray-500 mb-1">Envíenos sus bases o requerimientos</p>
                                    <a href="mailto:posiciona@posiciona.org" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
                                        posiciona@posiciona.org
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Contact Form Card */}
                    <div className="bg-navy-deep rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-2">Solicitar Reunión</h2>
                            <p className="text-gray-300 mb-8 text-sm">
                                Complete el formulario y un ejecutivo comercial le contactará para agendar una reunión o enviar una propuesta.
                            </p>
                            <Suspense fallback={<div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm prefilledInterest="Empresas - General" variant="empresa" />
                            </Suspense>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
