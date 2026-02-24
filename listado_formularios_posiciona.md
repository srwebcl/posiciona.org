# Listado de Formularios Web - Posiciona

Todos los formularios del sitio web utilizan el mismo componente base (`ContactForm`) y procesan sus envíos a través de un único endpoint API (`/api/contact`). A continuación se detalla su funcionamiento general y las instancias específicas.

## Configuración General de Envío (API)
- **Endpoint:** `POST /api/contact`
- **Remitente (From):** `"Posiciona Web" <noreply@posiciona.org>`
- **Destinatario Principal (To):** `posiciona@posiciona.org`
- **Con Copia (CC):** `contacto@wylar.cl` *(Aplica **únicamente** si el campo "Interés/Asunto" elegido por el usuario contiene la palabra "certificación")*
- **Asunto del Correo:** `Nuevo Contacto Web: {variante_del_formulario} - {interes_o_asunto}`

*(Nota: Actualmente en `/api/contact/route.ts` la función de envío real mediante Nodemailer está comentada temporalmente para pruebas, lo cual significa que devuelve un resultado exitoso pero no despacha correos).*

---

## Detalle por Formulario / Página

### 1. Cursos Individuales (Dinámico)
- **URL:** `/cursos/[slug]` (Ej: `/cursos/operacion-grua-horquilla`)
- **Tipo (Variante):** Persona
- **Configuración:** Campo de interés pre-llenado automáticamente y oculto con el título del curso correspondiente.

### 2. Contacto General
- **URL:** `/contacto`
- **Tipo (Variante):** General
- **Configuración:** Formulario estándar. Permite escribir el "Asunto" del mensaje en un recuadro de texto libre (no dropdown).

### 3. Contacto Personas
- **URL:** `/personas/contacto`
- **Tipo (Variante):** Persona
- **Configuración:** Solicita obligatoriamente Nombre, Correo y Teléfono, con el RUT de forma opcional. Despliega un menú con todos los cursos que dispone la empresa como opciones de interés.

### 4. Certificaciones Personas
- **URL:** `/personas/certificaciones`
- **Tipo (Variante):** Persona (Diseño exclusivo)
- **Configuración:** Oculta la lista de cursos estándar y la reemplaza por un dropdown de "Oficio a Certificar", el cual muestra las opciones traídas de Wylar (`wylarCertifications`).
- **Destinatarios:** Cuando se escoge una de estas opciones, se enviará **copia a `contacto@wylar.cl`**.

### 5. Contacto Empresas (Página Principal Empresas y Contacto)
- **URL:** `/empresas` y `/empresas/contacto`
- **Tipo (Variante):** Empresa
- **Configuración:** Solicita campos de "Empresa / Razón Social" y "Cargo / Rol". Oculta los RUTs. Pre-selecciona y oculta el interés a *"Empresas - General"*.

### 6. Capacitaciones Empresas
- **URL:** `/empresas/capacitaciones`
- **Tipo (Variante):** Empresa
- **Configuración:** Similar al de empresas general, pero con un grid de diseño visual a una sola columna y con el interés definido de forma rígida a *"Capacitación Empresa"*.

### 7. Certificaciones Empresas
- **URL:** `/empresas/certificaciones`
- **Tipo (Variante):** Empresa
- **Configuración:** Oculta el listado genérico de empresas y aplica un dropdown personalizado llamado "Certificación de Interés" que consume del catálogo de certificaciones de Wylar.
- **Destinatarios:** Envío con **copia a `contacto@wylar.cl`** puesto que se trata de certificaciones.

### 8. Oficina Virtual (Soporte)
- **URL:** `/oficina-virtual` (Se despliega como ventana modal - popup)
- **Tipo (Variante):** General
- **Configuración:** Formulario de un campo de nombre y mensaje pre-llenando el asunto invisiblemente como *"Soporte Académico"*.

### 9. Landing Escuela de Conductores
- **Ubicación:** Componentes en página y modal de `EscuelaLandingContent.tsx`
- **Tipo (Variante):** Persona
- **Configuración:** Formulario configurado con un filtro de categoría. Despliega los cursos para escoger pero **sólo muestra aquellos que clasifican como "ESCUELA DE CONDUCTORES"**.

### 10. Preguntas Frecuentes (FAQ) Personas
- **Ubicación:** Componente `PersonasFAQ.tsx`
- **Tipo (Variante):** Persona
- **Configuración:** Renderiza el formulario clásico para Personas sin opciones predefinidas al final del bloque de preguntas y respuestas.
