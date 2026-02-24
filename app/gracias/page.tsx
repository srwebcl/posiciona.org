import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function GraciasPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-navy-deep/5 to-transparent pointer-events-none" />

            {/* Floating Orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-vial/30 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-navy-deep/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-lg bg-white/70 backdrop-blur-md border border-white p-8 md:p-12 rounded-3xl shadow-xl shadow-navy-deep/5 text-center relative z-10 animate-fade-in-up">

                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
                        <CheckCircle2 className="w-20 h-20 text-green-500 relative z-10 drop-shadow-md" />
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-navy-deep mb-4 tracking-tight">
                    ¡Gracias por tu mensaje!
                </h1>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md mx-auto">
                    Hemos recibido correctamente tu solicitud. Uno de nuestros ejecutivos revisará tu información y se pondrá en contacto contigo a la brevedad.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="w-full sm:w-auto bg-navy-deep hover:bg-navy-900 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                        Volver al Inicio
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/nosotros" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy-deep font-bold py-3.5 px-8 rounded-xl border border-gray-200 transition-all shadow-sm flex items-center justify-center">
                        Conoce a Posiciona
                    </Link>
                </div>

            </div>

            <div className="mt-12 text-center relative z-10">
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-widest">Transformando el futuro industrial</p>
                <div className="flex justify-center items-center gap-4 text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> +15 Años de Experiencia</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-vial" /> Certificación SENCE</span>
                </div>
            </div>

        </main>
    );
}
