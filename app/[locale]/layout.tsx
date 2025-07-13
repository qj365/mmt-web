import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Bai_Jamjuree } from 'next/font/google';
import { routing } from '../i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import '../globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from 'next';

const baiJamjuree = Bai_Jamjuree({
    subsets: ['latin', 'thai', 'vietnamese', 'latin-ext'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-bai-jamjuree',
});

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Get the locale from params
    const { locale } = await params;

    // Define metadata for different languages
    const metadata: Record<string, Metadata> = {
        vi: {
            title: 'Dệt may Minh Minh Tâm',
            description:
                'Dệt may Minh Minh Tâm - Trang web chính thức của công ty',
            keywords: 'dệt may, hàng may mặc, xuất khẩu, Minh Minh Tâm',
        },
        ja: {
            title: 'ミンミンタム織物',
            description: 'ミンミンタム織物 - 公式ウェブサイト',
            keywords: '織物, アパレル, 輸出, ミンミンタム',
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

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
            <body
                className={`${baiJamjuree.variable} homepage section-grey ${locale} bg-[#F5F5F5]`}
            >
                <NextTopLoader />
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
