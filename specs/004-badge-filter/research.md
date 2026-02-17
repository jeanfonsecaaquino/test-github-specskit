# Research: Badge Filter (004)

## Decision 1: Header Category Links
**Decision**: Update the existing `Header` navigation links to include hardcoded categories: "Tecnologia", "Esportes", and "Mundo".
**Rationale**: These are the primary categories in the mock data. The links will point to `/category/tecnologia`, etc.
**Alternatives considered**: Dynamic category fetching (rejected: unnecessary complexity for current mock-based scale).

## Decision 2: Hiding the SearchBar Component
**Decision**: Use `useLocation` from `react-router-dom` in `App.tsx` and conditionally render the `SearchBar`.
**Implementation**: `const isCategoryPage = location.pathname.startsWith('/category/');`
**Rationale**: Centralized control in `App.tsx` prevents having to add "hide logic" to multiple sub-components and keeps the layout clean as requested in spec FR-003.

## Decision 3: Mock Data Sanitization
**Decision**: Manually bulk-edit `src/services/mockData.json` to convert all `badge` values to lowercase and remove accents (e.g., "Inovação" -> "inovacao").
**Rationale**: Simplifies the filtering logic to simple string equality and prevents brittle matching in URLs and logic.
**Alternatives considered**: URL encoding/decoding at runtime (rejected: data normalization is a cleaner architectural approach).
