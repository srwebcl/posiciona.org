"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
    // Número base
    const phoneNumber = "56984534364";
    const message = "Hola! Vengo desde su sitio web y me gustaría recibir más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 md:left-auto md:right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:bg-[#128C7E] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar por WhatsApp"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9">
                <path d="M12.031 0A12.016 12.016 0 000 12.022c0 2.123.553 4.195 1.583 6.01L.001 24l6.115-1.583A11.96 11.96 0 0012.031 24c6.627 0 11.969-5.385 11.969-12.016C24 5.378 18.647 0 12.031 0zm0 21.996c-1.801 0-3.564-.486-5.111-1.405l-.366-.217-3.8.983.999-3.7-.238-.378A9.976 9.976 0 012.008 11.98C2.008 6.452 6.495 1.956 12.031 1.956c5.526 0 10.015 4.498 10.015 10.024 0 5.526-4.488 10.016-10.015 10.016zm5.5-7.514c-.302-.151-1.786-.883-2.062-.983-.277-.101-.478-.151-.68.151-.202.302-.782.983-.958 1.183-.176.202-.352.227-.655.076-.302-.151-1.275-.471-2.43-1.5-.898-.801-1.503-1.79-1.68-2.091-.176-.302-.018-.465.133-.616.136-.136.302-.353.453-.53.151-.176.202-.302.302-.503.1-.202.05-.378-.025-.53-.076-.151-.68-1.637-.933-2.242-.246-.59-.496-.51-.68-.52-.176-.01-.378-.01-.58-.01-.202 0-.528.076-.804.378-.277.302-1.056 1.033-1.056 2.519 0 1.487 1.082 2.924 1.233 3.126.151.202 2.13 3.25 5.161 4.557.721.31 1.282.496 1.723.635.723.23 1.382.197 1.902.12.58-.086 1.786-.731 2.038-1.436.252-.705.252-1.31.176-1.436-.076-.126-.277-.202-.58-.353z" />
            </svg>
        </motion.a>
    );
}
