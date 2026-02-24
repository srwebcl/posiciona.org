"use client";

import { useEffect, useState, useRef } from "react";
import { Loader2, Search, Filter, Mail, Phone, Building, Briefcase, Calendar, CheckSquare, User, FileText, Download, Upload } from "lucide-react";
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
    NUEVO: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    CONTACTADO: "bg-amber-vial/10 text-amber-500 border-amber-vial/20",
    "EN NEGOCIACION": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    CERRADO: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    DESCARTADO: "bg-red-500/10 text-red-400 border-red-500/20"
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

    // Modal forms states
    const [editStatus, setEditStatus] = useState("");
    const [editNotes, setEditNotes] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    // Import/Export states
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isProcessingExcel, setIsProcessingExcel] = useState(false);

    const fetchLeads = async (filter: string = "") => {
        setLoading(true);
        try {
            const url = filter ? `/api/admin/leads?filter=${filter}` : '/api/admin/leads';
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) setLeads(data.leads);
        } catch (error) {
            console.error("Error fetching leads:", error);
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

    // --- Excel Integration Functions ---

    const downloadExcel = () => {
        if (leads.length === 0) return alert("No hay datos para exportar.");

        // Mapear los datos para que sean legibles en el Excel
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
        // Auto-estirar el ancho de las columnas
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

                // Enviar el array de datos crudos a nuestra API de importación
                const res = await fetch('/api/admin/leads/import', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: rawData })
                });

                const apiResult = await res.json();

                if (apiResult.success) {
                    alert(`¡Éxito! Se procesaron ${apiResult.imported} leads exitosamente.`);
                    // Refrescar la tabla virtual
                    fetchLeads(activeFilter);
                } else {
                    alert("Error durante la importación: " + (apiResult.error || "Formato de columnas incorrecto. Asegúrate de usar la plantilla exportada."));
                }
            } catch (error) {
                console.error("Error al procesar el Excel:", error);
                alert("Ocurrió un error inesperado al leer el archivo Excel.");
            } finally {
                setIsProcessingExcel(false);
                if (fileInputRef.current) fileInputRef.current.value = ""; // reset input
            }
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden bg-[#0A0F1C]">

            {/* Top Toolbar (Import/Export) */}
            <div className="w-full bg-navy-deep border-b border-white/5 p-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-3">
                    <h1 className="text-white font-bold text-lg hidden sm:block">Gestión de Leads</h1>
                    <span className="bg-amber-vial/20 text-amber-vial text-xs px-2 py-1 rounded font-bold border border-amber-vial/30">
                        {loading ? "..." : leads.length} Registros
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
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm"
                    >
                        {isProcessingExcel ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                        <span className="hidden sm:inline">Importar Base</span>
                    </button>

                    <button
                        onClick={downloadExcel}
                        className="flex items-center gap-2 bg-amber-vial hover:bg-amber-500 text-navy-deep px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,176,0,0.3)] hover:shadow-[0_0_20px_rgba(255,176,0,0.5)]"
                    >
                        <Download className="w-4 h-4 stroke-[2.5]" />
                        <span className="hidden sm:inline">Exportar Excel</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 bg-navy-deep/50 border-r border-white/5 p-4 overflow-y-auto hidden md:block">
                    <div className="flex items-center gap-2 text-white/50 font-bold mb-6 text-sm uppercase tracking-wider">
                        <Filter className="w-4 h-4" /> Categorías de Origen
                    </div>
                    <ul className="space-y-2">
                        {FILTERS.map(f => (
                            <li key={f.label}>
                                <button
                                    onClick={() => handleFilterChange(f.value)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all font-medium border
                                        ${activeFilter === f.value
                                            ? "bg-amber-vial/10 text-amber-vial border-amber-vial/30 shadow-[0_0_10px_rgba(255,176,0,0.1)]"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white border-transparent"
                                        }`}
                                >
                                    {f.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content: Table & Details */}
                <div className={`flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-br from-navy-deep to-[#0A0F1C] ${selectedLead ? 'hidden lg:block lg:w-1/2 opacity-50 pointer-events-none transition-opacity' : 'w-full'}`}>

                    {/* Mobile Filter Dropdown */}
                    <div className="md:hidden mb-4">
                        <select
                            className="w-full bg-navy-deep border border-white/10 text-white rounded-xl p-3 text-sm focus:ring-amber-vial focus:border-amber-vial appearance-none font-medium"
                            value={activeFilter}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            {FILTERS.map(f => (
                                <option key={f.label} value={f.value}>{f.label === "Todos" ? "Todas las Categorías" : f.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-navy-deep/40 rounded-2xl shadow-xl border border-white/5 overflow-hidden backdrop-blur-md">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="w-8 h-8 animate-spin text-amber-vial" />
                            </div>
                        ) : leads.length === 0 ? (
                            <div className="text-center py-20 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                    <Search className="w-8 h-8 text-white/20" />
                                </div>
                                <p className="text-xl font-bold text-white mb-2">Base de Datos Limpia</p>
                                <p className="text-sm text-gray-400">No se encontraron prospectos en esta categoría.</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-white/5 max-w-full">
                                {leads.map(lead => (
                                    <li
                                        key={lead.id}
                                        onClick={() => handleLeadSelect(lead)}
                                        className={`p-5 hover:bg-white/5 cursor-pointer transition-colors relative
                                            ${selectedLead?.id === lead.id ? 'bg-white/5' : ''}`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-navy-deep border border-white/10 flex items-center justify-center shrink-0">
                                                    <span className="text-white font-bold text-sm">{lead.name.charAt(0).toUpperCase()}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white text-[15px] group-hover:text-amber-vial transition-colors">{lead.name}</h3>
                                                    <div className="text-xs text-gray-400 mt-0.5">
                                                        <span className="text-white/70">{lead.variant}</span> / {lead.interest}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider self-start sm:self-auto border ${STATUS_COLORS[lead.status] || "bg-gray-800 text-gray-300 border-gray-700"}`}>
                                                {lead.status}
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row text-xs text-gray-400 gap-y-2 gap-x-6 sm:pl-13 mt-4">
                                            <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-white/30" /> <span className="truncate">{lead.email}</span></span>
                                            <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-white/30" /> {new Date(lead.createdAt).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
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
                            className="lg:hidden fixed inset-0 bg-black/60 z-30"
                            onClick={() => setSelectedLead(null)}
                        />

                        <div className="fixed lg:relative inset-y-0 right-0 w-full md:w-[500px] lg:w-[600px] bg-navy-deep border-l border-white/10 shadow-2xl z-40 flex flex-col transform transition-transform duration-300">

                            {/* Header */}
                            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-black/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-6 bg-amber-vial rounded-full" />
                                    <h2 className="text-lg font-bold text-white">Ficha de Prospecto</h2>
                                </div>
                                <button onClick={() => setSelectedLead(null)} className="p-2 hover:bg-white/10 rounded-full text-gray-400 transition-colors">
                                    <span className="sr-only">Cerrar</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar">

                                {/* Info Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Cliente</label>
                                        <p className="mt-2 text-[15px] font-semibold text-white">{selectedLead.name}</p>
                                    </div>

                                    {selectedLead.rut && (
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Documento (RUT)</label>
                                            <p className="mt-2 text-[15px] font-mono text-white">{selectedLead.rut}</p>
                                        </div>
                                    )}

                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Correo</label>
                                        <a href={`mailto:${selectedLead.email}`} className="mt-2 block text-[14px] font-medium text-amber-vial hover:underline truncate">{selectedLead.email}</a>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Celular</label>
                                        <a href={`tel:${selectedLead.phone}`} className="mt-2 block text-[15px] font-mono text-amber-vial hover:text-white transition-colors">{selectedLead.phone}</a>
                                    </div>

                                    {selectedLead.company && (
                                        <div className="md:col-span-2 bg-white/5 rounded-xl p-4 border border-white/5">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Building className="w-3.5 h-3.5" /> Institución / Empresa</label>
                                            <p className="mt-2 text-[15px] font-semibold text-white">{selectedLead.company} <span className="text-gray-400 font-normal ml-2">{selectedLead.role ? `— ${selectedLead.role}` : ''}</span></p>
                                        </div>
                                    )}
                                </div>

                                {/* Context */}
                                <div className="bg-gradient-to-br from-amber-vial/10 to-transparent p-5 rounded-2xl border border-amber-vial/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-amber-vial text-navy-deep text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded">Origen: {selectedLead.variant}</span>
                                    </div>

                                    <h4 className="text-sm font-bold text-white mb-2">{selectedLead.interest}</h4>

                                    {selectedLead.message && (
                                        <div className="mt-4 pt-4 border-t border-amber-vial/10">
                                            <p className="text-[10px] font-bold text-amber-vial/60 uppercase tracking-widest mb-2">Mensaje del Usuario</p>
                                            <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-amber-vial/30 pl-3">"{selectedLead.message}"</p>
                                        </div>
                                    )}
                                </div>

                                {/* Management Tools */}
                                <div className="pt-2">
                                    <h3 className="font-bold text-white mb-5 flex items-center gap-2 text-sm uppercase tracking-wider"><Briefcase className="w-4 h-4 text-amber-vial" /> Herramientas de Cierre</h3>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Estado del Trato</label>
                                            <div className="relative">
                                                <select
                                                    value={editStatus}
                                                    onChange={(e) => setEditStatus(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white font-medium focus:ring-2 focus:ring-amber-vial focus:border-amber-vial appearance-none cursor-pointer hover:bg-black/60 transition-colors"
                                                >
                                                    <option value="NUEVO">🔵 NUEVO - Recién Ingresado</option>
                                                    <option value="CONTACTADO">🟡 CONTACTADO - En conversaciones</option>
                                                    <option value="EN NEGOCIACION">🟣 EN NEGOCIACIÓN - Cotización enviada</option>
                                                    <option value="CERRADO">🟢 CERRADO - Venta Exitosa</option>
                                                    <option value="DESCARTADO">🔴 DESCARTADO - No califica</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Bitácora Interna</label>
                                            <textarea
                                                rows={5}
                                                value={editNotes}
                                                onChange={(e) => setEditNotes(e.target.value)}
                                                placeholder="Registra las llamadas, acuerdos económicos o la razón de rechazo aquí..."
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:ring-2 focus:ring-amber-vial focus:border-amber-vial resize-none custom-scrollbar placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="p-5 border-t border-white/5 bg-black/40 flex justify-end gap-3 mt-auto backdrop-blur-md">
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    className="px-5 py-2.5 text-sm font-bold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    Cerrar Ficha
                                </button>
                                <button
                                    disabled={isSaving || (editStatus === selectedLead.status && editNotes === (selectedLead.notes || ""))}
                                    onClick={handleSaveLead}
                                    className="px-6 py-2.5 text-sm font-black text-navy-deep bg-amber-vial border border-transparent rounded-xl hover:bg-amber-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep focus:ring-amber-vial transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_4px_15px_rgba(255,176,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,176,0,0.4)] disabled:shadow-none"
                                >
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckSquare className="w-5 h-5 stroke-[2.5]" />}
                                    Sincronizar Datos
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
