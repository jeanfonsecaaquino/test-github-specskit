# Data Model: Badge Filter (004)

## Entity: News (Existing)

| Field | Type | Description | Sanitization Rule |
|-------|------|-------------|-------------------|
| badge | string | Category label | Lowercase, no special characters (e.g., "tecnologia") |

## Service Contract: newsService.ts

```typescript
/**
 * Fetches news articles matching a specific badge.
 * @param badge The sanitized badge string to filter by.
 * @returns Array of NewsDTO objects.
 */
export const getNewsByBadge = async (badge: string): Promise<NewsDTO[]>;
```

## Logic
- The `getNewsByBadge` service will perform an exact string match after trimming the input.
- URL parameters in `react-router-dom` will be used to pass the `badge` to the service.
