'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '/about',
        children: [
            { label: 'SLCR', href: '/about/slcr' },
            { label: 'Partner Institutes', href: '/about/partner' },
        ],
    },
    { label: 'Activities', href: '/activities' },
    { label: 'Projects', href: '/projects' },
    {
        label: 'Event',
        href: '/event',
        children: [
            { label: 'RHAR 2025', href: '/event/rhar' },
            { label: "People's Varuna", href: '/event/peoples_varuna' },
        ],
    },
    {
        label: 'Namami Gange',
        href: '/ganga',
        children: [
            { label: 'About NMCG', href: '/ganga/about' },
            { label: 'Water Quality', href: '/ganga/water-quality' },
            { label: 'Reports', href: '/ganga/reports' },
            { label: 'Quiz', href: '/ganga/quiz' },
        ],
    },
    { label: 'Data', href: '/data' },
    { label: 'SLCR Gallery', href: '/media' },
    { label: 'Contact', href: '/contact' },
];

export default function MainNav() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`bg-cyan-700 text-white transition-all duration-300 z-50 ${scrolled ? 'fixed top-0 left-0 right-0 shadow-xl' : 'relative'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center justify-center gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.children ? (
                                    <button
                                        className={`flex items-center gap-1.5 px-5 py-4 font-medium transition-all hover:bg-white/10 ${isActive(item.href) ? 'bg-white/15' : ''
                                            }`}
                                        aria-expanded={openDropdown === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block px-5 py-4 font-medium transition-all hover:bg-white/10 ${isActive(item.href) ? 'bg-white/15 border-b-2 border-accent' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {item.children && openDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute left-0 top-full w-56 bg-white rounded-b-xl shadow-2xl overflow-hidden z-50"
                                            onMouseEnter={() => handleMouseEnter(item.label)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={`block px-5 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors border-l-3 border-transparent hover:border-accent ${isActive(child.href) ? 'bg-primary/10 text-primary font-medium' : ''
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Nav Button */}
                    <div className="lg:hidden flex items-center justify-between py-3">
                        <span className="font-semibold">Menu</span>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden bg-white text-gray-800 overflow-hidden"
                        >
                            <div className="max-h-[70vh] overflow-y-auto">
                                {navItems.map((item) => (
                                    <div key={item.label} className="border-b border-gray-100">
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                                    className="w-full flex items-center justify-between px-5 py-3 font-medium"
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: 'auto' }}
                                                            exit={{ height: 0 }}
                                                            className="bg-gray-50 overflow-hidden"
                                                        >
                                                            {item.children.map((child) => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    className="block px-8 py-2.5 text-gray-600 hover:text-primary border-l-3 border-transparent hover:border-accent"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block px-5 py-3 font-medium ${isActive(item.href) ? 'text-primary bg-primary/5' : ''
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer when nav is fixed */}
            {scrolled && <div className="h-14 lg:h-[56px]" />}
        </>
    );
}
