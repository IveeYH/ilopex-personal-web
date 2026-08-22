# ilopex-personal-web

Web personal estática y multilingüe de Iván López López. La interfaz implementa la
revisión 02 del archivo de Penpot `Nuevo Archivo 1` con componentes Astro y CSS
responsive propios.

## Estado actual

- Astro 7 y TypeScript estricto.
- HTML estático, sin API ni base de datos.
- Español en `/`, inglés en `/en/` y catalán en `/ca/`.
- Todos los textos editables están centralizados y tipados.
- Diseño desktop y mobile materializado desde Penpot, sin runtime de UI externo.
- Source Sans Pro se sirve desde el propio build; no hay peticiones a Google Fonts.
- Imagen de producción servida por Nginx en el puerto `8080`.
- CI en GitHub Actions con build, comprobaciones de tipos y smoke tests del contenedor.
- Aplicación desplegada en Coolify dentro de la LAN, con health check activo.
- Dominio público pendiente de configurar.

## Cómo revisar la web

### Desarrollo local

Requiere Node.js 24 o superior y npm 11 o superior.

```bash
gh repo clone IveeYH/ilopex-personal-web
cd ilopex-personal-web
npm ci
npm run dev
```

Abrir en el navegador:

- Español: <http://localhost:4321/>
- Inglés: <http://localhost:4321/en/>
- Catalán: <http://localhost:4321/ca/>

Para revisarla desde otro dispositivo de la misma LAN:

```bash
npm run dev -- --host 0.0.0.0
```

Después se abre `http://IP_DEL_EQUIPO:4321`. No se debe exponer este servidor de
desarrollo a Internet.

### Contenedor de producción local

Esta opción reproduce lo que ejecuta Coolify:

```bash
docker build --tag ilopex-personal-web:local .
docker run --rm --name ilopex-personal-web \
  --publish 127.0.0.1:8080:8080 \
  ilopex-personal-web:local
```

La web queda en <http://localhost:8080/> y el health check en
<http://localhost:8080/healthz>.

### Coolify

La aplicación de Coolify está construida y saludable. Hasta configurar el FQDN
definitivo, el contenedor publica temporalmente `18080:8080` dentro de la LAN:

- Español: `http://IP_DEL_SERVIDOR:18080/`
- Inglés: `http://IP_DEL_SERVIDOR:18080/en/`
- Catalán: `http://IP_DEL_SERVIDOR:18080/ca/`
- Health check: `http://IP_DEL_SERVIDOR:18080/healthz`

La IP concreta no se publica en este repositorio público. Este acceso directo se
reemplazará por el dominio definitivo en la fase de DNS.

## Flujo de trabajo

Partir siempre de `main` actualizado y trabajar en una rama corta:

```bash
git switch main
git pull --ff-only
git switch -c feat/nombre-del-cambio
```

Antes de publicar:

```bash
npm run ci
git status
git add RUTA_DE_CADA_ARCHIVO
git commit -m "tipo: descripción breve"
git push -u origin feat/nombre-del-cambio
gh pr create --draft
```

El comando `npm run ci` aplica la misma validación funcional que GitHub Actions:
formato, tipos, build estático y comprobación de las tres páginas localizadas. GitHub
añade además la construcción y los smoke tests del contenedor de producción.

## Editar textos e idiomas

Los textos de los tres idiomas viven en un único archivo:

```text
src/i18n/content.ts
```

El tipo `SiteContent` obliga a mantener la misma estructura en español, inglés y
catalán. Los componentes y las páginas no deben contener copy de negocio.

Para añadir otro idioma:

1. Declarar el locale y su ruta en `src/i18n/config.ts`.
2. Añadir todo su contenido en `src/i18n/content.ts`.
3. Añadir su URL a `public/sitemap.xml`.
4. Ejecutar `npm run ci` para comprobar rutas, canonical y `hreflang`.

## Editar el diseño

Los tokens visuales y el responsive viven en `src/styles/global.css`. Los colores,
radios, escala tipográfica y espaciado parten de las foundations de Penpot. La
estructura se reparte por responsabilidad:

- `SiteHeader.astro`: navegación desktop, menú móvil e idiomas.
- `HomePage.astro`: composición y orden semántico de las secciones.
- `CapabilityGrid.astro`, `ExperienceList.astro` y `SkillsGrid.astro`: colecciones
  repetibles alimentadas desde `content.ts`.
- `SectionHeader.astro`: encabezado compartido de sección.

No se deben copiar textos de negocio dentro de los componentes ni crear una página por
idioma. Antes de cambiar un breakpoint, conviene revisar tanto `390 × 844` como
`1440 × 900` y ejecutar `npm run ci`.

El diseño incluye una acción para descargar el currículum. No se renderiza todavía
porque el repositorio no contiene el PDF definitivo; así se evita publicar un enlace
roto. Cuando exista el archivo, debe añadirse a `public/` y enlazarse desde el hero.

## Estructura

```text
.
├── .github/workflows/ci.yml    # Integración continua
├── docs/                       # Decisiones y auditoría técnica
├── public/                     # robots.txt, sitemap y futuros assets
├── scripts/verify-build.mjs    # Comprobaciones del HTML generado
├── src/
│   ├── components/             # Estructura semántica compartida
│   ├── i18n/                   # Configuración y contenido ES/EN/CA
│   ├── layouts/                # HTML, SEO, canonical y hreflang
│   ├── pages/                  # Rutas estáticas
│   └── styles/                 # Tokens y estilos responsive compartidos
├── Dockerfile                  # Build multi-stage y runtime Nginx
├── nginx.conf                  # Servidor estático y health check
└── package.json
```

## Comandos

| Comando                | Uso                                         |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                      |
| `npm run build`        | Genera la web en `dist/`                    |
| `npm run preview`      | Previsualiza el build de Astro              |
| `npm run check`        | Valida Astro y TypeScript                   |
| `npm test`             | Comprueba las páginas generadas             |
| `npm run format`       | Formatea el repositorio                     |
| `npm run format:check` | Comprueba el formato sin modificar archivos |
| `npm run ci`           | Ejecuta toda la validación local            |

## Entrega a Coolify

1. El pull request debe superar `Quality and static build` y
   `Production container`.
2. Tras fusionar en `main`, se comprueba de nuevo el commit en GitHub Actions.
3. Desde un cliente dentro de la LAN se promueve `main` mediante Coolify MCP o su API
   local.
4. Coolify reconstruye el `Dockerfile` y valida `GET /healthz` antes de dar la
   aplicación por saludable.

`Auto Deploy` permanece desactivado porque GitHub no puede entrar en una dirección
`.home.arpa`. No se necesita SSH y no se guardan tokens ni URLs internas en GitHub.

## Documentación

- [Arquitectura](docs/architecture.md)
- [Despliegue con Coolify](docs/coolify.md)
- [Auditoría de la web actual](docs/current-site-audit.md)

## Seguridad

- Nunca se suben `.env`, tokens de Coolify, claves SSH ni credenciales.
- Los tokens de inventario, configuración y despliegue deben estar separados y usar el
  mínimo permiso necesario.
- Cualquier credencial compartida accidentalmente debe revocarse y reemplazarse.
