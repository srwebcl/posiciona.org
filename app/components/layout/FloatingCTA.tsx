"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function FloatingCTA() {
    return (
        <motion.a
            href="https://aulavirtual.thelondonbridge.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-orange-industrial text-white p-3 rounded-full shadow-[0_0_20px_rgba(255,102,0,0.4)] hover:scale-110 hover:bg-orange-600 transition-all duration-300 md:hidden flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <GraduationCap className="w-6 h-6" />
            <span className="sr-only">Aula Virtual</span>
        </motion.a>
    );
}
