"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
    const searchParams = useSearchParams();
    const [interest, setInterest] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const interestParam = searchParams.get("interest");
        if (interestParam) {
            setInterest(interestParam);
        }
    }, [searchParams]);

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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                    <input type="text" required className="w-full bg-night-blue border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric transition-colors" placeholder="Juan Pérez" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
                    <input type="tel" required className="w-full bg-night-blue border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric transition-colors" placeholder="+56 9 1234 5678" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                <input type="email" required className="w-full bg-night-blue border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric transition-colors" placeholder="juan@ejemplo.com" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Área de Interés</label>
                <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-night-blue border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric transition-colors appearance-none"
                >
                    <option value="">Selecciona un programa...</option>
                    <option value="licencia_a3">Licencia Profesional A3</option>
                    <option value="licencia_a5">Licencia Profesional A5</option>
                    <option value="fullstack">Bootcamp Full Stack</option>
                    <option value="python">Data Science / Python</option>
                    <option value="soldadura">Soldadura Industrial</option>
                    <option value="electricidad">Electricidad SEC</option>
                    <option value="empresa">Capacitación Empresa (SENCE)</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-night-blue border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-electric focus:ring-1 focus:ring-cyan-electric transition-colors" placeholder="Hola, me gustaría saber más sobre los horarios y costos..." />
            </div>

            <Button type="submit" className="w-full bg-orange-industrial hover:bg-orange-600 text-lg py-6" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </Button>
        </form>
    );
}
