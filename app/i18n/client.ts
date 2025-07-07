'use client';

import { usePathname } from 'next/navigation';
import { Locale } from './settings';
import { routing } from './routing';

// Language switcher hook
export function useLanguageSwitcher() {
    const pathname = usePathname();

    const switchLanguage = (locale: Locale) => {
        // Find the matching pathnames entry for the current path
        let currentPath = pathname;

        // Remove current locale prefix if it exists
        for (const l of routing.locales) {
            if (pathname.startsWith(`/${l}/`)) {
                currentPath = pathname.substring(l.length + 1);
                break;
            }
            if (pathname === `/${l}`) {
                currentPath = '/';
                break;
            }
        }

        // Determine target path - either the equivalent path in the target language
        // or the homepage of the target language if no matching path is found
        const targetPath = `/${locale}${
            currentPath === '/' ? '' : currentPath
        }`;
        window.location.href = targetPath;
    };

    return { switchLanguage };
}
