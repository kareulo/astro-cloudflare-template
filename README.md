# 🚀 Astro + Cloudflare Template

A minimal template to integrate Astro with Cloudflare.

## 🛠️ Prerequisites

- **Visual Studio Code**: Recommended editor for development with Dev Containers.
- **Docker**: Required for Dev Containers to spin up a containerized development environment.

## 👨‍🚀 Getting Started

1. **Clone the template**:

   Use the **Use the template** button on GitHub or run the following command if you have the GitHub CLI installed:

   ```sh
   gh repo create YOUR_PROJECT_NAME \
     --clone \
     --public \
     --template kareulo/astro-cloudflare-template
   ```

   > **Important**: Replace `YOUR_PROJECT_NAME` with your project name.

   > **Note**: Change `--public` to `--private` for a private repository.

   Alternatively, use Git to clone the repository:

   ```sh
   git clone https://github.com/kareulo/astro-cloudflare-template.git YOUR_PROJECT_NAME
   cd YOUR_PROJECT_NAME
   rm -rf .git # Remove existing git repository
   git init # Initialize a new git repository
   ```

2. **Open the project**:

   - Open the project in Visual Studio Code.
   - (Optional) Update the project name in `.devcontainer/devcontainer.json`.
   - Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
   - Type `Dev Containers: Reopen in Container` and press Enter.

3. **Install dependencies**:

   ```sh
   yarn install
   ```

4. **Modify the project settings**:

   - Update the project name in `package.json` and `wrangler.toml`.
   - Modify SEO meta tags in `src/pages/index.astro`.
   - Set your site’s URL in `astro.config.mjs`.
   - Update `src/pages/robots.txt.ts` as needed.

5. **Start the development server**:

   ```sh
   yarn dev
   ```

Once set up, feel free to replace this README with your own. Happy coding!

## 🤝 Contribution

Contributions are welcome! Open issues or submit pull requests for suggestions, bug fixes, or improvements.
