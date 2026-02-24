import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { FloatingCTA } from "@/app/components/layout/FloatingCTA";
import { WhatsAppButton } from "@/app/components/layout/WhatsAppButton";
import { SchemaMarkup } from "@/app/components/seo/SchemaMarkup";
import { ReCaptchaProvider } from "@/app/components/providers/ReCaptchaProvider";

import { ClientConditionalWrapper } from "@/app/components/layout/ClientConditionalWrapper";

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
  icons: {
    icon: "/imagenes/favicon.webp",
  },
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
        <ReCaptchaProvider>
          <ClientConditionalWrapper>
            <Navbar />
          </ClientConditionalWrapper>

          <main className="min-h-screen">
            {children}
          </main>

          <ClientConditionalWrapper>
            <Footer />
            <FloatingCTA />
            <WhatsAppButton />
            <SchemaMarkup />
          </ClientConditionalWrapper>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
