"use client";

import { useEffect, useState } from "react";
import { Loader2, UserPlus, Trash2, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

export default function UsuariosPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [myRole, setMyRole] = useState<string | null>(null);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("USER");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        checkSessionAndFetchUsers();
    }, []);

    const checkSessionAndFetchUsers = async () => {
        try {
            const meRes = await fetch("/api/admin/auth/me");
            const meData = await meRes.json();
            setMyRole(meData.role);

            if (meData.role === "ADMIN") {
                const res = await fetch("/api/admin/users");
                const data = await res.json();
                if (data.success) {
                    setUsers(data.users);
                } else {
                    setError(data.message || "Error al cargar usuarios");
                }
            }
        } catch (err) {
            setError("Error de conexión");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setError("");
        try {
            const res = await fetch("/api/admin/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, role }),
            });
            const data = await res.json();
            if (data.success) {
                setUsers([data.user, ...users]);
                setShowModal(false);
                // clean form
                setName("");
                setEmail("");
                setRole("USER");
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Error al crear usuario");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("¿Seguro que deseas eliminar este usuario del equipo?")) return;

        try {
            const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                setUsers(users.filter(u => u.id !== id));
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Error al eliminar usuario");
        }
    };

    if (loading) {
        return <div className="min-h-[50vh] flex justify-center items-center"><Loader2 className="w-8 h-8 animate-spin text-navy-deep" /></div>;
    }

    if (myRole !== "ADMIN") {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
                <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Acceso Denegado</h1>
                <p className="text-gray-500 mb-6 max-w-md">No tienes los permisos suficientes (Rol Administrador) para acceder a la gestión de equipo y usuarios.</p>
                <Link href="/admin" className="px-6 py-2 bg-navy-deep text-white rounded-xl shadow-md hover:bg-navy-900 transition-colors">Volver a la Oficina Virtual</Link>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <Link href="/admin" className="text-sm font-medium text-gray-500 hover:text-navy-deep flex items-center gap-2 mb-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Volver al CRM Operativo
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">Gestor de Equipo</h1>
                    <p className="text-gray-500 mt-1">Administra los accesos y credenciales de tus ejecutivos.</p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-amber-vial hover:bg-amber-400 text-navy-deep px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md"
                >
                    <UserPlus className="w-4 h-4 stroke-[2.5]" />
                    Nuevo Integrante
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50/80 border-b border-gray-200 text-xs uppercase text-gray-500 font-bold tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Usuario</th>
                                <th className="px-6 py-4">Correo</th>
                                <th className="px-6 py-4">Rol</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-gray-900">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-navy-deep/10 text-navy-deep flex items-center justify-center font-bold">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            {user.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-mono text-gray-500 text-xs">{user.email}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase ${user.role === 'ADMIN' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors relative group">
                                            <Trash2 className="w-4 h-4" />
                                            <span className="sr-only">Eliminar</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Crear Usuario */}
            {showModal && (
                <div className="fixed inset-0 bg-navy-deep/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Crear Cuenta de Acceso</h2>
                        <form onSubmit={handleCreateUser} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Nombre Completo</label>
                                <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-transparent" placeholder="Ej: Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Correo Electrónico</label>
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-transparent" placeholder="juan@posiciona.org" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Rol de Permisos</label>
                                <select value={role} onChange={e => setRole(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-transparent">
                                    <option value="USER">Ejecutivo Normal (Solo ver Leads)</option>
                                    <option value="ADMIN">Administrador (Master)</option>
                                </select>
                            </div>

                            <div className="flex gap-3 justify-end pt-4 border-t border-gray-100 mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Cancelar</button>
                                <button type="submit" disabled={isSaving} className="px-6 py-2.5 text-sm font-black text-white bg-navy-deep rounded-xl hover:bg-navy-900 focus:ring-2 focus:ring-offset-2 flex items-center justify-center min-w-[120px] transition-all disabled:opacity-50">
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Crear Usuario"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
