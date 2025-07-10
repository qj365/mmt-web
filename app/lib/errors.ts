/**
 * Custom API error class
 */
export class ApiError extends Error {
    status: number;

    constructor(message: string, status: number = 500) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

/**
 * Handles API errors and returns appropriate response
 * @param error Error object
 * @returns Response with error details
 */
export function handleApiError(error: unknown): Response {
    console.error('API error:', error);

    if (error instanceof ApiError) {
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            {
                status: error.status,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }

    return new Response(
        JSON.stringify({
            error: 'Internal server error',
        }),
        {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        }
    );
}

/**
 * Checks if fetch response is OK and throws appropriate error if not
 * @param response Fetch response
 * @param errorMessage Custom error message
 */
export function checkResponseStatus(
    response: Response,
    errorMessage?: string
): void {
    if (!response.ok) {
        throw new ApiError(
            errorMessage || `API request failed with status ${response.status}`,
            response.status
        );
    }
}

/**
 * Error page data for use in error boundaries
 */
export interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

/**
 * Creates formatted error message for client display
 * @param error Error object
 * @returns Safe error message for display
 */
export function getClientErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        // Return generic message for internal errors
        if (
            error.message.includes('internal') ||
            error.message.includes('server')
        ) {
            return 'Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.';
        }

        return error.message;
    }

    return 'Đã xảy ra lỗi không xác định. Vui lòng thử lại.';
}
