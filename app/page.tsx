'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KioskCard from '@/components/kiosk/KioskCard';
import {
  Info,
  Target,
  Droplets,
  ImageIcon,
  Calendar,
  Briefcase,
  Mail,
  Users,
} from 'lucide-react';

export default function HomePage() {
  const sections = [
    {
      title: 'About SLCR',
      description: 'Smart Laboratory on Clean Rivers',
      icon: Info,
      href: '/about/slcr',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Partner Institutes',
      description: 'Our collaborating organizations',
      icon: Users,
      href: '/about/partner',
      gradient: 'from-indigo-600 to-indigo-400'
    },
    {
      title: 'Activities',
      description: 'Our projects & initiatives',
      icon: Target,
      href: '/activities',
      gradient: 'from-purple-600 to-purple-400'
    },
    {
      title: 'Projects',
      description: 'Research & development',
      icon: Briefcase,
      href: '/projects',
      gradient: 'from-violet-600 to-violet-400'
    },
    {
      title: 'Namami Gange',
      description: 'Clean Ganga mission',
      icon: Droplets,
      href: '/ganga',
      gradient: 'from-cyan-600 to-cyan-400'
    },
    {
      title: 'RHAR 2025',
      description: 'River Health Assessment',
      icon: Calendar,
      href: '/event/rhar',
      gradient: 'from-orange-600 to-orange-400'
    },
    {
      title: 'SLCR Gallery',
      description: 'Photos & videos',
      icon: ImageIcon,
      href: '/media',
      gradient: 'from-pink-600 to-pink-400'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch',
      icon: Mail,
      href: '/contact',
      gradient: 'from-green-500 to-green-300'
    },
  ];

  const partners = [
    { src: '/footer/iitbhu.avif', alt: 'IIT BHU', name: 'IIT BHU' },
    { src: '/footer/IIT_Madras_Logo.svg.png', alt: 'IIT Madras', name: 'IIT Madras' },
    { src: '/footer/iitbombay.avif', alt: 'IIT Bombay', name: 'IIT Bombay' },
    { src: '/footer/iitdelhi.avif', alt: 'IIT Delhi', name: 'IIT Delhi' },
    { src: '/footer/bhu.png', alt: 'BHU', name: 'BHU' },
    { src: '/footer/aarhus_university.png', alt: 'Aarhus University', name: 'Aarhus' },
    { src: '/footer/copenhagen.png', alt: 'University of Copenhagen', name: 'Copenhagen' },
    { src: '/footer/hokkaido-university-logo-png_seeklogo-508090.png', alt: 'Hokkaido University', name: 'Hokkaido' },
    { src: '/footer/university_ofLyon.png', alt: 'University of Lyon', name: 'Lyon' },
    { src: '/footer/ganga.jpg', alt: 'NMCG', name: 'NMCG' },
    { src: '/footer/cgwb_logo_2.jpg', alt: 'CGWB', name: 'CGWB' },
    { src: '/footer/india_wris.png', alt: 'India WRIS', name: 'India WRIS' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated GIF Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/img/main_page_gif_old.gif"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/65 to-slate-900/70" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col py-6 px-4">
        {/* Top Row - Ministry & Namami Gange Logos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-4"
        >
          {/* Ministry of Jal Shakti - Top Left */}
{/* CHANGE: bg-white/10 -> bg-white */}
<div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 backdrop-blur-sm"> 
  <Image
    src="/Ministry_of_Jal_Shakti.svg"
    alt="Ministry of Jal Shakti"
    fill
    className="object-contain p-1"
  />
</div>

          {/* Namami Gange - Top Right */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-xl p-2 backdrop-blur-sm">
            <Image
              src="/footer/ganga.jpg"
              alt="Namami Gange"
              fill
              className="object-contain p-1"
            />
          </div>
        </motion.div>

        {/* Header */}
       <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 -mt-50 relative z-20" 
        >
          {/* SLCR Logo - Larger */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mb-0 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <Image
                src="/img/slcr_logo.avif"
                alt="SLCR Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg"
          >
            Smart Laboratory on{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              Clean Rivers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4 drop-shadow"
          >
            A Joint Initiative by India and Denmark for Sustainable River Rejuvenation
          </motion.p>
        </motion.div>

        {/* Card Grid */}
        <div className="flex-1 mb-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {sections.map((section, index) => (
                <KioskCard
                  key={section.title}
                  {...section}
                  delay={0.1 * index + 0.8}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partners & Associates Footer - Single Row Carousel */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl py-4 px-4 border border-white/20"
        >
          <h3 className="text-white/60 text-sm text-center mb-4 font-semibold">
            OUR PARTNERS & ASSOCIATES
          </h3>

          
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 flex-shrink-0"
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white/90 rounded-xl p-2 shadow-lg">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-white/70 text-xs text-center whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}