export interface HonorCourse {
    name: string;
    url: string;
    available: boolean;
}

export interface HonorDepartment {
    code: string; // e.g., "Y20AIT", "Y20ACS"
    courses: HonorCourse[];
}

