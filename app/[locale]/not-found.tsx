'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Link } from '@/app/i18n/navigation';

export default function NotFound() {
    // Get translations
    const messages = useTranslations('notFound');

    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full min-h-[60vh] pt-[80px] pb-[40px] bg-gray-50">
                <div className="max-w-[600px] w-full mx-auto px-4 py-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
                        Oops!
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        404 - {messages('title')}
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        {messages('message')}
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-[#338dcc] text-white font-medium text-lg rounded-md hover:bg-[#2a7ab3] transition-colors"
                    >
                        {messages('homeButton')}
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
