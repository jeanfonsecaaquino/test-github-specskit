<!--
Sync Impact Report:
- Version change: N/A → 1.0.0
- List of modified principles:
    - [PROJECT_NAME] → GazetaNews News Portal
    - [PRINCIPLE_1] → TypeScript-First & Strong Typing
    - [PRINCIPLE_2] → Decoupled Service Architecture
    - [PRINCIPLE_3] → Testing Discipline (Vitest + RTL)
    - [PRINCIPLE_4] → Modular Feature Structure
    - [PRINCIPLE_5] → Material Design & Responsive UX
- Added sections: Technology Stack & Coding Standards, Quality Gates & Compliance
- Removed sections: None
- Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md
- Follow-up TODOs: None
-->

# GazetaNews News Portal Constitution

## Core Principles

### I. TypeScript-First & Strong Typing
All feature logic, data models, and component props MUST be strictly typed. Any data fetched from external sources or mocks MUST have a corresponding DTO interface defined in `src/types/`. Avoid `any` at all costs.

### II. Decoupled Service Architecture
UI components MUST NOT contain business logic or direct data fetching. All I/O operations must be abstracted into the `src/services/` layer. Custom hooks should be used to bridge services and components, ensuring high testability and separation of concerns.

### III. Testing Discipline (Vitest + RTL)
Every core component and service MUST have accompanying unit tests. Tests must verify both the expected output and critical edge cases. The red-green-refactor cycle is the preferred development flow.

### IV. Modular Feature Structure
Related components, styles, and tests should be grouped into feature-specific directories within `src/features/`. Shared UI elements reside in `src/components/`. This ensures local reasoning and easier maintenance.

### V. Material Design & Responsive UX
The UI must strictly follow Material Design aesthetics (vibrant colors, shadow elevation, clear typography). Responsiveness is non-negotiable; every layout must handle mobile, tablet, and desktop viewports gracefully.

## Technology Stack & Coding Standards

- **Runtime**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with design tokens (`:root` variables)
- **Testing**: Vitest, React Testing Library, JSDOM
- **Conventions**: PascalCase for components, camelCase for variables/functions, dash-case for files (e.g., `news.dto.ts`, `Header.test.tsx`).

## Quality Gates & Compliance

- **Linting**: No unresolved ESLint errors allowed in production code.
- **Build**: `npm run build` must pass before any significant release.
- **Reviews**: Architectural changes must be documented in an updated Implementation Plan or Constitution amendment.

## Governance

This constitution is the source of truth for all architectural decisions. Amendments require a version bump and updates to the Sync Impact Report. Versions follow Semantic Versioning (SemVer).

**Version**: 1.0.0 | **Ratified**: 2026-02-16 | **Last Amended**: 2026-02-16
