"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Shield, Database } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

const programs = [
    {
        id: "fullstack",
        title: "Full Stack JavaScript",
        icon: Code2,
        level: "Bootcamp Intensivo",
        duration: "6 Meses",
        stack: ["React 19", "Next.js", "Node.js", "PostgreSQL"],
        description: "Conviértete en un desarrollador web completo. Desde la maquetación hasta el despliegue en la nube.",
        color: "text-cyan-electric",
        buttonVariant: "primary" as const
    },
    {
        id: "python",
        title: "Data Science con Python",
        icon: Database,
        level: "Especialización",
        duration: "4 Meses",
        stack: ["Python", "Pandas", "Scikit-Learn", "FastAPI"],
        description: "Aprende a analizar datos y construir modelos predictivos para la industria 4.0.",
        color: "text-green-400",
        buttonVariant: "outline" as const
    },
    {
        id: "cyber",
        title: "Ciberseguridad Defensiva",
        icon: Shield,
        level: "Avanzado",
        duration: "5 Meses",
        stack: ["Linux", "Blue Team", "Compliance", "Ethical Hacking"],
        description: "Protege infraestructuras críticas. Prepárate para certificaciones internacionales.",
        color: "text-red-500",
        buttonVariant: "outline" as const
    },
    {
        id: "frontend",
        title: "Front-End Moderno",
        icon: Terminal,
        level: "Iniciación",
        duration: "3 Meses",
        stack: ["HTML5/CSS3", "JavaScript", "Tailwind", "Git"],
        description: "Tu puerta de entrada al mundo tech. Crea interfaces visuales impactantes y responsivas.",
        color: "text-yellow-400",
        buttonVariant: "outline" as const
    },
];

export function ProgramList() {
    return (
        <section className="py-24 bg-night-blue">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="tech" className="mb-4">ADMISIÓN</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Programas <span className="text-cyan-electric">Tech</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Metodología inmersiva. Aprende haciendo proyectos reales desde el día uno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full hover:border-cyan-electric/30 transition-colors group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 ${program.color} group-hover:scale-110 transition-transform`}>
                                        <program.icon className="w-8 h-8" />
                                    </div>
                                    <Badge variant="outline">{program.duration}</Badge>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                                <p className="text-cyan-electric/80 text-sm font-mono mb-4">{program.level}</p>
                                <p className="text-gray-400 mb-6 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/5 font-mono text-sm">
                                    &gt; {program.description}
                                </p>

                                <div className="mb-8">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">Stack Tecnológico</div>
                                    <div className="flex flex-wrap gap-2">
                                        {program.stack.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-night-blue border border-white/10 rounded text-xs text-gray-300 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Button className="w-full" variant={program.buttonVariant}>
                                    Ver Programa Completo
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
