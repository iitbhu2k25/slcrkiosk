'use client';

import { motion } from 'framer-motion';

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Activities
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Implementation</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Research Activities</h3>
                <p className="text-gray-600">
                  Ongoing research initiatives for river rejuvenation and water quality management.
                </p>
              </div>
              <div className="card p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Field Implementation</h3>
                <p className="text-gray-600">
                  On-ground implementation of solutions through the Living Lab approach.
                </p>
              </div>
              <div className="card p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Knowledge Exchange</h3>
                <p className="text-gray-600">
                  Workshops, seminars, and training programs for stakeholders.
                </p>
              </div>
              <div className="card p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Engaging local communities in river conservation efforts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
