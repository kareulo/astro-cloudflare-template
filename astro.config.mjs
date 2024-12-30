import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/sitemap/
    sitemap(),
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind(),
  ],
})
