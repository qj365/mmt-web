export const locales = ['vi', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'vi';

// Define labels for language switcher display
export const localeLabels: Record<Locale, string> = {
    vi: 'VI',
    ja: 'JP',
};
