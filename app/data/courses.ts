import { Truck, Wrench, Code2, Globe, Zap, HeartPulse, Languages, Star, Forklift, HardHat, Terminal, Layout, LineChart, Database, Shield, Cloud, Smartphone } from "lucide-react";

export const COURSES = [
    // --- ESCUELA DE CONDUCTORES ---
    {
        id: "escuela-a2",
        slug: "curso-profesional-a2",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica Presencial",
        title: "Curso Profesional A2",
        description: "Amplía tus oportunidades laborales en el transporte de pasajeros, incluyendo aplicaciones móviles y servicios.",
        extendedDescription: "Obtén tu Licencia Profesional Clase A2 y amplía tus oportunidades laborales en el transporte de pasajeros, incluyendo aplicaciones móviles y servicios públicos o privados.",
        icon: Truck,
        image: "/imagenes/a2.png",
        duration: "2 Meses",
        tags: ["Transporte Pasajeros", "Apps Móviles", "Ambulancias"],
        badge: "Alta Empleabilidad",
        color: "amber",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Clases prácticas de 45 minutos en vehículo de pasajeros",
                "Evaluación psicotécnica incluida",
                "La etapa teórica se desarrolla online y, una vez aprobada, avanzas a la fase práctica obligatoria de conducción."
            ],
            allowsDriving: [
                "Taxis y transporte por aplicaciones (Uber, Didi, Cabify, entre otras).",
                "Ambulancias.",
                "Vehículos de transporte público o privado con capacidad de 10 a 17 pasajeros (sin incluir al conductor).",
                "Además, con más de 2 años de antigüedad en A2, habilita para conducir vehículos de hasta 32 pasajeros, cuyo largo no exceda los 9 metros."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Licencia Clase B con mínimo 2 años de antigüedad",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, deberán presentar comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Realizar y aprobar las clases prácticas de conducción obligatorias."
            ],
            certification: "Al aprobar las etapas teórica y práctica, se emite certificado oficial acreditado por el Ministerio de Transportes y Telecomunicaciones.",
            importantInfo: [
                "Las clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    {
        id: "escuela-a3",
        slug: "curso-profesional-a3",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica Presencial",
        title: "Curso Profesional A3",
        description: "Oportunidades laborales en el transporte de pasajeros de gran capacidad, público y privado.",
        extendedDescription: "Obtén tu Licencia Profesional Clase A3 y accede a oportunidades laborales en el transporte de pasajeros de gran capacidad, tanto en servicios públicos como privados.",
        icon: Truck,
        image: "/imagenes/a3.png",
        duration: "2 Meses",
        tags: ["Buses y Minibuses", "Transporte Público", "Sin límite de asientos"],
        badge: "Alto Tonelaje",
        color: "amber",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Clases prácticas presenciales en bus",
                "Evaluación psicotécnica incluida",
                "La etapa teórica se desarrolla online y, una vez aprobada, avanzas a la fase práctica obligatoria."
            ],
            allowsDriving: [
                "Buses de transporte público urbano e interurbano.",
                "Transporte privado de pasajeros (personal, escolar, turismo).",
                "Vehículos destinados al transporte de pasajeros sin límite de capacidad de asientos."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Poseer licencia profesional (A1 antigua, A2 o A4) con mínimo 2 años de antigüedad",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Realizar y aprobar las clases prácticas presenciales en bus."
            ],
            certification: "Al aprobar las etapas teórica y práctica, se emite certificado oficial acreditado por el Ministerio de Transportes y Telecomunicaciones.",
            importantInfo: [
                "Las clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    {
        id: "escuela-a3-simulador",
        slug: "curso-profesional-a3-simulador",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica y Simulador",
        title: "Curso Profesional A3 Plan Especial con Simulador",
        description: "Accede directamente a la Licencia A3 desde Clase B. Reemplaza los 2 años de licencia profesional previa.",
        extendedDescription: "Accede directamente a la Licencia Profesional Clase A3 desde Clase B, mediante el Plan Especial con Simulador de Inmersión Total autorizado por el Ministerio.",
        icon: Truck,
        image: "/imagenes/a3-especial.png",
        duration: "2 Meses",
        tags: ["Simulador Acreditado", "Directo desde Clase B", "Sin A1/A2 previa"],
        badge: "Plan Especial",
        color: "amber",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Entrenamiento con Simulador de Inmersión Total (Obligatorio)",
                "Clases prácticas presenciales en bus",
                "Evaluación psicotécnica incluida"
            ],
            allowsDriving: [
                "Buses de transporte público urbano e interurbano.",
                "Transporte privado de pasajeros (personal, escolar, turismo).",
                "Vehículos destinados al transporte de pasajeros sin límite de capacidad de asientos."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Licencia Clase B con mínimo 2 años de antigüedad (REEMPLAZA licencia profesional previa)",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Aprobar el entrenamiento en simulador de inmersión total.",
                "Realizar y aprobar las clases prácticas presenciales en bus."
            ],
            certification: "Al aprobar las etapas teórica, simulador y práctica, se emite certificado oficial del Ministerio de Transportes y Telecomunicaciones, habilitando para rendir examen municipal.",
            importantInfo: [
                "Las horas de simulación y clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    {
        id: "escuela-a4",
        slug: "curso-profesional-a4",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica Presencial",
        title: "Curso Profesional A4 (Próximamente)",
        description: "Accede al transporte profesional de carga pesada no articulada en el sector logístico.",
        extendedDescription: "Obtén tu Licencia Profesional Clase A4 y accede al transporte profesional de carga pesada no articulada, ampliando tus oportunidades laborales en el sector logístico y productivo.",
        icon: Truck,
        image: "/imagenes/a4.png",
        duration: "2 Meses",
        tags: ["Carga Pesada", "Camiones Simples", "Próximamente"],
        badge: "Logística",
        color: "blue",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Clases prácticas presenciales en vehículo de carga",
                "Evaluación psicotécnica incluida",
                "La etapa teórica se desarrolla online y, una vez aprobada, avanzas a la fase práctica obligatoria."
            ],
            allowsDriving: [
                "Vehículos simples destinados al transporte de carga cuyo Peso Bruto Vehicular sea superior a 3.500 kilogramos.",
                "Camiones simples y vehículos de carga no articulados."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Licencia Clase B con mínimo 2 años de antigüedad",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Realizar y aprobar las clases prácticas de conducción obligatorias."
            ],
            certification: "Al aprobar las etapas teórica y práctica, se emite certificado oficial acreditado por el Ministerio de Transportes y Telecomunicaciones.",
            importantInfo: [
                "Las clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    {
        id: "escuela-a5",
        slug: "curso-profesional-a5",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica Presencial",
        title: "Curso Profesional A5 (Próximamente)",
        description: "Accede al transporte de carga pesada articulada, alta demanda laboral en logística.",
        extendedDescription: "Obtén tu Licencia Profesional Clase A5 y accede al transporte de carga pesada articulada, uno de los sectores con mayor demanda laboral del rubro logístico.",
        icon: Truck,
        image: "/imagenes/a5.png",
        duration: "2 Meses",
        tags: ["Carga Articulada", "Tractocamiones", "Próximamente"],
        badge: "Alta Demanda",
        color: "blue",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Clases prácticas presenciales en camión articulado",
                "Evaluación psicotécnica incluida",
                "La etapa teórica se desarrolla online y, una vez aprobada, avanzas a la fase práctica obligatoria."
            ],
            allowsDriving: [
                "Todo tipo de vehículos motorizados, simples o articulados, destinados al transporte de carga cuyo Peso Bruto Vehicular sea superior a 3.500 kilogramos.",
                "Camiones articulados y tractocamiones con semirremolque."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Poseer licencia profesional (A2, A3 o A4) con mínimo 2 años de antigüedad",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Realizar y aprobar las clases prácticas de conducción obligatorias."
            ],
            certification: "Al aprobar las etapas teórica y práctica, se emite certificado oficial acreditado por el Ministerio de Transportes y Telecomunicaciones.",
            importantInfo: [
                "Las clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    {
        id: "escuela-a5-simulador",
        slug: "curso-profesional-a5-simulador",
        category: "ESCUELA DE CONDUCTORES",
        location: "Online / Práctica y Simulador",
        title: "Curso Profesional A5 Plan Especial con Simulador (Próximamente)",
        description: "Accede directamente a la Licencia A5 desde Clase B mediante el Plan Especial con Simulador.",
        extendedDescription: "Accede directamente a la Licencia Profesional Clase A5 desde Clase B mediante el Plan Especial autorizado por el Ministerio de Transportes y Telecomunicaciones.",
        icon: Truck,
        image: "/imagenes/a5-especial.png",
        duration: "2 Meses",
        tags: ["Simulador Acreditado", "Directo desde Clase B", "Próximamente"],
        badge: "Plan Especial",
        color: "blue",
        learning_outcomes: [],
        details: {
            modality: [
                "Modalidad Asincrónica (teoría 100% online)",
                "Acceso a plataforma 24/7 desde cualquier dispositivo",
                "Duración aproximada: 2 meses",
                "Entrenamiento con Simulador de Inmersión Total (Obligatorio)",
                "Clases prácticas presenciales en camión articulado",
                "Evaluación psicotécnica incluida"
            ],
            allowsDriving: [
                "Todo tipo de vehículos motorizados, simples o articulados, destinados al transporte de carga cuyo Peso Bruto Vehicular sea superior a 3.500 kilogramos.",
                "Camiones articulados y tractocamiones con semirremolque."
            ],
            requirements: [
                "Ser mayor de 20 años",
                "Cédula de identidad vigente",
                "Licencia Clase B con mínimo 2 años de antigüedad (REEMPLAZA licencia profesional previa)",
                "Hoja de vida del conductor",
                "En caso de extranjeros: Si la cédula está vencida, comprobante de permanencia definitiva en trámite (180 días)."
            ],
            approval: [
                "Aprobar las evaluaciones de la etapa teórica con un mínimo de 75%.",
                "Aprobar el entrenamiento en simulador de inmersión total.",
                "Realizar y aprobar las clases prácticas presenciales."
            ],
            certification: "Al aprobar las etapas teórica, simulador y práctica, se emite certificado oficial del Ministerio de Transportes y Telecomunicaciones, habilitando para rendir examen municipal.",
            importantInfo: [
                "Las horas de simulación y clases prácticas son obligatorias.",
                "La gestión y agendamiento de hora en municipalidad es responsabilidad del alumno.",
                "Los vehículos de la escuela no se facilitan para rendir exámenes municipales."
            ]
        }
    },
    // --- MAQUINARIA Y LOGÍSTICA (OFICIOS) ---
    {
        id: "escuela-d",
        slug: "grua-horquilla-clase-d",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Grúa Horquilla (Clase D)",
        description: "Operación segura y mantenimiento. Alta demanda en logística y puertos.",
        extendedDescription: "Curso práctico de operación de Grúa Horquilla. Prepara para la licencia Clase D. Incluye normativa de seguridad, estiba, desestiba y mantenimiento preventivo. Ideal para centros logísticos y puertos.",
        icon: Forklift,
        image: "/imagenes/grua-horquilla.jpeg",
        duration: "1 Mes",
        tags: ["Logística", "Licencia Clase D"],
        badge: "Certificación",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores formados y con amplia experiencia en terreno.",
                "Uso de herramientas y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas y procedimientos de tu oficio específico.",
                "Normativas de seguridad y prevención de riesgos laborales.",
                "Desarrollo de habilidades técnicas requeridas por la industria."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Cédula de identidad vigente.",
                "Cumplir con los requisitos de postulación."
            ],
            approval: [
                "Cumplir con la asistencia mínima exigida.",
                "Aprobar las evaluaciones prácticas y teóricas de cada módulo."
            ]
        }
    },
    {
        id: "escuela-maquinaria",
        slug: "maquinaria-pesada",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Maquinaria Pesada",
        description: "Retroexcavadora y Cargador Frontal. Movimiento de tierra y minería.",
        extendedDescription: "Formación técnica en operación de maquinaria pesada: Retroexcavadora y Cargador Frontal. Enfoque en seguridad operacional y técnicas de movimiento de tierra para construcción y minería.",
        icon: HardHat,
        image: "/imagenes/maquinaria.jpeg",
        duration: "2 Meses",
        tags: ["Minería", "Construcción"],
        badge: "Minería",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores formados y con amplia experiencia en terreno.",
                "Uso de maquinaria y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas operativas propias de la especialidad técnica.",
                "Normativas de seguridad y operación segura de equipos.",
                "Desarrollo de habilidades prácticas para el rubro."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Cédula de identidad vigente.",
                "Licencia de conducir Clase B o D (según corresponda)."
            ],
            approval: [
                "Cumplir con la asistencia mínima exigida.",
                "Aprobar las evaluaciones y test prácticos operacionales."
            ]
        }
    },

    // --- TALENTO DIGITAL ---
    {
        id: "td-python",
        slug: "full-stack-python",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Full Stack Python",
        description: "Desarrollo completo de aplicaciones web modernas con uno de los lenguajes más populares.",
        extendedDescription: "Aprende a desarrollar aplicaciones web robustas y escalables utilizando Python y su framework Django/Flask, complementado con tecnologías frontend modernas. Este bootcamp te prepara para ser un desarrollador versátil en el mercado tecnológico actual.",
        icon: Code2,
        image: "/imagenes/full-stack-python.jpeg",
        duration: "6 Meses",
        tags: ["Beca SENCE", "Backend"],
        badge: "Bootcamp",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en proyectos reales.",
                "Acompañamiento docente constante y apoyo en inserción laboral."
            ],
            allowsDriving: [
                "Dominio de herramientas tecnológicas de vanguardia.",
                "Desarrollo de soluciones de software desde cero.",
                "Trabajo colaborativo basado en metodologías ágiles telemáticas."
            ],
            requirements: [
                "Ser mayor de 18 años y enseñanza media completa.",
                "Aprobar test de admisión cognitivo o lógico matemático.",
                "Disponibilidad de equipo computacional y conexión a internet."
            ],
            approval: [
                "Aprobación de proyectos y entregas modulares continuas.",
                "Cumplimiento de la asistencia técnica obligatoria mínima."
            ]
        }
    },
    {
        id: "td-js",
        slug: "full-stack-javascript",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Full Stack JavaScript",
        description: "Domina el stack MERN/MEAN. Desarrollo web integral para startups y empresas tech.",
        extendedDescription: "Conviértete en un experto en JavaScript dominando tanto el frontend como el backend (Node.js). Aprenderás a construir aplicaciones SPA (Single Page Applications) complejas, gestionar bases de datos NoSQL y desplegar en la nube.",
        icon: Terminal,
        image: "/imagenes/full-stack-javascript.jpeg",
        duration: "6 Meses",
        tags: ["Beca SENCE", "Web"],
        badge: "MERN Stack",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en proyectos reales.",
                "Acompañamiento docente constante y apoyo en inserción laboral."
            ],
            allowsDriving: [
                "Dominio de herramientas tecnológicas de vanguardia.",
                "Desarrollo de soluciones de software desde cero.",
                "Trabajo colaborativo basado en metodologías ágiles telemáticas."
            ],
            requirements: [
                "Ser mayor de 18 años y enseñanza media completa.",
                "Aprobar test de admisión lógico matemático.",
                "Disponibilidad de equipo computacional con internet estable."
            ],
            approval: [
                "Aprobación de proyectos y entregas modulares continuas.",
                "Cumplimiento de la asistencia técnica obligatoria mínima."
            ]
        }
    },
    {
        id: "td-java",
        slug: "full-stack-java",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Full Stack Java",
        description: "Desarrollo empresarial robusto. Spring Boot y arquitecturas escalables.",
        extendedDescription: "Prepárate para el mundo corporativo con Java Enterprise. Domina Spring Boot, Hibernate y microservicios, las tecnologías más utilizadas por la banca, seguros y grandes empresas para sus sistemas críticos.",
        icon: Code2,
        image: "/imagenes/full-stack-java.jpeg",
        duration: "6 Meses",
        tags: ["Beca SENCE", "Enterprise"],
        badge: "Enterprise",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en proyectos reales.",
                "Acompañamiento docente constante y apoyo en inserción laboral."
            ],
            allowsDriving: [
                "Dominio de lenguajes y frameworks empresariales corporativos.",
                "Desarrollo de soluciones backend y arquitecturas de software.",
                "Colaboración bajo metodologías ágiles estándar de mercado."
            ],
            requirements: [
                "Ser mayor de 18 años y enseñanza media completa.",
                "Aprobar test cognitivo del programa Talento Digital.",
                "Disponibilidad de equipo moderno y conexión a internet."
            ],
            approval: [
                "Aprobación de evaluaciones modulares de programación.",
                "Asistencia de conexión virtual mínima requerida."
            ]
        }
    },
    {
        id: "td-frontend",
        slug: "desarrollo-frontend",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Desarrollo Front-End",
        description: "Crea interfaces modernas con React, Vue o Angular. Especialista en UI.",
        extendedDescription: "Especialízate en la creación de experiencias de usuario interactivas. Profundiza en HTML5, CSS3 avanzado, JavaScript moderno y librerías reactivas como React para construir interfaces pixel-perfect y accesibles.",
        icon: Layout,
        image: "/imagenes/desarrollo-front.jpeg",
        duration: "4 Meses",
        tags: ["Beca SENCE", "UI/UX"],
        badge: "React/Vue",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en proyectos reales.",
                "Acompañamiento docente constante y apoyo en inserción laboral."
            ],
            allowsDriving: [
                "Dominio de tecnologías de desarrollo de interfaces de usuario.",
                "Creación de aplicaciones web responsivas y accesibles.",
                "Trabajo colaborativo e integración de componentes y APIs."
            ],
            requirements: [
                "Ser mayor de 18 años y enseñanza media completa.",
                "Aprobar test cognitivo del programa Talento Digital.",
                "Disponibilidad de equipo computacional moderno."
            ],
            approval: [
                "Aprobación de evaluaciones modulares de programación web.",
                "Asistencia de conexión virtual mínima requerida (75%)."
            ]
        }
    },
    {
        id: "td-data-analysis",
        slug: "analisis-de-datos",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Análisis de Datos",
        description: "Transforma datos en decisiones estratégicas. PowerBI, SQL y Python.",
        extendedDescription: "Aprende a extraer, limpiar y visualizar datos para apoyar la toma de decisiones empresariales. Domina herramientas como Excel avanzado, SQL para consultas a bases de datos, PowerBI para dashboards y Python para análisis exploratorio.",
        icon: LineChart,
        image: "/imagenes/analisis-datos.jpeg",
        duration: "4 Meses",
        tags: ["Beca SENCE", "Data"],
        badge: "Power BI",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en casos de negocio reales.",
                "Acompañamiento en el desarrollo analítico y empleabilidad."
            ],
            allowsDriving: [
                "Extracción, carga y visualización de volúmenes de datos empíricos.",
                "Diseño de dashboards en Power BI e integración con bases de datos.",
                "Análisis crítico para la toma de decisiones empresariales."
            ],
            requirements: [
                "Ser mayor de 18 años y cursado de enseñanza media completa.",
                "Prueba de razonamiento lógico matemático aprobada.",
                "Equipo y conexión a internet estable."
            ],
            approval: [
                "Aprobar proyectos integradores de análisis de datos.",
                "Conexión constante y participación en módulos en vivo."
            ]
        }
    },
    {
        id: "td-data-science",
        slug: "ciencia-de-datos",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Ciencia de Datos",
        description: "Machine Learning y modelos predictivos. El futuro de la inteligencia artificial.",
        extendedDescription: "Adéntrate en el mundo de la Inteligencia Artificial. Aprende a construir modelos de Machine Learning, redes neuronales y algoritmos predictivos utilizando bibliotecas de Python como Scikit-learn, TensorFlow y PyTorch.",
        icon: Database,
        image: "/imagenes/ciencia-datos.jpeg",
        duration: "6 Meses",
        tags: ["Beca SENCE", "AI"],
        badge: "AI/ML",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Aprendizaje práctico desarrollando modelos predictivos.",
                "Apoyo de tutores expertos del área técnica e inteligencia artificial."
            ],
            allowsDriving: [
                "Programación y manejo estadístico avanzado en Python.",
                "Entrenamiento de modelos de Machine Learning e Inteligencia Artificial.",
                "Resolución de problemas analíticos complejos de gran escala."
            ],
            requirements: [
                "Ser mayor de 18 años, formación base recomendada en lógica y matemáticas.",
                "Aprobación de la batería de pruebas de Talento Digital.",
                "Computador idóneo para procesos y procesamiento."
            ],
            approval: [
                "Demostración de destrezas en los portafolios de ciencia de datos.",
                "Cumplir requisitos mínimos de asistencia (75%)."
            ]
        }
    },
    {
        id: "td-uxui",
        slug: "diseno-ux-ui",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Diseño UX/UI",
        description: "Diseña experiencias de usuario memorables y prototipos de alta fidelidad.",
        extendedDescription: "Aprende el proceso de diseño centrado en el usuario (UCD). Desde la investigación y wireframing hasta el prototipado de alta fidelidad en Figma. Crea productos digitales que sean intuitivos, eficientes y agradables de usar.",
        icon: Layout,
        image: "/imagenes/diseno-ux.jpeg",
        duration: "4 Meses",
        tags: ["Beca SENCE", "Diseño"],
        badge: "Figma",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica y desarrollo de prototipos iterativos.",
                "Revisión de portafolio y mentorías personalizadas."
            ],
            allowsDriving: [
                "Investigación de usuarios y diseño centrado en humanos (UX/UI).",
                "Creación de wireframes y prototipado visual en Figma o Adobe XD.",
                "Presentación de propuestas y diseño de interacción intuitiva."
            ],
            requirements: [
                "Ser mayor de 18 años; habilidades afines a la empatía y diseño.",
                "Prueba de selección en talentodigitalparachile.cl aprobada.",
                "Disponibilidad horaria total al programa."
            ],
            approval: [
                "Defensa exitosa de los prototipos iniciales y el portafolio de UX.",
                "Porcentaje de conexiones sincrónicas mínimo cumplido."
            ]
        }
    },
    {
        id: "td-cyber",
        slug: "ciberseguridad",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Ciberseguridad",
        description: "Protege infraestructuras críticas y datos sensibles. Red Team / Blue Team.",
        extendedDescription: "Fórmate en defensa y ataque ético. Aprende sobre seguridad de redes, criptografía, análisis de vulnerabilidades y respuesta a incidentes para proteger la información vital de las organizaciones.",
        icon: Shield,
        image: "/imagenes/ciberseguridad.jpeg",
        duration: "5 Meses",
        tags: ["Beca SENCE", "Seguridad"],
        badge: "Blue Team",
        color: "cyan",
        details: {
            modality: [
                "Modalidad intensiva (Sincrónico online y Asincrónico).",
                "Ejercicios tipo CTF y entornos de simulación de amenazas.",
                "Orientación técnica a la defensiva de infraestructuras IT."
            ],
            allowsDriving: [
                "Administración de redes y análisis ético de vulnerabilidades.",
                "Implementación de medidas defensivas y criptográficas corporativas.",
                "Detección y respuesta primigenia frente a incidentes (Blue Team)."
            ],
            requirements: [
                "Aprobación del filtro y evaluación de Talento Digital.",
                "Nociones recomendables de informática, ser mayor de edad.",
                "Conexión de red local óptima."
            ],
            approval: [
                "Resultados satisfactorios en las pruebas modulares técnicas.",
                "Cumplimiento de las actas de participación y conectividad."
            ]
        }
    },
    {
        id: "td-cloud",
        slug: "arquitectura-cloud",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Arquitectura Cloud",
        description: "AWS, Azure y Google Cloud. Despliegue y escalabilidad en la nube.",
        extendedDescription: "Domina la nube pública. Aprende a diseñar, desplegar y administrar infraestructuras escalables y seguras en proveedores líderes como AWS o Azure. Conceptos de IaaS, PaaS y SaaS.",
        icon: Cloud,
        image: "/imagenes/cloud.jpeg",
        duration: "5 Meses",
        tags: ["Beca SENCE", "Infraestructura"],
        badge: "AWS/Azure",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Metodología práctica: aprendizaje basado en infraestructura real.",
                "Mentores expertos y laboratorios cloud."
            ],
            allowsDriving: [
                "Despliegue de arquitecturas en AWS, Azure o Google Cloud.",
                "Conceptos avanzados de IaaS, PaaS, SaaS y microservicios.",
                "Seguridad y alta disponibilidad en la nube pública."
            ],
            requirements: [
                "Ser mayor de 18 años, conocimientos de redes e informática básica.",
                "Aprobación de la evaluación técnica de Talento Digital.",
                "Computador con requerimientos mínimos y buena conexión a internet."
            ],
            approval: [
                "Aprobar ejercicios de laboratorios prácticos de despliegue.",
                "Completar la asistencia mínima de clases remotas."
            ]
        }
    },
    {
        id: "td-mobile",
        slug: "desarrollo-movil-android",
        category: "TALENTO DIGITAL",
        location: "Online (Todo Chile)",
        title: "Desarrollo Móvil Android",
        description: "Crea apps nativas para el sistema operativo más usado del mundo.",
        extendedDescription: "Aprende a desarrollar aplicaciones móviles nativas para Android utilizando Kotlin. Desde los fundamentos de la interfaz de usuario hasta el uso de sensores, geolocalización y consumo de APIs REST.",
        icon: Smartphone,
        image: "/imagenes/desarrollo-app-movil.jpeg",
        duration: "5 Meses",
        tags: ["Beca SENCE", "Mobile"],
        badge: "Kotlin",
        color: "cyan",
        details: {
            modality: [
                "Modalidad Bootcamp Intensivo (Sincrónico y Asincrónico).",
                "Construcción iterativa de una App móvil como proyecto final.",
                "Orientación a buenas prácticas de desarrollo móvil."
            ],
            allowsDriving: [
                "Desarrollo nativo o híbrido de aplicaciones para Android e iOS.",
                "Consumo e integración de APIs y servicios web móviles.",
                "Diseño e implementación de interfaces centradas en la navegabilidad móvil."
            ],
            requirements: [
                "Ser mayor de 18 años; enseñanza media aprobada.",
                "Test cognitivo lógico de filtro inicial certificado.",
                "Equipo que permita la ejecución de emuladores móviles."
            ],
            approval: [
                "Entrega satisfactoria de la App móvil del proyecto final de título.",
                "Mantener la regularidad y asistencia exigidas a lo largo de los módulos."
            ]
        }
    },

    // --- OFICIOS ---
    {
        id: "oficios-soldadura",
        slug: "soldadura-calificada",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Soldadura Calificada",
        description: "MIG / TIG / Arco Manual. Certificación 3G/4G para minería y montaje industrial.",
        extendedDescription: "Curso práctico de soldadura industrial en procesos MIG, TIG y Arco Manual. Te preparamos para rendir las calificaciones 3G y 4G bajo estándares internacionales, habilitándote para trabajar en minería, montaje industrial y estructuras metálicas.",
        icon: Wrench,
        image: "/imagenes/soldador.jpeg",
        duration: "3 Meses",
        tags: ["Certificación", "Minería"],
        badge: "Cert. Indura",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores formados y con amplia experiencia en terreno.",
                "Uso de herramientas y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas y procedimientos de tu oficio específico.",
                "Normativas de seguridad y prevención de riesgos laborales.",
                "Desarrollo de habilidades técnicas requeridas por la industria."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Cédula de identidad vigente.",
                "Cumplir con los requisitos de postulación SENCE."
            ],
            approval: [
                "Cumplir con la asistencia mínima exigida.",
                "Aprobar las evaluaciones prácticas y teóricas de cada módulo."
            ]
        }
    },
    {
        id: "oficios-elect",
        slug: "electricidad-domiciliaria",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Electricidad Domiciliaria",
        description: "Preparación para licencia SEC Clase D. Instalaciones seguras y normativa vigente.",
        extendedDescription: "Fórmate como instalador eléctrico autorizado. Aprende a proyectar, ejecutar y mantener instalaciones eléctricas domiciliarias bajo la normativa SEC vigente, preparándote para la obtención de la Licencia Clase D.",
        icon: Zap,
        image: "/imagenes/electricista.jpeg",
        duration: "4 Meses",
        tags: ["Licencia SEC", "Domiciliaria"],
        badge: "Licencia SEC",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores formados y con amplia experiencia en terreno.",
                "Uso de herramientas y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas y procedimientos de tu oficio específico.",
                "Normativas de seguridad y prevención de riesgos laborales.",
                "Desarrollo de habilidades técnicas requeridas por la industria."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Cédula de identidad vigente.",
                "Cumplir con los requisitos de postulación SENCE."
            ],
            approval: [
                "Cumplir con la asistencia mínima exigida.",
                "Aprobar las evaluaciones prácticas y teóricas de cada módulo."
            ]
        }
    },

    // --- OTROS ---
    {
        id: "salud-curador",
        slug: "cuidados-de-enfermeria",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Cuidados de Enfermería",
        description: "Atención de pacientes con dependencia. Técnicas de higiene y primeros auxilios.",
        extendedDescription: "Capacítate en el cuidado integral de personas enfermas o con movilidad reducida. Aprenderás técnicas de higiene, confort, alimentación, control de signos vitales y primeros auxilios, con un enfoque humano y vocacional.",
        icon: HeartPulse,
        image: "/imagenes/enfermeria.jpeg",
        duration: "4 Meses",
        tags: ["Vocación", "Cuidado"],
        badge: "Salud",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores formados y con amplia experiencia clínica.",
                "Uso de herramientas y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas y procedimientos de cuidado directo de pacientes.",
                "Normativas de bioseguridad y prevención de riesgos.",
                "Desarrollo de habilidades técnicas requeridas en el área de salud."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Cédula de identidad vigente.",
                "Cumplir con los requisitos de postulación SENCE."
            ],
            approval: [
                "Cumplir con la asistencia mínima exigida.",
                "Aprobar las prácticas y teóricas de cada módulo."
            ]
        }
    },
    {
        id: "idiomas-ingles",
        slug: "ingles-laboral-toeic",
        category: "OFICIOS",
        location: "Online (Todo Chile)",
        title: "Inglés Laboral (TOEIC)",
        description: "Certificación internacional de inglés para el trabajo. Mejora tu perfil global.",
        extendedDescription: "Mejora tus oportunidades laborales con nuestro curso de inglés enfocado en negocios y trabajo. Preparación intensiva para la certificación TOEIC, el estándar global para evaluar el nivel de inglés en el entorno profesional.",
        icon: Languages,
        image: "/imagenes/ingles.jpeg",
        duration: "3 Meses",
        tags: ["TOEIC", "Internacional"],
        badge: "TOEIC",
        color: "blue",
        details: {
            modality: [
                "Clases 100% Online Sincrónico y Plataforma Asincrónica.",
                "Instructores expertos en metodologías de enseñanza de idiomas.",
                "Material de estudio, simuladores y recursos interactivos."
            ],
            allowsDriving: [
                "Desarrollo de las 4 habilidades lingüísticas: Reading, Listening, Speaking y Writing.",
                "Preparación intensiva y estratégica para la certificación internacional.",
                "Inglés especializado para desenvolverse en entornos laborales globales."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Equipo con conexión a internet y micrófono/cámara disponibles.",
                "Nivel básico o intermedio de entrada (según el módulo o curso SENCE asignado)."
            ],
            approval: [
                "Completar la participación y foros en la plataforma online.",
                "Rendir las evaluaciones simuladas y el examen final formativo o TOEIC."
            ]
        }
    },
    {
        id: "artesania-orfebre",
        slug: "orfebreria-y-diseno",
        category: "OFICIOS",
        location: "Todo Chile",
        title: "Orfebrería y Diseño",
        description: "Creación de joyas y emprendimiento artesanal. Técnicas de metalurgia.",
        extendedDescription: "Descubre el arte de la orfebrería. Aprende técnicas de diseño, fundición, laminado y soldadura de metales preciosos para crear joyas únicas. El curso incluye módulos de emprendimiento para que puedas iniciar tu propio negocio.",
        icon: Star,
        image: "/imagenes/orfebreria.jpeg",
        duration: "3 Meses",
        tags: ["Creatividad", "Emprendimiento"],
        badge: "Emprendimiento",
        color: "blue",
        details: {
            modality: [
                "Clases teórico-prácticas orientadas al saber hacer.",
                "Instructores expertos en diseño y manufactura de metales.",
                "Uso de taller, herramientas y equipamiento especializado."
            ],
            allowsDriving: [
                "Técnicas de fundición, laminado, calado y soldadura de precisión.",
                "Diseño y creación de joyas, desde la concepción hasta el pulido final.",
                "Herramientas para el emprendimiento exitoso, costeo y comercialización."
            ],
            requirements: [
                "Ser mayor de 18 años.",
                "Destreza manual y enfoque en los detalles estéticos.",
                "Cumplir con los requisitos de postulación del programa social asignado."
            ],
            approval: [
                "Asistencia obligatoria a los talleres prácticos del curso.",
                "Aprobación técnica de las piezas de orfebrería elaboradas."
            ]
        }
    }
];
