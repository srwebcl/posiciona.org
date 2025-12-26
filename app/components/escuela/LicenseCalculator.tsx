"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function LicenseCalculator() {
    const [currentLicense, setCurrentLicense] = useState<string>("");
    const [yearsHeld, setYearsHeld] = useState<number>(0);
    const [result, setResult] = useState<{ eligible: boolean; message: string; timeSaved?: string } | null>(null);

    const calculate = () => {
        // Simplified logic for demo purposes based on Chilean law A3 requirements
        // A3 requires: 2 years with A2 OR 2 years with A5 OR 2 years with A1 (old) OR 2 years with A4 (wait, A4->A3 is not direct usually without A2 intermediate, but accelerated courses exist).
        // Prompt says: "Mostrar visualmente cómo el curso reduce la espera de 4 a 2 años".
        // This implies bridging from lower classes.

        if (!currentLicense) {
            setResult({ eligible: false, message: "Selecciona tu licencia actual." });
            return;
        }

        if (currentLicense === "B" && yearsHeld >= 2) {
            setResult({
                eligible: true,
                message: "¡Puedes postular a la Licencia A2 o A4 ahora!",
                timeSaved: "Estás a 2 años de tu A3 profesional."
            });
        } else if ((currentLicense === "A2" || currentLicense === "A4") && yearsHeld >= 2) {
            setResult({
                eligible: true,
                message: "¡Eres candidato ideal para la Licencia A3!",
                timeSaved: "Ya cumpliste el requisito de antigüedad."
            });
        } else if (currentLicense === "B" && yearsHeld < 2) {
            setResult({
                eligible: false,
                message: `Te faltan ${2 - yearsHeld} años de antigüedad con clase B para iniciar tu carrera profesional.`,
            });
        } else {
            setResult({
                eligible: true,
                message: "Contáctanos para evaluar tu caso específico y convalidar experiencia.",
            });
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto bg-night-blue border border-white/10 shadow-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-industrial/20 p-2 rounded-lg text-orange-industrial">
                    <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Calculadora A3</h3>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Licencia Actual</label>
                    <div className="grid grid-cols-3 gap-2">
                        {["B", "A2", "A4", "A5", "Ninguna"].map((lic) => (
                            <button
                                key={lic}
                                onClick={() => setCurrentLicense(lic)}
                                className={`py-2 px-3 rounded-md text-sm font-bold border transition-all ${currentLicense === lic ? "bg-orange-industrial text-white border-orange-industrial" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}`}
                            >
                                {lic}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Años de Antigüedad: {yearsHeld}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={yearsHeld}
                        onChange={(e) => setYearsHeld(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-industrial"
                    />
                </div>

                <Button onClick={calculate} className="w-full bg-orange-industrial hover:bg-orange-600 text-white font-bold">
                    Calcular Tiempo
                </Button>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`mt-4 p-4 rounded-lg border ${result.eligible ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"}`}
                    >
                        <div className="flex items-start gap-3">
                            {result.eligible ? <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> : <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />}
                            <div>
                                <h4 className={`font-bold ${result.eligible ? "text-green-400" : "text-red-400"}`}>
                                    {result.eligible ? "Eligible" : "No Eligible Aún"}
                                </h4>
                                <p className="text-sm text-gray-300 mt-1">{result.message}</p>
                                {result.timeSaved && (
                                    <div className="flex items-center gap-2 mt-3 text-orange-industrial text-sm font-bold bg-orange-industrial/10 p-2 rounded">
                                        <Clock className="w-4 h-4" />
                                        {result.timeSaved}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </Card>
    );
}
