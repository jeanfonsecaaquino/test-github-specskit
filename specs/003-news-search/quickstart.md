# Quickstart: News Search (003)

## Implementation Steps

1.  **Service**: Implement `searchNews(query: string)` in `src/services/newsService.ts`.
2.  **UI - SearchBar**:
    *   Create `src/features/Search/SearchBar.tsx` and `.css`.
    *   Implement input field and "Enter" listener.
    *   Position below Header in `App.tsx`.
3.  **UI - Results Page**:
    *   Create `src/features/Search/SearchResultsPage.tsx` and `.css`.
    *   Use `useSearchParams` to get the query.
    *   Map results to `NewsCard` components.
4.  **Routing**: Add `/search` route to `App.tsx`.
5.  **Verification**: 
    *   Run unit tests for search logic.
    *   Manual test: search for "Urbana", check results page.
