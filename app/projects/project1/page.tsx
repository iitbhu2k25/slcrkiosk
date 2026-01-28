'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Team DSS members with photos
const teamMembers = {
  principalInvestigators: [
    {
      name: "Prof. Anurag Ohri",
      designation: "Professor, Dept. of Civil Engg., IIT (BHU), Varanasi",
      role: "Principal Investigator",
      image: "/project_images/DSS/aos.jpg",
    },
    {
      name: "Prof. Pramod Soni",
      designation: "Assistant Professor, Dept. of Civil Engg., IIT (BHU), Varanasi",
      role: "Co-Principal Investigator",
      image: "/project_images/DSS/Picture2.jpg",
    },
    {
      name: "Prof. Shishir Gaur",
      designation: "Assistant Professor, Dept. of Civil Engg., IIT (BHU), Varanasi",
      role: "Coordinator",
      image: "/project_images/DSS/sgsir.png",
    },
  ],
  researchTeam: [
    {
      name: "Dr. Akash Tiwari",
      designation: "Research Associate",
      image: "/project_images/DSS/akss.JPG",
    },
    {
      name: "Dr. Alok Raj",
      designation: "Young Professional (Data Analyst)",
      image: "/project_images/DSS/Picture4.png",
    },
    {
      name: "Dr. Anand",
      designation: "Young Professional (Project Coordination)",
      image: "/project_images/DSS/Picture5.jpg",
    },
    {
      name: "Dr. Arkadeep Dutta",
      designation: "Young Professional (Social Community Expert)",
      image: "/project_images/DSS/Picture6.png",
    },
    {
      name: "Shri. Rajarshi Bhattacharjee",
      designation: "Young Professional (Mathematical Modelling)",
      image: "/project_images/DSS/Picture7.jpg",
    },
    {
      name: "Shri. Hariom Singh Rathore",
      designation: "Young Professional (Programmer)",
      image: "/project_images/DSS/Picture8.png",
    },
    {
      name: "Shri. Rajat",
      designation: "Junior Research Fellow (JRF)",
      image: "/project_images/DSS/rajat.jpg",
    },
    {
      name: "Shri Rajkumar Choudhury",
      designation: "Junior Research Fellow (JRF)",
      image: "/project_images/DSS/Picture10.jpg",
    },
    {
      name: "Ms. Muskan Gupta",
      designation: "Junior Research Fellow (JRF)",
      image: "/project_images/DSS/Picture11.jpg",
    },
    {
      name: "Mr. Mohd. Anas Khan",
      designation: "Project Assistant",
      image: "/project_images/DSS/Picture12.jpg",
    },
    {
      name: "Ms. Aditi Mishra",
      designation: "Project Assistant",
      image: "/project_images/DSS/Picture13.jpg",
    },
    {
      name: "Mr. Gaurav",
      designation: "Project Assistant",
      image: "/project_images/DSS/Picture15.png",
    },
  ],
  admin: [
    
    {
      name: "Mr. Vivek Kumar Sen",
      designation: "Project Assistant",
      image: "/project_images/DSS/Picture14.png",
    },
  ],
};

export default function DSS() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/DSS2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block text-cyan-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
              Project DSS-WRM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              Decision Support System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            For Water Resource Management
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About DSS Section - Side by Side Layout */}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About DSS</h2>
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This project addresses the critical need for a comprehensive <strong className="text-primary">Decision Support System (DSS)</strong> to manage water resources effectively. The DSS integrates sophisticated models and simulations to support sustainable Water Resource Management, ultimately contributing to the achievement of Sustainable Development Goals (SDGs).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Water Resource Management is a complex, multi-dimensional challenge exacerbated by climate change, urban expansion, and socio-economic dynamics. The aim of this DSS is to provide holistic solutions to water management by combining hydrological, socio-economic, and ecological factors through an integrated modeling framework.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The system analyzes basin water dynamics through hydrological models, scenario generation, forecasting and data analytics. It integrates ground water and hydrological models to create a comprehensive river management plan for the Varuna River Basin.
                </p>
              </div>
              {/* Added Learn More Link styled as a Button */}
              <div className="mt-8">
                <a 
                  href="https://slcrdss.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right - DSS Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px]" // Ensure height on mobile and full height on desktop
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                <Image
                  src="/project_images/DSS1.jpeg"
                  alt="Decision Support System Visualization"
                  fill
                  quality={100}
                  className="object-contain p-2" // Changed to object-contain to prevent zooming/cropping
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
                  src="/proj1.png"
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

      {/* Team DSS Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Team DSS</h2>
            <p className="text-gray-600">The experts driving innovation in water resource management</p>
          </motion.div>

          {/* Principal Investigators - Centered */}
          <div className="mb-16">
            {/* <h3 className="text-2xl font-bold text-primary mb-8 text-center">Principal Investigators</h3> */}
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.principalInvestigators.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center w-56"
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

          {/* Research and Development Team - 6 per row */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Research and Development Team</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {teamMembers.researchTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="text-center"
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

          {/* Admin Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Admin Team</h3>
            <div className="flex justify-center">
              {teamMembers.admin.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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