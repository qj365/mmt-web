import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n/settings';
import { pathnames } from './app/i18n/routing';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
    // Add pathnames configuration to ensure proper redirects
    pathnames,
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
