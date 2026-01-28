'use client';

import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function HomeButton() {
    return (
        <Link href="/">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 md:w-20 md:h-20 bg-primary hover:bg-primary-dark text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
            >
                <Home className="w-8 h-8 md:w-10 md:h-10" />

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
                        Home
                    </div>
                </div>

                {/* Pulse Effect */}
                <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </Link>
    );
}
