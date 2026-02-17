# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement a global search bar positioned below the portal header that allows users to perform case-insensitive searches on news titles. On submission, users are redirected to a dedicated `/search` page where the results are filtered and displayed using standard news cards.

## Technical Context

- **Framework**: React 19 / TypeScript
- **Styling**: Vanilla CSS (using global tokens)
- **New Component**: `SearchBar` - A global input field below the Header.
- **New Page**: `SearchResultsPage` - A route at `/search` to display filtered results.
- **Service Extension**: Update `newsService.ts` with `searchNews(query: string)` method.
- **Routing**: Use `react-router-dom` `useSearchParams` to manage the query state.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

[Gates determined based on constitution file]

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
│   └── Search/
│       ├── SearchBar.tsx
│       ├── SearchBar.css
│       ├── SearchResultsPage.tsx
│       └── SearchResultsPage.css
├── services/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
