# Tasks: Top Read News Section (002-top-read-section)

**Input**: Design documents from `specs/002-top-read-section/`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create directory structure `src/features/MostRead/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 [P] Update `NewsDTO` type with `readCount: number` in `src/types/news.dto.ts`
- [x] T003 [P] Update `src/services/mockData.json` with `readCount` values for all items
- [x] T004 Update `src/services/newsService.ts` to include `getTopReadNews()` method

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Most Read News (Priority: P1) 🎯 MVP

**Goal**: As a portal visitor, I want to see a list of the most popular news articles on the home page.

**Independent Test**: Navigate to the Home page on a desktop viewport and verify the "Mais Lidas" section appears as a sidebar with 5 numbered titles.

### Implementation for User Story 1

- [x] T005 [P] [US1] Create `src/features/MostRead/MostReadSection.styles.css` with responsive layout
- [x] T006 [P] [US1] Create `src/features/MostRead/MostReadSection.tsx` using `getTopReadNews()` from `newsService`
- [x] T007 [US1] Implement unit tests for `MostReadSection` in `src/features/MostRead/MostReadSection.test.tsx`
- [x] T008 [US1] Integrate `MostReadSection` into `src/App.tsx` and adjust grid layout for side-by-side view

**Checkpoint**: User Story 1 is functional and matches the visual specification.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final validation

- [x] T009 [P] Documentation updates in `README.md` and feature `research.md`
- [x] T010 Run `quickstart.md` validation steps
- [x] T011 Final `npm run test` and `npm run build` check

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first to enable UI implementation.
- **Foundational (Phase 2)**: Depends on Phase 1. Blocks all UI implementation as it provides the data.
- **User Story 1 (Phase 3)**: Depends on Phase 2.
- **Polish (Phase 4)**: Final step.

### Parallel Opportunities

- T002 and T003 can be done in parallel.
- T005, T006 can be started once Phase 2 is complete.
- T009 can be done at any point after Phase 3 starts.
