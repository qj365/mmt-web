'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Top footer with contact info */}
            <div className="footer-top py-12 border-b border-gray-700">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo and address column */}
                        <div className="footer-col">
                            <div className="footer-logo mb-6">
                                <Link href="/">
                                    <Image
                                        src="https://picsum.photos/200/80"
                                        alt="Hoa Tho Logo"
                                        width={200}
                                        height={80}
                                        className="mb-4"
                                    />
                                </Link>
                            </div>
                            <div className="address">
                                <h3 className="text-xl font-semibold mb-4">
                                    Công ty CP Dệt May Hòa Thọ
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="mr-3">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>
                                            36 Ông Ích Đường, P. Hòa Thọ Đông,
                                            Q. Cẩm Lệ, TP. Đà Nẵng
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-3">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>+84 236 3846 290</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-3">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>info@hoatho.com.vn</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Links column 1 */}
                        <div className="footer-col">
                            <h3 className="text-xl font-semibold mb-4">
                                Nhà máy - Thương hiệu
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/nha-may-thuong-hieu/nha-may"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Nhà máy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/nha-may-thuong-hieu/thuong-hieu-truc-thuoc"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Thương hiệu trực thuộc
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Links column 2 */}
                        <div className="footer-col">
                            <h3 className="text-xl font-semibold mb-4">
                                Giới thiệu
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/gioi-thieu/tong-quan"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Tổng quan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/gioi-thieu/tam-nhin-su-menh"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Tầm nhìn - Sứ mệnh
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/gioi-thieu/gia-tri-cot-loi"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Giá trị cốt lõi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/gioi-thieu/so-do-to-chuc"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Sơ đồ tổ chức
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social media column */}
                        <div className="footer-col">
                            <h3 className="text-xl font-semibold mb-4">
                                Kết nối với chúng tôi
                            </h3>
                            <div className="social-links flex space-x-4">
                                <Link
                                    href="https://www.facebook.com/"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.youtube.com/"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-700 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom footer with copyright */}
            <div className="footer-bottom py-6">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="copyright mb-4 md:mb-0">
                            © {new Date().getFullYear()} Công ty Cổ phần Dệt may
                            Hòa Thọ. All rights reserved.
                        </div>
                        <div className="footer-links">
                            <ul className="flex space-x-6">
                                <li>
                                    <Link
                                        href="/chinh-sach-bao-mat"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Chính sách bảo mật
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dieu-khoan-su-dung"
                                        className="hover:text-red-400 transition-colors"
                                    >
                                        Điều khoản sử dụng
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
