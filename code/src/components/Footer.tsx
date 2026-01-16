export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 mt-12">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm md:text-base mb-2">
                    © {new Date().getFullYear()} BEC RESULTS - iTKonnects
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                    Bapatla Engineering College Results Portal
                </p>
                <div className="text-xs text-gray-500 mt-4 space-y-1">
                    <p>
                        For any issues or queries, please contact us:
                    </p>
                    <p>
                        <a
                            href="mailto:itkonnects@gmail.com"
                            className="text-gray-300 hover:text-white underline mr-4"
                        >
                            itkonnects@gmail.com
                        </a>
                        <a
                            href="tel:+916304214514"
                            className="text-gray-300 hover:text-white underline"
                        >
                            +91 6304214514
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

