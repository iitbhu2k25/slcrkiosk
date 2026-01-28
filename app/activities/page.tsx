'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ActivitiesPage() {
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
            Activities
          </motion.h1>

          {/* Activities 1 - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
              <Image
                src="/activities/activities1.png"
                alt="Activities 1"
                width={1400}
                height={600}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Implementation Header */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg text-center"
          >
            Implementation
          </motion.h2>

          {/* Activities 2 - Centered, Tightly Wrapped, Original Height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 flex justify-center" // Centers the image
          >
            {/* inline-block ensures the background box shrinks to fit the image width */}
            <div className="inline-block rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
              <Image
                src="/activities/activities2.png"
                alt="Activities 2 - Implementation"
                width={1400}
                height={600}
                // h-auto w-auto maintains aspect ratio
                // max-h-[600px] ensures it doesn't grow larger than your original design
                className="w-auto h-auto max-h-[600px] rounded-xl block"
              />
            </div>
          </motion.div>

          {/* Activities 3 and 4 - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
              <Image
                src="/activities/activities3.png"
                alt="Activities 3"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
              <Image
                src="/activities/activities4.png"
                alt="Activities 4"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}