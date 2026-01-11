"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface ContactFormProps {
    prefilledInterest?: string;
    className?: string; // Allow custom styling wrapper
}

export function ContactForm({ prefilledInterest, className }: ContactFormProps) {
    const searchParams = useSearchParams();
    const [interest, setInterest] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-300">Un asesor se pondrá en contacto contigo a la brevedad.</p>
                <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>Enviar otro mensaje</Button>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
            {/* ROW 1: Identificación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Nombre</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium text-sm"
                        placeholder="Juan Pérez"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Teléfono</label>
                    <input
                        type="tel"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium text-sm"
                        placeholder="+56 9 1234 5678"
                    />
                </div>
            </div>

            {/* ROW 2: Contacto + Interés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium text-sm"
                        placeholder="juan@ejemplo.com"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Interés</label>
                    <div className="relative">
                        <select
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all appearance-none font-medium text-sm"
                        >
                            <option value="" className="bg-navy-deep text-gray-400">Seleccionar...</option>
                            <option value="Licencia Clase A3" className="bg-navy-deep">Licencia Clase A3</option>
                            <option value="Licencia Clase A5" className="bg-navy-deep">Licencia Clase A5</option>
                            <option value="Licencia Clase A2" className="bg-navy-deep">Licencia Clase A2</option>
                            <option value="Licencia Clase A4" className="bg-navy-deep">Licencia Clase A4</option>
                            <option value="Grúa Horquilla (Clase D)" className="bg-navy-deep">Grúa Horquilla (Clase D)</option>
                            <option value="Maquinaria Pesada" className="bg-navy-deep">Maquinaria Pesada</option>
                            <option value="Bootcamp Desarrollo Front-End" className="bg-navy-deep">Bootcamp Front-End</option>
                            <option value="Full Stack Java Trainee" className="bg-navy-deep">Full Stack Java</option>
                            <option value="Data Science / Python" className="bg-navy-deep">Data Science</option>
                            <option value="Soldadura Calificada (MIG/TIG)" className="bg-navy-deep">Soldadura</option>
                            <option value="Electricidad Certificada SEC" className="bg-navy-deep">Electricidad SEC</option>
                            <option value="Cuidados de Enfermería" className="bg-navy-deep">Enfermería</option>
                            <option value="Inglés Laboral (TOEIC)" className="bg-navy-deep">Inglés TOEIC</option>
                            <option value="Orfebrería y Diseño" className="bg-navy-deep">Orfebrería</option>
                            <option value="Capacitación Empresa" className="bg-navy-deep">Empresas</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-white/50">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Mensaje (Opcional)</label>
                <textarea
                    rows={2}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-medium resize-none text-sm"
                    placeholder="Dudas específicas..."
                />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black uppercase tracking-wider text-base py-5 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-[1.02]" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </Button>
        </form>
    );
}
