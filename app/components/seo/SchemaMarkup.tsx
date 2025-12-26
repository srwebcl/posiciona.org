export function SchemaMarkup() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Posiciona OTEC",
        "description": "Organismo Técnico de Capacitación líder en Arica. Escuela de Conductores Profesionales, Talento Digital y Oficios Industriales.",
        "url": "https://posiciona.cl",
        "logo": "https://posiciona.cl/imagenes/Logo-Posiciona.webp",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Santa María 2050",
            "addressLocality": "Arica",
            "addressRegion": "Arica y Parinacota",
            "postalCode": "1000000",
            "addressCountry": "CL"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56-58-2-222-222",
            "contactType": "customer service",
            "areaServed": "CL",
            "availableLanguage": "Spanish"
        },
        "sameAs": [
            "https://facebook.com/posiciona",
            "https://instagram.com/posiciona",
            "https://linkedin.com/company/posiciona"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
    );
}
