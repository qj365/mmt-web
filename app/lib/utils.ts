/**
 * Formats a date string to a localized format
 */
export function formatDate(dateString: string, locale: string = 'vi'): string {
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date);
    } catch (error) {
        console.error('Error formatting date:', error);
        return '';
    }
}

export function rewriteImageSrc(html: string, apiUrl: string): string {
    // Only replace src="/api/media/..." with src="https://api.example.com/api/media/..."
    return html.replace(
        /src="(\/api\/media\/[^"]+)"/g,
        (match, p1) => `src="${apiUrl}${p1}"`
    );
}
