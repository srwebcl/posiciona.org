"use client";

import { usePathname } from "next/navigation";
import { BrandLogo } from "@/app/components/ui/brand-logo";
import { AdminHeaderActions } from "./AdminHeaderActions";

export function AdminNavbar() {
    const pathname = usePathname();

    // No mostrar la barra de navegación en la pantalla de login
    if (pathname === "/admin/login" || pathname === "/admin/recuperar-clave") {
        return null;
    }

    return (
        <nav className="bg-navy-deep border-b border-navy-deep/80 shadow-md relative z-50">
            <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center gap-4">
                        <BrandLogo className="w-32 h-8" variant="white" />
                        <div className="h-5 w-px bg-white/20 hidden md:block" />
                        <span className="text-white font-medium text-xs tracking-widest uppercase hidden md:block">
                            Portal Administrador
                        </span>
                    </div>

                    <AdminHeaderActions />
                </div>
            </div>
        </nav>
    );
}
