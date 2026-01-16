import { SemesterResult } from "./shared";

export type { SemesterResult };

export interface DepartmentData {
    name: string;
    results: SemesterResult[];
}

export interface YearData {
    year: string;
    departments: DepartmentData[];
}

