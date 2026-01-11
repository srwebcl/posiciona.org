import { ContactForm } from "@/app/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
    title: "Contacto Alumnos | Posiciona",
    description: "Solicita información sobre cursos, matrículas y gratuidades SENCE. Estamos para orientarte.",
};

export default function PersonasContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* LEFT: Information & Context */}
                    <div>
                        <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Atención Alumnos</span>
                        <h1 className="text-4xl md:text-5xl font-black text-navy-deep mt-2 mb-6">
                            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Futuro</span>
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            ¿Tienes dudas sobre los cursos, fechas de inicio o cómo postular a la gratuidad SENCE? Nuestro equipo de admisión está listo para ayudarte.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-amber-vial border border-gray-100">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg">Llámanos o WhatsApp</h3>
                                    <p className="text-gray-500 mb-1">Atención inmediata preferente</p>
                                    <a href="https://wa.me/56912345678" target="_blank" className="text-xl font-bold text-blue-600 hover:text-amber-vial transition-colors">
                                        +56 9 1234 5678
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-amber-vial border border-gray-100">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg">Visítanos</h3>
                                    <p className="text-gray-500">
                                        Av. Velásquez 123, Arica.<br />
                                        (Frente al Terminal Agropecuario)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-xl shadow-md text-amber-vial border border-gray-100">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy-deep text-lg">Horario de Atención</h3>
                                    <p className="text-gray-500">
                                        Lunes a Viernes: 09:00 - 18:00 hrs.<br />
                                        Sábados: 10:00 - 13:00 hrs.
                                    </p>
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
                            <h2 className="text-2xl font-bold mb-2">Envíanos un Mensaje</h2>
                            <p className="text-gray-300 mb-8 text-sm">
                                Completa el formulario y te enviaremos la ficha técnica y valores del curso de tu interés.
                            </p>
                            <Suspense fallback={<div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-amber-vial" /></div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
