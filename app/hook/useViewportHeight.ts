'use client';

import { useState, useEffect } from 'react';

export function useViewportHeight() {
    const [viewportHeight, setViewportHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Get viewport height and check if desktop
        const updateViewportHeight = () => {
            setViewportHeight(window.innerHeight);
            setIsDesktop(window.innerWidth >= 768);

            // Get header height
            const header = document.querySelector('header');
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        // Initial calculation
        updateViewportHeight();

        // Update on resize
        window.addEventListener('resize', updateViewportHeight);

        return () => {
            window.removeEventListener('resize', updateViewportHeight);
        };
    }, []);

    // Calculate section height (viewport height minus header height) only for desktop
    const sectionHeight =
        isDesktop && viewportHeight > 0 ? viewportHeight - headerHeight : null;

    return { sectionHeight };
}
