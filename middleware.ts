import createMiddleware from 'next-intl/middleware';
import { routing } from './app/i18n/routing';

export default createMiddleware({
    // A list of all locales that are supported
    locales: routing.locales,

    // The default locale to be used when visiting
    // a non-localized route (e.g. `/about`)
    defaultLocale: routing.defaultLocale,

    // Use pathname patterns to match with URLs
    // and detect the locale to be used
    localePrefix: 'as-needed',
});

export const config = {
    // Match all pathnames except for
    // - ... if they start with `/api`, `/_next` or `/_vercel`
    // - ... the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
