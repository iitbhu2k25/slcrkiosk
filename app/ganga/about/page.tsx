'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    { name: 'pic1.png', alt: 'NMCG Picture 1' },
    { name: 'pic2.png', alt: 'NMCG Picture 2' },
    { name: 'pic3.png', alt: 'NMCG Picture 3' },
    { name: 'pic4.png', alt: 'NMCG Picture 4' },
    { name: 'pic5.png', alt: 'NMCG Picture 5' },
    { name: 'pic6.png', alt: 'NMCG Picture 6' },
    { name: 'pic7.png', alt: 'NMCG Picture 7' },
    { name: 'pic8.png', alt: 'NMCG Picture 8' },
];

export default function AboutNMCGPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('/activities/bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg"
                    >
                        About NMCG
                    </motion.h1>

                    {/* All Images - Same Full Width Size */}
                    {images.map((image, index) => (
                        <motion.div
                            key={image.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                            className="mb-12"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
                                <Image
                                    src={`/about_nmcg/${image.name}`}
                                    alt={image.alt}
                                    width={1400}
                                    height={600}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
