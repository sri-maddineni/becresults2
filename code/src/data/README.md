# Data Structure Guide

This directory contains all the results data organized by year and department.

## Structure

```
data/
├── shared.ts          # Shared types (SemesterResult)
├── types.ts           # Type definitions
├── constants.ts       # Quick links and external links
├── y20/               # Year 2020 data
│   ├── index.ts       # Aggregates all Y20 departments
│   ├── it/
│   ├── cse/
│   ├── cb/
│   └── ...
├── y21/               # Year 2021 data
├── y22/               # Year 2022 data
├── y23/               # Year 2023 data
└── y24/               # Year 2024 data
```

## Adding Data for a Department

1. Create a folder for the department (e.g., `y21/cse/`)
2. Create an `index.ts` file with the following structure:

```typescript
import { SemesterResult } from "../../shared";

export const y21CSE: SemesterResult[] = [
  { semester: "1.1", url: "http://...", available: true },
  { semester: "1.2", url: "http://...", available: true },
  { semester: "2.1", url: "http://...", available: true },
  { semester: "2.2", url: "http://...", available: true },
  { semester: "3.1", url: "http://...", available: true },
  { semester: "3.2", url: "http://...", available: true },
  { semester: "4.1", url: "http://...", available: true },
  { semester: "4.2", url: "", available: false }, // If not available
];
```

3. Import and add to the year's `index.ts`:

```typescript
import { y21CSE } from "./cse";

export const y21Data: YearData = {
  year: "Y21",
  departments: [
    { name: "CSE", results: y21CSE },
    // ... other departments
  ],
};
```

## SemesterResult Interface

```typescript
interface SemesterResult {
  semester: string;    // e.g., "1.1", "1.2", "2.1", etc.
  url: string;          // Full URL to results page
  available: boolean;   // Whether results are available
}
```

## Notes

- If a result is not available, set `url: ""` and `available: false`
- All URLs should be complete (include `http://` or `https://`)
- Semester format: "1.1", "1.2", "2.1", "2.2", "3.1", "3.2", "4.1", "4.2"

