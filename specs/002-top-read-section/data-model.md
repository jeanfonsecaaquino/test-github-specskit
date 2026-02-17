# Data Model: Top Read News Section (002)

## Entity: News (Modified)

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string | Unique identifier | Required |
| slug | string | URL-friendly ID | Required |
| title | string | Headline | Required |
| readCount | number | Total views | Required, default 0 |
| ... | ... | (Existing fields) | ... |

## Relationships
- None (Self-contained field on News entity)

## Sorting Logic
`getTopReadNews()` will sort the full news list by `readCount` in descending order and slice the first 5 results.
