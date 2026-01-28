'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        // Adjusted padding to be balanced (py-3 md:py-4)
        <header className="bg-white shadow-sm relative z-40">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-3 md:py-4">
                
                {/* Desktop Layout - All logos and title in one row */}
                <div className="hidden md:flex items-center justify-between gap-4">
                    {/* Logo 1 - Denmark */}
                    <Link
                        href="https://um.dk/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/denmark.png"
                            alt="Denmark Ministry of Foreign Affairs"
                            width={220}
                            height={90}
                            // UPDATED: Reduced slightly from h-20 to h-14/h-16
                            className="h-14 lg:h-16 w-auto object-contain"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Logo 2 - Ministry of Jal Shakti */}
                    <Link
                        href="https://jalshakti.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Ministry_of_Jal_Shakti.svg"
                            alt="Ministry of Jal Shakti"
                            width={100}
                            height={90}
                            // UPDATED: Reduced slightly from h-20 to h-14/h-16
                            className="h-14 lg:h-16 w-auto object-contain"
                            style={{ filter: 'none' }}
                            priority
                        />
                    </Link>

                    {/* Center Title */}
                    <div className="text-center flex-1 px-4">
                        <Link href="/" className="inline-block">
                            {/* UPDATED: Text size adjusted to match new logo balance */}
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary tracking-tight hover:text-primary-light transition-colors leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                        </Link>
                    </div>

                    {/* Logo 3 - SLCR */}
                    <Link
                        href="/"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/Logo_edited.png"
                            alt="SLCR Logo"
                            width={180}
                            height={180}
                            // UPDATED: Reduced slightly from h-20 to h-14/h-16
                            className="h-14 lg:h-16 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Logo 4 - Namami Gange */}
                    <Link
                        href="https://nmcg.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/namiti_gange.gif"
                            alt="Namami Gange Programme"
                            width={80}
                            height={60}
                            // UPDATED: Reduced slightly from h-20 to h-14/h-16
                            className="h-14 lg:h-16 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    <div className="flex items-center justify-between gap-2">
                        <Link href="https://um.dk/en" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/denmark.png"
                                alt="Denmark Ministry"
                                width={160}
                                height={70}
                                // UPDATED: Mobile size h-9 to h-10
                                className="h-9 sm:h-10 w-auto object-contain"
                                priority
                                unoptimized
                            />
                        </Link>

                        <Link href="https://jalshakti.gov.in/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/Ministry_of_Jal_Shakti.svg"
                                alt="Ministry of Jal Shakti"
                                width={80}
                                height={70}
                                className="h-9 sm:h-10 w-auto object-contain"
                                style={{ filter: 'none' }}
                                priority
                            />
                        </Link>

                        <Link href="/" className="shrink-0">
                            <Image
                                src="/Logo_edited.png"
                                alt="SLCR Logo"
                                width={140}
                                height={140}
                                className="h-9 sm:h-10 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <Link href="https://nmcg.nic.in/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <Image
                                src="/namiti_gange.gif"
                                alt="Namami Gange"
                                width={60}
                                height={40}
                                className="h-9 sm:h-10 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Mobile Title */}
                    <div className="text-center mt-3 pt-3 border-t border-gray-100">
                        <Link href="/">
                            <h1 className="text-lg sm:text-xl font-bold text-primary leading-tight">
                                Smart Laboratory on Clean Rivers
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}