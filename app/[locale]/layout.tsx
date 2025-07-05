import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Bai_Jamjuree } from 'next/font/google';
import { routing } from '../i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import '../globals.css';

const baiJamjuree = Bai_Jamjuree({
    subsets: ['latin', 'thai', 'vietnamese', 'latin-ext'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-bai-jamjuree',
});

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export const metadata = {
    title: {
        vi: 'Trang chủ - Dệt may MINH MINH TÂM',
        ja: 'ホームページ - ミン ミン タム紡織会社',
    },
    description: {
        vi: 'Trang chủ Tổng Công ty CP Dệt May MINH MINH TÂM (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        ja: 'ミン ミン タム紡織株式会社（ビンタン市、ベトナム）- Vinatexのメンバー、糸および輸出衣料品の製造・販売を専門としています。',
    },
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate the locale
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang={locale}>
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
                className={`${baiJamjuree.variable} homepage section-grey ${locale} bg-[#F5F5F5]`}
            >
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
