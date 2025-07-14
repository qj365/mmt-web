import { Metadata } from 'next';

type LocaleMetadata = {
    title: string;
    description: string;
    keywords?: string;
    images?: string[];
};

/**
 * Generates standardized metadata for a page based on locale
 * @param locale Current locale (vi or ja)
 * @param metadata Object containing localized metadata
 * @returns Metadata object for Next.js
 */
export function generatePageMetadata(
    locale: string,
    metadata: Record<string, LocaleMetadata>
): Metadata {
    // Get metadata for current locale or fall back to vi
    const localeMetadata = metadata[locale] || metadata.vi;

    // Base URL for the website
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const localePath = locale === 'vi' ? '' : `/${locale}`;
    const currentPath =
        typeof window !== 'undefined'
            ? window.location.pathname.replace(`/${locale}`, '')
            : '/';

    // Canonical URL and alternates
    const canonicalUrl = `${baseUrl}${localePath}${currentPath}`;
    const alternateLanguages: Record<string, string> = {};

    if (locale === 'vi') {
        alternateLanguages.ja = `${baseUrl}/ja${currentPath}`;
    } else {
        alternateLanguages.vi = `${baseUrl}${currentPath}`;
    }

    // Generate image objects for Open Graph
    const ogImages = localeMetadata.images?.map(imagePath => {
        return {
            url: imagePath.startsWith('http')
                ? imagePath
                : `${baseUrl}${imagePath}`,
            width: 1200,
            height: 630,
            alt: localeMetadata.title,
        };
    }) || [
        {
            url: `${baseUrl}/images/home/banner-1.png`,
            width: 1200,
            height: 630,
            alt: localeMetadata.title,
        },
    ];

    return {
        title: localeMetadata.title,
        description: localeMetadata.description,
        keywords: localeMetadata.keywords,
        openGraph: {
            type: 'website',
            locale: locale === 'vi' ? 'vi_VN' : 'ja_JP',
            url: canonicalUrl,
            siteName:
                locale === 'vi' ? 'Dệt may Minh Minh Tâm' : 'ミンミンタム織物',
            title: localeMetadata.title,
            description: localeMetadata.description,
            images: ogImages,
        },
        twitter: {
            card: 'summary_large_image',
            title: localeMetadata.title,
            description: localeMetadata.description,
            images: localeMetadata.images?.map(img =>
                img.startsWith('http') ? img : `${baseUrl}${img}`
            ) || [`${baseUrl}/images/home/banner-1.png`],
        },
        alternates: {
            canonical: canonicalUrl,
            languages: alternateLanguages,
        },
    };
}
