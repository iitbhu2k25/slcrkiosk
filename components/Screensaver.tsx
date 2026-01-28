'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Hls from 'hls.js';

interface ScreensaverProps {
    idleTimeout?: number; // in milliseconds
}

const PLAYLIST = [
    '/Videos/slcr/master.m3u8',
    '/Videos/anthem/master.m3u8',
    '/Videos/film/master.m3u8',
    '/Videos/nat_geo/master.m3u8',
    '/Videos/achievement/master.m3u8',
];

export default function Screensaver({ idleTimeout = 30000 }: ScreensaverProps) {
    const [isActive, setIsActive] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);

    // --- FIX 1: MOVE THIS TO THE TOP ---
    // This must be defined BEFORE startVideo tries to use it.
    const handleVideoEnd = useCallback(() => {
        console.log("Video ended. Switching to next...");
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % PLAYLIST.length);
    }, []);

    const stopVideo = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.volume = 0;
            videoRef.current.muted = true;
            videoRef.current.currentTime = 0;
            videoRef.current.removeAttribute('src'); 
            videoRef.current.load();
        }
        if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
        }
    }, []);

    const startVideo = useCallback(() => {
        const video = videoRef.current;
        if (!video) {
            console.error('Video element not found');
            return;
        }

        const currentSrc = PLAYLIST[currentVideoIndex];
        console.log(`Starting playback for index ${currentVideoIndex}: ${currentSrc}`);

        // --- FIX 2: ROBUST PLAY FUNCTION ---
        // This function tries to play with sound first.
        // If the browser blocks it (NotAllowedError), it falls back to Muted.
        const executePlay = async () => {
            try {
                // 1. Try to play with sound
                video.volume = 1.0;
                video.muted = false;
                await video.play();
                console.log("Playing with sound!");
            } catch (error: any) {
                // 2. Catch the "NotAllowedError" (Browser blocked sound)
                if (error.name === 'NotAllowedError') {
                    console.warn("Autoplay with sound blocked. Falling back to MUTED.");
                    video.muted = true;
                    try {
                        await video.play(); // Play muted so video doesn't freeze
                    } catch (mutedError) {
                        console.error("Even muted playback failed:", mutedError);
                    }
                } else if (error.name !== 'AbortError') {
                    // Ignore AbortError (happens if you skip videos fast), log others
                    console.error("Playback error:", error);
                }
            }
        };

        if (Hls.isSupported()) {
            if (hlsRef.current) hlsRef.current.destroy();

            const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
            hlsRef.current = hls;
            
            hls.loadSource(currentSrc);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                executePlay();
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    console.log('HLS Error, skipping video');
                    handleVideoEnd();
                }
            });
        } 
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = currentSrc;
            executePlay();
        }
    }, [currentVideoIndex, handleVideoEnd]);

    // --- TIMERS & ACTIVITY HANDLERS ---

    const resetTimer = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsActive(false);
        timeoutRef.current = setTimeout(() => {
            setIsActive(true);
        }, idleTimeout);
    }, [idleTimeout]);

    const handleActivity = useCallback(() => {
        resetTimer();
    }, [resetTimer]);

    const dismissScreensaver = useCallback(() => {
        if (isActive) {
            stopVideo();
            setIsActive(false);
            resetTimer();
        }
    }, [isActive, resetTimer, stopVideo]);

    useEffect(() => {
        resetTimer();
        const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll', 'click'];
        events.forEach((event) => window.addEventListener(event, handleActivity));

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            events.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    }, [handleActivity, resetTimer]);

    const wasActiveRef = useRef(false);

    useEffect(() => {
        if (!isActive) {
            if (wasActiveRef.current) {
                stopVideo();
            }
            wasActiveRef.current = false;
            return;
        }

        wasActiveRef.current = true;

        const initTimeout = setTimeout(() => {
            startVideo();
        }, 300);

        return () => {
            clearTimeout(initTimeout);
            stopVideo();
        };
    }, [isActive, currentVideoIndex, stopVideo, startVideo]);

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary-dark to-indigo-900 cursor-pointer"
                    onClick={dismissScreensaver}
                    onMouseMove={dismissScreensaver}
                    onTouchStart={dismissScreensaver}
                >
                    {/* Background GIF */}
                    <div className="absolute inset-0">
                        <Image
                            src="/img/main_page_gif_old.gif"
                            alt="Background"
                            fill
                            className="object-cover opacity-30"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/90" />
                    </div>

                    {/* Floating Orbs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-start pt-8 px-4">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-col items-center gap-2 mb-4"
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                                <Image
                                    src="/img/slcr_logo.avif"
                                    alt="SLCR Logo"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                            <div className="text-center">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                    Smart Laboratory on{' '}
                                    <span className="text-gradient bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent">
                                        Clean Rivers
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                                    A joint initiative by India and Denmark for sustainable river rejuvenation
                                </p>
                            </div>
                        </motion.div>

                        {/* Video Player */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="w-full max-w-5xl mt-4"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    playsInline
                                    onEnded={handleVideoEnd}
                                />
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-20 right-8 flex items-center gap-4"
                        >
                            <div className="relative w-16 h-16 bg-white rounded-lg p-2">
                                <Image
                                    src="/img/Ministry_of_Jal_Shakti.svg"
                                    alt="Ministry of Jal Shakti"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-16 h-16 bg-white rounded-lg p-2">
                                <Image
                                    src="/img/iitbhu.png"
                                    alt="IIT BHU"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}