# SFU Axis Consulting - Official Website

[![Website Status](https://img.shields.io/website?url=https://www.sfuaxisconsulting.com/)](https://www.sfuaxisconsulting.com/)
[![Contributors](https://img.shields.io/github/contributors/axisconsulting/axis-frontend.svg)](https://github.com/axisconsulting/axis-frontend)

<!-- Please update this for visibility -->
> Last updated: April 2026

## 📋 Table of Contents

- [About](#about)
- [Folder Structure](#folder-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Resources & Links](#resources--links)
- [Contact](#contact)

## About
Axis Consulting is a student-led pro-bono consultancy part of Simon Fraser University.

<!-- =========================== -->
## Folder Structure
```
├── public/
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── pages/
│   │   ├── about/
│   │   ├── clients/
│   │   ├── getInvolved/
│   │   ├── home/
│   │   ├── notFound/
│   │   ├── resources/
│   │   ├── revolveEvent/
│   │   └── sponsors/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── demo/
│   └── home.spec.ts
├── .gitignore
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── playwright.config.ts
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

<!-- =========================== -->
## Technology Stack

### Frontend
- **Framework**: [React](https://react.dev/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Package Manager**: [bun](https://bun.com/)
- **Testing**: [Playwright](http://playwright.dev/docs)

### Deployment & Hosting
- **Hosting**: [Vercel](https://vercel.com)
- **Domain**: [Cloudflare](https://www.cloudflare.com/products/registrar/)
- **CDN**: [Cloudflare](https://www.cloudflare.com/en-ca/developer-platform/products/r2/)

<!-- =========================== -->
## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v24 or higher)
- [bun](https://bun.com/) or [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/axisconsulting/axis-frontend.git
   cd axis-frontend
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```
<!-- =========================== -->
## Development Setup

### Available Scripts

```bash
# Development
bun run dev          # Start Vite development server with hot reload
bun run build        # Type-check and build for production
bun run preview      # Preview the production build locally
bun run lint         # Run ESLint to check code quality

# Type Checking
bun run type-check   # Run TypeScript compiler without emitting files

# Testing
bun test:e2e     # Run Playwright end-to-end tests
bun test:e2e:ui  # Run E2E tests with Playwright UI mode
bun test:e2e:headed  # Run E2E tests in headed mode (visible browser)
bunx test:trace  # view the error trace after running one of the above

# Cleaning
bun clean        # remove the dist dir
bun clean:tests  # remove test related dirs
bun clean:deps   # remove dependency dirs
bun clean:all    # remove all of the above
```
<!-- =========================== -->
## Deployment

### Automatic Deployment
- **Production**: Automatically deploys from `main` branch
- **Staging**: Automatically deploys from `develop` branch
- **Preview**: Every PR gets a preview deployment

<!-- =========================== -->
## Contact

[![Website](https://img.shields.io/badge/Website-Visit-blue)]([https://your-website.com](https://www.sfuaxisconsulting.com))
[![Instagram](https://img.shields.io/badge/Instagram-Follow-1DA1F2)](https://www.instagram.com/sfuaxisconsulting/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5)](https://www.linkedin.com/company/sfuaxisconsulting)

**Made with ❤️ by SFU Axis Consulting Development Team**