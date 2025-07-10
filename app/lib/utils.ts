/**
 * Formats a date string to a localized display format
 * @param dateString Date string in ISO format or any parsable format
 * @param locale Locale to use for formatting (default: 'vi')
 * @returns Formatted date string
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
        return dateString; // Return original string if parsing fails
    }
}
