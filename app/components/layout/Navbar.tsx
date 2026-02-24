"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, CarFront, MonitorPlay } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { TechButton } from "@/app/components/ui/tech-button";
import { BrandLogo } from "@/app/components/ui/brand-logo";

const NAV_LINKS = [
    { name: "Personas", href: "/personas", type: "primary" },
    { name: "Empresas", href: "/empresas", type: "primary" },
    { name: "Escuela de Conductores", href: "/personas/escuela-conductores", type: "standard" },
    { name: "Nosotros", href: "/nosotros", type: "standard" },
    { name: "Oficina Virtual", href: "/contacto", type: "standard" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAulaModalOpen, setIsAulaModalOpen] = useState(false);
    const pathname = usePathname();

    // Context Detection
    const isPersonas = pathname.startsWith("/personas");
    const isEmpresas = pathname.startsWith("/empresas");
    const isSubPortal = isPersonas || isEmpresas;
    const isEscuelaLanding = pathname === "/personas/escuela-conductores";
    const isGracias = pathname === "/gracias";

    // Dynamic Navigation Links
    const coursesHref = pathname === "/personas" ? "#catalogo" : "/personas#catalogo";

    const currentLinks = isPersonas ? [
        { name: "Inicio", href: "/personas", type: "standard" },
        { name: "Cursos", href: "/personas/cursos", type: "primary" },
        { name: "Escuela de Conductores", href: "/personas/escuela-conductores", type: "standard" },
        { name: "Certificación", href: "/personas/certificaciones", type: "standard" },
        { name: "Contacto", href: "/personas/contacto", type: "standard" },
    ] : isEmpresas ? [
        { name: "Capacitaciones", href: "/empresas/capacitaciones", type: "standard" },
        { name: "Certificaciones", href: "/empresas/certificaciones", type: "standard" },
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
        if (isMobileMenuOpen || isAulaModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen, isAulaModalOpen]);

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
                    isMobileMenuOpen || isAulaModalOpen ? "z-[70]" : "z-50",
                    isSubPortal ? "top-9" : "top-0", // Push down if TopBar exists
                    isScrolled
                        ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        : isGracias
                            ? "bg-white py-6 shadow-sm border-b border-gray-100"
                            : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between">
                        {/* 1. Logo (Enhanced Size) */}
                        <Link href={isPersonas ? "/personas" : isEmpresas ? "/empresas" : "/"} className="relative block group shrink-0">
                            <BrandLogo className="w-40 h-10 md:w-56 md:h-14 xl:w-64 xl:h-16" variant={!isScrolled && isGracias ? "default" : "white"} />
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </Link>

                        {/* 2. Desktop Navigation (Contextual) */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {currentLinks.map((link) => {
                                const isActive = pathname === link.href; // Strict equality for sub-navs
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wide xl:tracking-wider whitespace-nowrap rounded-full transition-all duration-300",
                                            link.type === "primary"
                                                ? (!isScrolled && isGracias ? "hover:bg-navy-deep/10" : "hover:bg-white/10")
                                                : "hover:text-amber-vial",
                                            isActive
                                                ? (!isScrolled && isGracias ? "text-navy-deep" : "text-white")
                                                : (!isScrolled && isGracias ? "text-slate-600" : "text-gray-300")
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
                        <div className="flex items-center gap-3 xl:gap-4 shrink-0">
                            <div className="hidden lg:block">
                                <TechButton
                                    onClick={() => setIsAulaModalOpen(true)}
                                    variant="primary"
                                    size="sm"
                                    className="font-bold border border-amber-vial/50 shadow-[0_0_15px_rgba(255,176,0,0.2)] text-xs xl:text-sm px-3 xl:px-4"
                                >
                                    Aula Virtual <ExternalLink className="ml-1 xl:ml-2 w-3 h-3 xl:w-3.5 xl:h-3.5 inline-block" />
                                </TechButton>
                            </div>

                            <button
                                className={cn(
                                    "lg:hidden transition-colors p-2",
                                    !isScrolled && isGracias ? "text-navy-deep hover:text-amber-vial" : "text-white hover:text-amber-vial"
                                )}
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

                                <div className="w-full">
                                    <TechButton
                                        onClick={() => { setIsMobileMenuOpen(false); setIsAulaModalOpen(true); }}
                                        variant="primary"
                                        size="lg"
                                        className="w-full justify-center"
                                    >
                                        Ir a Aula Virtual
                                    </TechButton>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Aula Virtual Selection Modal */}
            <AnimatePresence>
                {isAulaModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md"
                        onClick={() => setIsAulaModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-vial/10 rounded-full blur-3xl pointer-events-none" />

                            <button
                                onClick={() => setIsAulaModalOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy-deep hover:bg-gray-100 rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="text-center mb-8 relative z-10">
                                <h2 className="text-3xl font-black text-navy-deep mb-3 uppercase tracking-tight">Acceso a Estudiantes</h2>
                                <p className="text-gray-500 max-w-md mx-auto">
                                    Selecciona tu plataforma de estudio.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 md:gap-6 relative z-10">
                                {/* OTEC Card */}
                                <a
                                    href="https://aulavirtual.thelondonbridge.cl/login/index.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsAulaModalOpen(false)}
                                    className="group flex flex-col items-center p-6 md:p-8 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <MonitorPlay className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-deep text-center mb-6">Aula Virtual Moodle</h3>

                                    <span className="text-blue-600 font-bold text-sm uppercase tracking-wide group-hover:underline mt-auto flex items-center gap-1">
                                        Ingresar <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                </a>

                                {/* Driving School Card */}
                                <a
                                    href="https://practicatest.cl/escuela/escuela-de-conductores-posiciona-en-arica/Y52Ynw==?u=login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsAulaModalOpen(false)}
                                    className="group flex flex-col items-center p-6 md:p-8 rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-white hover:border-amber-vial hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-vial group-hover:text-navy-deep transition-all">
                                        <CarFront className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-deep text-center mb-6">Aula Escuela de Conductores</h3>

                                    <span className="text-amber-600 font-bold text-sm uppercase tracking-wide group-hover:underline mt-auto flex items-center gap-1">
                                        Ingresar <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
