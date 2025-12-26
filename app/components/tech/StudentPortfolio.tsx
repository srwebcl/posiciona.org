"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/app/components/ui/card";

const projects = [
    {
        id: 1,
        title: "Sistema de Gestión Minera",
        student: "Ana González",
        course: "Full Stack JS",
        image: "/imagenes/posiciona-4.jpeg",
        description: "Dashboard para control de flotas en tiempo real usando React y WebSockets.",
        tags: ["React", "Node.js", "Socket.io"],
    },
    {
        id: 2,
        title: "E-commerce Pymes Arica",
        student: "Carlos Mamani",
        course: "Front-End",
        image: "/imagenes/posiciona-3.jpeg",
        description: "Marketplace optimizado para pymes locales con integración de pagos.",
        tags: ["Next.js", "Stripe", "Tailwind"],
    },
    {
        id: 3,
        title: "Detector de EPP con IA",
        student: "Felipe Rojas",
        course: "Python Data Science",
        image: "/imagenes/posiciona-7.jpeg",
        description: "Modelo de visión por computador para detectar uso de casco y chaleco.",
        tags: ["Python", "OpenCV", "TensorFlow"],
    },
];

export function StudentPortfolio() {
    return (
        <section className="py-24 bg-night-blue border-t border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Proyectos de <span className="text-cyan-electric">Alumnos</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="p-0 overflow-hidden group border-white/10 hover:border-cyan-electric/50">
                                <div className="relative h-48 w-full overflow-hidden">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-night-blue/50 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-electric transition-colors">{project.title}</h3>
                                            <p className="text-sm text-gray-400">por {project.student}</p>
                                        </div>
                                        <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-cyan-electric">
                                            {project.course}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                        <div className="flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-gray-500 bg-black/30 px-1.5 py-0.5 rounded">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></button>
                                            <button className="text-gray-400 hover:text-cyan-electric transition-colors"><ExternalLink className="w-5 h-5" /></button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
