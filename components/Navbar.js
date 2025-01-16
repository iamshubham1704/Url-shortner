import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="h-16 bg-purple-700 flex justify-between px-6 items-center text-white shadow-md">
            {/* Logo Section */}
            <div className="logo font-bold text-xl md:text-2xl">URL-Shorter</div>

            {/* Links Section */}
            <ul className="flex gap-6 items-center text-lg font-medium">
                <Link href="/">
                    <li className="hover:text-purple-300 transition-colors">Home</li>
                </Link>
                <Link href="/about">
                    <li className="hover:text-purple-300 transition-colors">About</li>
                </Link>
                <Link href="/generate">
                    <li className="hover:text-purple-300 transition-colors">Shorten</li>
                </Link>

                {/* Buttons Section */}
                <li className="flex gap-4">
                    <Link href="/generate">
                        <button className="bg-purple-600 rounded-lg shadow-lg px-6 py-2 text-lg font-semibold hover:bg-purple-500 transition-colors">
                            Try Now
                        </button>
                    </Link>
                    <Link href="/github">
                        <button className="bg-gray-800 rounded-lg shadow-lg px-6 py-2 text-lg font-semibold hover:bg-gray-700 transition-colors">
                            Github
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
