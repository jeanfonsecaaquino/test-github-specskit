# Research: Top Read News Section (002)

## Decision 1: Popularity Metric in Mock Data
**Decision**: Add a `readCount` field to the `NewsDTO` and `mockData.json`.
**Rationale**: The specification requires a "Top 5" list based on reading frequency. Since the current data model doesn't have this, adding a numeric `readCount` field is the most direct and testable way to implement sorting.
**Alternatives considered**: 
- Just taking the first 5 items (rejected: doesn't meet the "most read" intent).
- Randomized sorting on each load (rejected: poor UX, inconsistent).

## Decision 2: Layout Integration (Side-by-side)
**Decision**: Wrap `NewsGrid` and the new `MostReadSection` in a flex container (or grid) within `App.tsx`.
**Decision Details**:
- Desktop: `display: grid; grid-template-columns: 1fr 300px;` for the main content area.
- Mobile (< 900px): `grid-template-columns: 1fr;` (sidebar moves below high-priority items).
**Rationale**: This follows the existing project's CSS Grid pattern used in the hero section and maintains responsive standards.

## Decision 3: Simple Numbered List Styling
**Decision**: Use a vertical flex container with a custom counter or a standard `<ol>` with styled markers.
**Rationale**: Keeps the visual weight light as requested ("simple title"), focusing on the rank and the title.
