# Quickstart: Top Read News Section (002)

## Setup
1.  Verify you are on branch `002-top-read-section`.
2.  Run `npm install`.

## Implementation Steps
1.  **Types**: Update `NewsDTO` in `src/types/news.dto.ts` to include `readCount: number`.
2.  **Mock Data**: Update `src/services/mockData.json` by adding `readCount` (values 10-1000) to each article.
3.  **Service**: Implement `getTopReadNews(): Promise<NewsDTO[]>` in `src/services/newsService.ts`.
4.  **UI Component**: Create `src/features/MostRead/MostReadSection.tsx` and its CSS.
5.  **Layout**: Modify `src/App.tsx` to include the sidebar. Update `index.css` for grid rules if needed.

## Verification
1.  **Tests**: Create `src/features/MostRead/MostReadSection.test.tsx`. Run `npm run test`.
2.  **Build**: Run `npm run build`.
3.  **Manual**: Open the Home page and verify "Mais Lidas" appears correctly on desktop and mobile.
