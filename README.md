# 🚀 Astro + Cloudflare Template

A minimal Astro + Cloudflare template.

## 🛠️ Prerequisites

Ensure `pnpm` is installed. If not, run:

```sh
corepack enable pnpm
```

> If this doesn't work, follow the installation guide at [pnpm.io](https://pnpm.io/installation).

## 👨‍🚀 Getting Started

1. Clone the template by clicking the **Use the template** button or with GitHub CLI:

   ```sh
   gh repo create <your-project-name> \
     --clone \
     --public # or --private \
     --template kareulo/astro-cloudflare-template
   ```

   > Replace `<your-project-name>` with your actual project name.

2. Update the project name in `package.json` and `wrangler.toml`. Consider updating the SEO configurations in the `<head>` tag of `page.astro`.
3. Install dependencies:

   ```sh
   pnpm install
   ```

4. Start developing:

   The server will listen on `http://localhost:4321`. To stop it, press `Ctrl-c`.

   ```sh
   pnpm dev
   ```

Once you're done, consider removing this README.md and creating your own. Happy coding!

## 🤝 Contribution

Contributions are welcome! Open issues or submit pull requests for suggestions, bug fixes, or improvements.
