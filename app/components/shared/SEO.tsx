import React from 'react';
import Script from 'next/script';

interface SEOProps {
    title?: string;
    description?: string;
    locale: string;
    image?: string;
    ogType?: string;
    jsonLd?: Record<string, unknown>;
    canonicalUrl?: string;
}

export default function SEO({ locale, jsonLd }: SEOProps) {
    const defaultJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: locale === 'vi' ? 'Dệt may Minh Minh Tâm' : 'ミンミンタム織物',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        logo: `${process.env.NEXT_PUBLIC_BASE_URL}/images/home/logo.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '(+84) 252 672 5858',
            contactType: 'customer service',
        },
    };

    const structuredData = jsonLd || defaultJsonLd;

    return (
        <>
            {/* JSON-LD structured data */}
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            {/* Additional head elements can be added if needed */}
        </>
    );
}
