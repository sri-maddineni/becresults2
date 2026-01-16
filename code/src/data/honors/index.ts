import { HonorDepartment } from "./types";
import { y20AIT } from "./y20ait";
import { y20ACS } from "./y20acs";
import { y21AIT } from "./y21ait";
import { y21ACS } from "./y21acs";

export const honorsData: HonorDepartment[] = [
    { code: "Y20AIT", courses: y20AIT },
    { code: "Y20ACS", courses: y20ACS },
    { code: "Y21AIT", courses: y21AIT },
    { code: "Y21ACS", courses: y21ACS },
];

