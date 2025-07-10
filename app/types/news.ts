export type NewsItem = {
    id: number;
    title: string;
    publishedAt: string;
    content: string;
    featuredImage: {
        url: string;
    };
    slug: string;
};
