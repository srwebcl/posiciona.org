# Posiciona.org - Ecosistema de Formación Técnica

> **Desarrollado y mantenido por [srweb](https://srweb.cl)**

Este repositorio contiene el código fuente de la plataforma web moderna para **Posiciona.org**, construida con tecnologías de vanguardia para garantizar rendimiento, accesibilidad y una experiencia de usuario premium.

## 🛠 Stack Tecnológico

La arquitectura del proyecto se basa en un stack moderno y eficiente:

*   **Core**: [Next.js 16.1](https://nextjs.org/) (App Router) - Framework React para producción.
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) - Tipado estático robusto.
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) - Motor de estilos "utility-first" de próxima generación (configuración `oxford-spell`).
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones declarativas para React.
*   **Componentes UI**:
    *   [Radix UI](https://www.radix-ui.com/) - Primitivas accesibles sin estilos.
    *   [Lucide React](https://lucide.dev/) - Iconografía consistente y ligera.
*   **Fuentes**: `next/font` optimizado con **Montserrat** (Sans) y **JetBrains Mono** (Mono).

## 📂 Estructura del Proyecto

El proyecto sigue la arquitectura de **App Router** de Next.js:

```bash
/
├── app/
│   ├── components/         # Componentes React modulares
│   │   ├── layout/         # Navbar, Footer, FloatingCTA
│   │   ├── home/           # Componentes específicos de la Home
│   │   ├── personas/       # UI para sección Personas
│   │   ├── ui/             # Componentes base reutilizables (Botones, Modales)
│   │   └── seo/            # Componentes de metadatos y Schema markup
│   ├── (routes)/           # Rutas de la aplicación (personas, empresas, etc.)
│   ├── globals.css         # Configuración global de estilos y @theme de Tailwind v4
│   └── layout.tsx          # Layout raíz con proveedores y configuración de fuentes
├── public/                 # Assets estáticos (imágenes, favicons)
└── ...configFiles          # Configuración de herramientas (TypeScript, PostCSS, etc.)
```

## 🚀 Instalación y Despliegue

### Requisitos Previos

*   Node.js 18+
*   npm

### Desarrollo Local

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/srwebcl/posiciona.org.git
    cd posiciona.org
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:3000`.

### Construcción para Producción

Para generar una build optimizada:

```bash
npm run build
npm start
```

## 🎨 Guía de Estilos y Diseño

El sistema de diseño utiliza variables CSS nativas integradas via Tailwind v4 (`app/globals.css`):

*   **Colores Corporativos**:
    *   `--color-navy-deep`: Base oscura principal (#08355c / #020617)
    *   `--color-amber-vial`: Acento primario (#ffb000)
    *   `--color-blue-inst`: Acento secundario (#0f60a0)
*   **Tipografía**:
    *   Principal: Montserrat
    *   Código/Técnico: JetBrains Mono

## 🤝 Contribución

Este proyecto es propiedad de **Posiciona.org** y desarrollado por **srweb**. Cualquier cambio debe seguir los estándares de código (ESLint, TypeScript Strict Mode) y pasar por revisión.

---

© 2026 Posiciona.org | Powered by **srweb**
