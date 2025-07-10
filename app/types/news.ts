export type NewsItem = {
    id: string | number;
    title: string;
    slug: string;
    publishedAt: string;
    content: string;
    featuredImage: {
        url: string;
        alt?: string;
    } | null;
};
