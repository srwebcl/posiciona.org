import { BrandLogo } from "@/app/components/ui/brand-logo";
import { AdminHeaderActions } from "./components/AdminHeaderActions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
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

            <main className="flex-1 w-full max-w-[1600px] mx-auto overflow-hidden">
                {children}
            </main>
        </div>
    );
}
