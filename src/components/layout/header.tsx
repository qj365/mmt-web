'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            className={`header fixed top-0 left-0 right-0 z-50 w-full transition-all ${
                isScrolled ? 'scrolled bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container">
                <div className="header-inner flex items-center justify-between h-[80px]">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/" className="block">
                            <Image
                                src="https://picsum.photos/150/60"
                                alt="Hoa Tho Logo"
                                width={150}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </Link>
                    </div>

                    {/* Main Menu - Desktop */}
                    <nav className="main-menu hidden lg:block">
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    href="/"
                                    className={`text-lg font-medium ${
                                        isScrolled
                                            ? 'text-gray-800'
                                            : 'text-white'
                                    } hover:text-red-600 transition-colors`}
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gioi-thieu"
                                    className={`text-lg font-medium ${
                                        isScrolled
                                            ? 'text-gray-800'
                                            : 'text-white'
                                    } hover:text-red-600 transition-colors`}
                                >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/san-pham"
                                    className={`text-lg font-medium ${
                                        isScrolled
                                            ? 'text-gray-800'
                                            : 'text-white'
                                    } hover:text-red-600 transition-colors`}
                                >
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tin-tuc"
                                    className={`text-lg font-medium ${
                                        isScrolled
                                            ? 'text-gray-800'
                                            : 'text-white'
                                    } hover:text-red-600 transition-colors`}
                                >
                                    Tin tức
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/lien-he"
                                    className={`text-lg font-medium ${
                                        isScrolled
                                            ? 'text-gray-800'
                                            : 'text-white'
                                    } hover:text-red-600 transition-colors`}
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Language Switch */}
                    <div className="language-switch hidden md:flex items-center space-x-4">
                        <Link
                            href="#"
                            className="text-white hover:text-red-600 transition-colors"
                        >
                            <span
                                className={`font-medium ${
                                    isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                            >
                                VN
                            </span>
                        </Link>
                        <span
                            className={`text-sm ${
                                isScrolled ? 'text-gray-400' : 'text-gray-300'
                            }`}
                        >
                            |
                        </span>
                        <Link
                            href="#"
                            className={`${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            } hover:text-red-600 transition-colors`}
                        >
                            <span>EN</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-toggle lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className={`text-lg p-2 ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="container py-4">
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="/"
                                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/gioi-thieu"
                                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Giới thiệu
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/san-pham"
                                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sản phẩm
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tin-tuc"
                                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Tin tức
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/lien-he"
                                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Liên hệ
                            </Link>
                        </li>
                        <li className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-800 font-medium"
                            >
                                VN
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link href="#" className="text-gray-600">
                                EN
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
