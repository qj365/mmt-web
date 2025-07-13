/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ApiListResponse } from '../types/api';
import { JobItem } from '../types/recruitment';
import { API_ENDPOINTS, REVALIDATION_TIMES } from './constants';
import { stringify } from 'qs-esm';

function generateApiUrl(
    resource: (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS]
) {
    return `${process.env.NEXT_PUBLIC_API_URL}${resource}`;
}

export async function getNewsItems(limit: number, page: number) {
    try {
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

        if (!response.ok) {
            throw new Error(`Failed to fetch news items: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        return {
            docs: [],
            totalDocs: 0,
            limit,
            page,
            totalPages: 0,
            pagingCounter: 0,
            hasPrevPage: false,
            hasNextPage: false,
        };
    }
}

export async function getNewsItemBySlug(slug: string) {
    try {
        const query = stringify({
            where: {
                slug: {
                    equals: slug,
                },
            },
            limit: 1,
            depth: 2, // Include related content with depth of 2
        });

        const url = generateApiUrl(API_ENDPOINTS.POSTS);
        const response = await fetch(`${url}?${query}`, {
            next: {
                revalidate: REVALIDATION_TIMES.POSTS,
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch news item by slug: ${response.status}`
            );
        }

        const data = await response.json();
        return data?.docs?.[0]; // Return the first matching document
    } catch (error) {
        return null;
    }
}

export async function getRelatedNewsItems(currentSlug: string, limit = 3) {
    try {
        const query = stringify({
            where: {
                slug: {
                    not_equals: currentSlug,
                },
            },
            limit,
            sort: '-publishedAt', // Sort by publish date, newest first
            select: {
                id: true,
                title: true,
                slug: true,
                publishedAt: true,
                featuredImage: true,
            },
        });

        const url = generateApiUrl(API_ENDPOINTS.POSTS);
        const response = await fetch(`${url}?${query}`, {
            next: {
                revalidate: REVALIDATION_TIMES.POSTS,
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch related news items: ${response.status}`
            );
        }

        const data = await response.json();
        return data.docs; // Return the related articles
    } catch (error) {
        return [];
    }
}

export async function getJobItems(
    limit: number,
    page: number
): Promise<ApiListResponse<JobItem>> {
    try {
        const query = stringify({
            limit,
            page,
            select: {
                id: true,
                jobTitle: true,
                slug: true,
                applicationDeadline: true,
                location: true,
                featuredImage: true,
            },
        });

        const url = generateApiUrl(API_ENDPOINTS.RECRUITMENTS);
        const response = await fetch(`${url}?${query}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch job items: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        return {
            docs: [],
            totalDocs: 0,
            limit,
            page,
            totalPages: 0,
            pagingCounter: 0,
            hasPrevPage: false,
            hasNextPage: false,
            prevPage: null,
            nextPage: null,
        };
    }
}

export async function getJobItemBySlug(slug: string): Promise<JobItem | null> {
    try {
        const query = stringify({
            where: {
                slug: {
                    equals: slug,
                },
            },
            select: {
                id: true,
                jobTitle: true,
                slug: true,
                applicationDeadline: true,
                location: true,
                position: true,
                education: true,
                experience: true,
                gender: true,
                ageRange: true,
                salary: true,
                employmentType: true,
                workType: true,
                featuredImage: true,
                description: true,
                requirements: true,
                benefits: true,
                application: true,
            },
            limit: 1,
        });

        const url = generateApiUrl(API_ENDPOINTS.RECRUITMENTS);
        const response = await fetch(`${url}?${query}`, {
            next: {
                revalidate: REVALIDATION_TIMES.POSTS, // Can use same revalidation time as posts
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch job item by slug: ${response.status}`
            );
        }

        const data = await response.json();
        return data?.docs?.[0]; // Return the first matching document
    } catch (error) {
        return null;
    }
}
