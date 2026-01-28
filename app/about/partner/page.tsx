'use client';

import { motion } from 'framer-motion';

export default function PartnerInstitutesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Heading - Centered with Blue Color */}
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
              Partner Institutes
            </h1>

            {/* Bold Description Text - Blue Uppercase */}
            <p className="text-sm sm:text-base text-blue-500 font-semibold leading-relaxed mb-10 uppercase tracking-widest">
              Our esteemed partner institutes collaborate with us to advance research, innovation, and knowledge sharing. Their support strengthens our mission and impact. Explore our network of institutions driving progress together.
            </p>

            {/* Partner logos */}
            <div className="flex justify-center">
              <img
                src="/about/combined_logo.png"
                alt="Partner Institutes Combined Logo"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
