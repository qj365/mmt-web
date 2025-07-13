import { Metadata } from 'next';
import 'material-icons/iconfont/material-icons.css';

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
    ),
    title: {
        default: 'Dệt may Minh Minh Tâm',
        template: '%s | Dệt may Minh Minh Tâm',
    },
    description:
        'Dệt may Minh Minh Tâm - Chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu',
    keywords: [
        'dệt may',
        'minh minh tâm',
        'may mặc',
        'xuất khẩu',
        'Việt Nam',
        'textile',
        'garment',
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    icons: {
        icon: '/favicon.ico',
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        siteName: 'Dệt may Minh Minh Tâm',
        title: 'Dệt may Minh Minh Tâm',
        description:
            'Công ty TNHH May Minh Minh Tâm - Chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu',
        url: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
        images: [
            {
                url: '/images/home/logo.png',
                width: 800,
                height: 600,
                alt: 'Dệt may Minh Minh Tâm Logo',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
