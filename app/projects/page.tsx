'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Waves, FlaskConical, Database } from 'lucide-react';

const projects = [
  {
    id: 'project1',
    title: 'Developing a Decision Support System',
    subtitle: '',
    description: 'For water management to analyze basin water dynamics through hydrological models, scenario generation, forecasting and data analytics. Integrate ground water and hydrological models to create river management plan.',
    image: '/project_images/DSS1.jpeg',
    icon: Database,
  },
  {
    id: 'project2',
    title: 'Hydrogeological Models of the Varuna Basin',
    subtitle: '',
    description: 'Aims to find Groundwater recharge sites to enhance base flow through managed Aquifer recharge (MAR). Application of advance Geophysical techniques i.e. TEM and Mathematical modelling with Aarhus University.',
    image: '/project_images/varuna1.png',
    icon: Waves,
  },
  {
    id: 'project3',
    title: 'Characterization of Emerging Pollutants & Fingerprint Analysis',
    subtitle: '',
    description: 'Aims to create a detailed fingerprint library, enhance water quality monitoring, and propose effective remediation strategies. Jointly working with the team from the University of Copenhagen.',
    image: '/project_images/pollutants.jpg',
    icon: FlaskConical,
  },
  {
    id: 'project4',
    title: 'Establishment of Secretariat on SLCR',
    subtitle: '',
    description: 'Comprehensive assessment of river health indicators including biodiversity, water quality parameters, and sediment analysis. Development of nature-based solutions for sustainable river restoration.',
    image: '/project_images/new3.jpg',
    icon: Droplets,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/project_images/new4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block text-accent text-lg sm:text-xl font-medium tracking-widest uppercase mb-4">
              Research & Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-accent bg-clip-text text-transparent drop-shadow-2xl">
              PROJECTS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Pioneering research initiatives driving the future of river restoration
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Project Initiatives Introduction */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Our Project Initiatives</h2>
            <div className="prose prose-lg max-w-none text-justify">
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong className="text-primary">Smart Laboratory on Clean Rivers (SLCR)</strong> at IIT (BHU) Varanasi
                is at the forefront of river restoration research, implementing cutting-edge projects that combine
                scientific innovation with practical solutions. Our initiatives are designed to address the multifaceted
                challenges facing India&apos;s river systems, with a special focus on the <strong>Varuna River basin</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through strategic collaboration with <strong>Danish research institutions</strong> and leveraging advanced
                technologies, our projects span across hydrology, water quality assessment, groundwater management, and
                ecosystem restoration. Each project is meticulously designed to create scalable solutions that can be
                replicated across the Ganga basin and beyond.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our interdisciplinary approach brings together experts from environmental science, civil engineering,
                geophysics, and policy research to develop comprehensive strategies for river health restoration.
                These initiatives serve as living laboratories where theory meets practice, creating a model for
                sustainable river management in India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our key research initiatives driving innovation in river health and restoration
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`} className="block group h-full">
                  <div className="card card-hover overflow-hidden h-full flex flex-col bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-bold text-primary mb-2 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1 line-clamp-3">{project.description}</p>
                      <div className="mt-4 text-accent font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Photos Gallery */}
      <section className="py-10 bg-gray-50">
        <div className="w-full">
          <div className="flex">
            {[
              { src: '/project_images/ng5.jpg', alt: 'Project Photo 5' },
              { src: '/project_images/ng3.jpg', alt: 'Project Photo 3' },
              { src: '/project_images/ng4.jpg', alt: 'Project Photo 4' },
              { src: '/project_images/ng1.png', alt: 'Project Photo 1' },
              { src: '/project_images/ng2.png', alt: 'Project Photo 2' },
              
              
              
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 aspect-[4/3] overflow-hidden group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  quality={100}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
