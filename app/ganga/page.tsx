'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KioskCard from '@/components/kiosk/KioskCard';
import { FileText, Droplets, HelpCircle, Info, BarChart3 } from 'lucide-react';

const sections = [
    {
        title: 'About NMCG',
        description: 'Learn about the mission',
        icon: Info,
        href: '/ganga/about',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        title: 'Water Quality',
        description: 'PIB & monitoring reports',
        icon: Droplets,
        href: '/ganga/water-quality',
        gradient: 'from-cyan-600 to-blue-600',
    },
    {
        title: 'Reports',
        description: 'Official documents',
        icon: FileText,
        href: '/ganga/reports',
        gradient: 'from-emerald-600 to-teal-600',
    },
    {
        title: 'Quiz',
        description: 'Test your knowledge',
        icon: HelpCircle,
        href: '/ganga/quiz',
        gradient: 'from-purple-600 to-pink-600',
    },
];

export default function GangaPage() {
    return (
        <div className="min-h-screen relative bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -20, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-16 md:py-24 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                        >
                            Namami Gange
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 drop-shadow"
                        >
                            An integrated conservation mission to restore and rejuvenate
                            <br className="hidden md:block" />
                            the River Ganga and its tributaries
                        </motion.p>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
                        >
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        About the Programme
                                    </h2>
                                    <p className="text-white/90 leading-relaxed mb-4 text-lg">
                                        The Namami Gange Programme is an Integrated Conservation Mission, approved as a
                                        'Flagship Programme' by the Union Government in June 2014 with a budget outlay
                                        of Rs. 20,000 Crore.
                                    </p>
                                    <p className="text-white/90 leading-relaxed text-lg">
                                        The programme is being implemented by the National Mission for Clean Ganga (NMCG)
                                        under the Ministry of Jal Shakti, Government of India.
                                    </p>
                                </div>
                                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/new/Ganga_BAsin.png"
                                        alt="Ganga Basin Map"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Resource Cards */}
                <section className="py-16 px-4 pb-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
                            Explore Resources
                        </h2>
                        <p className="text-white/80 text-center mb-12 text-lg">
                           
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {sections.map((section, index) => (
                                <KioskCard
                                    key={section.title}
                                    {...section}
                                    delay={0.6 + index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
