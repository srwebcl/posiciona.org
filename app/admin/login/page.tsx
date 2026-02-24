"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Mail, Lock, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/app/components/ui/brand-logo";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [isRecovering, setIsRecovering] = useState(false);
    const [recoverMessage, setRecoverMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                const data = await res.json();
                setError(data.message || "Credenciales incorrectas");
            }
        } catch (err) {
            setError("Error de conexión con el servidor");
        } finally {
            setIsLoading(false);
        }
    };

    const handleRecoverSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setRecoverMessage("");

        try {
            const res = await fetch("/api/admin/auth/recover", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
            const data = await res.json();

            if (res.ok) {
                setRecoverMessage(data.message);
            } else {
                setError(data.message || "Error procesando solicitud");
            }
        } catch {
            setError("Error de conexión con el servidor");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Left side: Branding / Info */}
            <div className="hidden md:flex flex-1 bg-navy-deep relative overflow-hidden flex-col justify-between p-12">

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-amber-vial/10 rounded-full blur-3xl shadow-2xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl shadow-2xl"></div>

                <div className="relative z-10"></div>

                <div className="relative z-10 max-w-md">
                    <BrandLogo variant="white" className="w-32 h-auto opacity-80 mb-5" />
                    <h1 className="text-3xl font-bold text-white mb-4">
                        Sistema de Gestión Comercial y CRM
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Acceso exclusivo para personal autorizado de Posiciona.org. Administre prospectos y consultas de la Oficina Virtual.
                    </p>
                </div>

                <div className="relative z-10 text-white/40 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Posiciona. Todos los derechos reservados.
                </div>
            </div>

            {/* Right side: Login Form */}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white relative">

                {/* Mobile logo */}
                <div className="md:hidden flex justify-center mb-8">
                    <BrandLogo variant="default" className="w-40 h-auto" />
                </div>

                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
                            {isRecovering ? "Recuperar Acceso" : "Iniciar Sesión"}
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 font-medium">
                            {isRecovering
                                ? "Te enviaremos una clave provisoria al correo ingresado."
                                : "Por favor ingrese sus credenciales corporativas"}
                        </p>
                    </div>

                    <div className="mt-8">
                        {isRecovering ? (
                            <form className="space-y-5" onSubmit={handleRecoverSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                                        Correo Electrónico
                                    </label>
                                    <div className="mt-1 relative rounded-xl shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent sm:text-sm font-medium transition-all bg-gray-50 hover:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#f9fafb] [&:-webkit-autofill]:[-webkit-text-fill-color:#111827]"
                                            placeholder="admin@posiciona.org"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-xl text-sm font-medium">
                                        {error}
                                    </div>
                                )}

                                {recoverMessage && (
                                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl text-sm font-medium flex items-start gap-2">
                                        <ShieldCheck className="w-5 h-5 shrink-0" />
                                        {recoverMessage}
                                    </div>
                                )}

                                <div className="pt-2 space-y-3">
                                    <button
                                        type="submit"
                                        disabled={isLoading || !!recoverMessage}
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-navy-deep/20 text-sm font-bold text-white bg-navy-deep hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-deep disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                    >
                                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Enviar Instrucciones"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsRecovering(false);
                                            setError("");
                                            setRecoverMessage("");
                                        }}
                                        className="w-full py-3 px-4 rounded-xl text-sm font-bold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        Volver al Login
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                                        Correo Electrónico
                                    </label>
                                    <div className="mt-1 relative rounded-xl shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent sm:text-sm font-medium transition-all bg-gray-50 hover:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#f9fafb] [&:-webkit-autofill]:[-webkit-text-fill-color:#111827]"
                                            placeholder="admin@posiciona.org"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                                        Contraseña
                                    </label>
                                    <div className="mt-1 relative rounded-xl shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent sm:text-sm font-medium transition-all bg-gray-50 hover:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#f9fafb] [&:-webkit-autofill]:[-webkit-text-fill-color:#111827]"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-red-800">{error}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-end pt-1">
                                    <button
                                        type="button"
                                        onClick={() => setIsRecovering(true)}
                                        className="text-sm font-bold text-navy-deep hover:text-amber-600 transition-colors bg-transparent border-none appearance-none cursor-pointer p-0"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-navy-deep/20 text-sm font-bold text-white bg-navy-deep hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-deep disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin text-amber-vial" />
                                                <span>Autenticando...</span>
                                            </>
                                        ) : (
                                            "Acceder al Sistema"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
