import type { Locale } from "./config";

export const profile = {
  name: "Iván López López",
  email: "ivanlopezlopez1997@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ivan-lopez-lopez/",
} as const;

interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  dateTime: string;
  summary: string;
  highlights: string[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  a11y: {
    skipToContent: string;
  };
  nav: {
    label: string;
    home: string;
    experience: string;
    language: string;
    languageNames: Record<Locale, string>;
  };
  hero: {
    role: string;
    tagline: string;
    introduction: string;
    linkedIn: string;
    email: string;
  };
  experience: {
    title: string;
    highlightsLabel: string;
    items: Experience[];
  };
  footer: string;
}

export const content = {
  es: {
    meta: {
      title: "Iván López López — Liderazgo e ingeniería de datos",
      description:
        "Portfolio de Iván López López, líder de ingeniería de datos especializado en equipos de alto impacto y plataformas de datos escalables.",
    },
    a11y: {
      skipToContent: "Saltar al contenido",
    },
    nav: {
      label: "Navegación principal",
      home: "Inicio",
      experience: "Experiencia",
      language: "Cambiar idioma",
      languageNames: {
        es: "Español",
        en: "Inglés",
        ca: "Catalán",
      },
    },
    hero: {
      role: "Liderazgo en datos",
      tagline: "Liderando equipos de alto impacto.",
      introduction:
        "Conecto estrategia, personas y tecnología para convertir plataformas de datos complejas en resultados útiles para el negocio.",
      linkedIn: "Ver perfil de LinkedIn",
      email: "Contactar por correo",
    },
    experience: {
      title: "Experiencia profesional",
      highlightsLabel: "Logros destacados",
      items: [
        {
          id: "astrazeneca",
          company: "AstraZeneca",
          role: "Data Engineering Manager",
          date: "Noviembre de 2024",
          dateTime: "2024-11",
          summary:
            "Construcción de procesos escalables, mejora de la colaboración y posicionamiento del equipo como socio clave para el negocio.",
          highlights: [
            "Lideré la estandarización de las formas de trabajo dentro del equipo de Data Engineering y con otros departamentos.",
            "Conseguí ahorros significativos de tiempo y costes al mejorar la calidad de las integraciones y la adopción de productos de datos.",
            "Reforcé la cultura del equipo fomentando la comunicación, la cohesión y la responsabilidad compartida.",
            "Trabajé con Airflow, AWS, Fivetran, dbt Cloud, Collibra, GitHub, Jira y Confluence.",
            "Amplié mi experiencia en visión estratégica y liderazgo de equipos a escala de compañía.",
          ],
        },
        {
          id: "iag",
          company: "International Airlines Group",
          role: "Data Architect",
          date: "Julio de 2024",
          dateTime: "2024-07",
          summary:
            "Diseño de soluciones de datos en la nube para ofrecer acceso fiable y escalable a la información entre las aerolíneas del grupo.",
          highlights: [
            "Diseñé e implementé arquitecturas de datos en AWS con EventBridge, S3, Glue y Lambda, integradas con Snowflake.",
            "Consolidé y estandaricé la ingesta de distintas aerolíneas, mejorando disponibilidad, consistencia y gobierno del dato.",
            "Aceleré el acceso a insights mediante la automatización de pipelines e integraciones escalables.",
            "Colaboré con equipos multidisciplinares para alinear la arquitectura con prioridades de negocio y requisitos regulatorios.",
            "Profundicé en arquitecturas cloud-native y modelado de datos para la toma de decisiones corporativa.",
          ],
        },
        {
          id: "isdin",
          company: "ISDIN",
          role: "Data Engineer Lead",
          date: "Agosto de 2022",
          dateTime: "2022-08",
          summary:
            "Construcción de la infraestructura ELT de la compañía, liderazgo de un equipo en crecimiento e impulso de decisiones basadas en datos.",
          highlights: [
            "Lideré un equipo de más de cinco personas, marcando la dirección técnica y facilitando la colaboración con stakeholders.",
            "Construí y mantuve una infraestructura ELT escalable y fiable.",
            "Desarrollé pipelines ELT con Python y Airflow, especialmente para integrar datos de plataformas publicitarias.",
            "Entregué soluciones de análisis y data warehouse con BigQuery, SQL y dbt Core.",
            "Consolidé prácticas cloud-native en Google Cloud Platform orientadas a rendimiento y eficiencia de costes.",
          ],
        },
      ],
    },
    footer: "Web personal de Iván López López.",
  },
  en: {
    meta: {
      title: "Iván López López — Data engineering leadership",
      description:
        "Portfolio of Iván López López, a data engineering leader focused on high-impact teams and scalable data platforms.",
    },
    a11y: {
      skipToContent: "Skip to content",
    },
    nav: {
      label: "Main navigation",
      home: "Home",
      experience: "Experience",
      language: "Change language",
      languageNames: {
        es: "Spanish",
        en: "English",
        ca: "Catalan",
      },
    },
    hero: {
      role: "Data leadership",
      tagline: "Leading high-impact teams.",
      introduction:
        "I connect strategy, people, and technology to turn complex data platforms into useful business outcomes.",
      linkedIn: "View LinkedIn profile",
      email: "Get in touch by email",
    },
    experience: {
      title: "Work experience",
      highlightsLabel: "Key highlights",
      items: [
        {
          id: "astrazeneca",
          company: "AstraZeneca",
          role: "Data Engineering Manager",
          date: "November 2024",
          dateTime: "2024-11",
          summary:
            "Building scalable processes, strengthening collaboration, and positioning the team as a key partner for the business.",
          highlights: [
            "Led the standardisation of ways of working across Data Engineering and with other departments.",
            "Delivered significant time and cost savings by improving integration quality and adoption of data products.",
            "Strengthened team culture through communication, unity, and shared ownership.",
            "Worked with Airflow, AWS, Fivetran, dbt Cloud, Collibra, GitHub, Jira, and Confluence.",
            "Grew my experience in strategic vision and team leadership at company level.",
          ],
        },
        {
          id: "iag",
          company: "International Airlines Group",
          role: "Data Architect",
          date: "July 2024",
          dateTime: "2024-07",
          summary:
            "Designing cloud-based data solutions and enabling reliable, scalable access to information across the group's airlines.",
          highlights: [
            "Designed and implemented AWS data architectures with EventBridge, S3, Glue, and Lambda, integrated with Snowflake.",
            "Consolidated and standardised ingestion from different airlines, improving data availability, consistency, and governance.",
            "Delivered faster time to insight by automating pipelines and enabling scalable integrations.",
            "Partnered with cross-functional teams to align architecture with business priorities and regulatory requirements.",
            "Strengthened expertise in cloud-native architectures and data modelling for enterprise decision-making.",
          ],
        },
        {
          id: "isdin",
          company: "ISDIN",
          role: "Data Engineer Lead",
          date: "August 2022",
          dateTime: "2022-08",
          summary:
            "Building the company's ELT infrastructure, leading a growing team, and enabling data-driven decisions through modern cloud solutions.",
          highlights: [
            "Led a team of more than five people, setting technical direction and fostering stakeholder collaboration.",
            "Built and maintained a scalable, reliable ELT infrastructure.",
            "Developed ELT pipelines with Python and Airflow, specialising in advertising platform integrations.",
            "Delivered analytics and data warehouse solutions with BigQuery, SQL, and dbt Core.",
            "Consolidated cloud-native practices in Google Cloud Platform for performance and cost efficiency.",
          ],
        },
      ],
    },
    footer: "Personal website of Iván López López.",
  },
  ca: {
    meta: {
      title: "Iván López López — Lideratge i enginyeria de dades",
      description:
        "Portafolis d'Iván López López, líder d'enginyeria de dades especialitzat en equips d'alt impacte i plataformes de dades escalables.",
    },
    a11y: {
      skipToContent: "Salta al contingut",
    },
    nav: {
      label: "Navegació principal",
      home: "Inici",
      experience: "Experiència",
      language: "Canvia l'idioma",
      languageNames: {
        es: "Castellà",
        en: "Anglès",
        ca: "Català",
      },
    },
    hero: {
      role: "Lideratge en dades",
      tagline: "Liderant equips d'alt impacte.",
      introduction:
        "Connecto estratègia, persones i tecnologia per convertir plataformes de dades complexes en resultats útils per al negoci.",
      linkedIn: "Veure el perfil de LinkedIn",
      email: "Contactar per correu",
    },
    experience: {
      title: "Experiència professional",
      highlightsLabel: "Fites destacades",
      items: [
        {
          id: "astrazeneca",
          company: "AstraZeneca",
          role: "Data Engineering Manager",
          date: "Novembre de 2024",
          dateTime: "2024-11",
          summary:
            "Construcció de processos escalables, millora de la col·laboració i posicionament de l'equip com a soci clau per al negoci.",
          highlights: [
            "Vaig liderar l'estandardització de les maneres de treballar dins de Data Engineering i amb altres departaments.",
            "Vaig aconseguir estalvis significatius de temps i costos millorant la qualitat de les integracions i l'adopció de productes de dades.",
            "Vaig reforçar la cultura d'equip fomentant la comunicació, la cohesió i la responsabilitat compartida.",
            "Vaig treballar amb Airflow, AWS, Fivetran, dbt Cloud, Collibra, GitHub, Jira i Confluence.",
            "Vaig ampliar la meva experiència en visió estratègica i lideratge d'equips a escala d'empresa.",
          ],
        },
        {
          id: "iag",
          company: "International Airlines Group",
          role: "Data Architect",
          date: "Juliol de 2024",
          dateTime: "2024-07",
          summary:
            "Disseny de solucions de dades al núvol per oferir accés fiable i escalable a la informació entre les aerolínies del grup.",
          highlights: [
            "Vaig dissenyar i implementar arquitectures de dades a AWS amb EventBridge, S3, Glue i Lambda, integrades amb Snowflake.",
            "Vaig consolidar i estandarditzar la ingesta de diferents aerolínies, millorant disponibilitat, consistència i govern de la dada.",
            "Vaig accelerar l'accés a insights mitjançant l'automatització de pipelines i integracions escalables.",
            "Vaig col·laborar amb equips multidisciplinaris per alinear l'arquitectura amb prioritats de negoci i requisits regulatoris.",
            "Vaig aprofundir en arquitectures cloud-native i modelatge de dades per a la presa de decisions corporativa.",
          ],
        },
        {
          id: "isdin",
          company: "ISDIN",
          role: "Data Engineer Lead",
          date: "Agost de 2022",
          dateTime: "2022-08",
          summary:
            "Construcció de la infraestructura ELT de l'empresa, lideratge d'un equip en creixement i impuls de decisions basades en dades.",
          highlights: [
            "Vaig liderar un equip de més de cinc persones, marcant la direcció tècnica i facilitant la col·laboració amb stakeholders.",
            "Vaig construir i mantenir una infraestructura ELT escalable i fiable.",
            "Vaig desenvolupar pipelines ELT amb Python i Airflow, especialment per integrar dades de plataformes publicitàries.",
            "Vaig lliurar solucions d'analítica i data warehouse amb BigQuery, SQL i dbt Core.",
            "Vaig consolidar pràctiques cloud-native a Google Cloud Platform orientades al rendiment i l'eficiència de costos.",
          ],
        },
      ],
    },
    footer: "Web personal d'Iván López López.",
  },
} satisfies Record<Locale, SiteContent>;
