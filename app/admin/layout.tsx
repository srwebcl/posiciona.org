import { AdminNavbar } from "./components/AdminNavbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <AdminNavbar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto overflow-hidden">
                {children}
            </main>
        </div>
    );
}
