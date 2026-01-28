'use client';

import dynamic from 'next/dynamic';

// Dynamic import for Screensaver (client-side only)
const Screensaver = dynamic(() => import('@/components/Screensaver'), {
    ssr: false,
});

interface ScreensaverWrapperProps {
    idleTimeout?: number;
}

export default function ScreensaverWrapper({ idleTimeout = 10000 }: ScreensaverWrapperProps) {
    return <Screensaver idleTimeout={idleTimeout} />;
}
