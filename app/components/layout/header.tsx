'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavMenuItem {
    title: string;
    href: string;
    children?: NavMenuItem[];
}

const navItems: NavMenuItem[] = [
    // { title: 'Trang chủ', href: '/' },
    {
        title: 'Giới thiệu',
        href: '/gioi-thieu/tong-quan',
        children: [
            { title: 'Tổng quan', href: '/gioi-thieu/tong-quan' },
            {
                title: 'Lịch sử hình thành',
                href: '/gioi-thieu/lich-su-hinh-thanh',
            },
            { title: 'Cơ cấu tổ chức', href: '/gioi-thieu/co-cau-to-chuc' },
            { title: 'Tầm nhìn sứ mệnh', href: '/gioi-thieu/tam-nhin-su-menh' },
            { title: 'Lời cam kết', href: '/gioi-thieu/loi-cam-ket' },
            { title: 'Thành tích', href: '/gioi-thieu/thanh-tich' },
        ],
    },
    { title: 'Thị trường xuất khẩu', href: '/thi-truong-xuat-khau' },
    {
        title: 'Sản phẩm',
        href: '/san-pham/san-pham-soi',
        children: [
            { title: 'Sản phẩm sợi', href: '/san-pham/san-pham-soi' },
            {
                title: 'Sản phẩm may xuất khẩu',
                href: '/san-pham/san-pham-may-xuat-khau',
            },
            {
                title: 'Thời trang nội địa',
                href: '/san-pham/thoi-trang-noi-dia',
            },
        ],
    },
    {
        title: 'Nhà máy - Thương hiệu',
        href: '/nha-may-thuong-hieu',
    },
    {
        title: 'Tin tức',
        href: '/tin-tuc',
    },
    { title: 'Tuyển dụng', href: '/tuyen-dung' },
    { title: 'Liên hệ', href: '/lien-he' },
];

const NavLink = ({
    item,
    isMobile = false,
}: {
    item: NavMenuItem;
    isMobile?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.children) {
        return (
            <Link
                href={item.href}
                title={item.title}
                className={
                    item.href === '/'
                        ? 'flex items-center justify-center bg-red-600 text-white rounded-full w-8 h-8 p-0 before:content-["\\f015"] before:font-["Font_Awesome_5_Pro"] before:text-base before:font-light before:transition-all'
                        : `inline-block rounded-[50px] px-[15px] py-1 hover:bg-red-600 hover:text-white text-[#111111] ${
                              isMobile ? 'text-[18px]' : 'text-base'
                          } font-medium leading-6 whitespace-nowrap`
                }
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div className="has-child relative w-full whitespace-nowrap">
            <div className="parent flex justify-between">
                <Link
                    href={item.href}
                    title={item.title}
                    className={`inline-block rounded-[50px] px-[15px] py-1 hover:bg-red-600 hover:text-white text-[#111111] ${
                        isMobile ? 'text-[18px]' : 'text-base'
                    } font-medium leading-6 whitespace-nowrap`}
                >
                    {item.title}
                </Link>
                <button
                    type="button"
                    className="flex items-center justify-center w-10 flex-none xl:hidden"
                    onClick={() => isMobile && setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close submenu' : 'Open submenu'}
                >
                    <i
                        className="fal fa-angle-down xl:!hidden text-[1.875rem]"
                        style={{
                            transform: isOpen
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                            transition:
                                'transform 0.4s cubic-bezier(0.45, 0, 0.55, 1)',
                        }}
                    ></i>
                </button>
            </div>
            <div
                className={`child ${
                    isMobile
                        ? 'overflow-hidden transition-all duration-500 ease-in-out'
                        : 'xl:absolute xl:min-w-[230px] xl:bg-white xl:left-[-20px] xl:top-[calc(100%-1px)] xl:shadow-[2px_4px_12px_rgba(0,0,0,0.1)] xl:transition-all xl:duration-300 xl:ease-in-out xl:py-[10px] xl:px-0'
                }`}
                style={
                    isMobile
                        ? {
                              maxHeight: isOpen ? '500px' : '0px',
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                  ? 'translateY(0)'
                                  : 'translateY(-10px)',
                              transition:
                                  'all 0.4s cubic-bezier(0.45, 0, 0.55, 1)',
                          }
                        : {
                              opacity: 0,
                              pointerEvents: 'none',
                              transform: 'translateY(-10px)',
                              transition:
                                  'all 0.4s cubic-bezier(0.45, 0, 0.55, 1)',
                          }
                }
                onMouseEnter={
                    !isMobile
                        ? (e: React.MouseEvent<HTMLDivElement>) => {
                              const target = e.currentTarget;
                              target.style.opacity = '1';
                              target.style.pointerEvents = 'auto';
                              target.style.transform = 'translateY(0)';
                          }
                        : undefined
                }
                onMouseLeave={
                    !isMobile
                        ? (e: React.MouseEvent<HTMLDivElement>) => {
                              const target = e.currentTarget;
                              target.style.opacity = '0';
                              target.style.pointerEvents = 'none';
                              target.style.transform = 'translateY(-10px)';
                          }
                        : undefined
                }
            >
                <ul className="list-none p-0 flex flex-col ul-child xl:items-start items-center">
                    {item.children.map((child, index) => (
                        <li key={index} className="xl:font-normal w-full">
                            <Link
                                href={child.href}
                                title={child.title}
                                className={`block py-2 px-5 hover:bg-red-600 hover:text-white ${
                                    isMobile
                                        ? 'text-[16px] font-normal'
                                        : 'text-base xl:text-inherit'
                                }`}
                            >
                                {child.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // const toggleSearch = () => {
    //     setSearchOpen(!searchOpen);
    // };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 75) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    // Add effect to control body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen || searchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen, searchOpen]);

    return (
        <>
            <header
                className={`bg-white border-b border-[#e5e5e5] fixed w-full left-1/2 -translate-x-1/2 top-0 z-[1000] h-[60px] sm:h-[70px] lg:h-[80px] transition-all duration-300 ${
                    mobileMenuOpen ? 'navMobileOpen' : ''
                } ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px] h-full">
                    <div className="header-wrapper flex items-center relative w-full h-full xl:justify-between justify-between">
                        <div
                            className={`burger xl:hidden relative ${
                                mobileMenuOpen ? 'active' : ''
                            } before:content-[""] before:absolute before:w-10 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
                            onClick={toggleMobileMenu}
                        >
                            <div
                                className={`line-1 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen
                                        ? 'transform -rotate-45 translate-x-[-7px] translate-y-[7px]'
                                        : ''
                                }`}
                            ></div>
                            <div
                                className={`line-2 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            ></div>
                            <div
                                className={`line-3 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen
                                        ? 'transform rotate-45 translate-x-[-7px] translate-y-[-7px]'
                                        : ''
                                }`}
                            ></div>
                        </div>

                        <div className="logo xl:static xl:translate-x-0 xl:mr-8 flex items-center justify-center h-full xl:w-[180px]">
                            <Link
                                href="/"
                                className="flex items-center justify-center h-full w-full relative"
                            >
                                <Image
                                    src="/images/home/logo.png"
                                    alt="Dệt may MINH MINH TÂM"
                                    width={150}
                                    height={80}
                                    className="w-full h-full object-contain py-[5px] relative z-[1] xl:translate-y-5"
                                    priority
                                />
                                <span className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[90px] w-[160px] h-[160px] z-0 transition-all duration-300 after:content-['']"></span>
                            </Link>
                        </div>

                        <div className="nav-desktop xl:block hidden">
                            <nav className="flex items-center">
                                <Link
                                    href="/"
                                    className="bg-secondary rounded-[16px] w-8 h-8 flex items-center justify-center mr-[4px]"
                                >
                                    <Image
                                        src="/images/home/menu-icon.svg"
                                        alt="Menu"
                                        width={18}
                                        height={14}
                                        className="text-white"
                                    />
                                </Link>
                                <ul className="list-none p-0 flex ul-parent xl:flex-row flex-col items-center xl:gap-1 xl:flex-nowrap overflow-visible">
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="group font-medium py-7 first:text-0 flex-shrink-0"
                                        >
                                            <NavLink item={item} />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="tool-items flex items-center">
                            <div className="language">
                                <div className="language-list">
                                    <ul className="list-none p-0 flex items-center">
                                        <li className="active text-sm font-normal leading-[1.8571428571428572em] uppercase">
                                            <Link
                                                href="/"
                                                title="VI"
                                                className="text-[#ea222d]"
                                            >
                                                VI
                                            </Link>
                                        </li>
                                        <li className="text-sm font-normal leading-[1.8571428571428572em] uppercase border-l border-[#e5e5e5] ml-[11px] pl-[11px]">
                                            <Link
                                                href="/en-US/"
                                                title="EN"
                                                className="text-[#999] hover:text-[#338dcc]"
                                            >
                                                EN
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`nav-mobile fixed bg-white w-full xl:hidden h-[calc(100vh-var(--header-height))] overflow-auto pb-[50px] transition-all duration-300 z-10 ${
                        mobileMenuOpen
                            ? 'active opacity-100 pointer-events-auto top-[60px] sm:top-[70px] lg:top-[80px]'
                            : 'opacity-0 pointer-events-none top-[15vh]'
                    }`}
                >
                    <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                        <div className="mobile-nav">
                            <ul className="list-none p-0 flex flex-col items-center max-w-full mx-auto sm:max-w-[320px]">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-[1.375rem] font-medium py-[10px] w-full"
                                    >
                                        <NavLink
                                            key={index}
                                            item={item}
                                            isMobile={true}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Overlay */}
            {searchOpen && (
                <div
                    className={`search-overlay fixed w-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] z-[10000] transition-all duration-300 opacity-100 pointer-events-auto top-[60px] sm:top-[70px] lg:top-[80px] hover:bg-[#f5f5f5] ${
                        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
                    }`}
                >
                    <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                        <div className="wrapper">
                            <div className="searchbox productsearchbox flex items-center w-full py-[10px] xl:py-[20px]">
                                <input
                                    type="text"
                                    className="searchinput flex-1 bg-transparent border-b border-[#111] text-[#111] text-sm font-semibold h-10 px-[15px] py-[9px] mr-[10px] w-full"
                                    placeholder="Tìm kiếm"
                                    title="Tìm kiếm"
                                />
                                <button className="searchbutton flex items-center justify-center flex-none w-10 h-10 border border-[#111] transition-all hover:bg-[#338dcc] hover:border-transparent hover:text-white">
                                    <em className="far fa-search"></em>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay for mobile menu and search */}
            {(mobileMenuOpen || searchOpen) && (
                <div
                    id="overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setSearchOpen(false);
                    }}
                ></div>
            )}

            {/* Add margin to push content below fixed header */}
            <style jsx global>{`
                :root {
                    --header-height: 60px;
                }
                @media (min-width: 576px) {
                    :root {
                        --header-height: 70px;
                    }
                }
                @media (min-width: 1024px) {
                    :root {
                        --header-height: 80px;
                    }
                }
                main {
                    padding-top: var(--header-height);
                }
            `}</style>
        </>
    );
};

export default Header;
