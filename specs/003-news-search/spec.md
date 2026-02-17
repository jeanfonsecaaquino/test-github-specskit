# Feature Specification: Approximate News Search

**Feature Branch**: `003-news-search`  
**Created**: 2026-02-16  
**Status**: Draft  
**Input**: User description: "vamos fazer uma nova feature de busca aproximadas pelo titulo das news. a busca deverar ser aproximada pelo texto informado. a sessao ficara em baixo do header. apox o filtro ser realizado deverar ir a uma pagina com ops dados filtrados."

## User Scenarios & Testing

### User Story 1 - Find News by Title (Priority: P1)

As a visitor, I want to search for news articles by entering keywords so that I can quickly find relevant content without browsing the entire list.

**Why this priority**: Core utility for content discovery. Increases user engagement by providing a direct path to interesting topics.

**Independent Test**: Enter a partial title in the search bar (e.g., "Urbana"), press Enter, and verify that I am redirected to a search page showing articles containing that word.

**Acceptance Scenarios**:

1. **Given** I am on any page of the portal, **When** I look below the header, **Then** I should see a search input field.
2. **Given** I have entered a term in the search bar, **When** I click the search button or press "Enter", **Then** I should be redirected to a dedicated search results page (`/search`).
3. **Given** I am on the search results page, **When** news items match my query, **Then** I should see a list of results displayed clearly.
4. **Given** no news items match my query, **When** I am on the search results page, **Then** I should see a friendly "Nenhum resultado encontrado" message.

### Edge Cases

- **What happens when the search query is empty?** The system should ideally do nothing or show all news.
- **How does the search handle special characters or casing?** The search should be case-insensitive and resilient to extra whitespace.
- **How does the search behave with very long queries?** It should truncate or handle them without breaking the UI.

## Requirements

### Functional Requirements

- **FR-001**: System MUST display a search bar component globally positioned below the Header.
- **FR-002**: System MUST implement a case-insensitive substring matching algorithm for news titles (checking if the title "contains" the query string).
- **FR-003**: System MUST provide a dedicated Search Results page to display filtered news.
- **FR-004**: System MUST navigate to the results page upon submission, passing the query via URL (e.g., `?q=searchterm`).
- **FR-005**: System MUST display results using the existing `NewsCard` or similar visual representation.
- **FR-006**: The search MUST be triggered only after user submission (pressing "Enter" or clicking the search button).

### Key Entities

- **News**: Existing entity. The search will query the `title` field.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Search results are fetched and displayed in under 500ms on the results page.
- **SC-002**: 100% of the titles containing the exact search string are returned in the results.
- **SC-003**: The search bar is visible on mobile devices and maintains accessibility (correct input labels).
- **SC-004**: Users reach the news detail page from a search result in a single click.
