# Quickstart: Badge Filter (004)

## Implementation Steps

1.  **Data Normalization**: 
    *   Update `src/services/mockData.json` to sanitize all badges to lowercase/no-accents.
2.  **Service**:
    *   Add `getNewsByBadge(badge)` to `src/services/newsService.ts`.
3.  **UI - BadgeResultsPage**:
    *   Create `src/features/BadgeFilter/BadgeResultsPage.tsx` and styles.
    *   Fetch news using `getNewsByBadge` based on URL params.
4.  **UI - Header**:
    *   Update navigation links to point to `/category/tecnologia`, etc.
5.  **Routing & App Integration**:
    *   Add the route `/category/:badge` in `App.tsx`.
    *   Add logic to hide `SearchBar` when `isCategoryPage` is true.

## Verification
1.  **Tests**: Create `BadgeResultsPage.test.tsx` and ensure all tests pass.
2.  **Manual**: Click "Tecnologia" in Header, verify SearchBar is gone and correct news are shown.
