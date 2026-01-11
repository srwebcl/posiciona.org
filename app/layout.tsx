import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { FloatingCTA } from "@/app/components/layout/FloatingCTA";
import { SchemaMarkup } from "@/app/components/seo/SchemaMarkup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posiciona.org | Ecosistema de Formación Técnica",
  description: "Liderando la formación industrial y digital desde Arica. Cursos SENCE, Escuela de Conductores Profesional y Bootcamps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased bg-navy-deep text-white selection:bg-amber-vial selection:text-navy-deep relative overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <SchemaMarkup />
      </body>
    </html>
  );
}
