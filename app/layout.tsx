import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
    subsets: ['latin', 'thai', 'vietnamese', 'latin-ext'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-bai-jamjuree',
});

export const metadata: Metadata = {
    title: 'Trang chủ - Dệt may Hoà Thọ',
    description:
        'Trang chủ Tổng Công ty CP Dệt May Hòa Thọ (TP Đà Nẵng, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
    openGraph: {
        title: 'Trang chủ',
        description:
            'Trang chủ Tổng Công ty CP Dệt May Hòa Thọ (TP Đà Nẵng, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        siteName: 'Dệt may Hoà Thọ',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="canhcam">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com/"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                />
            </head>
            <body
                className={`${baiJamjuree.variable} canhcam homepage section-grey vi-vn`}
            >
                {children}
            </body>
        </html>
    );
}
