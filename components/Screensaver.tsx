'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Hls from 'hls.js';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

// --- PLAYLIST CONFIGURATION ---
const PLAYLIST = [
    { type: 'local', src: '/Videos/slcr/master.m3u8' }, 
    { type: 'youtube', id: 'XdFD4Yjqzzk' }, 
    { type: 'youtube', id: 'gQc58vGHlvs' }, 
    { type: 'youtube', id: 'Q0gYQrebGwY' }, 
    { type: 'youtube', id: '7rC_0x_2CNA' }, 
];

interface ScreensaverProps {
    idleTimeout?: number;
}

// --- COMPONENT: LOCAL PLAYER ---
const LocalPlayer = ({ src, onEnded }: { src: string; onEnded: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.currentTime = 0;
        video.volume = 1.0;
        video.muted = false; 

        const handlePlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    if (error.name === 'NotAllowedError') {
                        console.warn("Local Autoplay blocked. Muting...");
                        video.muted = true;
                        video.play().catch(e => console.error(e));
                    }
                });
            }
        };

        if (Hls.isSupported()) {
            if (hlsRef.current) hlsRef.current.destroy();
            const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
            hlsRef.current = hls;
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, handlePlay);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            handlePlay();
        }

        return () => {
            if (hlsRef.current) hlsRef.current.destroy();
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            onEnded={onEnded}
        />
    );
};

// --- COMPONENT: YOUTUBE PLAYER (UPDATED) ---
const YouTubePlayer = ({ videoId, onEnded }: { videoId: string; onEnded: () => void }) => {
    
    // 1. Prepare: Start MUTED to guarantee autoplay works
    const onReady = (event: YouTubeEvent) => {
        const player = event.target;
        player.mute(); // Mute strictly
        player.setPlaybackQuality('hd1080');
        player.playVideo(); // Play (Browser allows this because it's muted)
    };

    // 2. The Trick: Try to Unmute once it starts playing
    const onStateChange = (event: YouTubeEvent) => {
        // State 1 = Playing
        if (event.data === 1) {
            const player = event.target;
            
            // Try to unmute after a tiny delay
            setTimeout(() => {
                if (player.isMuted()) {
                    player.unMute();
                    player.setVolume(100);
                }
            }, 500);
        }
        // State 0 = Ended
        if (event.data === 0) {
            onEnded();
        }
    };

    const onError = (event: YouTubeEvent) => {
        console.error("YouTube Error:", event.data);
        onEnded(); 
    };

    return (
        <div className="w-full h-full pointer-events-none">
            <div className="absolute inset-0 z-50 bg-transparent" />
            <YouTube
                videoId={videoId}
                onReady={onReady}
                onStateChange={onStateChange}
                onError={onError}
                className="w-full h-full"
                iframeClassName="w-full h-full object-cover"
                opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                        autoplay: 1,      // Request autoplay
                        mute: 1,          // FORCE MUTE initially (Crucial fix)
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        origin: typeof window !== 'undefined' ? window.location.origin : undefined,
                    },
                }}
            />
        </div>
    );
};

// --- MAIN SCREENSAVER COMPONENT ---
export default function Screensaver({ idleTimeout = 30000 }: ScreensaverProps) {
    const [isActive, setIsActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % PLAYLIST.length);
    }, []);

    const resetTimer = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsActive(false);
        timeoutRef.current = setTimeout(() => setIsActive(true), idleTimeout);
    }, [idleTimeout]);

    const handleActivity = useCallback(() => resetTimer(), [resetTimer]);

    useEffect(() => {
        resetTimer();
        const events = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll', 'click'];
        events.forEach((e) => window.addEventListener(e, handleActivity));
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            events.forEach((e) => window.removeEventListener(e, handleActivity));
        };
    }, [handleActivity, resetTimer]);

    useEffect(() => {
        if (isActive) setCurrentIndex(0);
    }, [isActive]);

    const dismissScreensaver = useCallback(() => {
        setIsActive(false);
        resetTimer();
    }, [resetTimer]);

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
                        
                        {/* Header */}
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

                        {/* Video Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="w-full max-w-5xl mt-4"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
                                {PLAYLIST[currentIndex].type === 'local' ? (
                                    <LocalPlayer 
                                        src={PLAYLIST[currentIndex].src!} 
                                        onEnded={handleNext} 
                                    />
                                ) : (
                                    <YouTubePlayer 
                                        videoId={PLAYLIST[currentIndex].id!} 
                                        onEnded={handleNext} 
                                    />
                                )}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Footer Logos */}
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