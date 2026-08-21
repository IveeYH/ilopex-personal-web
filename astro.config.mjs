import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ilopex.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
