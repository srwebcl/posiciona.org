"use client";

import { motion } from "framer-motion";
import { Flame, Zap, HardHat, HeartPulse, FileText, Check } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

const trades = [
    {
        id: "soldadura",
        title: "Soldadura Calificada",
        subtitle: "Arco Manual - MIG - TIG",
        icon: Flame,
        description: "Domina las técnicas de unión de metales más demandadas en minería y construcción.",
        specs: ["Certificación 3G/4G", "Seguridad en caliente", "Lectura de planos"],
        sence: true,
        color: "text-orange-500",
    },
    {
        id: "electricidad",
        title: "Electricidad Domiciliaria",
        subtitle: "Certificación SEC Clase D",
        icon: Zap,
        description: "Prepárate para obtener tu licencia de instalador autorizado ante la SEC.",
        specs: ["Normativa NCH Elec. 4/2003", "Circuitos y protecciones", "Tramitación SEC"],
        sence: true,
        color: "text-yellow-400",
    },
    {
        id: "maquinaria",
        title: "Maquinaria Pesada",
        subtitle: "Grúa Horquilla - Retroexcavadora",
        icon: HardHat,
        description: "Operación segura y mantenimiento preventivo de equipos de alto tonelaje.",
        specs: ["Licencia Clase D", "Mecánica básica", "Prevención de riesgos"],
        sence: true,
        color: "text-posiciona-blue",
    },
    {
        id: "cuidados",
        title: "Cuidados de Enfermos",
        subtitle: "Atención Domiciliaria",
        icon: HeartPulse,
        description: "Formación técnica y humana para el cuidado de adultos mayores y pacientes.",
        specs: ["Primeros auxilios", "Técnicas de movilización", "Control de signos vitales"],
        sence: true,
        color: "text-red-400",
    },
];

export function TradeList() {
    return (
        <section className="py-24 bg-night-blue">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="default" className="mb-4">FRANQUICIA TRIBUTARIA SENCE</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Oficios de <span className="text-orange-industrial">Alta Demanda</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Formación técnica precisa, seguridad industrial intransigente y certificación válida.
                        Tus competencias, acreditadas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trades.map((trade, idx) => (
                        <motion.div
                            key={trade.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full border-white/10 flex flex-col hover:border-orange-industrial/30 transition-colors">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4 items-center">
                                        <div className={`p-3 rounded-lg bg-white/5 ${trade.color}`}>
                                            <trade.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{trade.title}</h3>
                                            <p className="text-sm text-gray-400">{trade.subtitle}</p>
                                        </div>
                                    </div>
                                    {trade.sence && (
                                        <Badge variant="success" className="bg-green-500/10 text-green-500 border-green-500/20">SENCE</Badge>
                                    )}
                                </div>

                                <p className="text-gray-300 mb-6 flex-grow">{trade.description}</p>

                                <div className="bg-white/5 rounded-lg p-4 mb-6">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Contenidos Clave</h4>
                                    <ul className="space-y-2">
                                        {trade.specs.map(spec => (
                                            <li key={spec} className="flex items-center gap-2 text-sm text-gray-300">
                                                <Check className="w-4 h-4 text-orange-industrial" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <Button variant="ghost" className="text-gray-400 hover:text-white">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Ficha Técnica
                                    </Button>
                                    <Button variant="primary" className="bg-posiciona-blue hover:bg-blue-700">
                                        Cotizar Curso
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
