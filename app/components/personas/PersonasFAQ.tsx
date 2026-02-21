"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";

const FAQS = [
    {
        q: "¿Puedo postular a la Gratuidad Talento Digital?",
        a: <>Sí, si cumples con los requisitos SENCE (RSH hasta 80%, cesantía o búsqueda de empleo). Revisa la ficha específica en <a href="https://talentodigitalparachile.cl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">https://talentodigitalparachile.cl/</a></>
    },
    {
        q: "¿Cuánto dura el curso de Conductor Profesional A3?",
        a: "Con nuestro simulador europeo, el curso especial se reduce significativamente. Contáctanos para evaluar tu caso según tu licencia actual."
    },
    {
        q: "¿Las certificaciones son válidas en todo Chile?",
        a: "Absolutamente. Al ser OTEC certificado bajo NCh2728, nuestros diplomas tienen validez nacional para la industria."
    },
    {
        q: "¿Tienen convenios con empresas?",
        a: "Sí, trabajamos directamente con las principales empresas de transporte y minería de la región para facilitar prácticas y empleo."
    },
    {
        q: "¿Puedo postular a la gratuidad en cursos de oficios?",
        a: <>Sí, a través de Sence puedes elegir tu curso y postular en el link: <br /><a href="https://eligetucurso.sence.cl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">https://eligetucurso.sence.cl/</a></>
    }
];

import { Suspense } from "react"; // Import Suspense
import { ContactForm } from "@/app/components/contact/ContactForm"; // Import ContactForm

export function PersonasFAQ() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COL: FAQ Accordion */}
                    <div>
                        <div className="mb-10">
                            <span className="text-amber-vial font-bold tracking-widest text-sm uppercase">Dudas Comunes</span>
                            <h2 className="text-3xl md:text-4xl font-black text-navy-deep mt-2">
                                Preguntas Frecuentes
                            </h2>
                            <p className="text-gray-500 mt-4 leading-relaxed">
                                Resolvemos tus inquietudes sobre financiamiento, modalidades y certificaciones.
                            </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {FAQS.map((faq, idx) => (
                                <AccordionItem value={`item-${idx}`} key={idx}>
                                    <AccordionTrigger className="text-left font-bold text-navy-deep hover:text-amber-vial text-lg">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-500 leading-relaxed text-base">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* RIGHT COL: Contact Form (High Conversion) */}
                    <div className="bg-navy-deep rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">¿Aún con dudas?</h3>
                            <p className="text-gray-300 mb-8">
                                Solicita Orientación Académica gratuita. Te ayudamos a elegir el mejor camino.
                            </p>

                            {/* Embedded Contact Form wrapped in Suspense */}
                            <Suspense fallback={<div className="h-96 w-full bg-white/5 animate-pulse rounded-xl" />}>
                                <ContactForm variant="persona" />
                            </Suspense>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
