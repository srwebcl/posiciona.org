import { BrandLogo } from "@/app/components/ui/brand-logo";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <nav className="bg-navy-deep border-b border-navy-deep/80 shadow-md">
                <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-4">
                            <BrandLogo className="w-40 h-10" variant="white" />
                            <div className="h-6 w-px bg-white/20 hidden md:block" />
                            <span className="text-amber-vial font-bold text-sm tracking-widest uppercase hidden md:block">
                                Portal Administrador
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="hidden sm:block text-xs text-white/70 font-medium">BETA 1.1</span>
                            <div className="w-8 h-8 rounded-full bg-amber-vial/20 flex items-center justify-center border border-amber-vial/50">
                                <span className="text-amber-vial font-bold text-xs">AD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 w-full max-w-[1600px] mx-auto overflow-hidden">
                {children}
            </main>
        </div>
    );
}
