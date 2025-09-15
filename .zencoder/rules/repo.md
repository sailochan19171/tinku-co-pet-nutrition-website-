---
description: Repository Information Overview
alwaysApply: true
---

# Tinku & Co. Pet Nutrition Website Information

## Summary
A React-based web application for Tinku & Co., a premium pet nutrition company. The website showcases their scientifically formulated pet food products for dogs and cats, featuring product information, nutritional benefits, and company details.

## Structure
- **src/**: Main source code directory containing React components and application logic
  - **components/**: React components for different sections of the website
  - **main.tsx**: Application entry point
  - **App.tsx**: Main application component
- **public/**: Static assets (implied by Vite structure)

## Language & Runtime
**Language**: TypeScript, JavaScript
**Version**: TypeScript 5.5.3
**Build System**: Vite 5.4.2
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 18.3.1
- React DOM 18.3.1
- Supabase JS 2.57.4
- Lucide React 0.344.0

**Development Dependencies**:
- TypeScript 5.5.3
- Vite 5.4.2
- ESLint 9.9.1
- TailwindCSS 3.4.1
- PostCSS 8.4.35
- Autoprefixer 10.4.18

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Frontend Framework
**Framework**: React with TypeScript
**Styling**: TailwindCSS
**Component Structure**: Modular components for different page sections
**Key Components**:
- Header, Hero, ProductShowcase
- Benefits, HealthBenefits, NutritionScience
- AboutUs, FAQ, Newsletter, ChatBot

## Backend Integration
**Service**: Supabase
**Integration**: Via @supabase/supabase-js client library
**Features**: Likely used for data storage, authentication, or serverless functions

## Project Configuration
**TypeScript**: Strict mode enabled with ES2020 target
**Vite**: Configured with React plugin
**ESLint**: Custom configuration with React hooks and refresh plugins
**TailwindCSS**: Configured for all HTML and TSX/JSX files