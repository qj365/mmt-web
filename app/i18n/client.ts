'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale } from './settings';

// Language switcher hook
export function useLanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (locale: Locale) => {
        // Get the current path without the locale
        const newPathname = pathname.startsWith(`/${locale}/`)
            ? pathname
            : pathname.replace(/^\/[^/]+/, '');

        // Navigate to the new locale path
        router.push(`/${locale}${newPathname}`);
    };

    return { switchLanguage };
}
