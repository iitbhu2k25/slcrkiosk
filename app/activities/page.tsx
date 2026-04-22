'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Monitor, Settings, Zap, Target, Leaf, Users, X } from 'lucide-react';

const activities = [
  {
    id: 'A1',
    title: 'Holistic River Plan',
    icon: Droplets,
    gradient: 'from-[#1a5276] to-[#2e86c1]',
    borderColor: 'border-cyan-400/30',
    points: [
      'River Rejuvenation Plan including Revenue Generation model',
      'Storm & wastewater management plan',
      'Integration of Cultural heritage and Recreational sites',
    ],
    detailedPoints: [
      'Developing a comprehensive master plan that addresses ecological health while ensuring sustainable economic growth.',
      'Implementing advanced stormwater and wastewater management systems to prevent raw sewage from polluting the river, ensuring a cleaner ecosystem.',
      'Revitalizing riverfronts to protect cultural heritage and create engaging recreational spaces for the community.',
    ],
  },
  {
    id: 'A2',
    title: 'Decision Support System',
    icon: Settings,
    gradient: 'from-[#1a6e5c] to-[#2ecc71]',
    borderColor: 'border-emerald-400/30',
    points: [
      'Development of a Hydrological and Hydrodynamic Model-based system',
      'Decision-making and planning support tools',
      'Basin-wide water dynamics analysis',
    ],
    detailedPoints: [
      'Building a robust Hydrological and Hydrodynamic Model to accurately simulate and predict water flow, flooding, and water quality changes.',
      'Deploying intuitive decision-making dashboards to empower stakeholders and local authorities in urban planning and emergency response.',
      'Conducting a comprehensive basin-wide analysis of water dynamics to trace the impact of human activities on the entire river ecosystem.',
    ],
  },
  {
    id: 'A3',
    title: 'Smart Monitoring',
    icon: Monitor,
    gradient: 'from-[#1a5276] to-[#17a589]',
    borderColor: 'border-teal-400/30',
    points: [
      'Data collection using emerging technologies',
      'Fingerprint analysis for characterization of non-targeted chemical and microbial/emerging pollutants',
      'Real-time monitoring systems',
    ],
    detailedPoints: [
      'Deploying state-of-the-art IoT sensors and emerging technologies to continuously monitor surface and groundwater parameters.',
      'Utilizing advanced fingerprinting analysis to trace and identify non-targeted chemical, microbial, and emerging environmental pollutants.',
      'Establishing a centralized real-time monitoring system that immediately flags anomalies and water quality drops for quick administrative action.',
    ],
  },
  {
    id: 'A4',
    title: 'Innovative Technologies',
    icon: Zap,
    gradient: 'from-[#6c3483] to-[#a569bd]',
    borderColor: 'border-purple-400/30',
    points: [
      'Refurbishing of existing STPs to increase hydraulic and pollutant removal capacity',
      'Reuse of STP treated wastewater/Sludge',
      'Wastewater as a resource for revenue generation',
    ],
    detailedPoints: [
      'Upgrading and refurbishing existing Sewage Treatment Plants (STPs) to significantly enhance their hydraulic and pollutant-removal capacities.',
      'Promoting a circular economy by treating wastewater and sludge to safe levels for reuse in agriculture, landscaping, or industrial processes.',
      'Transforming wastewater from a liability into an asset by recovering valuable resources and generating sustainable revenue streams.',
    ],
  },
  {
    id: 'A5',
    title: 'Sustainable Groundwater Management',
    icon: Target,
    gradient: 'from-[#1a5276] to-[#2e86c1]',
    borderColor: 'border-blue-400/30',
    points: [
      'River-Aquifer (RA) exchanges study',
      'Interaction of small rivers with groundwater',
      'Role in overall water budgeting of the basin',
    ],
    detailedPoints: [
      'Investigating River-Aquifer (RA) exchanges to understand how surface rivers feed into and draw from underground aquifers.',
      'Studying the critical interaction between smaller tributary rivers and groundwater reserves to prevent the drying of foundational water sources.',
      'Creating a holistic water budget for the basin to ensure that groundwater extraction rates do not exceed natural aquifer recharge rates.',
    ],
  },
  {
    id: 'A6',
    title: 'Carbon-Neutral & Water-Positive Principles',
    icon: Leaf,
    gradient: 'from-[#1a6e5c] to-[#27ae60]',
    borderColor: 'border-green-400/30',
    points: [
      'Carbon and Water footprint evaluation for all SLCR interventions',
      'Contribution to carbon sequestration and water budget',
      'Achieving carbon neutrality and water positive environment',
    ],
    detailedPoints: [
      'Conducting rigorous carbon and water footprint evaluations for all Smart Laboratory on Clean Rivers (SLCR) interventions to ensure eco-friendly execution.',
      'Integrating natural solutions like targeted afforestation and wetland restoration to boost carbon sequestration and enhance the natural water cycle.',
      'Committing to sustainable operations aimed at achieving verified carbon neutrality and fostering a water-positive environment across the basin.',
    ],
  },
  {
    id: 'A7',
    title: 'Capacity Building & Outreach',
    icon: Users,
    gradient: 'from-[#5b2c6f] to-[#8e44ad]',
    borderColor: 'border-violet-400/30',
    points: [
      'Development of courses with focus on global sustainable solutions',
      'International exposure programs',
      'Knowledge sharing and training initiatives',
    ],
    detailedPoints: [
      'Designing specialized academic and professional courses that focus on implementing global sustainable water solutions in localized contexts.',
      'Facilitating international exposure programs that allow researchers and officials to learn from successful river rejuvenation projects worldwide.',
      'Driving community engagement and training initiatives to empower local populations, creating grassroot-level champions for river conservation.',
    ],
  },
];

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<null | typeof activities[0]>(null);

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

          {/* ===== A1–A7 Activity Cards Grid ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            {/* Top row: 4 cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {activities.slice(0, 4).map((activity, index) => (
                <motion.div
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden border ${activity.borderColor} bg-gradient-to-br ${activity.gradient} p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all duration-300`}
                >
                  {/* Icon + ID badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1.5 text-white/70 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                      {activity.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight mb-4">
                    {activity.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {activity.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/85 text-sm leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Bottom row: 3 cards centered */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-[75%] lg:max-w-none lg:px-[12.5%] mx-auto">
              {activities.slice(4, 7).map((activity, index) => (
                <motion.div
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden border ${activity.borderColor} bg-gradient-to-br ${activity.gradient} p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all duration-300`}
                >
                  {/* Icon + ID badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1.5 text-white/70 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                      {activity.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight mb-4">
                    {activity.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {activity.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/85 text-sm leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== Implementation Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col items-center"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4 text-center">
                Implementation
              </h2>
              <p className="text-center text-[#2c3e50] text-base md:text-lg mb-8 max-w-4xl mx-auto">
                Executing our vision through structured interventions, sustainable technologies, and continuous monitoring to ensure effective river rejuvenation and long-term impact.
              </p>
              <div className="flex justify-center">
                <div className="inline-block rounded-2xl overflow-hidden shadow-2xl bg-white/10 p-2">
                  <Image
                    src="/activities/activities2.png"
                    alt="Activities 2 - Implementation"
                    width={1400}
                    height={600}
                    className="w-auto h-auto max-h-[600px] rounded-xl block"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== HMVB Section (Combined Text & Images) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c5e] mb-6 leading-snug">
                Hydrogeological Modeling of the Varuna River Basin
              </h2>

              <div className="space-y-5 text-[#2c3e50] text-base md:text-lg leading-relaxed text-justify mb-8">
                <p>
                  
                  <strong className="text-[#1a3c5e]">Hydrogeological modeling</strong>{' '}
                   aims to understand the complex interactions
                  between surface water and groundwater in the basin. The modeling work is essential
                  for developing effective strategies for river rejuvenation, as it provides insights
                  into the flow of water, the movement of pollutants, and the impact of various interventions.
                </p>
                <p>
                  The hydrogeological modeling process involves collecting and analyzing data on the
                  geology, topography, and hydrology of the Varuna River Basin. This includes information
                  on the type and distribution of rocks and soils, the elevation and slope of the land,
                  and the patterns of surface water flow. The data is used to create a detailed digital
                  representation of the basin, which is then used to simulate the movement of water and pollutants.
                </p>
              </div>

              {/* Images Side-by-Side within the same box */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 p-2 border border-gray-200">
                  <Image
                    src="/activities/activities3.png"
                    alt="HMVB - Varuna Basin Analysis"
                    width={700}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 p-2 border border-gray-200">
                  <Image
                    src="/activities/activities4.png"
                    alt="HMVB - Hydrogeological Model"
                    width={700}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== Varanasi Sewerage Infrastructure Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c5e] mb-6 leading-snug">
                Sewage Infrastructure for thr River Rejuvenation
              </h2>

              <div className="space-y-5 text-[#2c3e50] text-base md:text-lg leading-relaxed text-justify mb-8">
                <p>
                  Comprehensive assessment of the existing sewage infrastructure in Varanasi is a crucial component of our ongoing rejuvenation efforts. By mapping the network of branch sewers, rising mains, and sewage treatment plants (STPs), we can effectively identify operational bottlenecks and areas requiring immediate capacity upgrades.
                </p>
                <p>
                  Continuous field surveys and site investigations allow experts to monitor raw sewage interception and diversion mechanisms. Upgrading these networks ensures that untreated wastewater flows are efficiently redirected to the treatment facilities away from the sacred Ganga river, directly translating to improved local water quality.
                </p>
              </div>

              <div className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 p-2 border border-gray-200 w-full">
                  <Image
                    src="/activities/pic5.png"
                    alt="Varanasi River and Sewers"
                    width={1600}
                    height={900}
                    className="w-full h-auto rounded-xl block"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          
          {/* ===== Sources of Ganga Pollution Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c5e] mb-6 leading-snug">
                Sources of Ganga Pollution
              </h2>

              <div className="space-y-5 text-[#2c3e50] text-base md:text-lg leading-relaxed text-justify mb-8">
                <p>
                  The pollution of the Ganga river is a complex issue driven by rapid urbanization, industrialization, and exponential population growth. These factors lead to a surge in point and non-point pollution sources, which directly contribute to severe water-borne diseases and public health challenges.
                </p>
                <p>
                  <strong>Point Sources</strong> primarily consist of municipal sewage (accounting for ~80% of the daily discharge at ~1.3 billion liters/day) and industrial effluents containing heavy metals, cyanides, and toxic chemicals from various manufacturing sectors. <strong>Non-Point Sources</strong> span a wide array of activities including agricultural runoff from rural settlements, open defecation, disposal of solid waste and floral offerings, and widespread impacts from mass bathings. Understanding this entire spectrum is vital for targeted river rejuvenation.
                </p>
              </div>

              <div className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 p-2 border border-gray-200 w-full">
                  <Image
                     src="/activities/pic3.png"
                    alt="Sources of Ganga Pollution Flowchart"
                    width={1600}
                    height={900}
                    className="w-full h-auto rounded-xl block bg-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Popup Modal for Activities ===== */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-3xl md:w-3/4 rounded-3xl overflow-hidden border ${selectedActivity.borderColor} bg-gradient-to-br ${selectedActivity.gradient} p-8 shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/30 cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/30 flex-shrink-0">
                  <selectedActivity.icon className="w-10 h-10 text-white" />
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-sm font-semibold tracking-wider mb-3 border border-white/20">
                    ACTIVITY {selectedActivity.id}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {selectedActivity.title}
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-inner">
                <h4 className="text-white/90 font-semibold text-xl mb-6 flex items-center justify-center md:justify-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  Key Objectives
                </h4>
                <ul className="space-y-5">
                  {(selectedActivity as any).detailedPoints.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-white text-lg md:text-xl leading-relaxed">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold mt-0.5 border border-white/30">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}