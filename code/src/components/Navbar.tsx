"use client";

import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-24">
                    {/* Logo/Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl md:text-2xl font-bold">BEC RESULTS</h1>
                        <p className="text-xs md:text-sm opacity-90">iTKonnects</p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://www.itkonnects.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors"
                        >
                            iTKonnects
                        </a>
                        <a
                            href="https://www.becstudo.itkonnects.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors"
                        >
                            Bec Studo
                        </a>
                        <a
                            href="tel:+916304214514"
                            className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors"
                        >
                            +91 6304214514
                        </a>
                        <a
                            href="mailto:itkonnects@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors"
                        >
                            Email
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <a
                            href="https://www.itkonnects.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            iTKonnects
                        </a>
                        <a
                            href="https://www.becstudo.itkonnects.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Bec Studo
                        </a>
                        <a
                            href="tel:+916304214514"
                            className="block px-4 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            +91 6304214514
                        </a>
                        <a
                            href="mailto:itkonnects@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Email
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

