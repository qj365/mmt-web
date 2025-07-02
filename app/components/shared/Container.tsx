import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    backgroundImage?: string;
}

export default function Container({
    children,
    className = '',
    backgroundImage,
}: ContainerProps) {
    const backgroundStyle = backgroundImage
        ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
          }
        : {};

    return (
        <section
            className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-[85px] pb-6 sm:pb-8 md:pb-10 lg:pb-[45px] relative ${className}`}
            style={backgroundStyle}
        >
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px] flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[56px]">
                {children}
            </div>
        </section>
    );
}
