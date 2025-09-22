# SFU Axis Consulting - Official Website

[![Website Status](https://img.shields.io/website?url=https://www.sfuaxisconsulting.com/)](https://your-club-website.com)
[![Contributors](https://img.shields.io/github/contributors/axisconsulting/axis-frontend.svg)](https://github.com/axisconsulting/axis-frontend)

<!-- Please update this for visibility -->
> Last updated: Sept. 2025

## 📋 Table of Contents

- [About](#about)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Resources & Links](#resources--links)
- [Contact](#contact)

## About
Axis Consulting is a student-led pro-bono consultancy part of Simon Fraser University.

<!-- =========================== -->
## Technology Stack

### Frontend
- **Framework**: [React](https://react.dev/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Package Manager**: [bun](https://bun.com/)

### Deployment & Hosting
- **Hosting**: [Vercel](https://vercel.com)
- **Domain**: [Squarespace](https://www.squarespace.com)
- **CDN**: [cloudinary](https://cloudinary.com/developers)

<!-- =========================== -->
## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v22 or higher)
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
## Project Structure

```
axis-frontend/
├── public/              # Static assets
│   ├── images/         # Images and media
│   └── favicon.ico     # Favicon
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── styles/         # CSS/SCSS files
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── store/          # State management
│   └── main.jsx        # Entry point
├── docs/               # Documentation
├── tests/              # Test files
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

<!-- =========================== -->
## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting
- Update documentation if needed

<!-- =========================== -->
## Deployment

### Automatic Deployment
- **Production**: Automatically deploys from `main` branch
- **Staging**: Automatically deploys from `develop` branch
- **Preview**: Every PR gets a preview deployment

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to hosting platform
npm run deploy
```

## Resources & Links

### Development Resources
- **Documentation**: [Link to detailed docs]
- **API Documentation**: [Link to API docs]
- **Project Board**: [Trello](https://trello.com/b/lEsaeAWz/axis-website)

### Learning Resources
- [React Documentation](https://react.dev/)
- [CSS-Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [npm Documentation](https://docs.npmjs.com/)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- [Conventional Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)

### Tools & Services
- **Design**: [2024-2025 Exit Report](https://www.figma.com/design/LgbaKk7YCLslPTMsPBQQjo/Axis-2024-2025-Design-Exit-Report?node-id=0-1&p=f&t=ymDPp0xLXSaOpN9e-0) 
- **Analytics**: [Google Analytics](https://analytics.google.com)
- **Performance**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Contact

[![Website](https://img.shields.io/badge/Website-Visit-blue)]([https://your-website.com](https://www.sfuaxisconsulting.com))
[![Instagram](https://img.shields.io/badge/Instagram-Follow-1DA1F2)](https://www.instagram.com/sfuaxisconsulting/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5)](https://www.linkedin.com/company/sfuaxisconsulting)

**Made with ❤️ by SFU Axis Consulting Development Team**n](https://img.shields.io/badge/LinkedIn-Connect-0077B5)](https://www.linkedin.com/company/sfuaxisconsulting)

**Made with ❤️ by SFU Axis Consulting Development Team**n](https://img.shields.io/badge/LinkedIn-Connect-0077B5)](https://www.linkedin.com/company/sfuaxisconsulting)

**Made with ❤️ by SFU Axis Consulting Development Team**