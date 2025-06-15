import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Công ty CP Dệt May Hòa Thọ',
    description: 'Hoatho Textile - Garment Joint Stock Corporation',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" className={inter.variable}>
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow pt-[80px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
