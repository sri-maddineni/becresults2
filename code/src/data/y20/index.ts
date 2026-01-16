import { YearData } from "../types";
import { y20IT } from "./it";
import { y20CSE } from "./cse";
import { y20CB } from "./cb";
import { y20DS } from "./ds";
import { y20ECE } from "./ece";
import { y20EEE } from "./eee";
import { y20EIE } from "./eie";
import { y20Civil } from "./civil";
import { y20Mech } from "./mech";

export const y20Data: YearData = {
    year: "Y20",
    departments: [
        { name: "IT", results: y20IT },
        { name: "CSE", results: y20CSE },
        { name: "CB", results: y20CB },
        { name: "DS", results: y20DS },
        { name: "ECE", results: y20ECE },
        { name: "EEE", results: y20EEE },
        { name: "EIE", results: y20EIE },
        { name: "CIVIL", results: y20Civil },
        { name: "MECH", results: y20Mech },
    ],
};

