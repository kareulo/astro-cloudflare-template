# 🚀 Astro + Cloudflare Template

A minimal template for Astro with Cloudflare.

## 🛠️ Prerequisites

- **Visual Studio Code**: Recommended for development with Dev Containers.
- **Docker**: Required to set up the containerized development environment.

## 👨‍🚀 Getting Started

### 1. Clone the Template

Click the **Use the template** button on GitHub or run the following command (GitHub CLI required):

```sh
gh repo create YOUR_PROJECT_NAME \
   --clone \
   --public \ # or --private
   --template kareulo/astro-cloudflare-template
```

> [!IMPORTANT]
> Replace `YOUR_PROJECT_NAME` with your desired project name.

Alternatively, clone using Git:

```sh
git clone https://github.com/kareulo/astro-cloudflare-template.git YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
rm -rf .git # Remove existing Git repository
git init # Initialize a new Git repository
```

### 2. Open the Project

After cloning the repository, open the project in Visual Studio Code. The next steps involve setting up the project within a container using the Dev Containers extension.

> [!NOTE]
> Before proceeding, update the following configuration files as needed:
>
> - `.devcontainer/devcontainer.json`
> - `astro.config.mjs`
> - `package.json`
> - `wrangler.toml`

- Ensure Docker and Dev Containers are installed.
- Open the Command Palette (`Ctrl + Shift + P` or `Cmd + Shift + P` on macOS).
- Run `Dev Containers: Reopen in Container`.

> [!NOTE]
> The first build takes time because it builds the Docker image specified in the `devcontainer.json` configuration, then runs `yarn install` to set up dependencies. Subsequent rebuilds will be faster.

### 3. Start the Development Server

Once the environment is set up, start the development server:

```sh
yarn dev
```

Feel free to replace this README with your own once everything is ready. Happy coding!

## 🤝 Contribution

Contributions are welcome! Feel free to open issues or submit pull requests for suggestions, bug fixes, or improvements.
