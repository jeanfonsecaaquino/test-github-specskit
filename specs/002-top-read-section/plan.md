# Implementation Plan: Top Read News Section

**Branch**: `002-top-read-section` | **Date**: 2026-02-16 | **Spec**: [spec.md](file:///Users/jeanaquino/Projects/test-github-specskit/specs/002-top-read-section/spec.md)
**Input**: Feature specification from `/specs/002-top-read-section/spec.md`

## Summary

Implement a new "Mais Lidas" sidebar section on the Home page. This section will display the top 5 most read news articles in a numbered list (1-5), featuring only the titles as links. The implementation includes updating the `newsService` to provide popularity-based data and adjusting the home page layout for a side-by-side desktop view.

## Technical Context

**Language/Version**: React 19, TypeScript  
**Primary Dependencies**: Vite, react-router-dom  
**Storage**: Mock data (`mockData.json`)  
**Testing**: Vitest, React Testing Library (JSDOM)  
**Target Platform**: Web (Desktop, Tablet, Mobile)
**Project Type**: Web Application  
**Performance Goals**: < 500ms for SPA transitions and data loading  
**Constraints**: Must match existing Material Design aesthetic and responsive breakpoints (900px)  
**Scale/Scope**: Single feature addition to the Home page

## Constitution Check

| Gate | Status | Compliance |
|------|--------|------------|
| TypeScript-First | ✅ PASS | All new components and service methods will be strictly typed. |
| Decoupled Service | ✅ PASS | "Most read" logic will be encapsulated in `newsService.ts`. |
| Testing Discipline | ✅ PASS | Component `MostReadSection.tsx` and service changes will have 100% test coverage. |
| Modular Structure | ✅ PASS | Feature will be placed in `src/features/MostRead/`. |
| Responsive UX | ✅ PASS | Layout will use CSS Grid/Flexbox to handle sidebar stacking on mobile. |

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── features/
│   └── MostRead/
│       ├── MostReadSection.tsx
│       ├── MostReadSection.css
│       └── MostReadSection.test.tsx
├── services/
│   ├── newsService.ts       # Update to include getTopReadNews
│   └── mockData.json        # Update to include readCount
├── types/
│   └── news.dto.ts          # Update to include readCount
└── App.tsx                  # Update for sidebar layout
```

**Structure Decision**: The project uses a modular feature structure. All UI logic for the "Most Read" section will be self-contained in `src/features/MostRead/`. Shared services and types will be updated at the root.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
