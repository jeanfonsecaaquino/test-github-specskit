# Tasks: Approximate News Search

**Input**: Design documents from `/specs/003-news-search/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure `src/features/Search/` per implementation plan
- [x] T002 [P] Configure new routes for `/search` in `src/App.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before any user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Implement `searchNews(query: string)` in `src/services/newsService.ts`
- [x] T004 [P] Create base styles for search components in `src/features/Search/SearchBar.css`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Find News by Title (Priority: P1) 🎯 MVP

**Goal**: Allow users to search for news articles by entering keywords and seeing results on a dedicated page.

**Independent Test**: Enter a partial title in the search bar, press Enter, and verify redirection to `/search` with filtered results.

### Implementation for User Story 1

- [x] T005 [P] [US1] Create `SearchBar` component in `src/features/Search/SearchBar.tsx`
- [x] T006 [US1] Integrate `SearchBar` into `src/App.tsx` (below Header)
- [x] T007 [P] [US1] Create `SearchResultsPage` component in `src/features/Search/SearchResultsPage.tsx`
- [x] T008 [US1] Implement search logic in `SearchResultsPage` using `useSearchParams` and `newsService.searchNews`
- [x] T009 [US1] Map search results to `NewsCard` components in `SearchResultsPage.tsx`
- [x] T010 [US1] Implement "No results found" state in `SearchResultsPage.tsx`

**Checkpoint**: User Story 1 is fully functional and testable independently.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T011 [P] Documentation updates in `README.md` and feature `research.md`
- [x] T012 Run `quickstart.md` validation steps
- [x] T013 Final `npm run test` and `npm run build` check

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Phase 1.
- **User Story 1 (Phase 3)**: Depends on Phase 2.
- **Polish (Phase 4)**: Depends on Phase 3.

### Parallel Opportunities

- T002 and T004 can start in parallel after T001.
- T005 and T007 can start in parallel once the Foundation is ready.
