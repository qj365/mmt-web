import { API_ENDPOINTS } from './constants';
import { stringify } from 'qs-esm';

function generateApiUrl(
    resource: (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS]
) {
    return `${process.env.NEXT_PUBLIC_API_URL}${resource}`;
}

export async function getNewsItems(limit: number, page: number) {
    const query = stringify({
        limit,
        page,
        select: {
            id: true,
            title: true,
            slug: true,
            publishedAt: true,
            featuredImage: true,
        },
    });

    const url = generateApiUrl(API_ENDPOINTS.POSTS);
    const response = await fetch(`${url}?${query}`);
    return response.json();
}
