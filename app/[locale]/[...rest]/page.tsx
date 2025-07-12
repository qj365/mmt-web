import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import { locales, Locale } from '@/app/i18n/settings';
import { pathnames } from '@/app/i18n/routing';

export default function CatchAllPage({
    params,
}: {
    params: { locale: string; rest: string[] };
}) {
    const { locale, rest } = params;

    // If it's not a valid locale, return 404
    if (!locales.includes(locale as Locale)) {
        return notFound();
    }

    // For Japanese locale, we need to map the URL path to the corresponding Vietnamese path
    // For example, /ja/about should be handled by the /vi/gioi-thieu page component
    if (locale === 'ja') {
        // Find the original Vietnamese path that corresponds to this Japanese path
        const jaPath = '/' + rest.join('/');

        // Look through pathnames to find a match
        for (const localeMap of Object.values(pathnames)) {
            if (localeMap.ja === jaPath) {
                // We found a match! Redirect to the Vietnamese path while preserving the locale
                // This allows us to reuse the Vietnamese page components
                const restPath = localeMap.vi.substring(1); // Remove the leading slash
                return redirect(`/${locale}/${restPath}`);
            }
        }
    }

    // If no mapping was found, return 404
    return notFound();
}
