import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  // Update the "site" key with your URL, then remove this comment
  site: "https://example.com",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    sitemap(), // https://docs.astro.build/en/guides/integrations-guide/sitemap/
    tailwind(), // https://docs.astro.build/en/guides/integrations-guide/tailwind/
  ],
})
