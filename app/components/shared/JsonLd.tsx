type JsonLdProps = {
    type: 'Organization' | 'BreadcrumbList' | 'Product' | 'Article' | 'WebPage';
    data: Record<string, unknown>;
};

export default function JsonLd({ type, data }: JsonLdProps) {
    const structuredData: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    };

    // For proper JSON formatting
    const jsonLd = JSON.stringify(structuredData);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
    );
}

// Organization JSON-LD for homepage
export function OrganizationJsonLd({ locale }: { locale: string }) {
    const translations = {
        name: {
            vi: 'Công ty TNHH May Minh Minh Tâm',
            ja: 'ミン ミン タム縫製有限責任会社',
        },
        description: {
            vi: 'Công ty TNHH May Minh Minh Tâm (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
            ja: 'ミン ミン タム縫製有限責任会社（ビンタン市、ベトナム）- Vinatexのメンバー、糸および輸出衣料品の製造・販売を専門としています。',
        },
    };

    const data = {
        name:
            translations.name[locale as keyof typeof translations.name] ||
            translations.name.vi,
        url: process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com',
        logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/images/home/logo.png`,
        description:
            translations.description[
                locale as keyof typeof translations.description
            ] || translations.description.vi,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'VN',
            addressLocality: 'Bình Thuận',
            addressRegion: 'Bình Thuận',
            postalCode: '800000',
            streetAddress:
                'Đường Nguyễn Văn Linh, Xuân An, TP Phan Thiết, Tỉnh Bình Thuận',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+84-252-3722207',
            email: 'info@minhtam.com',
            contactType: 'customer service',
        },
        sameAs: [
            'https://www.facebook.com/mayminhtam',
            'https://www.linkedin.com/company/may-minh-tam',
        ],
    };

    return <JsonLd type="Organization" data={data} />;
}

// Breadcrumb JSON-LD for navigation
export function BreadcrumbJsonLd({
    breadcrumbItems,
}: {
    breadcrumbItems: { name: string; url: string }[];
}) {
    const itemListElement = breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    }));

    return <JsonLd type="BreadcrumbList" data={{ itemListElement }} />;
}

// Product JSON-LD for product pages
export function ProductJsonLd({
    name,
    description,
    image,
    category,
}: {
    name: string;
    description: string;
    image: string;
    category: string;
}) {
    const data = {
        name,
        description,
        image,
        category,
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'USD',
        },
    };

    return <JsonLd type="Product" data={data} />;
}
