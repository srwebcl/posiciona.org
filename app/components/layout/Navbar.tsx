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
    { name: "Oficina Virtual", href: "/oficina-virtual", type: "standard" },
    { name: "Contacto", href: "/contacto", type: "standard" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Context Detection
    const isPersonas = pathname.startsWith("/personas");
    const isEmpresas = pathname.startsWith("/empresas");
    const isSubPortal = isPersonas || isEmpresas;
    const isEscuelaLanding = pathname === "/personas/escuela-conductores";

    // Dynamic Navigation Links
    const coursesHref = pathname === "/personas" ? "#catalogo" : "/personas#catalogo";

    const currentLinks = isPersonas ? [
        { name: "Inicio", href: "/personas", type: "standard" },
        { name: "Cursos", href: "/personas/cursos", type: "primary" },
        { name: "Escuela de Conductores", href: "/personas/escuela-conductores", type: "standard" },
        { name: "Contacto", href: "/personas/contacto", type: "standard" },
    ] : isEmpresas ? [
        { name: "Soluciones", href: "/empresas", type: "primary" },
        { name: "Capacitación", href: "/empresas/capacitaciones", type: "standard" },
        { name: "Certificación", href: "/empresas/certificaciones", type: "standard" },
        { name: "Contacto", href: "/empresas/contacto", type: "standard" },
    ] : NAV_LINKS;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock Body Scroll when Menu Open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* SUPER HEADER / TOP BAR (Only in Sub-Portals) */}
            {isSubPortal && (
                <div className={cn(
                    "fixed top-0 left-0 right-0 z-[60] h-9 flex items-center justify-between px-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 transition-all duration-300",
                    isEscuelaLanding && !isScrolled ? "bg-transparent border-none" : "bg-navy-deep border-b border-white/10"
                )}>
                    <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-amber-vial">←</span> Volver a Inicio
                    </Link>
                    <div className="flex gap-4">
                        <Link href="/personas" className={cn("hover:text-white transition-colors", isPersonas && "text-white")}>Personas</Link>
                        <span className="text-gray-700">|</span>
                        <Link href="/empresas" className={cn("hover:text-white transition-colors", isEmpresas && "text-white")}>Empresas</Link>
                        <span className="text-gray-700">|</span>
                        <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
                    </div>
                </div>
            )}

            <header
                className={cn(
                    "fixed left-0 right-0 transition-all duration-500",
                    isMobileMenuOpen ? "z-[70]" : "z-50",
                    isSubPortal ? "top-9" : "top-0", // Push down if TopBar exists
                    isScrolled
                        ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between">
                        {/* 1. Logo (Enhanced Size) */}
                        <Link href={isPersonas ? "/personas" : isEmpresas ? "/empresas" : "/"} className="relative block group">
                            <BrandLogo className="w-48 h-12 md:w-64 md:h-16" variant="white" />
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </Link>

                        {/* 2. Desktop Navigation (Contextual) */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {currentLinks.map((link) => {
                                const isActive = pathname === link.href; // Strict equality for sub-navs
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300",
                                            link.type === "primary" ? "hover:bg-white/10" : "hover:text-amber-vial",
                                            isActive
                                                ? "text-white"
                                                : "text-gray-300"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
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
                            className="fixed inset-0 z-[80] bg-navy-deep lg:hidden flex flex-col overscroll-none h-[100dvh]"
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
                                {/* Top Bar Links for Mobile */}
                                {isSubPortal && (
                                    <div className="flex gap-4 mb-4">
                                        <Link href="/" className="text-gray-400 text-sm font-bold uppercase">Volver al Inicio</Link>
                                    </div>
                                )}

                                {currentLinks.map((link) => (
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
        </>
    );
}
