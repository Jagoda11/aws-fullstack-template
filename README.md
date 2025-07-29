# 🚀 TypeScript Full-Stack Template

![License](https://img.shields.io/github/license/Jagoda11/aws-fullstack-template?style=flat-square&color=blue)
![Open Issues](https://img.shields.io/github/issues/Jagoda11/aws-fullstack-template?style=flat-square&color=orange)
![Last Commit](https://img.shields.io/github/last-commit/Jagoda11/aws-fullstack-template/main?style=flat-square&color=blue)
![Build Status](https://github.com/Jagoda11/aws-fullstack-template/actions/workflows/🚀ci.yml/badge.svg?branch=main)
![TypeScript](https://img.shields.io/github/package-json/dependency-version/Jagoda11/aws-fullstack-template/dev/typescript?label=TypeScript)
![Build Status](https://github.com/Jagoda11/aws-fullstack-template/actions/workflows/⬆️npm-update.yml/badge.svg?branch=main)

This project is a monorepo template for a full-stack TypeScript application with:

- **Backend:** Node.js (Express) with TypeScript
- **Frontend:** React + Vite + Tailwind CSS
- **Tooling:** ESLint, Prettier, Jest

---

## 📦 Project Structure

```text
aws-fullstack-template/
├── backend/      # Node.js backend (TypeScript)
├── frontend/     # React frontend (Vite, Tailwind, TypeScript)
├── test/         # Shared tests
├── ...           # Root config, scripts, docs
```

---

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the backend:**

   ```bash
   npm start
   ```

   This builds and starts the backend server from the root.

3. **Run the frontend (in a separate terminal):**

   ```bash
   cd frontend
   npm run dev
   ```

   This starts the Vite dev server at <http://localhost:5173>

---

## 📜 Useful Scripts

Run these from the root unless otherwise noted:

- `start` – Build and start the backend server
- `build` – Build both backend and frontend
- `build:backend` – Build backend only
- `build:frontend`– Build frontend only
- `test` – Run Jest tests with coverage
- `format` – Format code with Prettier
- `lint` – Lint all code with ESLint
- `lint:frontend` – Lint frontend code
- `lint:backend` – Lint backend code
- `clean` – Remove build artifacts and dependencies

See `package.json` for the full list.

---

## 🤖 GitHub Actions

This repo includes CI workflows for build, test, and dependency updates. See `.github/workflows/` for details.

This template includes several GitHub Actions workflows that automate various tasks:

🚀ci.yml: Runs your project's continuous integration (CI) tasks.
🔐close-merged-pull-requests.yml: Automatically closes pull requests that have been merged.
⏳close-stale-issues-and-prs.yml: Closes stale issues and pull requests.
🏷️label-new-pull-requests.yml: Automatically adds labels to new pull requests. -🙏thank-contributors-on-issue-close.yml: Thanks contributors when an issue they commented on is closed.
👋welcome-new-pull-requests.yml: Posts a welcome message on new pull requests.
👋welcome.yml: Posts a welcome message on new issues.
⬆️npm-update.yml: runs every day and updates package.json with new versions of dependencies
🧹remove-stale-unmerged-branches.yml: Remove stale unmerged branches
🧹remove-merged-branches.yml: Remove merged Branches

These workflows use the secrets.GITHUB_TOKEN secret, which GitHub automatically creates for every repository. You can create a personal access token and add it as a secret in your repository. For more information, see [Creating and storing encrypted secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📝 License

MIT © 2024 Jagoda11
