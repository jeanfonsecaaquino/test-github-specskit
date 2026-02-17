# Feature Specification: Badge Filter

**Feature Branch**: `004-badge-filter`  
**Created**: 2026-02-16  
**Status**: Draft  
**Input**: User description: "Vamos criar agora uma página com o filtro por badge. Existem links no header que irão apontar para a pagina com o filtro de badge designado. A listagem será similar a pagina de filtro, so que sem o search input. As Badges do mock deverão ser ajustadas para não ter upcase ou caracteres especiais, pois a badge sera passada no filtro de busca."

## User Scenarios & Testing

### User Story 1 - Categorized Content (Priority: P1)

As a visitor, I want to click on a category (badge) in the header so that I can see all news articles related to that specific topic.

**Why this priority**: Essential for content navigation and discovery by interest.

**Independent Test**: Click on "Tecnologia" (or a sanitized version like "tecnologia") in the header and verify that I am taken to a page showing only news with that badge.

**Acceptance Scenarios**:

1. **Given** I am on any page, **When** I click a badge link in the header, **Then** I should be redirected to a dedicated category page (e.g., `/category/{badge}`).
2. **Given** I am on a category page, **When** news items exist for that badge, **Then** I should see a grid of news cards.
3. **Given** I am on a category page, **When** no news items match the badge, **Then** I should see a friendly empty state message.
4. **Given** I am on a category page, **When** I scroll the list, **Then** I should NOT see a search input field in this specific view.

### User Story 2 - Sanitized Data Consistency (Priority: P2)

As a developer, I want all badge identifiers to be standardized so that filtering works reliably without matching issues due to casing or special characters.

**Why this priority**: Prevents common bugs related to data normalization.

**Acceptance Scenarios**:

1. **Given** any news item in the data source, **When** I check its badge field, **Then** it must be all lowercase and contain no special characters (e.g., "tecnologia" instead of "Tecnologia").

## Edge Cases

- **What happens if a user type a non-existent badge URL manually?** The system should show an empty list or a 404/Empty State.
- **How does the system handle shared badges between multiple news?** It should show all corresponding news correctly.

## Requirements

### Functional Requirements

- **FR-001**: System MUST provide a dedicated route for badge-based filtering (e.g., `/category/:badge`).
- **FR-002**: System MUST display filtered results using the standard `NewsCard` component.
- **FR-003**: System MUST NOT display the `SearchBar` component specifically on category result pages (as per user request "sem o search input").
- **FR-004**: System MUST update the Header with links that point to these new category routes.
- **FR-005**: All news `badge` data in the mock source MUST be sanitized to lowercase and avoid special characters.
- **FR-006**: The system MUST implement a service method to fetch news by badge (exact match).

### Key Entities

- **News**: Existing entity. The `badge` field will be the primary filter key.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Clicking a header link redirects and displays results in under 500ms.
- **SC-002**: 100% of news entries have sanitized badge strings.
- **SC-003**: The search bar is hidden correctly on all `/category/*` routes.
- **SC-004**: Navigation breadcrumbs or titles correctly show the currently filtered category.
