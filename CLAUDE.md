# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for fast builds)
- **Production build**: `npm run build` (uses Turbopack) 
- **Start production**: `npm start`
- **Linting**: `npm run lint` (uses ESLint with Next.js TypeScript configuration)

The application runs on http://localhost:3000 by default.

## Technology Stack & Architecture

This is a Next.js 15 application using the App Router architecture with the following key technologies:

- **Framework**: Next.js 15 with App Router (TypeScript)
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui configured (New York style, RSC enabled)
- **Fonts**: Geist Sans and Geist Mono via `next/font`
- **Icons**: Lucide React
- **Utilities**: Class Variance Authority, clsx, tailwind-merge

## Project Structure

- **`app/`**: Next.js App Router structure
  - `layout.tsx`: Root layout with font configuration
  - `page.tsx`: Homepage component
  - `globals.css`: Global Tailwind CSS styles
- **`lib/`**: Utility functions
  - `utils.ts`: Contains `cn()` function for className merging
- **`public/`**: Static assets (SVG icons)
- **`requirement/`**: UXR documentation and research materials

## Key Configuration Files

- **TypeScript**: Strict mode enabled, uses `@/*` path mapping
- **ESLint**: Extends Next.js core-web-vitals and TypeScript configurations
- **Tailwind**: v4 with CSS variables, neutral base color
- **shadcn/ui**: Configured for New York style with component aliases

## Development Context

This project builds a page to demonstrate UXR (User Experience Research) project outcomes for TestOps platform development. The `requirement/` directory contains research documents about cross-customer patterns and automation workflow analysis that should be visualized and presented through the web interface.

## Import Aliases

- `@/components` → `./components`
- `@/lib` → `./lib` 
- `@/utils` → `./lib/utils`
- `@/ui` → `./components/ui`
- `@/hooks` → `./hooks`