'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Volume2 } from 'lucide-react';

export default function AccessibilityBar() {
    const [fontSize, setFontSize] = useState(100);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState<'en' | 'hi'>('en');

    // Apply font size to document
    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    // Apply dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const decreaseFont = () => setFontSize(prev => Math.max(80, prev - 10));
    const resetFont = () => setFontSize(100);
    const increaseFont = () => setFontSize(prev => Math.min(130, prev + 10));

    const handleSkipToContent = (e: React.MouseEvent) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Hidden on mobile (< 768px), visible on md and up
        <div className="hidden md:block bg-gov-primary text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
                {/* Left: Skip Links & Screen Reader */}
                <div className="flex items-center gap-4">
                    <a
                        href="#main-content"
                        onClick={handleSkipToContent}
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gov-primary rounded px-2 py-0.5"
                    >
                        Skip to Main Content
                    </a>
                    <button
                        className="flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-0.5"
                        aria-label="Screen Reader Access"
                    >
                        <Volume2 size={14} />
                        <span>Screen Reader</span>
                    </button>
                </div>

                {/* Right: Font Size, Contrast, Language */}
                <div className="flex items-center gap-3">
                    {/* Font Size Controls */}
                    <div className="flex items-center gap-1 border-r border-white/30 pr-3">
                        <span className="mr-1">Font Size:</span>
                        <button
                            onClick={decreaseFont}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Decrease font size"
                            title="Decrease font size"
                        >
                            A-
                        </button>
                        <button
                            onClick={resetFont}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Reset font size"
                            title="Reset font size"
                        >
                            A
                        </button>
                        <button
                            onClick={increaseFont}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Increase font size"
                            title="Increase font size"
                        >
                            A+
                        </button>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="flex items-center gap-1 hover:bg-white/20 rounded px-2 py-0.5 transition-colors border-r border-white/30 pr-3 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                        <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                    </button>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-2 py-0.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white ${language === 'en' ? 'bg-white text-gov-primary font-medium' : 'hover:bg-white/20'
                                }`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('hi')}
                            className={`px-2 py-0.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white ${language === 'hi' ? 'bg-white text-gov-primary font-medium' : 'hover:bg-white/20'
                                }`}
                        >
                            हिंदी
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
