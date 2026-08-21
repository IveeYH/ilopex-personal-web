# ilopex-personal-web

Base técnica de la web personal multilingüe de Iván López López.

## Arquitectura

- Astro 7 y TypeScript estricto.
- Salida 100 % estática; no hay API, base de datos ni JavaScript de traducción.
- Español en `/`, inglés en `/en/` y catalán en `/ca/`.
- Todos los textos editables están centralizados en `src/i18n/content.ts`.
- Componentes semánticos sin decisiones de diseño en esta fase.
- Docker multi-stage: Node compila y Nginx sirve los archivos en el puerto `8080`.
- GitHub Actions valida el proyecto y el contenedor en infraestructura aislada.
- Coolify construye el mismo `Dockerfile`; la promoción se ordena desde la LAN.

```text
.
├── .github/workflows/ci.yml
├── docs/
├── public/
├── src/
│   ├── components/
│   ├── i18n/
│   ├── layouts/
│   └── pages/
├── Dockerfile
├── nginx.conf
└── package.json
```

## Desarrollo local

Requiere Node.js 24 o superior.

```bash
npm ci
npm run dev
```

Comprobación equivalente a CI:

```bash
npm run ci
docker build --tag ilopex-personal-web:local .
```

## Contenido e idiomas

El tipo `SiteContent` define la misma estructura para los tres idiomas. Para cambiar
copy, fechas o experiencia se edita únicamente `src/i18n/content.ts`; las páginas y los
componentes no contienen textos de negocio.

## Despliegue

Consulta `docs/coolify.md`. Coolify solo es accesible desde la LAN, por lo que no se
guardan credenciales de Coolify en GitHub ni se configura un webhook imposible de
alcanzar. Tras superar CI, la versión se promueve mediante el MCP o la API local de
Coolify.
