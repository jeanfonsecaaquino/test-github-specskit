# Tasks: News Detail Page (001-news-detail-page)

**Input**: Design documents from `specs/001-news-detail-page/`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create feature branch `001-news-detail-page`
- [ ] T002 Install dependencies: `npm install react-router-dom`
- [ ] T003 Configure `BrowserRouter` in `src/main.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 [P] Update `NewsDTO` type with `slug: string` and `fullContent: string[]` in `src/types/news.dto.ts`
- [ ] T005 [P] Update `src/services/mockData.json` with unique `slug` and multi-paragraph `fullContent` for all items
- [ ] T006 Update `src/services/newsService.ts` to include `getNewsBySlug(slug: string)` method
- [ ] T007 [P] Create directory structure `src/features/NewsDetail/`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Full Article Content (Priority: P1) 🎯 MVP

**Goal**: As a portal visitor, I want to read the full text of a news article so that I am fully informed about the topic.

**Independent Test**: Navigate directly to `/news/reconstrucao-urbana-seculo-xxi` and verify title, image, and full body text are displayed correctly.

### Implementation for User Story 1

- [ ] T008 [P] [US1] Create `src/features/NewsDetail/NewsPage.styles.css` with responsive layout
- [ ] T009 [US1] Create `src/features/NewsDetail/NewsPage.tsx` using `useParams` (slug) and `newsService`
- [ ] T010 [US1] Implement unit tests for `NewsPage` in `src/features/NewsDetail/NewsPage.test.tsx`
- [ ] T011 [US1] Add `/news/:slug` route to `src/App.tsx`

**Checkpoint**: User Story 1 is functional and testable via direct URL.

---

## Phase 4: User Story 2 - Navigate from Home to Detail (Priority: P2)

**Goal**: As a portal visitor, I want to click on a news card on the home page and be taken to the full article.

**Independent Test**: Click a "Read More" button on the home page and verify redirection to `/news/:id`.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Update `src/features/NewsGrid/NewsCard.tsx` to use `<Link>` instead of `<a>` or button click
- [ ] T013 [P] [US2] Update `src/features/NewsCarousel/NewsCarousel.tsx` to use `<Link>` for navigation

---

## Phase 5: User Story 3 - Return to Home Page (Priority: P3)

**Goal**: As a portal visitor, I want to easily go back to the home page after reading an article.

**Independent Test**: Click the logo in the header and verify return to `/`.

### Implementation for User Story 3

- [ ] T014 [US3] Update `src/components/Header/Header.tsx` to use `<Link>` to `/` for the logo

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final validation

- [ ] T015 [P] Documentation updates in `README.md` and feature `research.md`
- [ ] T016 Run `quickstart.md` validation steps
- [ ] T017 Final `npm run test` and `npm run build` check

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first to enable routing.
- **Foundational (Phase 2)**: Depends on Phase 1. Blocks all UI implementation.
- **User Story 1 (Phase 3)**: Depends on Phase 2.
- **User Story 2 & 3 (Phases 4 & 5)**: Depend on Phase 3 route existence. Can be done in parallel.
- **Polish (Phase 6)**: Final step.

### Parallel Opportunities

- T004, T005 can run in parallel.
- T008 can be started while T007 is ready.
- T012, T013 are independent.
