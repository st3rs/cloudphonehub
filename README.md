<p align="center">
  <img src="https://img.icons8.com/fluency/96/cloud-phone.png" alt="CloudPhoneHub Logo" width="80" />
</p>

<h1 align="center">CloudPhoneHub</h1>

<p align="center">
  <strong>Cloud-based phone management platform</strong>
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#project-structure">Project Structure</a> &bull;
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## Features

- Cloud phone device management
- Modern, responsive UI with dark mode support
- Built with the latest Next.js App Router
- Type-safe development with TypeScript
- Utility-first styling with Tailwind CSS v4

## Tech Stack

| Category      | Technology                  |
| ------------- | --------------------------- |
| Framework     | Next.js 16 (App Router)     |
| UI Library    | React 19                    |
| Language      | TypeScript 5                |
| Styling       | Tailwind CSS 4 + PostCSS    |
| Font          | Geist Sans & Geist Mono     |
| Linting       | ESLint 9                    |

## Getting Started

### Prerequisites

- **Node.js** 18.18+
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/st3rs/cloudphonehub.git
cd cloudphonehub

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
cloudphonehub/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles & Tailwind
│   └── favicon.ico       # App icon
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Deployment

Deploy instantly with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fst3rs%2Fcloudphonehub)

Or build and serve manually:

```bash
npm run build
npm start
```

---

<p align="center">
  Made with &hearts; using Next.js
</p>
