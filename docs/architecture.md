# Arquitectura

## Objetivo

Servir una web personal estática, multilingüe y fácil de mantener. En esta fase no se
define el diseño visual.

## Flujo de contenido

```text
src/i18n/content.ts
        │
        ├── es ──> /
        ├── en ──> /en/
        └── ca ──> /ca/
                │
                └── mismos componentes Astro ──> HTML estático
```

El navegador recibe HTML ya localizado. No hay selector que cargue traducciones en
runtime, cookies de idioma ni estado de cliente.

## Capas

- `src/i18n`: idiomas soportados, rutas y contrato de contenido.
- `src/components`: estructura semántica compartida.
- `src/layouts`: documento HTML, SEO, canonical y `hreflang`.
- `src/pages`: entradas de routing; no contienen copy.
- `public`: recursos que se copian sin transformación.

## Despliegue

El mismo `Dockerfile` se construye en CI y en Coolify. Nginx expone `8080` y
`/healthz`. Al no existir estado persistente, cualquier instancia es reemplazable y el
rollback consiste en volver a desplegar un commit anterior.

Por simplicidad, CI valida el código y el contenedor, y Coolify reconstruye desde
`main`. No se está promocionando una imagen inmutable entre ambos sistemas. Si el
proyecto necesitara esa garantía, el siguiente paso sería publicar la imagen etiquetada
con el SHA en GHCR y configurar Coolify para consumirla.
