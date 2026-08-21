# Despliegue con Coolify

## Aplicación

1. Crear una aplicación apuntando a `IveeYH/ilopex-personal-web`, rama `main`.
2. Elegir `Dockerfile` como Build Pack y `/` como base directory.
3. Configurar el puerto interno `8080` y el health check `/healthz`.
4. Desactivar **Auto Deploy** para que cada push espere a superar GitHub Actions.

El repositorio es público actualmente. Si pasa a privado, se conecta la GitHub App de
Coolify como fuente, manteniendo Auto Deploy desactivado.

## Webhook autenticado

1. Habilitar API Access en `Settings → Configuration → Advanced`.
2. Crear un token limitado al permiso de despliegue.
3. Copiar el Deploy webhook de la aplicación.
4. Crear en GitHub el environment `production` con los secretos:
   - `COOLIFY_WEBHOOK`
   - `COOLIFY_TOKEN`
5. Crear la variable de repositorio `COOLIFY_DEPLOY_ENABLED=true`.

El workflow llama al webhook únicamente después de validar el proyecto y construir el
contenedor. Coolify vuelve a construir desde `main`; esta duplicación es intencionada
para evitar añadir GHCR y credenciales de registro a una web pequeña.

Si Coolify solo es accesible dentro de la LAN, un runner alojado por GitHub no podrá
alcanzar el webhook: hará falta un runner self-hosted dedicado o una red privada. Los
jobs de pull request deben seguir ejecutándose en runners de GitHub, no en el servidor
local. SSH no es el mecanismo de despliegue.

Referencias:

- [Coolify: GitHub Actions](https://coolify.io/docs/applications/ci-cd/github/actions/)
- [Coolify: Auto Deploy](https://coolify.io/docs/applications/ci-cd/github/auto-deploy)
- [Coolify: Dockerfile](https://coolify.io/docs/applications/build-packs/dockerfile)
- [Coolify: deploy por UUID](https://coolify.io/docs/api-reference/api/deployments/deploy-by-tag-or-uuid)
