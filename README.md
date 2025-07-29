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

- `start`         – Build and start the backend server
- `build`         – Build both backend and frontend
- `build:backend` – Build backend only
- `build:frontend`– Build frontend only
- `test`          – Run Jest tests with coverage
- `format`        – Format code with Prettier
- `lint`          – Lint all code with ESLint
- `lint:frontend` – Lint frontend code
- `lint:backend`  – Lint backend code
- `clean`         – Remove build artifacts and dependencies

See `package.json` for the full list.

---

## 🤖 GitHub Actions

This repo includes CI workflows for build, test, and dependency updates. See `.github/workflows/` for details.

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📝 License

MIT © 2024 Jagoda11
