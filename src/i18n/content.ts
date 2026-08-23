import type { Locale } from "./config";

export const profile = {
  name: "Iván López López",
  email: "ivanlopezlopez1997@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ivan-lopez-lopez/",
} as const;

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

type ExperienceId = (typeof companies)[number][0];

export interface ExperienceReference {
  experienceId: ExperienceId;
  sourceLabel: string;
}

interface ReferencedText {
  text: string;
  references: ExperienceReference[];
}

interface Capability {
  title: string;
  what: string;
  apply: string;
  use: string;
  references: ExperienceReference[];
}

interface Experience {
  id: ExperienceId;
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
  references: ExperienceReference[];
}

export interface SiteContent {
  experienceReferenceLabel: string;
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
    statement: ReferencedText;
    viewExperience: string;
    contact: string;
    overviewLabel: string;
    overview: string;
    overviewDetail: string;
    overviewReferences: ExperienceReference[];
    areasLabel: string;
    areas: string[];
    downloadResume: string;
  };
  professionalProfile: {
    sectionLabel: string;
    title: string;
    paragraphs: ReferencedText[];
    contextLabel: string;
    contexts: Array<{
      title: string;
      detail: string;
      references: ExperienceReference[];
    }>;
  };
  capabilities: {
    sectionLabel: string;
    title: string;
    intro: string;
    references: ExperienceReference[];
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
    references: ExperienceReference[];
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

type CompanyIndex = 0 | 1 | 2 | 3 | 4 | 5;

const identity = (index: CompanyIndex) => {
  const [id, company, role, period] = companies[index];
  return { id, company, role, period };
};

const experienceReferences = {
  astrazeneca: { experienceId: "astrazeneca", sourceLabel: "AstraZeneca" },
  iag: { experienceId: "iag", sourceLabel: "IAG" },
  isdin: { experienceId: "isdin", sourceLabel: "ISDIN" },
  penguin: { experienceId: "penguin", sourceLabel: "Penguin Random House" },
  "primer-impacto": {
    experienceId: "primer-impacto",
    sourceLabel: "Primer Impacto",
  },
  winche: { experienceId: "winche", sourceLabel: "Winche" },
} satisfies Record<ExperienceId, ExperienceReference>;

const related = (...ids: ExperienceId[]) =>
  ids.map((id) => experienceReferences[id]);

export const content = {
  es: {
    experienceReferenceLabel: "Experiencia relacionada",
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
      statement: {
        text: "Dirección de equipos globales de ingeniería de datos y definición del modelo con el que se diseñan, gobiernan, entregan y operan plataformas y productos entre negocio y tecnología.",
        references: related("astrazeneca", "iag"),
      },
      viewExperience: "Ver experiencia",
      contact: "Contacto",
      overviewLabel: "RESUMEN PROFESIONAL",
      overview:
        "Arquitectura de datos empresarial, plataformas en la nube, estándares de ingeniería y continuidad del servicio en AWS, Azure y GCP.",
      overviewDetail:
        "Responsabilidad de convertir prioridades de Data Science & AI, Data Management, Enterprise Architecture, IT y negocio en arquitecturas, estándares de entrega y responsabilidades operativas sostenibles.",
      overviewReferences: related("astrazeneca", "iag", "isdin", "penguin"),
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
        {
          text: "Trayectoria en la intersección entre estrategia de datos, entrega de ingeniería y necesidades de negocio. El alcance incluye definición de estrategia tecnológica junto a Data Science & AI, Data Management y Enterprise Architecture; liderazgo de equipos distribuidos; y responsabilidad integral sobre plataformas críticas y productos de datos.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          text: "El enfoque convierte prioridades de negocio en decisiones operables: arquitecturas, hojas de ruta, estándares de ingeniería y modelos de responsabilidad que aclaran quién decide, quién entrega y quién opera cada servicio.",
          references: related("astrazeneca", "iag", "isdin"),
        },
      ],
      contextLabel: "CONTEXTO DE LIDERAZGO",
      contexts: [
        {
          title: "Liderazgo de equipos globales",
          detail: "Hasta 25 ingenieros en Europa, Estados Unidos y Asia.",
          references: related("astrazeneca"),
        },
        {
          title: "Liderazgo técnico transversal",
          detail: "Cinco equipos con más de 20 profesionales en IAG.",
          references: related("iag"),
        },
        {
          title: "Foundational Data Architecture",
          detail:
            "Liderazgo técnico de la construcción desde cero de la arquitectura, los patrones y las prácticas del departamento de Data Engineering.",
          references: related("isdin"),
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPACIDADES",
      title: "Capacidades y uso organizativo",
      intro:
        "El alcance combina arquitectura objetivo, entrega de ingeniería, integración de datos y responsabilidad sobre el servicio, desde la planificación a largo plazo hasta la operación en producción.",
      references: related("astrazeneca", "iag", "isdin"),
      labels: {
        what: "ÁMBITO",
        apply: "APLICACIÓN",
        use: "VALOR ORGANIZATIVO",
      },
      items: [
        {
          title: "Estrategia y arquitectura de datos",
          what: "Definición de dirección tecnológica, arquitecturas objetivo y estándares de ingeniería para plataformas y productos de datos.",
          apply:
            "Alineación de Data Science & AI, Data Management, Enterprise Architecture, IT y áreas de negocio sobre decisiones técnicas comunes.",
          use: "Una dirección técnica compartida que evita iniciativas aisladas y mantiene la inversión en datos ligada a prioridades corporativas.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Liderazgo y entrega de ingeniería",
          what: "Dirección de ingenieros de datos y coordinación de la entrega entre equipos, áreas de negocio y regiones.",
          apply:
            "Definición de hojas de ruta, patrones, responsabilidades y prácticas de ingeniería conectadas con las prioridades de las áreas implicadas.",
          use: "Responsabilidades y expectativas de entrega explícitas, incluso cuando una iniciativa depende de varios equipos.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Plataformas, productos e integración de datos",
          what: "Diseño y supervisión de pipelines, productos de datos, APIs y servicios desde la ingesta hasta el consumo.",
          apply:
            "Python, SQL, Airflow, dbt y FastAPI sobre BigQuery, Snowflake y servicios de AWS, Azure y GCP, seleccionados según el contexto operativo.",
          use: "Bases fiables para analítica y procesos operativos, con capacidades reutilizables entre distintas funciones de negocio.",
          references: related("iag", "isdin", "penguin", "primer-impacto"),
        },
        {
          title: "Gobierno, fiabilidad y operación del servicio",
          what: "Responsabilidad sobre seguridad, escalabilidad, resiliencia, calidad y continuidad de plataformas críticas.",
          apply:
            "Integración de gobierno, CI/CD, observabilidad, despliegue automatizado, mitigación de riesgos, recuperación y requisitos regulatorios.",
          use: "Riesgo operativo, cumplimiento y continuidad incorporados al diseño, no añadidos después de poner el servicio en producción.",
          references: related(
            "astrazeneca",
            "iag",
            "penguin",
            "primer-impacto",
          ),
        },
      ],
    },
    experience: {
      sectionLabel: "03 / EXPERIENCIA PROFESIONAL",
      title: "Experiencia profesional",
      intro:
        "La trayectoria refleja un aumento progresivo del alcance: de construir pipelines y servicios a definir arquitectura empresarial, estrategia, gobierno y entrega global.",
      labels: {
        scope: "ALCANCE DEL PUESTO",
        approach: "RESPONSABILIDADES Y ENFOQUE",
        application: "APLICACIÓN EN LA ORGANIZACIÓN",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Definición y ejecución de la estrategia tecnológica, junto con la entrega global de plataformas críticas y productos de datos multidominio.",
          approach:
            "Colaboración con Data Science & AI, Data Management y Enterprise Architecture; liderazgo de hasta 25 ingenieros en Europa, Estados Unidos y Asia; y responsabilidad integral sobre las plataformas.",
          application:
            "Soporte a Global Markets, R&D, Global Medical Affairs e IT-for-IT, conectando tecnología y negocio bajo un mismo modelo de riesgo, continuidad, recuperación y cumplimiento regulatorio.",
          compactScope:
            "Estrategia tecnológica, entrega global y responsabilidad sobre plataformas críticas y productos de datos multidominio.",
          compactApplication:
            "Liderazgo de hasta 25 ingenieros; alineación de datos, AI y arquitectura; soporte a Markets, R&D, Medical Affairs e IT; y gestión de gobierno y continuidad.",
          note: "Reconocimiento corporativo por eficiencia operativa, impacto transversal y contribución estratégica dentro de la organización global de IT.",
        },
        {
          ...identity(1),
          scope:
            "Liderazgo técnico de cinco equipos transversales con más de 20 profesionales, centrados en la arquitectura de datos empresarial.",
          approach:
            "Diseño de arquitecturas distribuidas seguras para ingesta, calidad, transformación y consumo, con estándares comunes de CI/CD, observabilidad, seguridad y despliegue automatizado.",
          application:
            "Definición conjunta con directores técnicos y áreas estratégicas de la visión tecnológica a largo plazo, las prioridades de la hoja de ruta y la evolución de producto.",
          compactScope:
            "Arquitectura de datos empresarial para cinco equipos y más de 20 profesionales.",
          compactApplication:
            "Arquitecturas distribuidas seguras, estándares de ingeniería y alineación de la hoja de ruta a largo plazo.",
        },
        {
          ...identity(2),
          scope:
            "Dirección de la hoja de ruta técnica y operativa del departamento de Data Engineering y establecimiento de patrones de arquitectura, estándares y prácticas internas.",
          approach:
            "Construcción de plataformas escalables en GCP con criterios de seguridad, rendimiento y coste; liderazgo del equipo y priorización de la entrega con las áreas de negocio.",
          application:
            "Soluciones de integración, automatización y analítica que conectaron las decisiones de plataforma con las necesidades de la hoja de ruta de producto.",
          compactScope:
            "Hoja de ruta técnica y operativa del departamento de Data Engineering.",
          compactApplication:
            "Diseño de plataforma GCP, liderazgo de equipo, estándares internos y entrega alineada con negocio.",
        },
        {
          ...identity(3),
          scope:
            "Diseño de pipelines de datos críticos en AWS y Azure con requisitos de disponibilidad, escalabilidad y seguridad.",
          approach:
            "Implementación de arquitecturas Snowflake, pipelines de CI/CD y automatización, además de APIs y microservicios con Python y FastAPI.",
          application:
            "Conversión de capacidades de datos en pipelines fiables y servicios orientados a producto para mejorar la eficiencia operativa.",
          compactScope: "Pipelines de datos críticos en AWS y Azure.",
          compactApplication:
            "Snowflake, CI/CD, automatización, APIs Python y microservicios FastAPI.",
        },
        {
          ...identity(4),
          scope:
            "Creación y liderazgo técnico de un nuevo departamento de datos que estableció la base tecnológica para la transformación digital.",
          approach:
            "Desarrollo de pipelines críticos con Python y Azure Data Factory y gestión de infraestructura de bases de datos con criterios de seguridad, disponibilidad y fiabilidad.",
          application:
            "Definición con las unidades de negocio de requisitos de datos y soluciones técnicas alineadas con el crecimiento de la compañía.",
          compactScope:
            "Creación del departamento de datos y de sus bases técnicas.",
          compactApplication:
            "Pipelines con Python y Azure Data Factory, infraestructura de bases de datos y requisitos de negocio.",
        },
        {
          ...identity(5),
          scope:
            "Desarrollo de soluciones ETL y de informes con SSIS y C#, además de soporte a procesos de análisis de negocio.",
          approach:
            "Diseño de cuadros de mando ejecutivos sobre KPIs de negocio, liderazgo de un proyecto de transformación comercial y responsabilidad sobre la infraestructura de bases de datos.",
          application:
            "Aplicación de ingeniería y analítica de datos a los informes, el soporte a decisiones ejecutivas y las iniciativas de clientes empresariales.",
          compactScope: "ETL, informes y análisis de negocio con SSIS y C#.",
          compactApplication:
            "Cuadros de mando ejecutivos, transformación comercial y responsabilidad sobre la infraestructura de bases de datos.",
        },
      ],
    },
    skills: {
      sectionLabel: "04 / COMPETENCIAS EN PRÁCTICA",
      title: "Competencias y forma de trabajo",
      intro:
        "El uso de la tecnología forma parte de un sistema de ingeniería que conecta diseño de plataformas, automatización de la entrega, gobierno del servicio y coordinación de las áreas que producen y consumen datos.",
      references: related("isdin", "penguin", "primer-impacto"),
      applicationLabel: "APLICACIÓN",
      items: [
        {
          category: "INGENIERÍA DE DATOS",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Construcción de flujos de ingesta, transformación, orquestación y calidad que hacen trazable el recorrido del dato.",
          references: related("isdin", "penguin", "primer-impacto", "winche"),
        },
        {
          category: "SERVICIOS DE DATOS",
          technology: "FastAPI · Microservicios",
          application:
            "Exposición de capacidades de datos mediante servicios mantenibles para productos y consumidores internos.",
          references: related("penguin"),
        },
        {
          category: "NUBE Y PLATAFORMAS DE DATOS",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Selección de almacenamiento, procesamiento y arquitectura según los requisitos de cada dominio, su escala y su modelo operativo.",
          references: related("iag", "isdin", "penguin"),
        },
        {
          category: "ENTREGA Y OPERACIONES",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Entrega versionada, repetible y automatizada que reduce cambios manuales y hace explícita la responsabilidad operativa.",
          references: related("iag", "penguin"),
        },
        {
          category: "LIDERAZGO Y ORGANIZACIÓN",
          technology:
            "Liderazgo técnico y organizativo · Comunicación transversal · Gestión de áreas implicadas · Planificación estratégica · Responsabilidad integral · Resolución de problemas complejos",
          application:
            "Alineación de hojas de ruta, equipos y áreas implicadas para mantener las decisiones y la responsabilidad desde el diseño técnico hasta la operación del servicio.",
          references: related("astrazeneca", "iag", "isdin", "primer-impacto"),
        },
      ],
    },
    education: {
      sectionLabel: "05 / FORMACIÓN",
      title: "Formación",
      degree:
        "Grado Superior de Administración de Sistemas Informáticos y Redes",
      school: "Colegio Cultural",
      gradeLabel: "NOTA",
      grade: "8/10",
      recognitionLabel: "RECONOCIMIENTO",
      recognition: "Premio al mejor proyecto final — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACTO",
      title: "Contacto",
      copy: "Perfil profesional con base en Barcelona, España. Contacto para organizaciones con necesidades en estrategia de datos, arquitectura, entrega de plataformas o modelos operativos de ingeniería de datos.",
      emailAction: "Escribir a Iván",
      privacy: "El número de teléfono se omite en la versión pública.",
    },
    footer:
      "Iván López López · Data Architecture & Strategy · Barcelona, España",
  },
  en: {
    experienceReferenceLabel: "Related experience",
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
      statement: {
        text: "Leadership of global data engineering teams and definition of the operating model used to design, govern, deliver and run platforms and products across business and technology.",
        references: related("astrazeneca", "iag"),
      },
      viewExperience: "View experience",
      contact: "Contact",
      overviewLabel: "PROFESSIONAL OVERVIEW",
      overview:
        "Enterprise data architecture, cloud platforms, engineering standards and service continuity across AWS, Azure and GCP.",
      overviewDetail:
        "Responsibility for translating priorities from Data Science & AI, Data Management, Enterprise Architecture, IT and business into sustainable architectures, delivery standards and operating responsibilities.",
      overviewReferences: related("astrazeneca", "iag", "isdin", "penguin"),
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
        {
          text: "A career at the intersection of data strategy, engineering delivery and business needs. The scope includes defining technology strategy with Data Science & AI, Data Management and Enterprise Architecture; leading distributed teams; and holding end-to-end accountability for critical platforms and data products.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          text: "The approach turns business priorities into operable decisions: target architectures, roadmaps, engineering standards and accountability models that clarify decision-making, delivery and operation for each service.",
          references: related("astrazeneca", "iag", "isdin"),
        },
      ],
      contextLabel: "LEADERSHIP CONTEXT",
      contexts: [
        {
          title: "Global team leadership",
          detail:
            "Up to 25 engineers across Europe, the United States and Asia.",
          references: related("astrazeneca"),
        },
        {
          title: "Cross-functional technical leadership",
          detail: "Five teams involving more than 20 professionals at IAG.",
          references: related("iag"),
        },
        {
          title: "Foundational Data Architecture",
          detail:
            "Technical leadership in building the Data Engineering department’s architecture, patterns and practices from the ground up.",
          references: related("isdin"),
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPABILITIES",
      title: "Capabilities and organizational use",
      intro:
        "The scope combines target architecture, engineering delivery, data integration and service accountability, from long-term planning through production operation.",
      references: related("astrazeneca", "iag", "isdin"),
      labels: {
        what: "SCOPE",
        apply: "APPLICATION",
        use: "ORGANIZATIONAL VALUE",
      },
      items: [
        {
          title: "Data strategy and architecture",
          what: "Definition of technology direction, target architectures and engineering standards for data platforms and products.",
          apply:
            "Alignment of Data Science & AI, Data Management, Enterprise Architecture, IT and business stakeholders around shared technical decisions.",
          use: "A shared technical direction that prevents isolated initiatives and keeps data investment tied to corporate priorities.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Engineering leadership and delivery",
          what: "Leadership of data engineers and coordination of delivery across teams, business areas and regions.",
          apply:
            "Definition of roadmaps, patterns, accountability and engineering practices connected to stakeholder priorities.",
          use: "Explicit responsibilities and delivery expectations, including initiatives that depend on multiple teams.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Data platforms, products and integration",
          what: "Design and oversight of pipelines, data products, APIs and services from ingestion through consumption.",
          apply:
            "Python, SQL, Airflow, dbt and FastAPI across BigQuery, Snowflake and AWS, Azure and GCP services, selected for the operating context.",
          use: "Reliable foundations for analytics and operational processes, with capabilities reusable across business functions.",
          references: related("iag", "isdin", "penguin", "primer-impacto"),
        },
        {
          title: "Governance, reliability and service operation",
          what: "Accountability for security, scalability, resilience, data quality and continuity across critical platforms.",
          apply:
            "Integration of governance, CI/CD, observability, automated deployment, risk mitigation, recovery and regulatory requirements.",
          use: "Operational risk, compliance and continuity built into the design rather than added after production release.",
          references: related(
            "astrazeneca",
            "iag",
            "penguin",
            "primer-impacto",
          ),
        },
      ],
    },
    experience: {
      sectionLabel: "03 / PROFESSIONAL EXPERIENCE",
      title: "Professional experience",
      intro:
        "Career progression from building pipelines and services to defining enterprise architecture, strategy, governance and global delivery.",
      labels: {
        scope: "SCOPE OF THE ROLE",
        approach: "RESPONSIBILITIES & APPROACH",
        application: "APPLICATION WITHIN THE ORGANIZATION",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Definition and execution of technology strategy, alongside global delivery of critical platforms and multi-domain data products.",
          approach:
            "Collaboration with Data Science & AI, Data Management and Enterprise Architecture; leadership of up to 25 engineers across Europe, the United States and Asia; and end-to-end platform accountability.",
          application:
            "Support for Global Markets, R&D, Global Medical Affairs and IT-for-IT, connecting technology and business through a common model for risk, continuity, recovery and regulatory compliance.",
          compactScope:
            "Technology strategy, global delivery and responsibility for critical platforms and multi-domain data products.",
          compactApplication:
            "Leadership of up to 25 engineers; alignment of data, AI and architecture; support for Markets, R&D, Medical Affairs and IT; and management of governance and continuity.",
          note: "Corporate recognition for operational efficiency, cross-functional impact and strategic contribution within the global IT organization.",
        },
        {
          ...identity(1),
          scope:
            "Technical leadership of five cross-functional teams involving more than 20 professionals, focused on enterprise data architecture.",
          approach:
            "Design of secure distributed architectures for ingestion, quality, transformation and consumption, with shared standards for CI/CD, observability, security and automated deployment.",
          application:
            "Joint definition with technical directors and strategic stakeholders of the long-term technology vision, roadmap priorities and product evolution.",
          compactScope:
            "Core enterprise data architecture across five teams and more than 20 professionals.",
          compactApplication:
            "Secure distributed architectures, engineering standards and long-term roadmap alignment.",
        },
        {
          ...identity(2),
          scope:
            "Direction of the Data Engineering department’s technical and operational roadmap and establishment of architecture patterns, standards and internal practices.",
          approach:
            "Construction of scalable GCP platforms with security, performance and cloud-cost criteria; team leadership; and delivery prioritization with business stakeholders.",
          application:
            "Integration, automation and analytics solutions connecting platform decisions with product-roadmap needs.",
          compactScope:
            "Technical and operational roadmap for the Data Engineering department.",
          compactApplication:
            "GCP platform design, team leadership, internal standards and business-aligned delivery.",
        },
        {
          ...identity(3),
          scope:
            "Design of mission-critical data pipelines across AWS and Azure with availability, scalability and security requirements.",
          approach:
            "Implementation of Snowflake architectures, CI/CD pipelines and automation, alongside APIs and microservices built with Python and FastAPI.",
          application:
            "Conversion of data capabilities into reliable pipelines and product-oriented services to improve operational efficiency.",
          compactScope: "Mission-critical data pipelines across AWS and Azure.",
          compactApplication:
            "Snowflake, CI/CD, automation, Python APIs and FastAPI microservices.",
        },
        {
          ...identity(4),
          scope:
            "Creation and technical leadership of a new data department that established the technology foundation for digital transformation.",
          approach:
            "Development of critical pipelines with Python and Azure Data Factory and management of database infrastructure for security, availability and reliability.",
          application:
            "Joint definition with business units of data requirements and technical solutions aligned with company growth.",
          compactScope:
            "Established the company’s data department and its technical foundations.",
          compactApplication:
            "Python and Azure Data Factory pipelines, database infrastructure and business requirements.",
        },
        {
          ...identity(5),
          scope:
            "Development of ETL and reporting solutions with SSIS and C#, alongside support for business-analysis processes.",
          approach:
            "Design of executive dashboards based on business KPIs, leadership of a commercial-transformation project and accountability for database infrastructure.",
          application:
            "Application of data engineering and analytics to reporting, executive decision support and enterprise-client initiatives.",
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
        "Technology forms part of an engineering system that connects platform design, delivery automation, service governance and coordination of the teams that produce and consume data.",
      references: related("isdin", "penguin", "primer-impacto"),
      applicationLabel: "APPLICATION",
      items: [
        {
          category: "DATA ENGINEERING",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Ingestion, transformation, orchestration and quality workflows that make the data journey traceable.",
          references: related("isdin", "penguin", "primer-impacto", "winche"),
        },
        {
          category: "DATA SERVICES",
          technology: "FastAPI · Microservices",
          application:
            "Maintainable services that expose data capabilities to products and internal consumers.",
          references: related("penguin"),
        },
        {
          category: "CLOUD AND DATA PLATFORMS",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Storage, processing and platform architecture selected according to each domain, its scale and its operating model.",
          references: related("iag", "isdin", "penguin"),
        },
        {
          category: "DELIVERY AND OPERATIONS",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Versioned, repeatable and automated delivery that reduces manual changes and makes operational accountability explicit.",
          references: related("iag", "penguin"),
        },
        {
          category: "LEADERSHIP AND ORGANIZATION",
          technology:
            "Technical & Organizational Leadership · Cross-functional Communication · Stakeholder Management · Strategic Planning · End-to-end Ownership · Complex Problem Solving",
          application:
            "Alignment of roadmaps, teams and stakeholders to preserve decision ownership and accountability from technical design through service operation.",
          references: related("astrazeneca", "iag", "isdin", "primer-impacto"),
        },
      ],
    },
    education: {
      sectionLabel: "05 / EDUCATION",
      title: "Education",
      degree: "Higher Technician in Computer Network Systems Management",
      school: "Colegio Cultural",
      gradeLabel: "GPA",
      grade: "8/10",
      recognitionLabel: "RECOGNITION",
      recognition: "Best Final Project Award — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACT",
      title: "Contact",
      copy: "Professional profile based in Barcelona, Spain. Contact for organizations with needs in data strategy, architecture, platform delivery or data-engineering operating models.",
      emailAction: "Email Iván",
      privacy: "Phone number omitted from the public version.",
    },
    footer:
      "Iván López López · Data Architecture & Strategy · Barcelona, Spain",
  },
  ca: {
    experienceReferenceLabel: "Experiència relacionada",
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
      statement: {
        text: "Direcció d'equips globals d'enginyeria de dades i definició del model amb què es dissenyen, governen, lliuren i operen plataformes i productes entre negoci i tecnologia.",
        references: related("astrazeneca", "iag"),
      },
      viewExperience: "Veure experiència",
      contact: "Contacte",
      overviewLabel: "RESUM PROFESSIONAL",
      overview:
        "Arquitectura de dades empresarial, plataformes al núvol, estàndards d'enginyeria i continuïtat del servei a AWS, Azure i GCP.",
      overviewDetail:
        "Responsabilitat de convertir prioritats de Data Science & AI, Data Management, Enterprise Architecture, IT i negoci en arquitectures, estàndards de lliurament i responsabilitats operatives sostenibles.",
      overviewReferences: related("astrazeneca", "iag", "isdin", "penguin"),
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
        {
          text: "Trajectòria en la intersecció entre estratègia de dades, lliurament d'enginyeria i necessitats de negoci. L'abast inclou la definició d'estratègia tecnològica amb Data Science & AI, Data Management i Enterprise Architecture; el lideratge d'equips distribuïts; i la responsabilitat integral sobre plataformes crítiques i productes de dades.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          text: "L'enfocament converteix prioritats de negoci en decisions operables: arquitectures, fulls de ruta, estàndards d'enginyeria i models de responsabilitat que aclareixen qui decideix, qui lliura i qui opera cada servei.",
          references: related("astrazeneca", "iag", "isdin"),
        },
      ],
      contextLabel: "CONTEXT DE LIDERATGE",
      contexts: [
        {
          title: "Lideratge d'equips globals",
          detail: "Fins a 25 enginyers a Europa, els Estats Units i Àsia.",
          references: related("astrazeneca"),
        },
        {
          title: "Lideratge tècnic transversal",
          detail: "Cinc equips amb més de 20 professionals a IAG.",
          references: related("iag"),
        },
        {
          title: "Foundational Data Architecture",
          detail:
            "Lideratge tècnic de la construcció des de zero de l'arquitectura, els patrons i les pràctiques del departament de Data Engineering.",
          references: related("isdin"),
        },
      ],
    },
    capabilities: {
      sectionLabel: "02 / CAPACITATS",
      title: "Capacitats i ús organitzatiu",
      intro:
        "L'abast combina arquitectura objectiu, lliurament d'enginyeria, integració de dades i responsabilitat sobre el servei, des de la planificació a llarg termini fins a l'operació en producció.",
      references: related("astrazeneca", "iag", "isdin"),
      labels: {
        what: "ÀMBIT",
        apply: "APLICACIÓ",
        use: "VALOR ORGANITZATIU",
      },
      items: [
        {
          title: "Estratègia i arquitectura de dades",
          what: "Definició de la direcció tecnològica, arquitectures objectiu i estàndards d'enginyeria per a plataformes i productes de dades.",
          apply:
            "Alineació de Data Science & AI, Data Management, Enterprise Architecture, IT i àrees de negoci al voltant de decisions tècniques comunes.",
          use: "Una direcció tècnica compartida que evita iniciatives aïllades i manté la inversió en dades vinculada a prioritats corporatives.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Lideratge i lliurament d'enginyeria",
          what: "Direcció d'enginyers de dades i coordinació del lliurament entre equips, àrees de negoci i regions.",
          apply:
            "Definició de fulls de ruta, patrons, responsabilitats i pràctiques d'enginyeria connectades amb les prioritats de les àrees implicades.",
          use: "Responsabilitats i expectatives de lliurament explícites, també quan una iniciativa depèn de diversos equips.",
          references: related("astrazeneca", "iag", "isdin"),
        },
        {
          title: "Plataformes, productes i integració de dades",
          what: "Disseny i supervisió de canalitzacions de dades, productes, APIs i serveis des de la ingesta fins al consum.",
          apply:
            "Python, SQL, Airflow, dbt i FastAPI sobre BigQuery, Snowflake i serveis d'AWS, Azure i GCP, seleccionats segons el context operatiu.",
          use: "Bases fiables per a analítica i processos operatius, amb capacitats reutilitzables entre diferents funcions de negoci.",
          references: related("iag", "isdin", "penguin", "primer-impacto"),
        },
        {
          title: "Govern, fiabilitat i operació del servei",
          what: "Responsabilitat sobre seguretat, escalabilitat, resiliència, qualitat i continuïtat de plataformes crítiques.",
          apply:
            "Integració de govern, CI/CD, observabilitat, desplegament automatitzat, mitigació de riscos, recuperació i requisits reguladors.",
          use: "Risc operatiu, compliment i continuïtat incorporats al disseny, no afegits després de posar el servei en producció.",
          references: related(
            "astrazeneca",
            "iag",
            "penguin",
            "primer-impacto",
          ),
        },
      ],
    },
    experience: {
      sectionLabel: "03 / EXPERIÈNCIA PROFESSIONAL",
      title: "Experiència professional",
      intro:
        "La trajectòria reflecteix un augment progressiu de l'abast: des de construir canalitzacions i serveis fins a definir arquitectura empresarial, estratègia, govern i lliurament global.",
      labels: {
        scope: "ABAST DEL LLOC",
        approach: "RESPONSABILITATS I ENFOCAMENT",
        application: "APLICACIÓ A L'ORGANITZACIÓ",
      },
      items: [
        {
          ...identity(0),
          scope:
            "Definició i execució de l'estratègia tecnològica, juntament amb el lliurament global de plataformes crítiques i productes de dades multidomini.",
          approach:
            "Col·laboració amb Data Science & AI, Data Management i Enterprise Architecture; lideratge de fins a 25 enginyers a Europa, els Estats Units i Àsia; i responsabilitat integral sobre les plataformes.",
          application:
            "Suport a Global Markets, R&D, Global Medical Affairs i IT-for-IT, connectant tecnologia i negoci sota un mateix model de risc, continuïtat, recuperació i compliment regulador.",
          compactScope:
            "Estratègia tecnològica, lliurament global i responsabilitat sobre plataformes crítiques i productes de dades multidomini.",
          compactApplication:
            "Lideratge de fins a 25 enginyers; alineació de dades, AI i arquitectura; suport a Markets, R&D, Medical Affairs i IT; i gestió de govern i continuïtat.",
          note: "Reconeixement corporatiu per eficiència operativa, impacte transversal i contribució estratègica dins de l'organització global d'IT.",
        },
        {
          ...identity(1),
          scope:
            "Lideratge tècnic de cinc equips transversals amb més de 20 professionals, centrats en l'arquitectura de dades empresarial.",
          approach:
            "Disseny d'arquitectures distribuïdes segures per a ingesta, qualitat, transformació i consum, amb estàndards comuns de CI/CD, observabilitat, seguretat i desplegament automatitzat.",
          application:
            "Definició conjunta amb directors tècnics i parts interessades estratègiques de la visió tecnològica a llarg termini, les prioritats del full de ruta i l'evolució de producte.",
          compactScope:
            "Arquitectura de dades empresarial per a cinc equips i més de 20 professionals.",
          compactApplication:
            "Arquitectures distribuïdes segures, estàndards d'enginyeria i alineació del full de ruta a llarg termini.",
        },
        {
          ...identity(2),
          scope:
            "Direcció del full de ruta tècnic i operatiu del departament de Data Engineering i establiment de patrons d'arquitectura, estàndards i pràctiques internes.",
          approach:
            "Construcció de plataformes escalables a GCP amb criteris de seguretat, rendiment i cost; lideratge de l'equip; i priorització del lliurament amb les àrees de negoci.",
          application:
            "Solucions d'integració, automatització i analítica que van connectar les decisions de plataforma amb les necessitats del full de ruta de producte.",
          compactScope:
            "Full de ruta tècnic i operatiu del departament de Data Engineering.",
          compactApplication:
            "Disseny de plataforma GCP, lideratge d'equip, estàndards interns i lliurament alineat amb negoci.",
        },
        {
          ...identity(3),
          scope:
            "Disseny de canalitzacions de dades crítiques a AWS i Azure amb requisits de disponibilitat, escalabilitat i seguretat.",
          approach:
            "Implementació d'arquitectures Snowflake, canalitzacions de CI/CD i automatització, a més d'APIs i microserveis amb Python i FastAPI.",
          application:
            "Conversió de capacitats de dades en canalitzacions fiables i serveis orientats a producte per millorar l'eficiència operativa.",
          compactScope: "Canalitzacions de dades crítiques a AWS i Azure.",
          compactApplication:
            "Snowflake, CI/CD, automatització, APIs Python i microserveis FastAPI.",
        },
        {
          ...identity(4),
          scope:
            "Creació i lideratge tècnic d'un nou departament de dades que va establir la base tecnològica per a la transformació digital.",
          approach:
            "Desenvolupament de canalitzacions crítiques amb Python i Azure Data Factory i gestió d'infraestructura de bases de dades amb criteris de seguretat, disponibilitat i fiabilitat.",
          application:
            "Definició conjunta amb les unitats de negoci de requisits de dades i solucions tècniques alineades amb el creixement de l'empresa.",
          compactScope:
            "Creació del departament de dades i de les seves bases tècniques.",
          compactApplication:
            "Canalitzacions amb Python i Azure Data Factory, infraestructura de bases de dades i requisits de negoci.",
        },
        {
          ...identity(5),
          scope:
            "Desenvolupament de solucions ETL i d'informes amb SSIS i C#, a més de suport a processos d'anàlisi de negoci.",
          approach:
            "Disseny de quadres de comandament executius basats en indicadors de negoci, lideratge d'un projecte de transformació comercial i responsabilitat sobre la infraestructura de bases de dades.",
          application:
            "Aplicació d'enginyeria i analítica de dades als informes, al suport de decisions executives i a les iniciatives de clients empresarials.",
          compactScope: "ETL, informes i anàlisi de negoci amb SSIS i C#.",
          compactApplication:
            "Quadres de comandament executius, transformació comercial i responsabilitat sobre la infraestructura de bases de dades.",
        },
      ],
    },
    skills: {
      sectionLabel: "04 / COMPETÈNCIES EN PRÀCTICA",
      title: "Competències i manera de treballar",
      intro:
        "L'ús de la tecnologia forma part d'un sistema d'enginyeria que connecta disseny de plataformes, automatització del lliurament, govern del servei i coordinació de les àrees que produeixen i consumeixen dades.",
      references: related("isdin", "penguin", "primer-impacto"),
      applicationLabel: "APLICACIÓ",
      items: [
        {
          category: "ENGINYERIA DE DADES",
          technology: "Python · SQL · Airflow · dbt",
          application:
            "Construcció de fluxos d'ingesta, transformació, orquestració i qualitat que fan traçable el recorregut de les dades.",
          references: related("isdin", "penguin", "primer-impacto", "winche"),
        },
        {
          category: "SERVEIS DE DADES",
          technology: "FastAPI · Microserveis",
          application:
            "Exposició de capacitats de dades mitjançant serveis mantenibles per a productes i consumidors interns.",
          references: related("penguin"),
        },
        {
          category: "NÚVOL I PLATAFORMES DE DADES",
          technology: "BigQuery · Snowflake · AWS · Azure · GCP",
          application:
            "Selecció d'emmagatzematge, processament i arquitectura segons els requisits de cada domini, la seva escala i el seu model operatiu.",
          references: related("iag", "isdin", "penguin"),
        },
        {
          category: "LLIURAMENT I OPERACIONS",
          technology: "CI/CD · GitHub · Docker",
          application:
            "Lliurament versionat, repetible i automatitzat que redueix canvis manuals i explicita la responsabilitat operativa.",
          references: related("iag", "penguin"),
        },
        {
          category: "LIDERATGE I ORGANITZACIÓ",
          technology:
            "Lideratge tècnic i organitzatiu · Comunicació transversal · Gestió de parts interessades · Planificació estratègica · Responsabilitat integral · Resolució de problemes complexos",
          application:
            "Alineació de fulls de ruta, equips i parts interessades per mantenir les decisions i la responsabilitat des del disseny tècnic fins a l'operació del servei.",
          references: related("astrazeneca", "iag", "isdin", "primer-impacto"),
        },
      ],
    },
    education: {
      sectionLabel: "05 / FORMACIÓ",
      title: "Formació",
      degree:
        "Cicle formatiu de grau superior d'Administració de Sistemes Informàtics en Xarxa",
      school: "Colegio Cultural",
      gradeLabel: "NOTA",
      grade: "8/10",
      recognitionLabel: "RECONEIXEMENT",
      recognition: "Premi al millor projecte final — PHP",
    },
    contact: {
      sectionLabel: "06 / CONTACTE",
      title: "Contacte",
      copy: "Perfil professional amb base a Barcelona, Espanya. Contacte per a organitzacions amb necessitats d'estratègia de dades, arquitectura, lliurament de plataformes o models operatius d'enginyeria de dades.",
      emailAction: "Escriure a Iván",
      privacy: "El número de telèfon s'omet a la versió pública.",
    },
    footer:
      "Iván López López · Data Architecture & Strategy · Barcelona, Espanya",
  },
} satisfies Record<Locale, SiteContent>;
