# 🚀 Astro + Cloudflare Template

A minimal template for integrating Astro with Cloudflare.

## 🛠️ Prerequisites

Ensure `pnpm` is installed. If not, run:

```sh
corepack enable pnpm
```

> If this fails, follow the installation guide at [pnpm.io](https://pnpm.io/installation).

## 👨‍🚀 Getting Started

1. Clone the template using the **Use the template** button or with GitHub CLI:

   ```sh
   gh repo create <your-project-name> \
     --clone \
     --public # or --private \
     --template kareulo/astro-cloudflare-template
   ```

   > Replace `<your-project-name>` with your project name.

2. Update project settings:

   - Change the project name in `package.json` and `wrangler.toml`.
   - Update SEO meta tags in `page.astro`.
   - Set your site's URL in `astro.config.mjs`.
   - Edit `pages/robots.txt.ts` as needed.

3. Install dependencies and start development:

   ```sh
   pnpm install
   pnpm dev
   ```

Once set up, replace this README with your own. Happy coding!

## 🤝 Contribution

Feel free to contribute! Open issues or submit pull requests for suggestions, bug fixes, or improvements.
