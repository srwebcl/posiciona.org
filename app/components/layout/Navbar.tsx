"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { TechButton } from "@/app/components/ui/tech-button";
import { BrandLogo } from "@/app/components/ui/brand-logo";

const NAV_LINKS = [
    { name: "Personas", href: "/personas", type: "primary" },
    { name: "Empresas", href: "/empresas", type: "primary" },
    { name: "Nosotros", href: "/nosotros", type: "standard" },
    { name: "Contacto", href: "/contacto", type: "standard" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* 1. Logo (Enhanced Size) */}
                    <Link href="/" className="relative block group">
                        <BrandLogo className="w-48 h-12 md:w-64 md:h-16" variant="white" />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </Link>

                    {/* 2. Desktop Navigation (Consolidated) */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-5 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300",
                                        link.type === "primary" ? "hover:bg-white/10" : "hover:text-amber-vial",
                                        isActive
                                            ? link.name === "Personas" ? "text-amber-vial bg-amber-vial/10 border border-amber-vial/20"
                                                : link.name === "Empresas" ? "text-blue-inst bg-blue-inst/10 border border-blue-inst/20"
                                                    : "text-white"
                                            : "text-gray-300"
                                    )}
                                >
                                    {link.name}
                                    {isActive && link.type === "standard" && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-1 left-4 right-4 h-[2px] bg-amber-vial shadow-[0_0_8px_#ffb000]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* 3. Actions (Aula Virtual + Mobile Toggle) */}
                    <div className="flex items-center gap-4">
                        <a href="https://aulavirtual.thelondonbridge.cl/" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                            <TechButton variant="primary" size="sm" className="font-bold border border-amber-vial/50 shadow-[0_0_15px_rgba(255,176,0,0.2)]">
                                Aula Virtual <ExternalLink className="ml-2 w-3.5 h-3.5" />
                            </TechButton>
                        </a>

                        <button
                            className="lg:hidden text-white hover:text-amber-vial transition-colors p-2"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-navy-deep/98 backdrop-blur-xl lg:hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <BrandLogo className="w-40 h-10" variant="white" />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col flex-1 justify-center items-center gap-8 p-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-black uppercase tracking-tight transition-all duration-300",
                                        pathname === link.href ? "text-amber-vial scale-110" : "text-white hover:text-amber-vial"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="w-12 h-[2px] bg-white/10 my-4" />

                            <a href="https://aulavirtual.thelondonbridge.cl/" target="_blank" rel="noopener noreferrer">
                                <TechButton variant="primary" size="lg" className="w-full">
                                    Ir a Aula Virtual
                                </TechButton>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
