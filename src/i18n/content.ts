import type { Locale } from "./config";

export const profile = {
  name: "Iván López López",
  email: "ivanlopezlopez1997@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ivan-lopez-lopez/",
} as const;

interface Capability {
  title: string;
  what: string;
  apply: string;
  use: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  scope: string;
  approach: string;
  application: string;
  compactScope: string;
  compactApplication: string;
  note?: string;
}

interface Skill {
  category: string;
  technology: string;
  application: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  a11y: { skipToContent: string; openMenu: string; closeMenu: string };
  nav: {
    label: string;
    menu: string;
    profile: string;
    capabilities: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    language: string;
    languageNames: Record<Locale, string>;
  };
  hero: {
    eyebrow: string;
    role: string;
    location: string;
    statement: string;
    viewExperience: string;
    contact: string;
    overviewLabel: string;
    overview: string;
    overviewDetail: string;
    areasLabel: string;
    areas: string[];
    downloadResume: string;
  };
  professionalProfile: {
    sectionLabel: string;
    title: string;
    paragraphs: string[];
    contextLabel: string;
    contexts: Array<{ title: string; detail: string }>;
  };
  capabilities: {
    sectionLabel: string;
    title: string;
    intro: string;
    labels: { what: string; apply: string; use: string };
    items: Capability[];
  };
  experience: {
    sectionLabel: string;
    title: string;
    intro: string;
    labels: { scope: string; approach: string; application: string };
    items: Experience[];
  };
  skills: {
    sectionLabel: string;
    title: string;
    intro: string;
    applicationLabel: string;
    items: Skill[];
  };
  education: {
    sectionLabel: string;
    title: string;
    degree: string;
    school: string;
    gradeLabel: string;
    grade: string;
    recognitionLabel: string;
    recognition: string;
  };
  contact: {
    sectionLabel: string;
    title: string;
    copy: string;
    emailAction: string;
    privacy: string;
  };
  footer: string;
}

const companies = [
  [
    "astrazeneca",
    "AstraZeneca · Alexion Pharmaceuticals",
    "Associate Director, Data Engineering",
    "11/2024 — 04/2026",
  ],
  [
    "iag",
    "International Airlines Group (IAG)",
    "Data Architect",
    "07/2024 — 09/2024",
  ],
  ["isdin", "ISDIN", "Lead Data Engineer", "08/2022 — 11/2024"],
  [
    "penguin",
    "Penguin Random House",
    "Senior Data Engineer",
    "03/2021 — 08/2022",
  ],
  ["primer-impacto", "Primer Impacto", "Data Engineer", "11/2019 — 11/2020"],
  ["winche", "Winche Redes Comerciales", "Data Engineer", "03/2017 — 03/2019"],
] as const;

type CompanyIndex = 0 | 1 | 2 | 3 | 4 | 5;

const identity = (index: CompanyIndex) => {
  const [id, company, role, period] = companies[index];
  return { id, company, role, period };
};

export const content = {
  es: {
    meta: {
      title: "Iván López López — Liderazgo e ingeniería de datos",
      description:
        "Perfil profesional de Iván López López: estrategia, arquitectura, plataformas y liderazgo de ingeniería de datos.",
    },
    a11y: {
      skipToContent: "Saltar al contenido",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    nav: {
      label: "Navegación principal",
      menu: "Menú",
      profile: "Perfil",
      capabilities: "Capacidades",
      experience: "Experiencia",
      skills: "Competencias",
      education: "Formación",
      contact: "Contacto",
      language: "Cambiar idioma",
      languageNames: { es: "ES", en: "EN", ca: "CA" },
    },
    hero: {
      eyebrow: "LIDERAZGO EN INGENIERÍA DE DATOS",
      role: "Associate Director, Data Engineering",
      location: "Barcelona, España",
      statement:
        "Lidero equipos de ingeniería de datos y trabajo entre negocio y tecnología para definir cómo se diseñan, gobiernan, entregan y operan las plataformas y productos de datos.",
      viewExperience: "Ver experiencia",
      contact: "Contacto",
      overviewLabel: "RESUMEN PROFESIONAL",
      overview:
        "Arquitectura de datos empresarial, plataformas cloud, estándares de ingeniería y continuidad del servicio en AWS, Azure y GCP.",
      overviewDetail:
        "Trabajo con Data Science & AI, Data Management, Enterprise Architecture, equipos de IT y stakeholders de negocio para convertir prioridades a largo plazo en arquitecturas, estándares de entrega y responsabilidades operativas.",
      areasLabel: "ÁREAS DE TRABAJO",
      areas: [
        "Estrategia y arquitectura de datos",
        "Liderazgo y entrega de ingeniería",
        "Plataformas e integración de datos",
        "Gobierno y operación del servicio",
      ],
      downloadResume: "Descargar currículum",
    },
    professionalProfile: {
      sectionLabel: "01 / PERFIL PROFESIONAL",
      title: "Perfil profesional",
      paragraphs: [
        "Trabajo en el punto donde se encuentran la estrategia de datos, la entrega de ingeniería y las necesidades de negocio. Esto incluye definir la estrategia tecnológica con Data Science & AI, Data Management y Enterprise Architecture; liderar equipos distribuidos; y asumir la responsabilidad integral de plataformas críticas y productos de datos.",
        "Mi función no se limita a seleccionar herramientas o diseñar sistemas. Convierto prioridades en arquitecturas, hojas de ruta, estándares de ingeniería y responsabilidades operativas que los equipos técnicos, los socios de negocio y la dirección pueden utilizar para tomar decisiones.",
      ],
      contextLabel: "CONTEXTO DE LIDERAZGO",
      contexts: [
        {
          title: "Liderazgo de equipos globales",
          detail: "Hasta 25 ingenieros en Europa, Estados Unidos y Asia.",
        },
        {
          title: "Liderazgo técnico transversal",
          detail: "Cinco equipos con más de 20 profesionales en IAG.",
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPACIDADES",
      title: "Capacidades y uso organizativo",
      intro:
        "Cada capacidad describe el trabajo, cómo lo aplico y el papel que puede desempeñar dentro de una organización.",
      labels: {
        what: "QUÉ HAGO",
        apply: "CÓMO LO APLICO",
        use: "USO EN LA ORGANIZACIÓN",
      },
      items: [
        {
          title: "Estrategia y arquitectura de datos",
          what: "Defino la dirección tecnológica, arquitecturas objetivo y estándares de ingeniería para plataformas y productos de datos.",
          apply:
            "Trabajo con Data Science & AI, Data Management, Enterprise Architecture, IT y stakeholders de negocio.",
          use: "Doy a los equipos una dirección técnica compartida y mantengo las iniciativas alineadas con las prioridades de la organización.",
        },
        {
          title: "Liderazgo y entrega de ingeniería",
          what: "Lidero ingenieros de datos y coordino la entrega entre equipos, áreas de negocio y regiones.",
          apply:
            "Defino hojas de ruta, patrones, ownership y prácticas de ingeniería conectando la entrega con las prioridades de los stakeholders.",
          use: "Hago explícitas las responsabilidades y expectativas de entrega entre varios equipos.",
        },
        {
          title: "Plataformas, productos e integración de datos",
          what: "Diseño y superviso pipelines, productos de datos, APIs y servicios desde la ingesta hasta el consumo.",
          apply:
            "Utilizo Python, SQL, Airflow, dbt y FastAPI con BigQuery, Snowflake y servicios cloud en AWS, Azure y GCP.",
          use: "Proporciono bases de datos para analítica y uso operativo en distintas funciones de negocio.",
        },
        {
          title: "Gobierno, fiabilidad y operación del servicio",
          what: "Asumo la responsabilidad de seguridad, escalabilidad, resiliencia, calidad y continuidad en plataformas críticas.",
          apply:
            "Combino gobierno, CI/CD, observabilidad, despliegue automatizado, mitigación de riesgos, recuperación y requisitos regulatorios.",
          use: "Incorporo riesgo operativo, cumplimiento y continuidad del servicio en las decisiones de ingeniería desde el inicio.",
        },
      ],
    },
    experience: {
      sectionLabel: "03 / EXPERIENCIA PROFESIONAL",
      title: "Experiencia profesional",
      intro:
        "La evolución muestra cómo las responsabilidades de ingeniería práctica se ampliaron hacia arquitectura empresarial, liderazgo global, gobierno y estrategia de datos.",
      labels: {
        scope: "ALCANCE DEL PUESTO",
        approach: "RESPONSABILIDADES Y ENFOQUE",
        application: "APLICACIÓN EN LA ORGANIZACIÓN",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Definí y ejecuté la estrategia tecnológica mientras lideraba la entrega global de plataformas críticas y productos de datos multidominio.",
          approach:
            "Colaboré con Data Science & AI, Data Management y Enterprise Architecture; lideré hasta 25 ingenieros en Europa, Estados Unidos y Asia; y mantuve la responsabilidad integral de las plataformas.",
          application:
            "Di soporte a Global Markets, R&D, Global Medical Affairs e IT-for-IT. Conecté tecnología y negocio y gestioné riesgos, continuidad, recuperación y cumplimiento regulatorio.",
          compactScope:
            "Estrategia tecnológica, entrega global y responsabilidad sobre plataformas críticas y productos de datos multidominio.",
          compactApplication:
            "Lideré hasta 25 ingenieros; alineé datos, AI y arquitectura; apoyé Markets, R&D, Medical Affairs e IT; y gestioné gobierno y continuidad.",
          note: "Recibí reconocimiento corporativo por eficiencia operativa, impacto transversal y contribución estratégica dentro de la organización global de IT.",
        },
        {
          ...identity(1),
          scope:
            "Proporcioné liderazgo técnico a cinco equipos transversales con más de 20 profesionales, centrados en la arquitectura de datos empresarial.",
          approach:
            "Diseñé arquitecturas distribuidas seguras para ingesta, calidad, transformación y consumo. Establecí estándares de CI/CD, observabilidad, seguridad y despliegue automatizado.",
          application:
            "Trabajé con directores técnicos y stakeholders estratégicos para definir la visión tecnológica a largo plazo, prioridades de roadmap y evolución de producto.",
          compactScope:
            "Arquitectura de datos empresarial para cinco equipos y más de 20 profesionales.",
          compactApplication:
            "Arquitecturas distribuidas seguras, estándares de ingeniería y alineación del roadmap a largo plazo.",
        },
        {
          ...identity(2),
          scope:
            "Dirigí el roadmap técnico y operativo del departamento de Data Engineering y establecí patrones de arquitectura, estándares y prácticas internas.",
          approach:
            "Construí plataformas escalables en GCP atendiendo a seguridad, rendimiento y coste cloud. Lideré el equipo y prioricé la entrega con stakeholders de negocio.",
          application:
            "Entregué soluciones de integración, automatización y analítica conectando las decisiones de plataforma con las necesidades del roadmap de producto.",
          compactScope:
            "Roadmap técnico y operativo del departamento de Data Engineering.",
          compactApplication:
            "Diseño de plataforma GCP, liderazgo de equipo, estándares internos y entrega alineada con negocio.",
        },
        {
          ...identity(3),
          scope:
            "Diseñé pipelines de datos críticos en AWS y Azure con requisitos de disponibilidad, escalabilidad y seguridad.",
          approach:
            "Implementé arquitecturas Snowflake, pipelines de CI/CD y automatización. Desarrollé APIs y microservicios con Python y FastAPI.",
          application:
            "Apoyé la eficiencia operativa convirtiendo capacidades de datos en pipelines fiables y servicios orientados a producto.",
          compactScope: "Pipelines de datos críticos en AWS y Azure.",
          compactApplication:
            "Snowflake, CI/CD, automatización, APIs Python y microservicios FastAPI.",
        },
        {
          ...identity(4),
          scope:
            "Construí y aporté liderazgo técnico a un departamento de datos de nueva creación, formando la base tecnológica para la transformación digital.",
          approach:
            "Desarrollé pipelines críticos con Python y Azure Data Factory y gestioné infraestructura de bases de datos para seguridad, disponibilidad y fiabilidad.",
          application:
            "Trabajé con unidades de negocio para definir requisitos de datos y soluciones técnicas alineadas con el crecimiento de la compañía.",
          compactScope:
            "Creación del departamento de datos y de sus bases técnicas.",
          compactApplication:
            "Pipelines con Python y Azure Data Factory, infraestructura de bases de datos y requisitos de negocio.",
        },
        {
          ...identity(5),
          scope:
            "Desarrollé soluciones ETL y de reporting con SSIS y C#, además de apoyar procesos de análisis de negocio.",
          approach:
            "Diseñé cuadros de mando ejecutivos sobre KPIs de negocio, lideré un proyecto de transformación comercial y asumí la responsabilidad de la infraestructura de bases de datos.",
          application:
            "Apliqué ingeniería y analítica de datos al reporting, el soporte a decisiones ejecutivas y las iniciativas de clientes empresariales.",
          compactScope: "ETL, reporting y análisis de negocio con SSIS y C#.",
          compactApplication:
            "Dashboards ejecutivos, transformación comercial y responsabilidad sobre la infraestructura de bases de datos.",
        },
      ],
    },
    skills: {
      sectionLabel: "04 / COMPETENCIAS EN PRÁCTICA",
      title: "Competencias y forma de trabajo",
      intro:
        "Uso la tecnología como parte de un sistema de ingeniería más amplio que incluye diseño de plataformas, entrega de software, gobierno y colaboración con las personas que dependen de los datos.",
      applicationLabel: "CÓMO LO UTILIZO",
      items: [
        {
          category: "INGENIERÍA DE DATOS",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Ingesta, transformación, orquestación y flujos de calidad del dato.",
        },
        {
          category: "SERVICIOS DE DATOS",
          technology: "FastAPI · Microservicios",
          application:
            "Pongo capacidades de datos a disposición de productos y consumidores internos mediante servicios mantenibles.",
        },
        {
          category: "CLOUD Y PLATAFORMAS DE DATOS",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Almacenamiento, procesamiento y arquitectura de plataforma según los requisitos del dominio y de operación.",
        },
        {
          category: "ENTREGA Y OPERACIONES",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Flujos de ingeniería versionados, repetibles y automatizados con un ownership operativo más claro.",
        },
        {
          category: "LIDERAZGO Y ORGANIZACIÓN",
          technology:
            "Liderazgo técnico · Comunicación transversal · Gestión de stakeholders · Planificación estratégica · Ownership integral · Resolución de problemas complejos",
          application:
            "Alineo roadmaps, coordino equipos y stakeholders, aclaro el ownership y mantengo la responsabilidad desde el diseño técnico hasta la operación del servicio.",
        },
      ],
    },
    education: {
      sectionLabel: "05 / FORMACIÓN",
      title: "Formación",
      degree: "Grado Superior en Desarrollo de Aplicaciones Informáticas",
      school: "Colegio Cultural",
      gradeLabel: "NOTA",
      grade: "8/10",
      recognitionLabel: "RECONOCIMIENTO",
      recognition: "Premio al mejor proyecto final — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACTO",
      title: "Contacto",
      copy: "Vivo en Barcelona, España. Si tu organización trabaja en estrategia de datos, arquitectura, entrega de plataformas o modelos operativos de ingeniería de datos, puedes escribirme por correo.",
      emailAction: "Escribir a Iván",
      privacy: "El número de teléfono se omite en la versión pública.",
    },
    footer: "Iván López López · Ingeniería de datos · Barcelona, España",
  },
  en: {
    meta: {
      title: "Iván López López — Data engineering leadership",
      description:
        "Professional profile of Iván López López: data strategy, architecture, platforms and engineering leadership.",
    },
    a11y: {
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    nav: {
      label: "Main navigation",
      menu: "Menu",
      profile: "Profile",
      capabilities: "Capabilities",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      language: "Change language",
      languageNames: { es: "ES", en: "EN", ca: "CA" },
    },
    hero: {
      eyebrow: "DATA ENGINEERING LEADERSHIP",
      role: "Associate Director, Data Engineering",
      location: "Barcelona, Spain",
      statement:
        "I lead data engineering teams and work across business and technology functions to define how data platforms and products are designed, governed, delivered and operated.",
      viewExperience: "View experience",
      contact: "Contact",
      overviewLabel: "PROFESSIONAL OVERVIEW",
      overview:
        "Enterprise data architecture, cloud platforms, engineering standards and service continuity across AWS, Azure and GCP.",
      overviewDetail:
        "I work with Data Science & AI, Data Management, Enterprise Architecture, IT partners and business stakeholders to translate long-term priorities into architectures, delivery standards and operating responsibilities.",
      areasLabel: "AREAS OF WORK",
      areas: [
        "Data strategy and architecture",
        "Engineering leadership and delivery",
        "Data platforms and integration",
        "Governance and service operation",
      ],
      downloadResume: "Download résumé",
    },
    professionalProfile: {
      sectionLabel: "01 / PROFESSIONAL PROFILE",
      title: "Professional profile",
      paragraphs: [
        "I work at the point where data strategy, engineering delivery and business needs meet. This has included defining technology strategy with Data Science & AI, Data Management and Enterprise Architecture; leading distributed engineering teams; and taking end-to-end responsibility for critical platforms and data products.",
        "My role is not limited to selecting tools or designing systems. I translate priorities into architectures, team roadmaps, engineering standards and operational responsibilities that technical teams, business partners and senior stakeholders can use to make decisions.",
      ],
      contextLabel: "LEADERSHIP CONTEXT",
      contexts: [
        {
          title: "Global team leadership",
          detail:
            "Up to 25 engineers across Europe, the United States and Asia.",
        },
        {
          title: "Cross-functional technical leadership",
          detail: "Five teams involving more than 20 professionals at IAG.",
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPABILITIES",
      title: "Capabilities and organizational use",
      intro:
        "Each capability describes the work itself, how it is applied, and the role it can play inside a company.",
      labels: {
        what: "WHAT I DO",
        apply: "HOW I APPLY IT",
        use: "USE WITHIN AN ORGANIZATION",
      },
      items: [
        {
          title: "Data strategy and architecture",
          what: "Define technology direction, target architectures and engineering standards for data platforms and products.",
          apply:
            "Work with Data Science & AI, Data Management, Enterprise Architecture, IT partners and business stakeholders.",
          use: "Give teams a shared technical direction and keep data initiatives aligned with organizational priorities.",
        },
        {
          title: "Engineering leadership and delivery",
          what: "Lead data engineers and coordinate delivery across teams, business areas and regions.",
          apply:
            "Define roadmaps, patterns, ownership and engineering practices while connecting delivery with stakeholder priorities.",
          use: "Make responsibilities and delivery expectations explicit across multiple teams.",
        },
        {
          title: "Data platforms, products and integration",
          what: "Design and oversee pipelines, data products, APIs and services from ingestion through consumption.",
          apply:
            "Use Python, SQL, Airflow, dbt and FastAPI with BigQuery, Snowflake and cloud services on AWS, Azure and GCP.",
          use: "Provide data foundations for analytics and operational use across different business functions.",
        },
        {
          title: "Governance, reliability and service operation",
          what: "Take responsibility for security, scalability, resilience, data quality and continuity on critical platforms.",
          apply:
            "Combine governance, CI/CD, observability, automated deployment, risk mitigation, recovery and regulatory requirements.",
          use: "Include operational risk, compliance and service continuity in engineering decisions from the start.",
        },
      ],
    },
    experience: {
      sectionLabel: "03 / PROFESSIONAL EXPERIENCE",
      title: "Professional experience",
      intro:
        "The progression below shows how hands-on engineering responsibilities developed into enterprise architecture, global leadership, governance and data strategy.",
      labels: {
        scope: "SCOPE OF THE ROLE",
        approach: "RESPONSIBILITIES & APPROACH",
        application: "APPLICATION WITHIN THE ORGANIZATION",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Defined and executed technology strategy while leading global delivery for critical data platforms and multi-domain data products.",
          approach:
            "Partnered with Data Science & AI, Data Management and Enterprise Architecture; led up to 25 engineers across Europe, the US and Asia; maintained end-to-end platform accountability.",
          application:
            "Supported Global Markets, R&D, Global Medical Affairs and IT-for-IT. Connected technology and business stakeholders and managed risk, continuity, recovery and regulatory compliance.",
          compactScope:
            "Technology strategy, global delivery and responsibility for critical platforms and multi-domain data products.",
          compactApplication:
            "Led up to 25 engineers; aligned data, AI and architecture functions; supported Markets, R&D, Medical Affairs and IT; managed governance and continuity.",
          note: "Received corporate recognition for operational efficiency, cross-functional impact and strategic contribution within the global IT organization.",
        },
        {
          ...identity(1),
          scope:
            "Provided technical leadership for five cross-functional teams involving more than 20 professionals, focused on the core enterprise data architecture.",
          approach:
            "Designed secure distributed architectures for ingestion, quality, transformation and consumption. Established standards for CI/CD, observability, security and automated deployment.",
          application:
            "Worked with technical directors and strategic stakeholders to define long-term technology vision, roadmap priorities and product evolution.",
          compactScope:
            "Core enterprise data architecture across five teams and more than 20 professionals.",
          compactApplication:
            "Secure distributed architectures, engineering standards and long-term roadmap alignment.",
        },
        {
          ...identity(2),
          scope:
            "Directed the technical and operational roadmap of the Data Engineering department and established architecture patterns, standards and internal practices.",
          approach:
            "Built scalable GCP platforms with attention to security, performance and cloud cost. Led the engineering team and prioritized delivery with business stakeholders.",
          application:
            "Delivered data integration, automation and analytics solutions while connecting platform decisions to product roadmap needs.",
          compactScope:
            "Technical and operational roadmap for the Data Engineering department.",
          compactApplication:
            "GCP platform design, team leadership, internal standards and business-aligned delivery.",
        },
        {
          ...identity(3),
          scope:
            "Designed mission-critical data pipelines across AWS and Azure with requirements for availability, scalability and security.",
          approach:
            "Implemented Snowflake-based data architectures, CI/CD pipelines and automation workflows. Developed APIs and microservices using Python and FastAPI.",
          application:
            "Supported operational efficiency by turning data capabilities into reliable pipelines and product-oriented services.",
          compactScope: "Mission-critical data pipelines across AWS and Azure.",
          compactApplication:
            "Snowflake, CI/CD, automation, Python APIs and FastAPI microservices.",
        },
        {
          ...identity(4),
          scope:
            "Built and provided technical leadership for a newly established data department, forming the technical base for digital transformation.",
          approach:
            "Developed critical pipelines with Python and Azure Data Factory and managed database infrastructure for security, availability and reliability.",
          application:
            "Worked with business units to define data requirements and technical solutions aligned with company growth.",
          compactScope:
            "Established the company’s data department and its technical foundations.",
          compactApplication:
            "Python and Azure Data Factory pipelines, database infrastructure and business requirements.",
        },
        {
          ...identity(5),
          scope:
            "Developed ETL and reporting solutions using SSIS and C# and supported business analysis processes.",
          approach:
            "Designed executive dashboards around business KPIs, led a commercial transformation project and held responsibility for database infrastructure.",
          application:
            "Applied data engineering and analytics to reporting, executive decision support and enterprise client initiatives.",
          compactScope:
            "ETL, reporting and business analysis using SSIS and C#.",
          compactApplication:
            "Executive dashboards, commercial transformation and database infrastructure responsibility.",
        },
      ],
    },
    skills: {
      sectionLabel: "04 / SKILLS IN PRACTICE",
      title: "Skills and working approach",
      intro:
        "I use technology as part of a broader engineering system that includes platform design, software delivery, governance and collaboration with the people who depend on the data.",
      applicationLabel: "HOW I USE IT",
      items: [
        {
          category: "DATA ENGINEERING",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Data ingestion, transformation, orchestration and quality workflows.",
        },
        {
          category: "DATA SERVICES",
          technology: "FastAPI · Microservices",
          application:
            "Make data capabilities available to products and internal consumers through maintainable services.",
        },
        {
          category: "CLOUD AND DATA PLATFORMS",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Data storage, processing and platform architecture selected according to domain and operating requirements.",
        },
        {
          category: "DELIVERY AND OPERATIONS",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Versioned, repeatable and automated engineering workflows with clearer operational ownership.",
        },
        {
          category: "LEADERSHIP AND ORGANIZATION",
          technology:
            "Technical & Organizational Leadership · Cross-functional Communication · Stakeholder Management · Strategic Planning · End-to-end Ownership · Complex Problem Solving",
          application:
            "Align roadmaps, coordinate teams and stakeholders, clarify ownership and maintain responsibility from technical design through service operation.",
        },
      ],
    },
    education: {
      sectionLabel: "05 / EDUCATION",
      title: "Education",
      degree: "Advanced Vocational Degree in Computer Science",
      school: "Colegio Cultural",
      gradeLabel: "GPA",
      grade: "8/10",
      recognitionLabel: "RECOGNITION",
      recognition: "Best Final Project Award — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACT",
      title: "Contact",
      copy: "I am based in Barcelona, Spain. If your organization is working on data strategy, architecture, platform delivery or the operating model around data engineering, you can contact me by email.",
      emailAction: "Email Iván",
      privacy: "Phone number omitted from the public version.",
    },
    footer: "Iván López López · Data Engineering · Barcelona, Spain",
  },
  ca: {
    meta: {
      title: "Iván López López — Lideratge i enginyeria de dades",
      description:
        "Perfil professional d'Iván López López: estratègia, arquitectura, plataformes i lideratge d'enginyeria de dades.",
    },
    a11y: {
      skipToContent: "Salta al contingut",
      openMenu: "Obre el menú",
      closeMenu: "Tanca el menú",
    },
    nav: {
      label: "Navegació principal",
      menu: "Menú",
      profile: "Perfil",
      capabilities: "Capacitats",
      experience: "Experiència",
      skills: "Competències",
      education: "Formació",
      contact: "Contacte",
      language: "Canvia l'idioma",
      languageNames: { es: "ES", en: "EN", ca: "CA" },
    },
    hero: {
      eyebrow: "LIDERATGE EN ENGINYERIA DE DADES",
      role: "Associate Director, Data Engineering",
      location: "Barcelona, Espanya",
      statement:
        "Lidero equips d'enginyeria de dades i treballo entre negoci i tecnologia per definir com es dissenyen, governen, lliuren i operen les plataformes i els productes de dades.",
      viewExperience: "Veure experiència",
      contact: "Contacte",
      overviewLabel: "RESUM PROFESSIONAL",
      overview:
        "Arquitectura de dades empresarial, plataformes cloud, estàndards d'enginyeria i continuïtat del servei a AWS, Azure i GCP.",
      overviewDetail:
        "Treballo amb Data Science & AI, Data Management, Enterprise Architecture, equips d'IT i stakeholders de negoci per convertir prioritats a llarg termini en arquitectures, estàndards de lliurament i responsabilitats operatives.",
      areasLabel: "ÀREES DE TREBALL",
      areas: [
        "Estratègia i arquitectura de dades",
        "Lideratge i lliurament d'enginyeria",
        "Plataformes i integració de dades",
        "Govern i operació del servei",
      ],
      downloadResume: "Descarregar currículum",
    },
    professionalProfile: {
      sectionLabel: "01 / PERFIL PROFESSIONAL",
      title: "Perfil professional",
      paragraphs: [
        "Treballo al punt on es troben l'estratègia de dades, el lliurament d'enginyeria i les necessitats de negoci. Això inclou definir l'estratègia tecnològica amb Data Science & AI, Data Management i Enterprise Architecture; liderar equips distribuïts; i assumir la responsabilitat integral de plataformes crítiques i productes de dades.",
        "La meva funció no es limita a seleccionar eines o dissenyar sistemes. Converteixo prioritats en arquitectures, fulls de ruta, estàndards d'enginyeria i responsabilitats operatives que els equips tècnics, els socis de negoci i la direcció poden utilitzar per prendre decisions.",
      ],
      contextLabel: "CONTEXT DE LIDERATGE",
      contexts: [
        {
          title: "Lideratge d'equips globals",
          detail: "Fins a 25 enginyers a Europa, els Estats Units i Àsia.",
        },
        {
          title: "Lideratge tècnic transversal",
          detail: "Cinc equips amb més de 20 professionals a IAG.",
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPACITATS",
      title: "Capacitats i ús organitzatiu",
      intro:
        "Cada capacitat descriu la feina, com l'aplico i el paper que pot tenir dins d'una organització.",
      labels: {
        what: "QUÈ FAIG",
        apply: "COM HO APLICO",
        use: "ÚS A L'ORGANITZACIÓ",
      },
      items: [
        {
          title: "Estratègia i arquitectura de dades",
          what: "Defineixo la direcció tecnològica, arquitectures objectiu i estàndards d'enginyeria per a plataformes i productes de dades.",
          apply:
            "Treballo amb Data Science & AI, Data Management, Enterprise Architecture, IT i stakeholders de negoci.",
          use: "Dono als equips una direcció tècnica compartida i mantinc les iniciatives alineades amb les prioritats de l'organització.",
        },
        {
          title: "Lideratge i lliurament d'enginyeria",
          what: "Lidero enginyers de dades i coordino el lliurament entre equips, àrees de negoci i regions.",
          apply:
            "Defineixo fulls de ruta, patrons, ownership i pràctiques d'enginyeria connectant el lliurament amb les prioritats dels stakeholders.",
          use: "Faig explícites les responsabilitats i expectatives de lliurament entre diversos equips.",
        },
        {
          title: "Plataformes, productes i integració de dades",
          what: "Dissenyo i superviso pipelines, productes de dades, APIs i serveis des de la ingesta fins al consum.",
          apply:
            "Utilitzo Python, SQL, Airflow, dbt i FastAPI amb BigQuery, Snowflake i serveis cloud a AWS, Azure i GCP.",
          use: "Proporciono bases de dades per a analítica i ús operatiu en diferents funcions de negoci.",
        },
        {
          title: "Govern, fiabilitat i operació del servei",
          what: "Assumeixo la responsabilitat de seguretat, escalabilitat, resiliència, qualitat i continuïtat en plataformes crítiques.",
          apply:
            "Combino govern, CI/CD, observabilitat, desplegament automatitzat, mitigació de riscos, recuperació i requisits reguladors.",
          use: "Incorporo risc operatiu, compliment i continuïtat del servei en les decisions d'enginyeria des del principi.",
        },
      ],
    },
    experience: {
      sectionLabel: "03 / EXPERIÈNCIA PROFESSIONAL",
      title: "Experiència professional",
      intro:
        "L'evolució mostra com les responsabilitats d'enginyeria pràctica es van ampliar cap a arquitectura empresarial, lideratge global, govern i estratègia de dades.",
      labels: {
        scope: "ABAST DEL LLOC",
        approach: "RESPONSABILITATS I ENFOCAMENT",
        application: "APLICACIÓ A L'ORGANITZACIÓ",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Vaig definir i executar l'estratègia tecnològica mentre liderava el lliurament global de plataformes crítiques i productes de dades multidomini.",
          approach:
            "Vaig col·laborar amb Data Science & AI, Data Management i Enterprise Architecture; vaig liderar fins a 25 enginyers a Europa, els Estats Units i Àsia; i vaig mantenir la responsabilitat integral de les plataformes.",
          application:
            "Vaig donar suport a Global Markets, R&D, Global Medical Affairs i IT-for-IT. Vaig connectar tecnologia i negoci i vaig gestionar riscos, continuïtat, recuperació i compliment regulador.",
          compactScope:
            "Estratègia tecnològica, lliurament global i responsabilitat sobre plataformes crítiques i productes de dades multidomini.",
          compactApplication:
            "Vaig liderar fins a 25 enginyers; vaig alinear dades, AI i arquitectura; vaig donar suport a Markets, R&D, Medical Affairs i IT; i vaig gestionar govern i continuïtat.",
          note: "Vaig rebre reconeixement corporatiu per eficiència operativa, impacte transversal i contribució estratègica dins de l'organització global d'IT.",
        },
        {
          ...identity(1),
          scope:
            "Vaig proporcionar lideratge tècnic a cinc equips transversals amb més de 20 professionals centrats en l'arquitectura de dades empresarial.",
          approach:
            "Vaig dissenyar arquitectures distribuïdes segures per a ingesta, qualitat, transformació i consum. Vaig establir estàndards de CI/CD, observabilitat, seguretat i desplegament automatitzat.",
          application:
            "Vaig treballar amb directors tècnics i stakeholders estratègics per definir la visió tecnològica a llarg termini, prioritats de roadmap i evolució de producte.",
          compactScope:
            "Arquitectura de dades empresarial per a cinc equips i més de 20 professionals.",
          compactApplication:
            "Arquitectures distribuïdes segures, estàndards d'enginyeria i alineació del roadmap a llarg termini.",
        },
        {
          ...identity(2),
          scope:
            "Vaig dirigir el roadmap tècnic i operatiu del departament de Data Engineering i vaig establir patrons d'arquitectura, estàndards i pràctiques internes.",
          approach:
            "Vaig construir plataformes escalables a GCP atenent seguretat, rendiment i cost cloud. Vaig liderar l'equip i vaig prioritzar el lliurament amb stakeholders de negoci.",
          application:
            "Vaig lliurar solucions d'integració, automatització i analítica connectant les decisions de plataforma amb les necessitats del roadmap de producte.",
          compactScope:
            "Roadmap tècnic i operatiu del departament de Data Engineering.",
          compactApplication:
            "Disseny de plataforma GCP, lideratge d'equip, estàndards interns i lliurament alineat amb negoci.",
        },
        {
          ...identity(3),
          scope:
            "Vaig dissenyar pipelines de dades crítics a AWS i Azure amb requisits de disponibilitat, escalabilitat i seguretat.",
          approach:
            "Vaig implementar arquitectures Snowflake, pipelines de CI/CD i automatització. Vaig desenvolupar APIs i microserveis amb Python i FastAPI.",
          application:
            "Vaig donar suport a l'eficiència operativa convertint capacitats de dades en pipelines fiables i serveis orientats a producte.",
          compactScope: "Pipelines de dades crítics a AWS i Azure.",
          compactApplication:
            "Snowflake, CI/CD, automatització, APIs Python i microserveis FastAPI.",
        },
        {
          ...identity(4),
          scope:
            "Vaig construir i aportar lideratge tècnic a un departament de dades de nova creació, formant la base tecnològica per a la transformació digital.",
          approach:
            "Vaig desenvolupar pipelines crítics amb Python i Azure Data Factory i vaig gestionar infraestructura de bases de dades per a seguretat, disponibilitat i fiabilitat.",
          application:
            "Vaig treballar amb unitats de negoci per definir requisits de dades i solucions tècniques alineades amb el creixement de la companyia.",
          compactScope:
            "Creació del departament de dades i de les seves bases tècniques.",
          compactApplication:
            "Pipelines amb Python i Azure Data Factory, infraestructura de bases de dades i requisits de negoci.",
        },
        {
          ...identity(5),
          scope:
            "Vaig desenvolupar solucions ETL i de reporting amb SSIS i C#, a més de donar suport a processos d'anàlisi de negoci.",
          approach:
            "Vaig dissenyar quadres de comandament executius sobre KPIs de negoci, vaig liderar un projecte de transformació comercial i vaig assumir la responsabilitat de la infraestructura de bases de dades.",
          application:
            "Vaig aplicar enginyeria i analítica de dades al reporting, el suport a decisions executives i les iniciatives de clients empresarials.",
          compactScope: "ETL, reporting i anàlisi de negoci amb SSIS i C#.",
          compactApplication:
            "Dashboards executius, transformació comercial i responsabilitat sobre la infraestructura de bases de dades.",
        },
      ],
    },
    skills: {
      sectionLabel: "04 / COMPETÈNCIES EN PRÀCTICA",
      title: "Competències i manera de treballar",
      intro:
        "Utilitzo la tecnologia com a part d'un sistema d'enginyeria més ampli que inclou disseny de plataformes, lliurament de software, govern i col·laboració amb les persones que depenen de les dades.",
      applicationLabel: "COM HO UTILITZO",
      items: [
        {
          category: "ENGINYERIA DE DADES",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Ingesta, transformació, orquestració i fluxos de qualitat de les dades.",
        },
        {
          category: "SERVEIS DE DADES",
          technology: "FastAPI · Microserveis",
          application:
            "Poso capacitats de dades a disposició de productes i consumidors interns mitjançant serveis mantenibles.",
        },
        {
          category: "CLOUD I PLATAFORMES DE DADES",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Emmagatzematge, processament i arquitectura de plataforma segons els requisits del domini i d'operació.",
        },
        {
          category: "LLIURAMENT I OPERACIONS",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Fluxos d'enginyeria versionats, repetibles i automatitzats amb un ownership operatiu més clar.",
        },
        {
          category: "LIDERATGE I ORGANITZACIÓ",
          technology:
            "Lideratge tècnic · Comunicació transversal · Gestió de stakeholders · Planificació estratègica · Ownership integral · Resolució de problemes complexos",
          application:
            "Alineo roadmaps, coordino equips i stakeholders, aclareixo l'ownership i mantinc la responsabilitat des del disseny tècnic fins a l'operació del servei.",
        },
      ],
    },
    education: {
      sectionLabel: "05 / FORMACIÓ",
      title: "Formació",
      degree: "Grau Superior en Desenvolupament d'Aplicacions Informàtiques",
      school: "Colegio Cultural",
      gradeLabel: "NOTA",
      grade: "8/10",
      recognitionLabel: "RECONEIXEMENT",
      recognition: "Premi al millor projecte final — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACTE",
      title: "Contacte",
      copy: "Visc a Barcelona, Espanya. Si la teva organització treballa en estratègia de dades, arquitectura, lliurament de plataformes o models operatius d'enginyeria de dades, pots escriure'm per correu.",
      emailAction: "Escriure a Iván",
      privacy: "El número de telèfon s'omet a la versió pública.",
    },
    footer: "Iván López López · Enginyeria de dades · Barcelona, Espanya",
  },
} satisfies Record<Locale, SiteContent>;
