# Data Model & Contracts: News Search (003)

## Entity: News (Existing)
Search will target the following field:
- `title`: string (Target for substring matching)

## Service Contract: newsService.ts
```typescript
/**
 * Searches for news articles by title (case-insensitive substring match).
 * @param query The search string
 * @returns Array of matching NewsDTO objects
 */
export const searchNews = async (query: string): Promise<NewsDTO[]>;
```

## Component Contracts

### SearchBar
- **Props**: None (handles its own state and navigation).
- **Behavior**: On submit, navigates to `/search?q={query}`.

### SearchResultsPage
- **Logic**: Extracts `q` from URL, calls `searchNews(q)`, and renders results using `NewsCard`.
