"use client";

import { motion } from "framer-motion";
import { Award, MonitorPlay, Users } from "lucide-react";

const metrics = [
    {
        id: 1,
        icon: MonitorPlay,
        value: "Tecnología Inmersiva",
        label: "Únicos con Simuladores Europeos en la zona norte.",
        accent: "text-cyan-600",
        bg: "bg-cyan-50"
    },
    {
        id: 2,
        icon: Award,
        value: "Calidad Certificada",
        label: "Acreditación NCh 2728 e ISO 9001:2015.",
        accent: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        id: 3,
        icon: Users,
        value: "+5,000 Técnicos",
        label: "Formados para la industria minera y logística.",
        accent: "text-blue-600",
        bg: "bg-blue-50"
    }
];

export function ImpactMetrics() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`p-4 rounded-xl ${metric.bg} ${metric.accent} shrink-0`}>
                                <metric.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-navy-deep mb-2">{metric.value}</h4>
                                <p className="text-gray-600 font-medium leading-normal">{metric.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
