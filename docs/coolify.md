# Despliegue con Coolify

## Estado de la aplicación

- Proyecto: `ilopex-personal-web`.
- Entorno: `production`.
- Fuente: repositorio público `IveeYH/ilopex-personal-web`.
- Build Pack: `Dockerfile`, con `/` como base directory y `/Dockerfile` como ruta.
- Puerto interno: `8080`.
- Health check: `GET /healthz`, respuesta esperada `200`.
- **Auto Deploy**: desactivado.
- Dominio: pendiente; se configurará en una fase separada.

Durante la puesta en marcha se puede desplegar la rama de trabajo. Una vez validada y
fusionada, la fuente de producción debe quedar fijada a `main`.

## Flujo de entrega actual

1. Abrir un pull request y esperar a que los jobs `Quality and static build` y
   `Production container` terminen correctamente.
2. Fusionar el cambio en `main`.
3. Desde un cliente dentro de la LAN, ordenar a Coolify desplegar la aplicación por MCP
   o por la API local.
4. Confirmar que el despliegue termina correctamente y que el recurso queda healthy.

No se necesita SSH. Tampoco se guardan en GitHub la URL interna, el UUID de la
aplicación ni tokens de Coolify.

## Por qué no hay un webhook en GitHub Actions

La instancia usa una dirección `.home.arpa` que solo resuelve y responde dentro de la
LAN. Un runner alojado por GitHub no puede alcanzar ese webhook. **Auto Deploy** también
necesitaría que GitHub pudiera entrar en Coolify, por lo que permanece desactivado.

Mientras el repositorio sea público no se debe conectar un runner self-hosted con
acceso a la LAN. Para automatizar la promoción hay dos caminos seguros:

1. Convertir el repositorio en privado y dedicar un runner aislado únicamente al job de
   despliegue.
2. Mantenerlo público y ejecutar en la LAN un poller mínimo que solo consulte el último
   workflow satisfactorio de `main` y llame a Coolify; ese proceso no debe clonar ni
   ejecutar código de pull requests.

Hasta elegir una de esas opciones, el MCP proporciona una promoción explícita y
auditable sin abrir Coolify a Internet.

## Credenciales

- Usar un token `read` para inventario y diagnóstico.
- Usar un token `deploy` separado para despliegues.
- Conceder `write` únicamente durante cambios de configuración.
- No usar `root` ni `read:sensitive` para este proyecto.
- Guardar todos los tokens fuera del repositorio, limitar su caducidad y revocarlos si
  se han expuesto.

Referencias:

- [Coolify: GitHub Actions](https://coolify.io/docs/applications/ci-cd/github/actions/)
- [Coolify: Auto Deploy](https://coolify.io/docs/applications/ci-cd/github/auto-deploy)
- [Coolify: Dockerfile](https://coolify.io/docs/applications/build-packs/dockerfile)
- [Coolify: MCP](https://coolify.io/docs/integrations/mcp)
- [Coolify: autorización API](https://coolify.io/docs/api-reference/authorization)
- [Coolify: deploy por UUID](https://coolify.io/docs/api-reference/api/deployments/deploy-by-tag-or-uuid)
- [GitHub: seguridad de runners self-hosted](https://docs.github.com/en/actions/reference/security/secure-use)
