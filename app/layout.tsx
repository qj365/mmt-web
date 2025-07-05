import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
    subsets: ['latin', 'thai', 'vietnamese', 'latin-ext'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-bai-jamjuree',
});

export const metadata: Metadata = {
    title: 'Trang chủ - Dệt may MINH MINH TÂM',
    description:
        'Trang chủ Tổng Công ty CP Dệt May MINH MINH TÂM (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
    openGraph: {
        title: 'Trang chủ',
        description:
            'Trang chủ Tổng Công ty CP Dệt May MINH MINH TÂM (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        siteName: 'Dệt may MINH MINH TÂM',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" className={`${baiJamjuree.variable}`}>
            <body>{children}</body>
        </html>
    );
}
