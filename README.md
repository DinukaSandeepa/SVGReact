<div align="center">

# 🎨 SVG to React Transformer

**Transform SVG icons into production-ready React components instantly**

[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [API](#api-reference) • [Contributing](#contributing)

</div>

---

## 📖 Overview

SVG to React Transformer is a modern web application designed specifically for developers working with [Lucide Icons](https://lucide.dev/). It automates the tedious process of converting raw SVG code into properly formatted, reusable React components with full TypeScript support.

Built with **Next.js 13** and styled using **Tailwind CSS** with **shadcn/ui** components, this tool provides a seamless developer experience with instant transformations and one-click copying.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🚀 **Instant Transformation** | Real-time SVG to React component conversion |
| 🎯 **Smart Naming** | Automatic kebab-case to PascalCase conversion |
| 🎨 **Dynamic Styling** | Injects `className` prop for flexible styling |
| 🔧 **React Property Fixes** | Auto-converts SVG attributes to React-compatible camelCase |
| 📋 **One-Click Copy** | Copy transformed code instantly to clipboard |
| 🌓 **Dark Mode Support** | Full light/dark theme compatibility |
| 📱 **Responsive Design** | Works seamlessly on desktop and mobile |
| 🏗️ **Static Export** | Can be deployed as a static site anywhere |

## 🔄 Transformation Pipeline

The transformer applies the following modifications to make SVGs React-ready:

```text
┌───────────────────────────────────────────────────────────────┐
│                        INPUT SVG                              │
├───────────────────────────────────────────────────────────────┤
│  1. Extract component name from class="lucide lucide-{name}" │
│  2. Remove class attribute entirely                           │
│  3. Add className={className} prop to <svg> tag               │
│  4. Remove stroke="..." attribute                             │
│  5. Convert kebab-case attributes to camelCase:               │
│     • stroke-width    → strokeWidth                           │
│     • stroke-linecap  → strokeLinecap                         │
│     • stroke-linejoin → strokeLinejoin                        │
│  6. Convert component name: kebab-case → PascalCase           │
│  7. Wrap with withClassName HOC for default sizing            │
├───────────────────────────────────────────────────────────────┤
│                    OUTPUT REACT COMPONENT                     │
└───────────────────────────────────────────────────────────────┘
```

## 🚀 Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm**, **yarn**, or **pnpm**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/DinukaSandeepa/SVGReact.git

# Navigate to project directory
cd SVGReact

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready static export |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 📘 Usage

### Basic Workflow

1. **Copy** your Lucide SVG icon code
2. **Paste** it into the input textarea
3. **Click** "Transform SVG" button
4. **Copy** the generated React component and export statement
5. **Use** in your React project!

### Example Transformation

**Input SVG (from Lucide Icons):**

```svg
<svg class="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"/>
  <path d="m12 5 7 7-7 7"/>
</svg>
```

**Output React Component:**

```jsx
const ArrowRightBase = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

export const ArrowRight = withClassName(ArrowRightBase);
```

**Usage in Your Project:**

```jsx
import { ArrowRight } from './icons/ArrowRight';

function MyComponent() {
  return (
    <button>
      Next <ArrowRight className="ml-2 text-blue-500" />
    </button>
  );
}
```

## 📚 API Reference

### `transformSvg(svgCode: string)`

Main transformation function that converts SVG code to React component.

**Parameters:**
- `svgCode` (string): Raw SVG code with Lucide class naming

**Returns:**

```typescript
{
  componentName: string;    // PascalCase component name with "Base" suffix
  componentCode: string;    // Full React component code
  exportCode: string;       // Export statement with withClassName HOC
} | null
```

**Returns `null` if:**
- SVG doesn't contain `class="lucide lucide-{name}"` pattern
- Invalid SVG format

---

### `withClassName(Component)`

Higher-Order Component that adds default sizing to icon components.

**Behavior:**
- Applies default `w-6 h-6` (24x24 pixels) sizing
- Merges with any additional className passed as prop
- Preserves component displayName for debugging

**Example:**

```jsx
const IconBase = ({ className }) => <svg className={className}>...</svg>;
export const Icon = withClassName(IconBase);

// Usage - default 24x24 size
<Icon />

// Usage - custom size
<Icon className="w-8 h-8" />

// Usage - with additional styles
<Icon className="w-4 h-4 text-red-500 hover:text-red-700" />
```

## 🏗️ Project Structure

```
SVGReact/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.jsx           # Root layout with Inter font
│   └── page.jsx             # Main application page
├── components/
│   └── ui/
│       ├── code-block.tsx   # Code display with copy functionality
│       └── ...              # shadcn/ui components (40+ components)
├── hooks/
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   ├── transformSvg.js      # Core SVG transformation logic
│   ├── withClassName.js     # HOC for className injection
│   └── utils.js             # Utility functions (cn helper)
├── components.json          # shadcn/ui configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies & scripts
```

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 13.5](https://nextjs.org/)** - React framework with App Router
- **[React 18.2](https://react.dev/)** - UI library

### Styling
- **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### UI Components (via Radix UI)
- Accordion, Dialog, Dropdown Menu, Popover, Toast, Tooltip, and 30+ more

### Utilities
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes intelligently
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## ⚙️ Configuration

### Static Export

The app is configured for static export, making it deployable to any static hosting:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

### Theming

CSS variables are defined in `app/globals.css` for easy customization:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
}
```

## 🚢 Deployment

### Static Hosting (Recommended)

```bash
# Build static files
npm run build

# Output will be in 'out' directory
# Deploy to Vercel, Netlify, GitHub Pages, etc.
```

### Vercel (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DinukaSandeepa/SVGReact)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DinukaSandeepa/SVGReact)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes before submitting PR
- Update documentation as needed

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Dinuka Sandeepa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 🙏 Acknowledgments

- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons
- [shadcn/ui](https://ui.shadcn.com/) - Excellent component library
- [Vercel](https://vercel.com/) - Amazing deployment platform

---

<div align="center">

**[⬆ Back to Top](#-svg-to-react-transformer)**

Made with ❤️ by [Dinuka Sandeepa](https://github.com/DinukaSandeepa)

</div>
