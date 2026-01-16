import { HonorDepartment } from "@/data/honors/types";
import { honorsData } from "@/data/honors";

export default function HonorsSection() {
    return (
        <section id="honors" className="py-8 px-4 scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                HONORS
            </h2>
            <hr className="mb-6 border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {honorsData.map((dept) => (
                    <HonorCard key={dept.code} department={dept} />
                ))}
            </div>
        </section>
    );
}

interface HonorCardProps {
    department: HonorDepartment;
}

function HonorCard({ department }: HonorCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-center mb-4 bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg">
                {department.code}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {department.courses.map((course) => (
                    <HonorButton key={course.name} course={course} />
                ))}
            </div>
        </div>
    );
}

function HonorButton({ course }: { course: { name: string; url: string; available: boolean } }) {
    if (!course.available) {
        return (
            <button
                disabled
                className="px-3 py-2 text-sm md:text-base bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed font-medium"
            >
                {course.name}
            </button>
        );
    }

    return (
        <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm md:text-base bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-center"
        >
            {course.name}
        </a>
    );
}

