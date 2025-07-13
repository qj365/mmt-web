'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Locale } from './settings';
import { routing } from './routing';
import { pathnames } from './routing';

// Language switcher hook
export function useLanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const switchLanguage = (locale: Locale) => {
        // Get current locale and path
        let currentLocale: Locale | null = null;
        let currentPath = pathname;

        // Remove current locale prefix if it exists
        for (const l of routing.locales) {
            if (pathname.startsWith(`/${l}/`)) {
                currentLocale = l as Locale;
                currentPath = pathname.substring(l.length + 1);
                break;
            }
            if (pathname === `/${l}`) {
                currentLocale = l as Locale;
                currentPath = '/';
                break;
            }
        }

        // If no locale was detected in the path, we're likely at the root
        if (!currentLocale) {
            currentPath = pathname;
        }

        // Find the matching path pattern in pathnames
        let targetPath = `/${locale}`;

        // Try to find a matching pathname entry
        for (const [pattern, translations] of Object.entries(pathnames)) {
            // For dynamic routes with parameters (e.g., [slug])
            if (pattern.includes('[') && pattern.includes(']')) {
                const patternParts = pattern.split('/');
                const currentParts = currentPath.split('/');

                if (patternParts.length === currentParts.length) {
                    let isMatch = true;

                    for (let i = 0; i < patternParts.length; i++) {
                        if (
                            patternParts[i].startsWith('[') &&
                            patternParts[i].endsWith(']')
                        ) {
                            // This is a parameter, skip comparison
                            continue;
                        }

                        if (patternParts[i] !== currentParts[i]) {
                            isMatch = false;
                            break;
                        }
                    }

                    if (isMatch) {
                        // Found a match for a dynamic route
                        // Replace parameters in the target path
                        let translatedPattern = translations[locale];
                        const params: Record<string, string> = {};

                        for (let i = 0; i < patternParts.length; i++) {
                            if (
                                patternParts[i].startsWith('[') &&
                                patternParts[i].endsWith(']')
                            ) {
                                const paramName = patternParts[i].slice(1, -1);
                                params[paramName] = currentParts[i];
                            }
                        }

                        // Replace parameters in translated pattern
                        Object.entries(params).forEach(([key, value]) => {
                            translatedPattern = translatedPattern.replace(
                                `[${key}]`,
                                value
                            );
                        });

                        targetPath = `/${locale}${translatedPattern === '/' ? '' : translatedPattern}`;
                        break;
                    }
                }
            }
            // For static routes
            else if (pattern === currentPath) {
                targetPath = `/${locale}${translations[locale] === '/' ? '' : translations[locale]}`;
                break;
            }
        }

        // Preserve query parameters
        const query = searchParams?.toString() || '';
        const queryString = query ? `?${query}` : '';

        // Preserve hash fragment
        const hash = typeof window !== 'undefined' ? window.location.hash : '';

        // Use router.push for client-side navigation
        router.push(`${targetPath}${queryString}${hash}`);
    };

    return { switchLanguage };
}
