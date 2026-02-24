"use client";

import { useEffect, useState, useRef } from "react";
import { Loader2, Search, Filter, Mail, Phone, Building, Briefcase, Calendar, CheckSquare, User, FileText, Download, Upload, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import * as XLSX from "xlsx";

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
    NUEVO: "bg-blue-100 text-blue-700 border-blue-200",
    CONTACTADO: "bg-amber-100 text-amber-700 border-amber-200",
    "EN PROCESO": "bg-purple-100 text-purple-700 border-purple-200",
    "EN NEGOCIACION": "bg-purple-100 text-purple-700 border-purple-200",
    CERRADO: "bg-emerald-100 text-emerald-700 border-emerald-200",
    DESCARTADO: "bg-red-100 text-red-700 border-red-200"
};

const FILTERS = [
    { label: "Todos", value: "" },
    { label: "Personas", value: "PERSONA" },
    { label: "Empresas", value: "EMPRESA" },
    { label: "Escuela Conductores", value: "ESCUELA" },
    { label: "Oficina Virtual", value: "GENERAL" }
];

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("");
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [myRole, setMyRole] = useState<string | null>(null);

    // Modal forms states
    const [editStatus, setEditStatus] = useState("");
    const [editNotes, setEditNotes] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Import/Export states
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isProcessingExcel, setIsProcessingExcel] = useState(false);

    const fetchRoleAndLeads = async (filter: string = "") => {
        setLoading(true);
        try {
            const roleRes = await fetch('/api/admin/auth/me');
            const roleData = await roleRes.json();
            setMyRole(roleData.role);

            const url = filter ? `/api/admin/leads?filter=${filter}` : '/api/admin/leads';
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) setLeads(data.leads);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoleAndLeads(activeFilter);
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
                setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, status: editStatus, notes: editNotes } : l));
                setSelectedLead(null);
            }
        } catch (error) {
            console.error("Error saving lead", error);
        } finally {
            setIsSaving(false);
        }
    };

    // --- Excel Integration Functions ---

    const downloadExcel = () => {
        if (leads.length === 0) return alert("No hay datos para exportar.");

        const exportData = leads.map(l => ({
            "ID Sistema": l.id,
            "Fecha Registro": new Date(l.createdAt).toLocaleString('es-CL'),
            "Estado CRM": l.status,
            "Nombre Completo": l.name,
            "RUT": l.rut || "",
            "Correo Electrónico": l.email,
            "Teléfono": l.phone,
            "Origen (Variante)": l.variant,
            "Área de Interés": l.interest,
            "Empresa": l.company || "",
            "Cargo": l.role || "",
            "Mensaje Original": l.message || "",
            "Notas de Gestión": l.notes || ""
        }));

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        worksheet["!cols"] = [{ wch: 10 }, { wch: 20 }, { wch: 15 }, { wch: 30 }, { wch: 15 }, { wch: 35 }, { wch: 15 }, { wch: 20 }, { wch: 40 }, { wch: 25 }, { wch: 20 }, { wch: 50 }, { wch: 50 }];

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Leads_Posiciona");

        const filename = `Leads_Posiciona_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(workbook, filename);
    };

    const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsProcessingExcel(true);
        const reader = new FileReader();

        reader.onload = async (evt) => {
            try {
                const bstr = evt.target?.result;
                const workbook = XLSX.read(bstr, { type: 'binary' });
                const wsname = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[wsname];
                const rawData = XLSX.utils.sheet_to_json(worksheet);

                if (!rawData || rawData.length === 0) {
                    alert("El archivo Excel está vacío o no tiene el formato correcto.");
                    setIsProcessingExcel(false);
                    return;
                }

                const res = await fetch('/api/admin/leads/import', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: rawData })
                });

                const apiResult = await res.json();

                if (apiResult.success) {
                    alert(`¡Éxito! Se procesaron ${apiResult.imported} leads exitosamente.`);
                    fetchRoleAndLeads(activeFilter);
                } else {
                    alert("Error durante la importación: " + (apiResult.error || "Formato de columnas incorrecto. Asegúrate de usar la plantilla exportada."));
                }
            } catch (error) {
                console.error("Error al procesar el Excel:", error);
                alert("Ocurrió un error inesperado al leer el archivo Excel.");
            } finally {
                setIsProcessingExcel(false);
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className="flex bg-gray-50 h-[calc(100vh-56px)] overflow-hidden">
            <aside className="w-full md:w-64 bg-navy-deep border-r border-navy-deep/80 p-4 overflow-y-auto hidden md:block shrink-0">
                <div className="flex items-center gap-2 text-white/50 font-bold mb-6 text-xs uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" /> Módulos
                </div>
                <ul className="space-y-3">
                    <li>
                        <Link href="/admin" className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all font-medium border bg-white/10 text-white border-white/20 shadow-sm flex items-center gap-3">
                            <LayoutDashboard className="w-4 h-4" /> Oficina Virtual
                        </Link>
                    </li>
                    {myRole === "ADMIN" && (
                        <li>
                            <Link href="/admin/usuarios" className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all font-medium border border-transparent hover:bg-white/5 text-white/70 hover:text-white flex items-center gap-3">
                                <Search className="w-4 h-4" /> Gestión de Equipo
                            </Link>
                        </li>
                    )}
                </ul>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {/* Top Toolbar (Import/Export) - Now in the light theme area */}
                <div className="w-full bg-white border-b border-gray-200 p-4 md:px-6 flex justify-between items-center z-20 shrink-0">
                    <div className="flex items-center gap-3">
                        <h1 className="text-gray-900 font-bold text-xl hidden sm:block">Oficina Virtual</h1>
                        <span className="bg-amber-100 text-amber-700 text-xs px-2.5 py-1 rounded-full font-bold border border-amber-200 shadow-sm">
                            {loading ? "Cargando..." : `${leads.length} Registros`}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleExcelUpload}
                            accept=".xlsx, .xls, .csv"
                            className="hidden"
                        />

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isProcessingExcel}
                            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm"
                        >
                            {isProcessingExcel ? <Loader2 className="w-4 h-4 animate-spin text-navy-deep" /> : <Upload className="w-4 h-4 text-gray-400" />}
                            <span className="hidden sm:inline">Importar Base</span>
                        </button>

                        <button
                            onClick={downloadExcel}
                            className="flex items-center gap-2 bg-amber-vial hover:bg-amber-400 text-navy-deep px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm border border-amber-500/20"
                        >
                            <Download className="w-4 h-4 stroke-[2.5]" />
                            <span className="hidden sm:inline">Exportar Excel</span>
                        </button>
                    </div>
                </div>

                {/* Container required for horizontal arrangement of Table vs Lead Detail Panel */}
                <div className="flex flex-1 overflow-hidden relative">
                    {/* Main Content: Table & Details */}
                    <div className={`flex-1 overflow-auto p-4 md:p-6 ${selectedLead ? 'hidden lg:block lg:w-1/2 opacity-50 pointer-events-none transition-opacity' : 'w-full'}`}>

                        {/* Desktop Floating Filters */}
                        <div className="hidden md:flex flex-wrap gap-2 mb-6">
                            {FILTERS.map(f => (
                                <button
                                    key={f.label}
                                    onClick={() => handleFilterChange(f.value)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all font-medium border shadow-sm flex items-center gap-2
                                    ${activeFilter === f.value
                                            ? "bg-navy-deep text-white border-navy-deep"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {activeFilter === f.value && <div className="w-1.5 h-1.5 rounded-full bg-amber-vial" />}
                                    {f.label === "Todos" ? "Todas las Categorías" : f.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Filter Dropdown */}
                        <div className="md:hidden mb-4 relative">
                            <select
                                className="w-full bg-white border border-gray-200 text-gray-800 rounded-xl p-3 text-sm focus:ring-navy-deep focus:border-navy-deep appearance-none font-medium shadow-sm"
                                value={activeFilter}
                                onChange={(e) => handleFilterChange(e.target.value)}
                            >
                                {FILTERS.map(f => (
                                    <option key={f.label} value={f.value}>{f.label === "Todos" ? "Todas las Categorías" : f.label}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            {loading ? (
                                <div className="flex justify-center items-center h-64">
                                    <Loader2 className="w-8 h-8 animate-spin text-navy-deep" />
                                </div>
                            ) : leads.length === 0 ? (
                                <div className="text-center py-20 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                        <Search className="w-8 h-8 text-gray-300" />
                                    </div>
                                    <p className="text-xl font-bold text-gray-800 mb-2">Base de Datos Limpia</p>
                                    <p className="text-sm text-gray-500">No se encontraron prospectos en esta categoría.</p>
                                </div>
                            ) : (
                                <ul className="divide-y divide-gray-100 max-w-full">
                                    {leads.map(lead => (
                                        <li
                                            key={lead.id}
                                            onClick={() => handleLeadSelect(lead)}
                                            className={`p-5 hover:bg-gray-50 cursor-pointer transition-colors relative
                                            ${selectedLead?.id === lead.id ? 'bg-amber-50/50' : ''}`}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-navy-deep/5 border border-navy-deep/10 flex items-center justify-center shrink-0">
                                                        <span className="text-navy-deep font-bold text-sm">{lead.name.charAt(0).toUpperCase()}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-[15px] group-hover:text-amber-600 transition-colors">{lead.name}</h3>
                                                        <div className="text-xs text-gray-500 mt-0.5">
                                                            <span className="text-navy-deep/70 font-semibold">{lead.variant}</span> / {lead.interest}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider self-start sm:self-auto border ${STATUS_COLORS[lead.status] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                                                    {lead.status}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row text-xs text-gray-500 gap-y-2 gap-x-6 sm:pl-13 mt-4">
                                                <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gray-400" /> <span className="truncate">{lead.email}</span></span>
                                                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-gray-400" /> {new Date(lead.createdAt).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Detail Panel Popup */}
                    {selectedLead && (
                        <>
                            {/* Mobile Overlay */}
                            <div
                                className="lg:hidden fixed inset-0 bg-navy-deep/60 backdrop-blur-sm z-30"
                                onClick={() => setSelectedLead(null)}
                            />

                            <div className="fixed lg:relative inset-y-0 right-0 w-full md:w-[500px] lg:w-[600px] bg-white border-l border-gray-200 shadow-2xl z-40 flex flex-col transform transition-transform duration-300">

                                {/* Header */}
                                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-6 bg-navy-deep rounded-full" />
                                        <h2 className="text-lg font-bold text-gray-900">Ficha de Prospecto</h2>
                                    </div>
                                    <button onClick={() => setSelectedLead(null)} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                                        <span className="sr-only">Cerrar</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>

                                <div className="p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar">

                                    {/* Info Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Cliente</label>
                                            <p className="mt-2 text-[15px] font-semibold text-gray-900">{selectedLead.name}</p>
                                        </div>

                                        {selectedLead.rut && (
                                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Documento (RUT)</label>
                                                <p className="mt-2 text-[15px] font-mono text-gray-900">{selectedLead.rut}</p>
                                            </div>
                                        )}

                                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Correo</label>
                                            <a href={`mailto:${selectedLead.email}`} className="mt-2 block text-[14px] font-medium text-navy-deep hover:underline truncate">{selectedLead.email}</a>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Celular</label>
                                            <a href={`tel:${selectedLead.phone}`} className="mt-2 block text-[15px] font-mono text-navy-deep hover:text-amber-600 transition-colors">{selectedLead.phone}</a>
                                        </div>

                                        {selectedLead.company && (
                                            <div className="md:col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
                                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Building className="w-3.5 h-3.5" /> Institución / Empresa</label>
                                                <p className="mt-2 text-[15px] font-semibold text-gray-900">{selectedLead.company} <span className="text-gray-500 font-normal ml-2">{selectedLead.role ? `— ${selectedLead.role}` : ''}</span></p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Context */}
                                    <div className="bg-gradient-to-br from-navy-deep/5 to-transparent p-5 rounded-2xl border border-navy-deep/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-navy-deep text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-sm">Origen: {selectedLead.variant}</span>
                                        </div>

                                        <h4 className="text-sm font-bold text-gray-900 mb-2">{selectedLead.interest}</h4>

                                        {selectedLead.message && (
                                            <div className="mt-4 pt-4 border-t border-gray-200">
                                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Mensaje del Usuario</p>
                                                <p className="text-sm text-gray-700 leading-relaxed italic border-l-2 border-navy-deep/20 pl-3">"{selectedLead.message}"</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Management Tools */}
                                    <div className="pt-2">
                                        <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2 text-sm uppercase tracking-wider"><Briefcase className="w-4 h-4 text-navy-deep" /> Herramientas de Cierre</h3>

                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Estado</label>
                                                <div className="relative">
                                                    <select
                                                        value={editStatus}
                                                        onChange={(e) => setEditStatus(e.target.value)}
                                                        className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-3 px-4 text-gray-900 font-medium focus:ring-2 focus:ring-navy-deep focus:border-navy-deep appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                                                    >
                                                        <option value="NUEVO">🔵 NUEVO</option>
                                                        <option value="CONTACTADO">🟡 CONTACTADO</option>
                                                        <option value="EN PROCESO">🟣 EN PROCESO</option>
                                                        <option value="CERRADO">🟢 CERRADO</option>
                                                        <option value="DESCARTADO">🔴 DESCARTADO</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Notas</label>
                                                <textarea
                                                    rows={5}
                                                    value={editNotes}
                                                    onChange={(e) => setEditNotes(e.target.value)}
                                                    placeholder="Registra las llamadas, acuerdos económicos o la razón de rechazo aquí..."
                                                    className="w-full bg-white border border-gray-200 shadow-sm rounded-xl py-3 px-4 text-gray-900 text-sm focus:ring-2 focus:ring-navy-deep focus:border-navy-deep resize-none custom-scrollbar placeholder:text-gray-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Footer */}
                                <div className="p-5 border-t border-gray-200 bg-gray-50 flex justify-end gap-3 mt-auto">
                                    <button
                                        onClick={() => setSelectedLead(null)}
                                        className="px-5 py-2.5 text-sm font-bold text-gray-600 bg-white border border-gray-300 shadow-sm rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    >
                                        Cerrar Ficha
                                    </button>
                                    <button
                                        disabled={isSaving || (editStatus === selectedLead.status && editNotes === (selectedLead.notes || ""))}
                                        onClick={handleSaveLead}
                                        className="px-6 py-2.5 text-sm font-black text-white bg-navy-deep border border-transparent rounded-xl hover:bg-navy-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-navy-deep transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm disabled:shadow-none"
                                    >
                                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : <CheckSquare className="w-5 h-5 stroke-[2.5]" />}
                                        Sincronizar Datos
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
