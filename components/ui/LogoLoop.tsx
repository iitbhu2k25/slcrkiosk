'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface LogoItem {
    src: string;
    alt: string;
    href: string;
}

interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
}

export default function LogoLoop({ logos, speed = 25 }: LogoLoopProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollPosition = 0;
        const scrollSpeed = speed / 60; // pixels per frame

        const animate = () => {
            if (!isHovered && scrollContainer) {
                scrollPosition += scrollSpeed;

                // Reset when we've scrolled through half the content (since we duplicate)
                const halfWidth = scrollContainer.scrollWidth / 2;
                if (scrollPosition >= halfWidth) {
                    scrollPosition = 0;
                }

                scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isHovered, speed]);

    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={scrollRef}
                className="flex items-center gap-8 md:gap-12 will-change-transform"
                style={{ width: 'max-content' }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <a
                        key={`${logo.alt}-${index}`}
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}
                            height={60}
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
