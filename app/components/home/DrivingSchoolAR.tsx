"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Clock, MapPin } from "lucide-react";

const hudWidgets = [
    {
        id: "status",
        label: "ESTADO",
        value: "ACREDITADO",
        icon: ShieldCheck,
        color: "text-green-500",
        position: "top-40 left-10",
        delay: 0.5,
    },
    {
        id: "time",
        label: "EFICIENCIA",
        value: "-50% TIEMPO",
        icon: Clock,
        color: "text-amber-vial",
        position: "bottom-32 right-10",
        delay: 0.8,
    },
    {
        id: "license",
        label: "OBJETIVO",
        value: "CLASE A3",
        icon: Gauge,
        color: "text-blue-inst",
        position: "top-40 right-20",
        delay: 1.1,
    },
    {
        id: "map",
        label: "ENTORNO",
        value: "MINA / CIUDAD",
        icon: MapPin,
        color: "text-white",
        position: "bottom-20 left-20",
        delay: 1.4,
    },
];

interface DrivingSchoolARProps {
    children?: React.ReactNode;
}

export function DrivingSchoolAR({ children }: DrivingSchoolARProps) {
    return (
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden flex items-center justify-center">
            {/* Background Simulator Video */}
            <div className="absolute inset-0 bg-black">
                <video
                    src="/imagenes/simulador.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                {/* Scanlines overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-20 z-0" />

            {/* Center Reticle - Subtle */}
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-20 pointer-events-none">
                <div className="w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="absolute top-0 bottom-0 w-[1px] bg-white/10" />
                    <div className="absolute left-0 right-0 h-[1px] bg-white/10" />
                </div>
            </div>

            {/* Main Content (Injected) */}
            <div className="relative z-30 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
                {children}
            </div>

            {/* HUD Widgets */}
            <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto z-20 pointer-events-none">
                {hudWidgets.map((widget) => (
                    <motion.div
                        key={widget.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: widget.delay, duration: 0.5 }}
                        className={`absolute ${widget.position} hidden lg:block`}
                    >
                        <div className="bg-black/60 border border-white/20 backdrop-blur-sm p-4 rounded-lg tech-glow">
                            <div className="flex items-center gap-3 mb-1">
                                <widget.icon className={`w-5 h-5 ${widget.color}`} />
                                <span className="text-[10px] font-mono text-gray-400 font-bold">{widget.label}</span>
                            </div>
                            <div className={`text-2xl font-black font-mono ${widget.color}`}>
                                {widget.value}
                            </div>

                            {/* Decorative lines */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white/50" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white/50" />
                        </div>

                        {/* Connecting Line to Center (Visual only) */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            transition={{ delay: widget.delay + 0.3 }}
                            className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-white/20 ${widget.position.includes('left') ? 'left-full' : 'right-full'}`}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
