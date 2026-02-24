"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Loader2 } from "lucide-react";
import Link from "next/link";

export function AdminHeaderActions() {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await fetch("/api/admin/auth/logout", { method: "POST" });
            router.push("/admin/login");
            router.refresh();
        } catch (error) {
            console.error(error);
            setIsLoggingOut(false);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <Link
                href="/admin/perfil"
                className="w-9 h-9 rounded-full bg-amber-vial flex items-center justify-center border-2 border-transparent hover:border-white/30 shadow-sm transition-all hover:scale-105 group relative"
                title="Mi Perfil"
            >
                <span className="text-navy-deep font-bold text-sm">AD</span>
            </Link>

            <div className="h-5 w-px bg-white/20 hidden sm:block" />

            <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider disabled:opacity-50"
            >
                {isLoggingOut ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />}
                <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
        </div>
    );
}
