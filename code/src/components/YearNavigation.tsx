"use client";

export default function YearNavigation() {
    const years = ["Y20", "Y21", "Y22", "Y23", "Y24", "HONORS"];

    const scrollToSection = (year: string) => {
        const element = document.getElementById(year.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="sticky top-16 z-40 bg-gray-100 shadow-md py-3 px-4 border-b border-gray-300">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => scrollToSection(year)}
                        className="px-4 py-2 text-sm md:text-base bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
}

