# 🚀 Astro + Cloudflare Template

A minimal template to integrate Astro with Cloudflare.

## 🛠️ Prerequisites

- **Visual Studio Code**: Use this editor for development with Dev Containers.
- **Docker**: Install Docker to set up a containerized development environment.

## 👨‍🚀 Getting Started

1. **Clone the template**:

   Click the **Use the template** button on GitHub or run the following command (GitHub CLI required):

   ```sh
   gh repo create YOUR_PROJECT_NAME \
     --clone \
     --public \
     --template kareulo/astro-cloudflare-template
   ```

   > **Important**: Replace `YOUR_PROJECT_NAME` with your project name.
   > **Note**: Use `--private` for a private repository.

   Alternatively, clone the repository using Git:

   ```sh
   git clone https://github.com/kareulo/astro-cloudflare-template.git YOUR_PROJECT_NAME
   cd YOUR_PROJECT_NAME
   rm -rf .git # Remove existing Git repository
   git init # Initialize a new Git repository
   ```

2. **Open the project**:

   - Open the project in Visual Studio Code.
   - Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
   - Type `Dev Containers: Reopen in Container` and press Enter.

3. **Install dependencies**:

   ```sh
   yarn install
   ```

4. **Start the development server**:

   ```sh
   yarn dev
   ```

Once set up, feel free to replace this README with your own. Happy coding!

---

> **Note**: Check and update the following files as needed:
>
> - `.devcontainer/devcontainer.json`
> - `astro.config.mjs`
> - `package.json`
> - `wrangler.toml`
