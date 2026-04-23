# AI Agent Instructions for Portfolio Project

## Project Overview
This is a React 18 + Vite portfolio website deployed on GitHub Pages. See [readme.md](readme.md) for setup and deployment details.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages

## Architecture
- Uses HashRouter for GitHub Pages compatibility
- Components in `src/components/`, pages in `src/pages/`
- CSS variables defined in `src/App.css`
- All data is hardcoded in components

## Conventions
- Component files: PascalCase (e.g., `Navbar.jsx`)
- CSS classes: kebab-case (e.g., `.project-card`)
- Imports: Absolute paths from `/src/`

## Files to Exclude
When working in this workspace, exclude these directories/files from searches and file operations:
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.git/` - Version control

## Pitfalls
- Data changes require code edits and redeployment
- No testing or linting configured
- Single entry point without error boundaries