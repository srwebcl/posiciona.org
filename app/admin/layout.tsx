export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex bg-amber-500 my-3 px-4 rounded-lg items-center shadow-sm">
                            <span className="text-white font-bold text-lg tracking-tight">CRM Admin</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 w-full max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
