'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Locale, defaultLocale } from './settings';
import { pathnames } from './routing';

// Helper function to create a direct mapping between locales
function createReverseMap() {
    // Create a mapping from each locale's full path to the equivalent paths in other locales
    const reverseMap = new Map<string, Record<string, string>>();

    // Process each path pattern in the pathnames object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(pathnames).forEach(([_pattern, translations]) => {
        // For each locale, create entries to map to other locales
        Object.entries(translations).forEach(([fromLocale, fromPath]) => {
            // Create the full path with locale
            const fromFullPath =
                fromPath === '/'
                    ? `/${fromLocale}`
                    : `/${fromLocale}${fromPath}`;

            // Create mappings to all other locales
            Object.entries(translations).forEach(([toLocale, toPath]) => {
                const toFullPath =
                    toPath === '/' ? `/${toLocale}` : `/${toLocale}${toPath}`;

                // Store in map: fromFullPath -> {locale: toFullPath}
                if (!reverseMap.has(fromFullPath)) {
                    reverseMap.set(fromFullPath, {});
                }
                reverseMap.get(fromFullPath)![toLocale] = toFullPath;
            });
        });
    });

    return reverseMap;
}

// Create the reverse map once on initialization
const reversePathMap = createReverseMap();

// Helper for dynamic route parameters
function extractDynamicParams(
    pattern: string,
    path: string
): Record<string, string> | null {
    const patternParts = pattern.split('/');
    const pathParts = path.split('/');
    const params: Record<string, string> = {};

    if (patternParts.length !== pathParts.length) return null;

    for (let i = 0; i < patternParts.length; i++) {
        const patternPart = patternParts[i];

        if (patternPart.startsWith('[') && patternPart.endsWith(']')) {
            const paramName = patternPart.slice(1, -1);
            params[paramName] = pathParts[i];
        } else if (patternPart !== pathParts[i]) {
            return null; // Not a match
        }
    }

    return params;
}

// Language switcher hook
export function useLanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const switchLanguage = (locale: Locale) => {
        // Parse the current URL to get locale and path
        let currentLocale = defaultLocale;
        let pathWithoutLocale = pathname;

        // Check if the URL starts with a locale
        const localeMatch = pathname.match(/^\/([a-z]{2})($|\/.*$)/);
        if (localeMatch) {
            const urlLocale = localeMatch[1];
            // Verify it's one of our supported locales
            if (['vi', 'ja'].includes(urlLocale)) {
                currentLocale = urlLocale as Locale;
                pathWithoutLocale = localeMatch[2] || '/';
            }
        }

        // Try to find the direct mapping in our reverse map
        const currentFullPath = `/${currentLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

        // First approach: direct lookup in reverse map
        if (
            reversePathMap.has(currentFullPath) &&
            reversePathMap.get(currentFullPath)?.[locale]
        ) {
            const targetPath = reversePathMap.get(currentFullPath)![locale];

            // Preserve query parameters and hash
            const query = searchParams?.toString() || '';
            const queryString = query ? `?${query}` : '';
            const hash =
                typeof window !== 'undefined' ? window.location.hash : '';

            // Navigate
            router.push(`${targetPath}${queryString}${hash}`);
            return;
        }

        // Second approach: check if this is a dynamic route
        let foundDynamic = false;
        for (const [pattern, translations] of Object.entries(pathnames)) {
            // Skip static routes
            if (!pattern.includes('[')) continue;

            // Try to match the pattern against the current path
            const currentPathPattern =
                currentLocale === defaultLocale
                    ? pathWithoutLocale
                    : `/${pathWithoutLocale.replace(/^\//, '')}`;

            const params = extractDynamicParams(pattern, currentPathPattern);
            if (params) {
                // Found a match, construct the target URL
                let targetPath = translations[locale];

                // Replace parameters in the target path
                Object.entries(params).forEach(([key, value]) => {
                    targetPath = targetPath.replace(`[${key}]`, value);
                });

                const finalPath = `/${locale}${targetPath === '/' ? '' : targetPath}`;

                // Preserve query parameters and hash
                const query = searchParams?.toString() || '';
                const queryString = query ? `?${query}` : '';
                const hash =
                    typeof window !== 'undefined' ? window.location.hash : '';

                // Navigate
                router.push(`${finalPath}${queryString}${hash}`);
                foundDynamic = true;
                break;
            }
        }

        // If no match found, fallback to the home page
        if (!foundDynamic) {
            router.push(`/${locale}`);
        }
    };

    return { switchLanguage };
}
