"use client";

import { useState, Suspense, useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Search,
    MapPin,
    Filter,
    X,
    Users,
    Check,
    ArrowUpDown,
    ShoppingCart
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";

import { COURSES } from "@/app/data/courses";

// Categories derived from data + static list for order
const CATEGORIES = [
    "ESCUELA DE CONDUCTORES",
    "TALENTO DIGITAL",
    "OFICIOS"
];

const LOCATIONS = [
    { id: "all", label: "Todas las ubicaciones" },
    { id: "Arica", label: "Arica (Presencial)" },
    { id: "Todo Chile", label: "Todo Chile / Online" },
];

const SORT_OPTIONS = [
    { id: "featured", label: "Destacados" },
    { id: "az", label: "Nombre (A-Z)" },
    { id: "za", label: "Nombre (Z-A)" },
];

function CatalogStore() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // -- State --
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>("all");
    const [sortOption, setSortOption] = useState("featured");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // -- Sync URL with State (Initial Load) --
    useEffect(() => {
        const catParam = searchParams.get("category");
        if (catParam) {
            setSelectedCategories([decodeURIComponent(catParam).toUpperCase()]);
        }
        const searchParam = searchParams.get("q");
        if (searchParam) {
            setSearchQuery(searchParam);
        }
    }, [searchParams]);

    // -- Filtering & Sorting Logic --
    const filteredCourses = useMemo(() => {
        let courses = COURSES.filter((course) => {
            // 1. Text Search
            const matchesSearch =
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            // 2. Category Filter
            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(course.category);

            // 3. Location Filter
            const matchesLocation =
                selectedLocation === "all" ||
                (selectedLocation === "Arica" && course.location.includes("Arica")) ||
                (selectedLocation === "Todo Chile" && !course.location.includes("Arica"));

            return matchesSearch && matchesCategory && matchesLocation;
        });

        // 4. Sorting
        if (sortOption === "az") {
            courses.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "za") {
            courses.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            // Featured logic (simulated by ID or Badge for now, or just keeping default order)
            // Assuming default list order is "Featured"
        }

        return courses;
    }, [searchQuery, selectedCategories, selectedLocation, sortOption]);

    // -- Handlers --
    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategories([]);
        setSelectedLocation("all");
        setSortOption("featured");
    };

    return (
        <section id="catalogo" className="py-12 bg-gray-50 min-h-screen relative" style={{ scrollMarginTop: "100px" }}>
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* -- SIDEBAR FILTERS (Desktop) -- */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8 sticky top-32 z-30 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-navy-deep flex items-center gap-2">
                                    <Filter className="w-5 h-5" /> Filtros
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={clearFilters}
                                    className="text-xs text-red-500 hover:bg-red-50 h-8 px-2"
                                    disabled={!searchQuery && selectedCategories.length === 0 && selectedLocation === "all"}
                                >
                                    Limpiar
                                </Button>
                            </div>

                            <div className="space-y-6">
                                {/* Search */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Buscar por nombre</label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Ej. Licencia A3..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Accordion Filters */}
                                <Accordion type="multiple" defaultValue={["categories", "location"]} className="w-full">

                                    <AccordionItem value="categories" className="border-b border-gray-100">
                                        <AccordionTrigger className="text-sm font-bold text-navy-deep hover:no-underline py-4">CATEGORÍAS</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-3 pt-1 pb-2">
                                                {CATEGORIES.map((cat) => (
                                                    <div key={cat} className="flex items-start space-x-3">
                                                        <Checkbox
                                                            id={`cat-${cat}`}
                                                            checked={selectedCategories.includes(cat)}
                                                            onCheckedChange={() => toggleCategory(cat)}
                                                            className="mt-0.5"
                                                        />
                                                        <label
                                                            htmlFor={`cat-${cat}`}
                                                            className="text-sm text-gray-600 leading-tight cursor-pointer select-none hover:text-navy-deep transition-colors"
                                                        >
                                                            {cat}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="location" className="border-none">
                                        <AccordionTrigger className="text-sm font-bold text-navy-deep hover:no-underline py-4">UBICACIÓN</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="space-y-3 pt-1">
                                                {LOCATIONS.map((loc) => (
                                                    <div key={loc.id} className="flex items-center space-x-3 group cursor-pointer" onClick={() => setSelectedLocation(loc.id)}>
                                                        <div
                                                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedLocation === loc.id ? "border-navy-deep bg-navy-deep" : "border-gray-300 bg-white group-hover:border-navy-deep"}`}
                                                        >
                                                            {selectedLocation === loc.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                                        </div>
                                                        <label className="text-sm text-gray-600 group-hover:text-navy-deep transition-colors cursor-pointer">
                                                            {loc.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>
                    </aside>

                    {/* -- MOBILE FILTER BUTTON -- */}
                    <div className="lg:hidden w-full mb-4 sticky top-24 z-30">
                        {/* Mobile Top Bar for Filters & Sort could go here */}
                        <div className="bg-white p-4 rounded-xl shadow-md flex gap-3">
                            <Button
                                className="flex-1 bg-white border border-gray-200 text-navy-deep hover:bg-gray-50 justify-center"
                                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Filtros {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                            </Button>

                            <div className="relative flex-1">
                                {/* Simple mobile sort dropdown override */}
                                <select
                                    className="w-full h-10 pl-3 pr-8 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-deep/20 appearance-none"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    {SORT_OPTIONS.map(opt => (
                                        <option key={opt.id} value={opt.id}>{opt.label}</option>
                                    ))}
                                </select>
                                <ArrowUpDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Mobile Filters Content (Collapsible) */}
                        <AnimatePresence>
                            {isMobileFiltersOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="mt-2 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                                >
                                    <div className="p-6 space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold">Buscar</label>
                                            <Input
                                                placeholder="Buscar..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-3 block">Categorías</label>
                                            <div className="grid grid-cols-1 gap-3">
                                                {CATEGORIES.map((cat) => (
                                                    <div key={cat} className="flex items-center space-x-3">
                                                        <Checkbox
                                                            id={`mob-cat-${cat}`}
                                                            checked={selectedCategories.includes(cat)}
                                                            onCheckedChange={() => toggleCategory(cat)}
                                                        />
                                                        <label htmlFor={`mob-cat-${cat}`} className="text-sm text-gray-600">{cat}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <Button className="w-full bg-navy-deep text-white" onClick={() => setIsMobileFiltersOpen(false)}>
                                            Ver Resultados
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* -- MAIN GRID -- */}
                    <div className="flex-1 w-full">

                        {/* Header: Count & Desktop Sort */}
                        <div className="hidden lg:flex items-center justify-between mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <h2 className="text-gray-600 font-medium">
                                Mostrando <span className="text-navy-deep font-bold">{filteredCourses.length}</span> programas
                            </h2>

                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-500">Ordenar por:</span>
                                <div className="relative">
                                    <select
                                        className="appearance-none bg-gray-50 border border-gray-200 text-navy-deep text-sm font-bold py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/20 cursor-pointer hover:bg-white transition-colors"
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                    >
                                        {SORT_OPTIONS.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.label}</option>
                                        ))}
                                    </select>
                                    <ArrowUpDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {filteredCourses.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col h-full relative"
                                    >
                                        <div className="p-6 flex flex-col h-full">
                                            {/* Header: Category & Badge */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${service.color === 'amber' ? 'bg-amber-50 text-amber-600' : service.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' : 'bg-blue-50 text-blue-600'}`}>
                                                    <service.icon className="w-4 h-4" />
                                                    <span className="uppercase tracking-wide">
                                                        {service.category === "ESCUELA DE CONDUCTORES" ? "Escuela" :
                                                            service.category === "OFICIOS" ? "Oficios" :
                                                                service.category === "TALENTO DIGITAL" ? "Digital" : service.category}
                                                    </span>
                                                </div>
                                                {service.badge && (
                                                    <span className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                                        {service.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-navy-deep mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="mt-auto">
                                                <div className="h-px w-full bg-gray-100 mb-4" />

                                                <div className="flex items-center justify-between mb-4 text-xs">
                                                    <span className="flex items-center gap-1.5 text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        {service.location.replace(" (Presencial)", "").replace(" (Todo Chile)", "")}
                                                    </span>
                                                    <span className="text-gray-400 font-medium">
                                                        {service.duration}
                                                    </span>
                                                </div>

                                                <Link href={`/cursos/${service.slug}`} className="block">
                                                    <Button
                                                        className="w-full bg-navy-deep text-white hover:bg-blue-600 border border-transparent hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-bold tracking-wide"
                                                    >
                                                        Ver Detalle <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Empty State */}
                        {filteredCourses.length === 0 && (
                            <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
                                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-deep mb-2">No encontramos coincidencias</h3>
                                <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                                    Intenta ajustar tus filtros de búsqueda o prueba con otros términos.
                                </p>
                                <Button variant="outline" onClick={clearFilters} className="border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white">
                                    Limpiar todos los filtros
                                </Button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}

export function PersonasCatalog() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando catálogo...</div>}>
            <CatalogStore />
        </Suspense>
    );
}
