# Data Model: News Detail

## Entities

### News (Updated)
Extending the existing News entity to include detailed content.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string | Unique identifier | Required, Non-empty |
| slug | string | URL-friendly identifier | Required, unique, kebap-case |
| title | string | Headline | Required, max 200 chars |
| summary | string | Home page excerpt | Required |
| fullContent | string[] | Array of paragraphs | Required, min 1 paragraph |
| imageUrl | string | Main article image | Optional (placeholder fallback) |
| category | string | Topic tag | Required |
| publishDate | string | ISO Date | Required |

## Relationships
- A `News` item is a standalone entity identified by its `id` and navigated via its `slug`.
