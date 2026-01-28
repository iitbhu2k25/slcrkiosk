'use client';

import { motion } from 'framer-motion';
import { Database, BarChart3, Map, FileText } from 'lucide-react';

export default function DataPage() {
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
            Data
          </motion.h1>
          <p className="text-lg text-white/80">Research Data & Resources</p>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
              Access research data, reports, and resources from SLCR projects and initiatives.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-hover p-6 border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Research Database</h3>
                  <p className="text-gray-600 text-sm">
                    Access our comprehensive database of research findings and publications.
                  </p>
                </div>
              </div>

              <div className="card card-hover p-6 border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Water Quality Data</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time and historical water quality monitoring data.
                  </p>
                </div>
              </div>

              <div className="card card-hover p-6 border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">GIS Data</h3>
                  <p className="text-gray-600 text-sm">
                    Geographic information system data for the Varuna basin.
                  </p>
                </div>
              </div>

              <div className="card card-hover p-6 border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Reports</h3>
                  <p className="text-gray-600 text-sm">
                    Technical reports and project documentation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
