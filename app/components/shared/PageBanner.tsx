import Image from 'next/image';

interface PageBannerProps {
    imageSrc: string;
    altText?: string;
    height?: string;
}

export default function PageBanner({
    imageSrc,
    altText = 'Banner',
    height = 'h-[40vh] sm:h-[50vh] md:h-[60vh]',
}: PageBannerProps) {
    return (
        <section className={`w-full ${height} relative`}>
            <Image
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover"
                fill
                priority
            />
        </section>
    );
}
