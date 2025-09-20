# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an **eye clinic landing page** built with Next.js 15.5.3, React 19, and modern web technologies. The project is bootstrapped from create-next-app and configured with shadcn/ui components.

### Tech Stack
- **Framework**: Next.js 15.5.3 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **TypeScript**: Configured via jsconfig.json (JavaScript project with TS paths)
- **Linting**: ESLint with Next.js configuration

## Development Commands

### Core Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Package Management
```bash
# Install new dependency
npm install <package-name>

# Install new dev dependency
npm install -D <package-name>

# Update dependencies
npm update
```

### shadcn/ui Component Management
```bash
# Add shadcn/ui components (requires shadcn CLI)
npx shadcn-ui@latest add <component-name>

# Initialize additional shadcn components
npx shadcn-ui@latest init
```

## Architecture & Structure

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- Main layout: `app/layout.js` - defines root HTML structure and global fonts
- Homepage: `app/page.js` - main landing page content
- Global styles: `app/globals.css` - Tailwind v4 configuration with shadcn theming

### shadcn/ui Configuration
- **Style**: "new-york" variant
- **Base Color**: neutral
- **Components Path**: `@/components`
- **Utils Path**: `@/lib/utils`
- **Aliases**: Pre-configured for components, utils, ui, lib, and hooks
- **Icon Library**: Lucide React

### Styling System
- **Tailwind v4**: Latest version with native CSS imports
- **CSS Variables**: Extensive design token system for theming
- **Dark Mode**: Complete dark theme configuration
- **Typography**: Geist Sans and Geist Mono fonts from Vercel

### Path Aliases
```javascript
// Configured in jsconfig.json
"@/*": ["./*"]

// Available via components.json
"@/components": "./components"
"@/utils": "./lib/utils" 
"@/ui": "./components/ui"
"@/lib": "./lib"
"@/hooks": "./hooks"
```

## Development Guidelines

### File Organization
- Create `components/` directory for React components
- Create `lib/` directory for utilities and helper functions
- Use `components/ui/` for shadcn/ui components
- Place static assets in `public/` directory

### Styling Patterns
- Use Tailwind utility classes for styling
- Leverage CSS custom properties defined in globals.css
- Follow shadcn/ui design token system
- Use `cn()` utility function for conditional classes (when lib/utils is set up)

### Component Development
- Use functional components with hooks
- Follow Next.js App Router conventions
- Implement proper Image optimization with next/image
- Use next/font for font optimization

### Environment Setup
- Project uses JavaScript (not TypeScript) but with path aliases
- ESLint configured with Next.js core web vitals
- PostCSS configured for Tailwind processing
- Supports both npm and alternative package managers (yarn, pnpm, bun)

## Common Development Patterns

### Adding New Pages
```javascript
// Create new route: app/about/page.js
export default function About() {
  return <div>About page</div>
}
```

### Using shadcn/ui Components
```bash
# First, add required components
npx shadcn-ui@latest add button card

# Then import and use
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### Custom Components
```javascript
// components/hero-section.js
export default function HeroSection() {
  return (
    <section className="py-20">
      {/* Component content */}
    </section>
  )
}
```

## Build and Deployment

### Local Development
- Development server runs on `http://localhost:3000`
- Hot reloading enabled for all file changes
- Automatic optimization for images and fonts

### Production Build
- Static optimization for pages without server-side logic
- Automatic code splitting and tree shaking
- Built-in performance monitoring with Core Web Vitals

### Deployment Ready
- Optimized for Vercel deployment (zero-config)
- Can be deployed to any Node.js hosting platform
- Supports static export if needed