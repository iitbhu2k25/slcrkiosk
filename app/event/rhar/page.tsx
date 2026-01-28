'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Download } from 'lucide-react';

// RHAR Photos from public/rhar folder
const rharPhotos = [
  { src: '/rhar/RHAR_2025.jpg', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/RHAR_conference_2025.jpg', alt: 'RHAR Conference 2025' },
  { src: '/rhar/RHAR_conference_2025_.jpg', alt: 'RHAR Conference 2025 Event' },
  { src: '/rhar/rhar1.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar2.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar3.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar7.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar4.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar5.JPG', alt: 'RHAR 2025 Conference' },
  { src: '/rhar/rhar6.JPG', alt: 'RHAR 2025 Conference' },
];

export default function RHAR2025Page() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/rhar/gangavns2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-lg mb-3 text-white/90 tracking-widest uppercase"
          >
            4th International Conference on
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl"
          >
            RIVER HEALTH: ASSESSMENT TO RESTORATION
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-accent drop-shadow-2xl"
          >
            RHAR 2025
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm sm:text-base mb-8"
          >
            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
              <Calendar size={18} />
              Oct 30 - Nov 01, 2025
            </span>
            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
              <MapPin size={18} />
              IIT (BHU) Varanasi, India
            </span>
          </motion.div>

          {/* Know More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="https://conferences.iitbhu.ac.in/rhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Know More About RHAR
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* RHAR Photos Gallery */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold italic text-gray-400 mb-3">Glimpses from 4th International RHAR conference and events</h2>
          </motion.div>
        </div>

        {/* Infinite Sliding Photos */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6"
            style={{
              animation: `scroll 50s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'max-content'
            }}
          >
            {/* First set of photos */}
            {rharPhotos.map((photo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
                style={{ width: '500px', height: '350px' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  quality={100}
                  className="w-full h-full object-contain bg-gray-100"
                  unoptimized
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {rharPhotos.map((photo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
                style={{ width: '500px', height: '350px' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  quality={100}
                  className="w-full h-full object-contain bg-gray-100"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Conference Theme with Download Brochure */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/20 relative"
          >
            <div className="text-center pr-0 sm:pr-48">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Conference Theme</h3>
              <p className="text-xl sm:text-2xl font-bold text-gray-800 leading-relaxed">
                &quot;Restoration of Small Rivers: Application of Advanced Tools and Technologies,
                with Convergence of Policies and Programs&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RHAR Conference History - Side by Side Layout */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-10 text-center">RHAR Conference Journey</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Previous Conferences (1st, 2nd, 3rd) */}
              <div className="space-y-6">
                {/* RHAR 2019 */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    1st International Conference on &apos;River Health: Assessment to Restoration&apos; (RHAR 2019)
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Taking the scientific spirit and recommendations of Ganga River Basin Management Plan (GRBMP) 2015 forwards,
                    Department of Civil Engineering, IIT (BHU) Varanasi thought of &apos;making our rivers healthy and happy&apos; as its
                    Centenary Vision in 2019. Accordingly, the 1st International Conference on &apos;River Health: Assessment to
                    Restoration (RHAR)&apos; was organized during Feb. 14-16, 2019. Five broad themes discussed included: Riverine
                    processes, Drivers of river health, River health monitoring, River health indexing, River health restoration.
                  </p>
                </div>

                {/* RHAR 2021 */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    2nd International Conference on &apos;River Health: Assessment to Restoration&apos; (RHAR 2021)
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    In order to bring smaller rivers on health restoration agenda, (RHAR 2021) focused on &quot;Talks of the Tributaries:
                    Rivers Varuna and Assi in the Middle Ganga Basin&quot;. The objective was to collect, compile and comprehend all
                    the facts and figures related with these tributaries. The post conference effect is that four leading academic
                    institutions - IIT Kanpur, IIT (BHU) Varanasi, IIT Roorkee and BBAU Lucknow have joined hands to help and guide
                    MGNREGS. The Government has embarked upon preparing a roadmap to rejuvenate 75 small rivers of the state in first phase.
                  </p>
                </div>

                {/* RHAR 2023 */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    3rd International Conference on &apos;River Health: Assessment to Restoration&apos; (RHAR 2023)
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    A deeper analysis of river health condition indicates: (1) water stressed conditions require source augmentation,
                    and (2) cities along rivers put high quantitative and qualitative stress on them. Hence the theme of (RHAR 2023)
                    was &quot;Moving towards Water Positive Regions (WPR) and Water Smart Cities (WSC)&quot;. The deliberations are supposed
                    to add substantial values for improvements in water management of around two dozen smart cities across Bihar,
                    Uttar Pradesh, Rajasthan and Delhi.
                  </p>
                </div>
              </div>

              {/* Right Side - 4th Conference (Way Forward) */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-6 sm:p-8 border border-primary/20 h-fit">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-400 text-white text-xs font-bold px-3 py-1.5 rounded-full">WAY FORWARD</span>
                  <Link
                    href="https://conferences.iitbhu.ac.in/rhar/docs/brochure_rhar.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gray-500 hover:bg-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Download size={14} />
                    BROCHURE
                  </Link>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  4th International Conference on &apos;River Health: Assessment to Restoration&apos; (RHAR 2025)
                </h3>

                <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-justify">
                  <p>
                    In order to focus on small rivers, Government of India has established a dedicated center for small river
                    rejuvenation, named as <strong>&apos;Smart Laboratory of Clean Rivers (SLCR)&apos;</strong> under the Indo-Danish
                    collaboration initiatives. The SLCR is located at Indian Institute of Technology (BHU) Varanasi, and
                    provides a platform for knowledge creation and exchange, management and transfer/co-creation, training,
                    research and innovation.
                  </p>

                  <p>
                    Rivers are inherently multidimensional systems, encompassing hydrology, water quality, wastewater management,
                    water supply, river morphology, aquifer interactions, riparian ecosystems, biodiversity, and socio-economic
                    dynamics. A river is not just a channel that carries water—it is a dynamic, living system that reflects the
                    health of the entire watershed.
                  </p>

                  <p>
                    Small rivers constitute a substantial portion of river networks. Despite their relatively modest size, these
                    small streams wield a considerable influence downstream. They act as ecological lifelines that sustain
                    biodiversity, regulate hydrological cycles, and support local communities by replenishing groundwater.
                    However, their significance is often underestimated in policy and planning frameworks.
                  </p>

                  <p>
                    The role of unregulated contaminants such as microplastics, persistent organic pollutants and heavy metals
                    in aggravating the health of rivers is often less known. Advancements in detection technologies and evolution
                    of the policy landscape will likely change this scenario in the near future.
                  </p>

                  <p>
                    Rivers are multidimensional systems influenced by diverse stakeholders—governments, communities, researchers,
                    and industries. Sustainable and resilient river rejuvenation requires transparent communication, shared
                    responsibilities, and long-term collaboration. The theme of RHAR 2025 emphasizes the integration of science,
                    technology, and governance to maximize impact for restoring small rivers.
                  </p>
                </div>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <Link
                    href="https://conferences.iitbhu.ac.in/rhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
                  >
                    Visit Official Website
                    <ExternalLink size={10} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
