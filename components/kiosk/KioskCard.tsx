'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface KioskCardProps {
    title: string;
    description?: string;
    icon?: LucideIcon;
    iconElement?: ReactNode;
    href: string;
    gradient?: string;
    delay?: number;
}

export default function KioskCard({
    title,
    description,
    icon: Icon,
    iconElement,
    href,
    gradient = 'from-blue-500 to-cyan-500',
    delay = 0
}: KioskCardProps) {
    return (
        <Link href={href}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative h-full min-h-[200px] rounded-3xl overflow-hidden cursor-pointer"
            >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Animated Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white/20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="mb-4"
                    >
                        {Icon ? (
                            <Icon className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                        ) : iconElement ? (
                            iconElement
                        ) : null}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 drop-shadow-lg">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="text-sm md:text-base text-white/90 text-center drop-shadow">
                            {description}
                        </p>
                    )}

                    {/* Touch Ripple Effect */}
                    <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>
        </Link>
    );
}
