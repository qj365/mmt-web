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

/**
 * Extract a plain text excerpt from HTML content with a maximum length
 * @param html HTML content to extract from
 * @param maxLength Maximum length of the excerpt
 * @returns Plain text excerpt
 */
export function extractExcerpt(html: string, maxLength: number = 160): string {
    // Remove all HTML tags
    const text = html.replace(/<[^>]*>/g, ' ');

    // Remove multiple spaces
    const cleanText = text.replace(/\s+/g, ' ').trim();

    // Truncate to desired length
    if (cleanText.length <= maxLength) return cleanText;

    // Find the last space before maxLength to avoid cutting words
    const truncated = cleanText.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > 0) {
        return truncated.substring(0, lastSpace) + '...';
    }

    return truncated + '...';
}
