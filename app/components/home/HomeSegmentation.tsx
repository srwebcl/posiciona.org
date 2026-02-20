"use client";

import { motion } from "framer-motion";
import { ArrowRight, User, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function HomeSegmentation() {
    return (
        <section className="py-20 bg-navy-deep relative overflow-hidden">
            {/* Technological Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-amber-500 opacity-20 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500 opacity-20 blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight"
                    >
                        Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-vial to-orange-500">Camino</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                    >
                        Diseñamos soluciones especializadas para impulsar carreras individuales y potenciar equipos corporativos.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card Personas */}
                    <Link href="/personas" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-vial/50 group-hover:bg-gradient-to-br from-white to-amber-50"
                        >
                            {/* Floating Icon */}
                            <div className="absolute top-8 right-8 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-vial mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <User className="w-10 h-10" />
                            </div>

                            <div className="relative z-10 mt-8">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6 tracking-wide uppercase border border-amber-200">
                                    Para Personas
                                </span>
                                <h3 className="text-4xl font-extrabold text-navy-deep mb-4 group-hover:text-amber-vial transition-colors">
                                    Impulsa tu Futuro
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Obtén tu Licencia Profesional, certifícate en Oficios o domina el mundo digital. Formación práctica para el mundo real.
                                </p>
                                <div className="flex items-center text-amber-vial font-bold group-hover:translate-x-2 transition-transform">
                                    Ver Cursos y Licencias <ArrowRight className="ml-2 w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Card Empresas */}
                    <Link href="/empresas" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative h-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-inst/50 group-hover:bg-gradient-to-br from-white to-blue-50"
                        >
                            {/* Floating Icon */}
                            <div className="absolute top-8 right-8 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-inst mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <Building2 className="w-10 h-10" />
                            </div>

                            <div className="relative z-10 mt-8">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-6 tracking-wide uppercase border border-blue-200">
                                    Para Empresas
                                </span>
                                <h3 className="text-4xl font-extrabold text-navy-deep mb-4 group-hover:text-blue-inst transition-colors">
                                    Potencia tu Equipo
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Soluciones corporativas a medida: Franquicia SENCE, Certificadora de Competencias Laborales, Capacitaciones.
                                </p>
                                <div className="flex items-center text-blue-inst font-bold group-hover:translate-x-2 transition-transform">
                                    Ver Soluciones Corporativas <ArrowRight className="ml-2 w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
