"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { COURSES } from "@/app/data/courses"; // Import courses for dropdown

interface ContactFormProps {
    prefilledInterest?: string;
    className?: string; // Allow custom styling wrapper
    variant?: "general" | "persona" | "empresa";
}

const EMPRESA_SERVICES = [
    "Capacitaciones",
    "Certificación de Competencias",
    "Otros Asuntos"
];

export function ContactForm({ prefilledInterest, className, variant = "general" }: ContactFormProps) {
    const searchParams = useSearchParams();
    const [interest, setInterest] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Dynamic fields state
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        rut: "",
        email: "",
        phone: "",
        message: "",
        position: "" // Cargo
    });

    useEffect(() => {
        if (prefilledInterest) {
            setInterest(prefilledInterest);
        } else {
            const interestParam = searchParams.get("interest");
            if (interestParam) {
                setInterest(interestParam);
            }
        }
    }, [searchParams, prefilledInterest]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            ...formData,
            interest,
            variant,
            timestamp: new Date().toISOString()
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsSubmitted(true);
            } else {
                console.error("Error submitting form");
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300">Hemos recibido su solicitud. Un ejecutivo de Posiciona le contactará a la brevedad al correo proporcionado.</p>
                <Button variant="outline" className="mt-6 border-white/20 text-white hover:bg-white/10" onClick={() => setIsSubmitted(false)}>Enviar otro mensaje</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>

            {/* --- VARIANT: EMPRESA FIELDS (Company Name) --- */}
            {variant === "empresa" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Empresa / Razón Social</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                            placeholder="Nombre de su Empresa"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Cargo / Rol</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                            placeholder="Ej. Jefe de RRHH"
                        />
                    </div>
                </div>
            )}

            {/* --- COMMON FIELDS: Name & Rut (Persona) / Contact Name (Empresa) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                        {variant === "empresa" ? "Nombre de Contacto" : "Nombre Completo"}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                        placeholder="Juan Pérez"
                    />
                </div>

                {/* RUT Field only for Persona */}
                {variant === "persona" && (
                    <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">RUT (Opcional)</label>
                        <input
                            type="text"
                            name="rut"
                            value={formData.rut}
                            onChange={handleChange}
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                            placeholder="12.345.678-9"
                        />
                    </div>
                )}

                {variant !== "persona" && (
                    <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                            placeholder="+56 9 1234 5678"
                        />
                    </div>
                )}
            </div>

            {/* --- COMMON FIELDS: Email & Phone (Persona) / Service (Empresa) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">CORREO</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                        placeholder="contacto@email.com"
                    />
                </div>

                {/* Phone for Persona (was in prev row for others to balance layout) */}
                {variant === "persona" && (
                    <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Teléfono</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                            placeholder="+56 9 1234 5678"
                        />
                    </div>
                )}

                {/* Interest Selector for Persona/Empresa */}
                {variant !== "general" && (
                    <div className={variant !== "persona" ? "" : "md:col-span-2"}>
                        <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">
                            {variant === "empresa" ? "Servicio de Interés" : "Curso de Interés"}
                        </label>
                        <div className="relative">
                            <select
                                value={interest}
                                onChange={(e) => setInterest(e.target.value)}
                                className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none font-medium text-sm"
                            >
                                <option value="" className="bg-white text-gray-400">Seleccionar...</option>

                                {variant === "empresa" ? (
                                    EMPRESA_SERVICES.map(service => (
                                        <option key={service} value={service} className="bg-white text-gray-900">{service}</option>
                                    ))
                                ) : (
                                    COURSES.map(course => (
                                        <option key={course.id} value={course.title} className="bg-white text-gray-900">{course.title}</option>
                                    ))
                                )}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* --- GENERAL: Subject --- */}
            {variant === "general" && (
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Asunto</label>
                    <input
                        type="text"
                        name="asunto" // mapped to message or separate? let's stick to standard payload
                        onChange={(e) => setInterest(e.target.value)} // Re-using interest as subject for general
                        value={interest}
                        className="w-full bg-white border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                        placeholder="Consulta General, Reclamo, Sugerencia..."
                    />
                </div>
            )}

            <div>
                <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Mensaje (Opcional)</label>
                <textarea
                    rows={variant === "general" ? 4 : 2}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium resize-none text-sm"
                    placeholder="Dudas específicas..."
                />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black uppercase tracking-wider text-base py-5 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-[1.02]" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </Button>

            <p className="text-center text-xs text-gray-500 mt-4">
                Sus datos son confidenciales. Al enviar, acepta nuestra política de privacidad.
            </p>
        </form>
    );
}
