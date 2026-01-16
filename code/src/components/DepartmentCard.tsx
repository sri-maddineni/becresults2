import { DepartmentData } from "@/data/types";

interface DepartmentCardProps {
    department: DepartmentData;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-center mb-4 bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg">
                {department.name}
            </h3>
            <div className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {department.results.slice(0, 4).map((result) => (
                        <SemesterButton key={result.semester} result={result} />
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {department.results.slice(4, 8).map((result) => (
                        <SemesterButton key={result.semester} result={result} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SemesterButton({ result }: { result: { semester: string; url: string; available: boolean } }) {
    if (!result.available) {
        return (
            <button
                disabled
                className="px-3 py-2 text-sm md:text-base bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed font-medium"
            >
                {result.semester}
            </button>
        );
    }

    return (
        <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm md:text-base bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-center"
        >
            {result.semester}
        </a>
    );
}

