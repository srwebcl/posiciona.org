import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                navy: {
                    deep: "#020617", // Slate-950 base
                    dark: "#0f172a", // Slate-900
                },
                amber: {
                    vial: "#ffb000", // Road sign amber
                },
                blue: {
                    inst: "#0ea5e9", // Sky-500
                },
            },
            backgroundImage: {
                "hybrid-gradient": "linear-gradient(to bottom, #020617, #0f172a)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                shine: {
                    "0%": { backgroundPosition: "200% center" },
                    "100%": { backgroundPosition: "-200% center" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shine: "shine 8s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
