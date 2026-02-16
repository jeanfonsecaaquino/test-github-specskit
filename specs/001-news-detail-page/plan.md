# Implementation Plan: News Detail Page

**Branch**: `001-news-detail-page` | **Date**: 2026-02-16 | **Spec**: [spec.md](./spec.md)

## Summary
Implement a dedicated detail page for news articles using `react-router-dom` for navigation (slug-based) and a decoupled service layer to fetch full article content. This plan includes updating the existing mock data and components to support linking and deep-linking.

## Technical Context
**Language/Version**: React 19, TypeScript  
**Primary Dependencies**: `react-router-dom` (to be installed)  
**Storage**: Local `mockData.json` (mocked service)  
**Testing**: Vitest + React Testing Library  
**Project Type**: Web Frontend  

## Constitution Check
- **I. TypeScript-First**: Enforced by updating `NewsDTO` to include `fullContent`.
- **II. Decoupled Service**: New method `getNewsBySlug` will be added to `newsService.ts`.
- **III. Testing**: Unit tests for the new `NewsDetail` component and routing logic.
- **IV. Modular Feature**: Sub-feature `src/features/NewsDetail/` will be created.
- **V. Material Design**: Responsive layout following the black header theme.

## Project Structure (Updated)
```text
src/
├── features/
│   └── NewsDetail/         # [NEW]
│       ├── NewsPage.tsx
│       ├── NewsPage.test.tsx
│       └── NewsPage.styles.css
├── services/
│   └── newsService.ts      # [MODIFY] Added getNewsBySlug logic
└── App.tsx                 # [MODIFY] Added Routes structure (/news/:slug)
```

## Phases

### Phase 0: Research (Done)
- Decided on `react-router-dom` for SEO-friendly deep links.
- Confirmed single-paragraph text blocks as the initial content format.

### Phase 1: Design & Contracts (Done)
- Updated `NewsDTO` to support large content blocks and slug field.
- Defined the `/news/:slug` route contract.

### Phase 2: Execution
1. **Infrastructure**: Install `react-router-dom` and configure `BrowserRouter` in `main.tsx`.
2. **Data Update**: Update `mockData.json` with multi-line `fullContent` and unique `slug` for all items.
3. **Component Creation**: Develop `NewsPage.tsx` with responsive Material styling.
4. **Wiring**: Update `NewsCarousel` and `NewsCard` to use `<Link>` components instead of `<a>`.
5. **Verification**: Implement tests for routing navigation and data rendering.

## Verification Plan

### Automated Tests
- `npm run test`: Verify `NewsPage` renders correctly and matches article data.
- `npm run build`: Ensure no TypeScript errors with updated DTOs.

### Manual Verification
- Redimension viewport to 375px; verify article readability and header scaling.
- Direct URL entry for non-existent slugs (verify 404/Empty State).
