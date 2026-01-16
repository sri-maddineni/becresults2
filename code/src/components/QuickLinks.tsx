import { QUICK_LINKS } from "@/data/constants";

export default function QuickLinks() {
    return (
        <div className="text-center py-4 px-4 bg-gray-50">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {QUICK_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm md:text-base bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

