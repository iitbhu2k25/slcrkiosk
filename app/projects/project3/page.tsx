'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Team EPFA members with photos
const teamMembers = {
  principalInvestigators: [
    {
      name: "Prof. Shreyans Kumar Jain",
      designation: "Professor, IIT (BHU), Varanasi",
      role: "Principal Investigator",
      image: "/project_images/EPFA/image2.jpg",
    },
  ],
  researchTeam: [
    {
      name: "Dr. Varun Shukla",
      designation: "Research Associate (III)",
      image: "/project_images/EPFA/image4.png",
    },
    {
      name: "Shruti Vilas Chaudhari",
      designation: "Junior Research Fellow (JRF)",
      image: "/project_images/EPFA/image3.png",
    },
    {
      name: "Rajyaguru Soham Nipulbhai",
      designation: "Junior Research Fellow (JRF)",
      image: "/project_images/EPFA/image6.jpg",
    },
    {
      name: "Smita Patel",
      designation: "Project Assistant",
      image: "/project_images/EPFA/image5.jpg",
    },
    {
      name: "Rakesh Kumar Yadav",
      designation: "Project Assistant",
      image: "/project_images/EPFA/image1.jpg",
    },
  ],
};

export default function EPFAProject() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/pollutants.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-purple-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
              Project EPFA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
              Emerging Pollutants & Fingerprint Analysis
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Characterization and Remediation Strategies
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section - Side by Side Layout */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Modified grid to items-stretch for equal height columns */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About EPFA</h2>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong className="text-primary">Characterization of Emerging Pollutants & Fingerprint Analysis (EPFA)</strong> project aims to create a detailed fingerprint library of contaminants found in the Varuna River system. This comprehensive approach enhances water quality monitoring capabilities and enables precise identification of pollution sources.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The project focuses on identifying emerging contaminants including pharmaceuticals, personal care products, microplastics, and industrial chemicals. Advanced analytical techniques are employed to characterize these pollutants and understand their environmental fate and transport.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through collaboration with the <strong className="text-primary">University of Copenhagen</strong>, the team is developing effective remediation strategies and creating a replicable framework for pollutant monitoring in river systems across India.
                </p>
              </div>
            </motion.div>

            {/* Right - EPFA Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                <Image
                  src="/project_images/pollutants1.jpg"
                  alt="Emerging Pollutants Analysis"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Report Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Progress Report</h2>
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg w-full">
                <Image
                  src="/P_3.0.jpg"
                  alt="Progress Report"
                  width={1200}
                  height={600}
                  quality={100}
                  className="w-full object-contain"
                  style={{ minHeight: '500px' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team EPFA Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Team EPFA</h2>
            <p className="text-gray-600">The team leading pollutant characterization research</p>
          </motion.div>

          {/* Principal Investigators - Centered */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.principalInvestigators.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center w-66"
                >
                  <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      quality={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Team - CENTERED */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Research and Development Team</h3>
            
            {/* Changed from Grid to Flex to enable centering */}
            <div className="flex flex-wrap justify-center gap-6">
              {teamMembers.researchTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  // Added specific width to maintain consistent card size
                  className="text-center w-48"
                >
                  <div className="w-full aspect-square mb-3 rounded-xl overflow-hidden shadow-md bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      quality={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.designation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}