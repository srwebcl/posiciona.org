export function SchemaMarkup() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Posiciona OTEC",
        "description": "Organismo Técnico de Capacitación líder en Arica. Escuela de Conductores Profesionales, Talento Digital y Oficios.",
        "url": "https://posiciona.cl",
        "logo": "https://posiciona.cl/imagenes/Logo-Posiciona.webp",

        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56 9 8453 4364",
            "email": "posiciona@posiciona.org",
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
