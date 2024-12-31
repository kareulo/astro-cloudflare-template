# 🚀 Astro + Cloudflare Template

A minimal template to integrate Astro with Cloudflare.

## 🛠️ Prerequisites

Ensure `pnpm` is installed. If not, run:

```sh
corepack enable pnpm
```

> If this fails, follow the installation guide at [pnpm.io](https://pnpm.io/installation).

## 👨‍🚀 Getting Started

1. Clone the template using the **Use the template** button or GitHub CLI:

   ```sh
   gh repo create <your-project-name> \
     --clone \
     --public \
     --template kareulo/astro-cloudflare-template
   ```

   > **Important:** Replace `<your-project-name>` with your actual project name.

   > **Note:** Change `--public` to `--private` if you prefer a private repository.

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Update the project settings:

   - Change the project name in `package.json` and `wrangler.toml`.
   - Update SEO meta tags in `src/pages/index.astro`.
   - Set your site’s URL in `astro.config.mjs`.
   - Modify `src/pages/robots.txt.ts` as needed.

4. Start the development server:

   ```sh
   pnpm dev
   ```

Once set up, replace this README with your own. Happy coding!

## 🤝 Contribution

Contributions are welcome! Open issues or submit pull requests for suggestions, bug fixes, or improvements.
