"use client";

import { useEffect, useState } from "react";
import { Loader2, Search, Filter, Mail, Phone, Building, Briefcase, Calendar, CheckSquare, XSquare, User, FileText } from "lucide-react";

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    variant: string;
    interest: string;
    message: string | null;
    rut: string | null;
    company: string | null;
    role: string | null;
    status: string;
    notes: string | null;
    createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
    NUEVO: "bg-blue-100 text-blue-800",
    CONTACTADO: "bg-amber-100 text-amber-800",
    "EN NEGOCIACION": "bg-purple-100 text-purple-800",
    CERRADO: "bg-green-100 text-green-800",
    DESCARTADO: "bg-red-100 text-red-800"
};

const FILTERS = [
    { label: "Todos", value: "" },
    { label: "General", value: "GENERAL" },
    { label: "Personas", value: "PERSONA" },
    { label: "Empresas", value: "EMPRESA" },
    { label: "Escuela Conductores", value: "ESCUELA" },
    { label: "Oficina Virtual", value: "OFICINA" }
];

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("");
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    // Modal forms states
    const [editStatus, setEditStatus] = useState("");
    const [editNotes, setEditNotes] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const fetchLeads = async (filter: string = "") => {
        setLoading(true);
        try {
            const url = filter ? `/api/admin/leads?filter=${filter}` : '/api/admin/leads';
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) setLeads(data.leads);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads(activeFilter);
    }, [activeFilter]);

    const handleFilterChange = (val: string) => {
        setActiveFilter(val);
        setSelectedLead(null);
    };

    const handleLeadSelect = (lead: Lead) => {
        setSelectedLead(lead);
        setEditStatus(lead.status);
        setEditNotes(lead.notes || "");
    };

    const handleSaveLead = async () => {
        if (!selectedLead) return;
        setIsSaving(true);
        try {
            const res = await fetch(`/api/admin/leads/${selectedLead.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: editStatus, notes: editNotes })
            });
            const data = await res.json();

            if (data.success) {
                // Actualizar interfaz optimísticamente
                setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, status: editStatus, notes: editNotes } : l));
                setSelectedLead(null);
            }
        } catch (error) {
            console.error("Error saving lead", error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto hidden md:block">
                <div className="flex items-center gap-2 text-gray-800 font-bold mb-6">
                    <Filter className="w-4 h-4" /> Categorías
                </div>
                <ul className="space-y-2">
                    {FILTERS.map(f => (
                        <li key={f.label}>
                            <button
                                onClick={() => handleFilterChange(f.value)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeFilter === f.value ? "bg-amber-100 text-amber-800 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                            >
                                {f.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content: Table & Details */}
            <div className="flex-1 flex flex-col md:flex-row relative">

                {/* Leads List */}
                <div className={`flex-1 overflow-auto bg-gray-50 p-4 md:p-6 ${selectedLead ? 'hidden md:block md:w-1/2' : 'w-full'}`}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Mobile Filter Dropdown (visible solo en móviles) */}
                        <div className="p-4 border-b border-gray-100 md:hidden bg-gray-50/50">
                            <select
                                className="w-full bg-white border border-gray-300 rounded-lg p-2 text-sm focus:ring-amber-500"
                                value={activeFilter}
                                onChange={(e) => handleFilterChange(e.target.value)}
                            >
                                {FILTERS.map(f => (
                                    <option key={f.label} value={f.value}>{f.label}</option>
                                ))}
                            </select>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
                            </div>
                        ) : leads.length === 0 ? (
                            <div className="text-center py-16 text-gray-500 flex flex-col items-center">
                                <Search className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="text-lg font-medium text-gray-700">No se encontraron leads</p>
                                <p className="text-sm">Intente cambiar o limpiar los filtros.</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-100">
                                {leads.map(lead => (
                                    <li
                                        key={lead.id}
                                        onClick={() => handleLeadSelect(lead)}
                                        className={`p-4 hover:bg-amber-50/50 cursor-pointer transition-colors ${selectedLead?.id === lead.id ? 'bg-amber-50 border-l-4 border-amber-500' : 'border-l-4 border-transparent'}`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-semibold text-gray-900 truncate">{lead.name}</h3>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${STATUS_COLORS[lead.status] || "bg-gray-100 text-gray-800"}`}>
                                                {lead.status}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2 truncate bg-gray-100 inline-block px-2 py-0.5 rounded">
                                            {lead.variant} | {lead.interest}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 gap-4 mt-2">
                                            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> <span className="truncate w-32 md:w-48">{lead.email}</span></span>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <Calendar className="w-3.5 h-3.5" /> {new Date(lead.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Detail Panel */}
                {selectedLead && (
                    <div className="w-full md:w-[450px] lg:w-[500px] h-full bg-white border-l border-gray-200 overflow-y-auto shadow-2xl absolute md:relative z-10 flex flex-col">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-lg font-bold text-gray-800">Detalle de Gestión</h2>
                            <button onClick={() => setSelectedLead(null)} className="p-1 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                                <span className="sr-only">Cerrar</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-6 flex-1 space-y-6">
                            {/* Lead Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1"><User className="w-3 h-3" /> Nombre Completo</label>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{selectedLead.name}</p>
                                </div>
                                {selectedLead.rut && (
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1"><FileText className="w-3 h-3" /> RUT</label>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{selectedLead.rut}</p>
                                    </div>
                                )}
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1"><Mail className="w-3 h-3" /> Correo Electrónico</label>
                                    <p className="mt-1 text-sm font-medium text-amber-600 hover:underline"><a href={`mailto:${selectedLead.email}`}>{selectedLead.email}</a></p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1"><Phone className="w-3 h-3" /> Teléfono</label>
                                    <p className="mt-1 text-sm font-medium text-gray-900"><a href={`tel:${selectedLead.phone}`} className="hover:text-amber-600">{selectedLead.phone}</a></p>
                                </div>
                                {selectedLead.company && (
                                    <div className="md:col-span-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1"><Building className="w-3 h-3" /> Empresa</label>
                                        <p className="mt-1 text-sm font-medium text-gray-900">{selectedLead.company} {selectedLead.role ? `(${selectedLead.role})` : ''}</p>
                                    </div>
                                )}
                            </div>

                            {/* Interest & Message */}
                            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                <p className="text-xs font-bold text-amber-800 uppercase mb-2">Motivo de Contacto / {selectedLead.variant}</p>
                                <p className="text-sm font-medium text-gray-900 mb-4">{selectedLead.interest}</p>

                                {selectedLead.message && (
                                    <>
                                        <p className="text-xs font-bold text-amber-800 uppercase mb-2">Mensaje Adicional</p>
                                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedLead.message}</p>
                                    </>
                                )}
                            </div>

                            {/* Management Section */}
                            <div className="pt-4 border-t border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4 text-amber-500" /> Panel de Gestión</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado del Lead</label>
                                        <select
                                            value={editStatus}
                                            onChange={(e) => setEditStatus(e.target.value)}
                                            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-amber-500 focus:border-amber-500"
                                        >
                                            <option value="NUEVO">🔵 NUEVO</option>
                                            <option value="CONTACTADO">🟡 CONTACTADO</option>
                                            <option value="EN NEGOCIACION">🟣 EN NEGOCIACIÓN</option>
                                            <option value="CERRADO">🟢 CERRADO (Éxito)</option>
                                            <option value="DESCARTADO">🔴 DESCARTADO</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Notas Internas</label>
                                        <textarea
                                            rows={4}
                                            value={editNotes}
                                            onChange={(e) => setEditNotes(e.target.value)}
                                            placeholder="Agregue observaciones de las llamadas o correos enviados..."
                                            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-amber-500 focus:border-amber-500 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 mt-auto">
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                disabled={isSaving || (editStatus === selectedLead.status && editNotes === (selectedLead.notes || ""))}
                                onClick={handleSaveLead}
                                className="px-5 py-2 text-sm font-medium text-white bg-amber-600 border border-transparent rounded-lg hover:bg-amber-700 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckSquare className="w-4 h-4" />}
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
