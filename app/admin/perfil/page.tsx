"use client";

import { useState } from "react";
import { Loader2, KeyRound, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MiPerfilPage() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // UI Status
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setStatus("error");
            setMessage("Las contraseñas nuevas no coinciden");
            return;
        }

        if (newPassword.length < 6) {
            setStatus("error");
            setMessage("La nueva contraseña debe tener al menos 6 caracteres");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/admin/auth/update-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword, newPassword })
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setMessage("¡La contraseña ha sido actualizada exitosamente! Usa esta clave para tu próximo acceso.");
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setStatus("error");
                setMessage(data.message || "Error al actualizar credenciales");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Error de conexión con el sistema de seguridad");
        }
    };

    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto h-[calc(100vh-56px)] overflow-y-auto w-full">
            <div className="mb-8">
                <Link href="/admin" className="text-sm font-medium text-gray-500 hover:text-navy-deep flex items-center gap-2 mb-2 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Volver al CRM Operativo
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-amber-vial" />
                    Mi Perfil & Seguridad
                </h1>
                <p className="text-gray-500 mt-1 pl-8">Configura y protege el acceso de tu cuenta corporativa.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden ml-8 max-w-xl">
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-deep/5 flex items-center justify-center border border-navy-deep/10 text-navy-deep">
                        <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900">Cambio de Contraseña</h2>
                        <p className="text-xs text-gray-500">Mantén tu cuenta segura actualizando esta información periódicamente.</p>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    {status === "success" && (
                        <div className="mb-6 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 stroke-[2] shrink-0 mt-0.5" />
                            <p className="text-sm font-medium leading-relaxed">{message}</p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mb-6 bg-red-50 border border-red-100 text-red-800 p-4 rounded-xl">
                            <p className="text-sm font-bold">{message}</p>
                        </div>
                    )}

                    <form onSubmit={handleUpdatePassword} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Contraseña Actual *</label>
                            <input
                                type="password"
                                required
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                                className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-2.5 px-4 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-navy-deep appearance-none hover:bg-gray-50 transition-colors"
                            />
                        </div>

                        <div className="pt-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nueva Contraseña *</label>
                            <input
                                type="password"
                                required
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                minLength={6}
                                className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-2.5 px-4 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-navy-deep appearance-none hover:bg-gray-50 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Confirmar Nueva Contraseña *</label>
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                minLength={6}
                                className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-2.5 px-4 text-gray-900 focus:ring-2 focus:ring-navy-deep focus:border-navy-deep appearance-none hover:bg-gray-50 transition-colors"
                            />
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full md:w-auto px-8 py-3 bg-navy-deep hover:bg-navy-900 text-white font-bold rounded-xl text-sm transition-all shadow-md focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === "loading" ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> Actualizando Seguridad...</>
                                ) : "Guardar Nueva Contraseña"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
