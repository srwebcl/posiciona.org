"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, Clock, MapPin } from "lucide-react";

const hudWidgets = [
    {
        id: "status",
        label: "SYSTEM STATUS",
        value: "ACREDITADO",
        icon: ShieldCheck,
        color: "text-green-500",
        position: "top-20 left-10",
        delay: 0.5,
    },
    {
        id: "time",
        label: "TIME REDUCTION",
        value: "-50%",
        icon: Clock,
        color: "text-amber-vial",
        position: "bottom-32 right-10",
        delay: 0.8,
    },
    {
        id: "license",
        label: "TARGET LICENSE",
        value: "CLASE A3",
        icon: Gauge,
        color: "text-blue-inst",
        position: "top-32 right-20",
        delay: 1.1,
    },
    {
        id: "map",
        label: "SCENARIO",
        value: "MINERA / URBANO",
        icon: MapPin,
        color: "text-white",
        position: "bottom-20 left-20",
        delay: 1.4,
    },
];

export function DrivingSchoolAR() {
    return (
        <section className="relative h-screen min-h-[600px] bg-black overflow-hidden flex items-center justify-center">
            {/* Background Simulator Image */}
            <div className="absolute inset-0 bg-[url('/imagenes/posiciona-20.jpeg')] bg-cover bg-center opacity-40">
                {/* Scanlines overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-bg opacity-20 z-0" />

            {/* Center Reticle */}
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-30 pointer-events-none">
                <div className="w-[300px] h-[300px] border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-vial rounded-full" />
                    <div className="absolute top-0 bottom-0 w-[1px] bg-white/20" />
                    <div className="absolute left-0 right-0 h-[1px] bg-white/20" />
                </div>
            </div>

            {/* HUD Widgets */}
            <div className="relative w-full h-full max-w-7xl mx-auto z-20 pointer-events-none">
                {hudWidgets.map((widget) => (
                    <motion.div
                        key={widget.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: widget.delay, duration: 0.5 }}
                        className={`absolute ${widget.position} hidden md:block`}
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
                            whileInView={{ width: 40 }}
                            transition={{ delay: widget.delay + 0.3 }}
                            className="absolute top-1/2 -translate-y-1/2 left-full h-[1px] bg-white/20"
                        />
                    </motion.div>
                ))}

                {/* Mobile Friendly Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center md:hidden p-4 text-center">
                    <h2 className="text-4xl text-white font-black uppercase mb-4 text-explosive">Simulador Inmersivo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {hudWidgets.map(w => (
                            <div key={w.id} className="bg-black/50 p-2 rounded border border-white/10">
                                <span className={`block text-lg font-bold ${w.color}`}>{w.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-10 left-0 right-0 text-center z-20 hidden md:block">
                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent opacity-20 uppercase tracking-[1em]">
                    SIMULATION
                </h1>
            </div>
        </section>
    );
}
