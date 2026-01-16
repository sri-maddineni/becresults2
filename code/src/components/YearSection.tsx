import { YearData } from "@/data/types";
import DepartmentCard from "./DepartmentCard";

interface YearSectionProps {
    yearData: YearData;
}

export default function YearSection({ yearData }: YearSectionProps) {
    return (
        <section id={yearData.year.toLowerCase()} className="py-8 px-4 scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                {yearData.year}
            </h2>
            <hr className="mb-6 border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {yearData.departments.map((dept) => (
                    <DepartmentCard key={dept.name} department={dept} />
                ))}
            </div>
        </section>
    );
}

