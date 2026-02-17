# Implementation Plan: 004-badge-filter

**Branch**: `004-badge-filter` | **Date**: 2026-02-16 | **Spec**: [spec.md](file:///Users/jeanaquino/Projects/test-github-specskit/specs/004-badge-filter/spec.md)
**Input**: Feature specification from `/specs/004-badge-filter/spec.md`

## Summary

Implement news filtering by badge (category) with a dedicated results page (`/category/:badge`). This includes updating the Header component with sanitized links, extending the `newsService` to support badge-based retrieval, and normalizing the `badge` field in `mockData.json` to ensure capitalization-insensitive filtering. The `SearchBar` will be conditionally hidden on category pages to maintain UI focus.

## Technical Context

**Language/Version**: TypeScript 5.x / React 19  
**Primary Dependencies**: Vite, react-router-dom  
**Storage**: JSON Mock (`src/services/mockData.json`)  
**Testing**: Vitest, React Testing Library  
**Target Platform**: Responsive Web (Desktop/Mobile)
**Project Type**: Single-page Web Application  
**Performance Goals**: <500ms filtering/rendering (client-side)  
**Constraints**: Hide SearchBar on category routes; Exact substring matching for badges.
**Scale/Scope**: ~10 initial articles, 3-5 categories.

## Constitution Check

| Principle | Impact | Alignment |
|-----------|--------|-----------|
| I. TypeScript-First | Service and component props will use strict DTO interfaces. | ✅ High |
| II. Decoupled Service | Logic for filtering by badge resides in `newsService.ts`. | ✅ High |
| III. Testing Discipline | Unit tests for filtering logic and page rendering. | ✅ Mandatory |
| IV. Modular Feature | All code under `src/features/BadgeFilter/`. | ✅ High |
| V. Material Design | Results view will reuse existing responsive `NewsGrid`. | ✅ High |

## Project Structure

```text
src/
├── features/
│   └── BadgeFilter/         # NEW: Page and logic for badge filtering
│       ├── BadgeResultsPage.tsx
│       ├── BadgeResultsPage.styles.css
│       └── BadgeResultsPage.test.tsx
├── components/
│   └── Header/              # UPDATE: Add category links
├── services/
│   └── newsService.ts       # UPDATE: Add getNewsByBadge
│   └── mockData.json        # UPDATE: Normalize badge strings
```

**Structure Decision**: Standard modular feature structure aligned with Principle IV of the Constitution.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
