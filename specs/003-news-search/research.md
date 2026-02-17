# Research: News Search (003)

## Decision 1: Search Implementation Strategy
**Decision**: Use client-side filtering on the `newsService` for the MVP.
**Rationale**: Since the current portal uses local mock data, filtering in memory is extremely fast and avoids complex backend architectures.
**Alternatives considered**: Server-side search API (not applicable as there is no backend server yet).

## Decision 2: Search Bar Positioning
**Decision**: Place the `SearchBar` at the top of the `<main>` container in `App.tsx`, but outside the current `<Routes>` for home specific content, making it globally visible.
**Rationale**: The user requested it "below the header". Placing it at the top of the main container ensures it's always centered and visible regardless of the route.

## Decision 3: URL Structure
**Decision**: Use `?q=` as the search parameter (e.g., `/search?q=gremio`).
**Rationale**: Standard web practice that allows users to bookmark or share specific search results.
