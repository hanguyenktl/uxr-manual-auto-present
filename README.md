# TestOps UXR Demo Application

A Next.js application for demonstrating User Experience Research findings from the TestOps platform development, showcasing cross-customer patterns and pain point prioritization based on research with 6 enterprise customers.

## Overview

This application presents UXR insights for TestOps platform strategy, including:

- **Pain Point Prioritization Matrix**: Impact vs Frequency analysis with TestOps feature mapping
- **User Journey Visualization**: Manual-to-Automation workflow across 8 stages 
- **Cross-Customer Patterns**: Universal vs divergent behaviors and workflows
- **Research Insights**: Evidence-based recommendations from customer interviews

## Key Features

### 📊 Pain Point Matrix
Interactive visualization showing 11 validated pain points positioned by business impact and frequency, with detailed customer evidence and TestOps feature mappings.

### 🗺️ Journey Mapping
Comprehensive view of the 8-stage manual-to-automation workflow showing:
- Universal patterns vs team-specific divergences
- Critical attention areas and blockers
- Persona involvement across workflow stages
- TestOps opportunities for each stage

### 🔍 Research Overview
Summary of key insights, methodology, and strategic recommendations based on interviews with ClarisHealth, Security Bank, Temple & Webster, Icon PLC, Skedulo, and individual practitioners.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Development Commands

- `npm run dev` - Start development server (uses Turbopack)
- `npm run build` - Build for production (uses Turbopack)
- `npm start` - Start production server
- `npm run lint` - Run ESLint with TypeScript rules

## Project Structure

```
app/
├── components/
│   ├── matrix/          # Pain Point Matrix components
│   ├── journey/         # User Journey visualization
│   ├── overview/        # Research overview components
│   └── shared/          # Reusable UI components
├── data/                # Research data and types
└── page.tsx            # Main application entry

requirement/             # UXR documentation and research materials
claude/tasks/           # Implementation planning documents
```

## Technology Stack

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with design system
- **UI Components**: shadcn/ui (New York variant)
- **Icons**: Lucide React
- **Build Tool**: Turbopack for fast development and builds

## Research Context

This application visualizes findings from comprehensive UXR conducted across 6 enterprise customers to identify universal job-to-be-done patterns and pain points in manual-to-automation testing workflows. The research informs TestOps platform strategy and feature prioritization.

### Research Participants
- ClarisHealth (Healthcare)
- Security Bank (Financial Services) 
- Temple & Webster (E-commerce)
- Icon PLC (Enterprise)
- Skedulo (SaaS Platform)
- Individual Practitioners (Various Industries)

## Contributing

See `CLAUDE.md` for development guidelines and instructions for working with Claude Code on this project.
