# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Plan & Review

### Before starting work
- Always in plan mode to make a plan
- You must get context from requirement/ folder, which contains User Research Plan, and Insights Consolidation Documents
- After get the plan, make sure you Write the plan to • claude/tasks/TASK_NAME. md.
- The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
- If the task require external knowledge or certain package, also research to get latest knowledge (Use Task tool for research)
- Don't over plan it, the purpose is to build a page to demonstrate the research outcomes in the best presentation format possible, not to build an application, so we need to make it simple and efficiently in presenting to the audiences effectively
- Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.

### While implementing
- You should update the plan as you work.
- After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily hand over to other engineers.

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