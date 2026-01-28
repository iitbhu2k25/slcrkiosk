'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PeoplesVarunaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content - Image 70% and Text 30% */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-primary mb-8"
          >
            People's Varuna
          </motion.h1>

          {/* Side by Side Layout - Image 70%, Text 30% */}
          <div className="grid lg:grid-cols-10 gap-8 items-start">
            {/* Left - Image (70%) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/People's_Varuna.png"
                  alt="People's Varuna"
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Text Content (30%) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="text-xl font-bold text-primary mb-4">Community-driven River Conservation</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  People's Varuna is a community engagement initiative that brings together local
                  communities, stakeholders, and experts to work towards the rejuvenation of the
                  Varuna River.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-primary mb-2">Community Engagement</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Involving local communities in river conservation efforts.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-primary mb-2">Awareness Programs</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Educational initiatives for river health and conservation.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-primary mb-2">Collaborative Action</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Joint efforts for sustainable river management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
