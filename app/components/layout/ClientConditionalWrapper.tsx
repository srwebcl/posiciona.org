"use client";

import { usePathname } from "next/navigation";

export function ClientConditionalWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Si la ruta pertenece al CRM (/admin), no renderizamos los componentes globales
    if (pathname?.startsWith("/admin")) return null;

    return <>{children}</>;
}
