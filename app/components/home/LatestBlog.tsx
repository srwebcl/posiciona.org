import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export function LatestBlog() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-amber-vial font-bold tracking-widest text-sm uppercase mb-2 block">Blog Posiciona</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy-deep leading-tight">
                            Últimas Novedades
                        </h2>
                    </div>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-navy-deep font-bold hover:text-amber-vial transition-colors group">
                        Ir al Blog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="bg-gradient-to-br from-navy-deep to-[#050f1a] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
                        <Image
                            src="/imagenes/licencia-extranjeros-blog.png"
                            alt="Licencia Profesional Clase A para Extranjeros"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-deep via-navy-deep/20 to-transparent"></div>

                        {/* Badge */}
                        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                            <BookOpen className="w-4 h-4 text-amber-vial" /> Guía Práctica
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-navy-deep relative">
                        {/* Decorator line */}
                        <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-amber-vial to-orange-500 rounded-bl-full"></div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 font-mono">
                            <Clock className="w-4 h-4 text-amber-vial" /> Tiempo de lectura: 4 min
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Licencia Profesional Clase A para Extranjeros en Chile
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            ¿Eres extranjero y quieres conducir profesionalmente en Chile? Conoce los requisitos, convenios internacionales y todo el proceso paso a paso para obtener tu licencia al día.
                        </p>

                        <Link
                            href="/blog/licencia-extranjeros"
                            className="inline-flex justify-center items-center bg-amber-vial text-navy-deep hover:bg-white font-bold transition-all px-8 py-4 rounded-xl shadow-lg w-full sm:w-auto self-start hover:shadow-amber-500/20"
                        >
                            Leer Artículo Completo
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
