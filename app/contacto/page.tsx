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
                        Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-amber-300">Futuro</span>
                    </>
                }
                description="Ya sea para capacitar a tu empresa o impulsar tu carrera personal, nuestro equipo está listo para orientarte."
            />

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info Card */}
                    <div className="bg-navy-deep text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-inst/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Building2 className="w-6 h-6 text-amber-vial" /> Nuestras Sedes
                            </h3>

                            <ul className="space-y-8">
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/10 p-3 rounded-xl text-amber-vial group-hover:bg-amber-vial group-hover:text-navy-deep transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Ubicación</h4>
                                        <p className="text-gray-300 font-bold text-sm">Sede Santiago</p>
                                        <p className="text-gray-400 text-sm mb-2">Alameda Libertador Bernardo Ohiggins 252 Ofic. 21, Santiago</p>
                                        <p className="text-gray-300 font-bold text-sm">Sede Arica</p>
                                        <p className="text-gray-400 text-sm">21 de mayo 699 piso 2, Arica</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/10 p-3 rounded-xl text-blue-inst group-hover:bg-blue-inst group-hover:text-white transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Llámanos</h4>
                                        <p className="text-gray-300 text-xl font-mono tracking-tight">+56 9 8453 4364</p>
                                        <p className="text-gray-400 text-sm">Lunes a viernes 09:00 a 18:00 hrs</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="bg-white/10 p-3 rounded-xl text-emerald-400 group-hover:bg-emerald-400 group-hover:text-navy-deep transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Escríbenos</h4>
                                        <p className="text-gray-300">posiciona@posiciona.org</p>
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-navy-deep mb-2">Envíanos un mensaje</h3>
                            <p className="text-gray-500 text-sm">Completa el formulario y te derivaremos al área correspondiente (Personas o Empresas).</p>
                        </div>
                        <Suspense fallback={<div className="text-navy-deep">Cargando formulario...</div>}>
                            <ContactForm variant="general" />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
