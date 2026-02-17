# Tasks: Badge Filter (004-badge-filter)

**Input**: Design documents from `/specs/004-badge-filter/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure `src/features/BadgeFilter/` per implementation plan

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and data normalization that MUST be complete before any user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Update `src/services/mockData.json` to normalize all `badge` fields (lowercase, no special characters/accents)
- [x] T003 [P] Implement `getNewsByBadge(badge: string)` in `src/services/newsService.ts`

**Checkpoint**: Foundation ready - filtering logic and sanitized data are available.

---

## Phase 3: User Story 1 - Categorized Content (Priority: P1) 🎯 MVP

**Goal**: Allow users to click on a category in the header and see a filtered list of news on a dedicated page without the search bar.

**Independent Test**: Click on "tecnologia" in the header, verify redirection to `/category/tecnologia`, ensure the list is filtered, and the search input is NOT visible.

### Implementation for User Story 1

- [x] T004 [P] [US1] Create `BadgeResultsPage` component and styles in `src/features/BadgeFilter/`
- [x] T005 [US1] Implement unit tests for `BadgeResultsPage` in `src/features/BadgeFilter/BadgeResultsPage.test.tsx`
- [x] T006 [US1] Add `/category/:badge` route to `src/App.tsx` rendering `BadgeResultsPage`
- [x] T007 [US1] Update `src/App.tsx` with conditional rendering logic to hide `SearchBar` on `/category/*` routes
- [x] T008 [US1] Update `src/components/Header/Header.tsx` (and navigation links) to point to the new category-based URLs

**Checkpoint**: User Story 1 is fully functional and delivers the core feature value.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final validation

- [x] T009 [P] Documentation updates in `README.md` and feature `research.md`
- [x] T010 Run `quickstart.md` validation steps
- [x] T011 Final `npm run test` and `npm run build` check

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first.
- **Foundational (Phase 2)**: Depends on Phase 1. Blocks Phase 3.
- **User Story 1 (Phase 3)**: Depends on Phase 2 completion.
- **Polish (Phase 4)**: Final step after functional completion.

### Parallel Opportunities

- T003 can start in parallel with T002.
- T004 and T005 can be started once Phase 2 is complete.
- Documentation (T009) can be updated alongside implementation.

---

## Implementation Strategy

### MVP First (User Story 1)
The primary focus is getting the routing and filtering working. Once `/category/:badge` correctly displays news filtered by the sanitized badge string, the MVP is complete.
