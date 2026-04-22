'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const gallerySections = [
  {
    id: 'events',
    title: 'Events',
    description: 'Workshops, conferences and activities',
    images: [
      '/gallery/Events/pic2.jpg',
      '/gallery/Events/pic10.jpeg',
      '/gallery/Events/pic11.jpeg',
      '/gallery/Events/pic1.jpg',
      '/gallery/Events/pic3.png',
      '/gallery/Events/pic4.jpg',
      '/gallery/Events/pic5.jpg',
      '/gallery/Events/pic6.jpg',
      '/gallery/Events/Picture8.jpg',
      '/gallery/Events/Picture1.jpg',
      '/gallery/Events/Picture3.jpg',
      '/gallery/Events/pic7.jpg',
      '/gallery/Events/pic8.jpg',
      '/gallery/Events/pic9.jpg',
    ],
    coverImage: '/gallery/Events/pic2.jpg',
  },
  {
    id: 'site-visits',
    title: 'Site Visits',
    description: 'Field surveys and site investigations',
    images: [
      '/gallery/site_visits/image2.jpg',
      '/gallery/site_visits/visit1.avif',
      '/gallery/site_visits/visit2.avif',
      '/gallery/site_visits/BLW_STP.jpeg',
      '/gallery/site_visits/VARUNAPUL_NADESAR.jpeg',
      '/gallery/site_visits/new.avif',
    ],
    coverImage: '/gallery/site_visits/image2.jpg',
  },
  
  {
    id: 'visitors',
    title: 'Visitors',
    description: 'Distinguished visitors and collaborators',
    images: [
      '/gallery/visitors/Picture5.jpg',
      // '/gallery/visitors/Mr_Dheeraj_Joshi_Director_NMCG.png',
      // '/gallery/visitors/pic1.png',
      '/gallery/visitors/ISRO_MEMBERS.png', 
      '/gallery/Events/pic7.jpg',
      
    ],
    coverImage: '/gallery/visitors/Picture5.jpg',
  },
  {
    id: 'field_work',
    title: 'Field work',
    description: 'Data sampling and collection',
    images: [
      // '/gallery/field_work/new1.jpg',
      // '/gallery/field_work/new2.jpg',
      '/gallery/field_work/new3.jpg',
      '/gallery/field_work/slcr18.jpg',
      '/gallery/field_work/Picture1.jpg',
      '/gallery/field_work/new6.jpeg',
      '/gallery/field_work/Picture3.jpeg',
      '/gallery/field_work/Picture5.jpg',
      '/gallery/field_work/Picture6.jpg',
      '/gallery/field_work/Picture7.jpeg',
      '/gallery/field_work/Picture8.jpg',
      '/gallery/field_work/slcr14.jpg',
      '/gallery/field_work/slcr10.jpg',
      '/gallery/field_work/Picture2.jpg',
      
      '/gallery/field_work/new.avif',
    ],
    coverImage: '/gallery/field_work/new.avif',
  },
  {
    id: 'outreach',
    title: 'SLCR outreach',
    description: 'Official meetings and reviews',
    images: [
      '/gallery/outreach/1.jpeg',
       '/gallery/outreach/2.jpeg',
       '/gallery/outreach/3.avif',
    ],
    coverImage: '/gallery/outreach/1.jpeg',
  },
  {
    id: 'ganga',
    title: 'Ganga at Varanasi',
    description: 'The sacred Ganga River flowing through Varanasi',
    images: [
      '/gallery/ganga/gangavns2.jpg',
      '/gallery/ganga/gangavns3.jpg',
      '/gallery/ganga/gangavns4.jpg',
    ],
    coverImage: '/gallery/gangavns.jpg',
  },
  {
    id: 'varuna',
    title: 'Varuna at Varanasi',
    description: 'The Varuna River - a tributary of Ganga',
    images: [
      '/gallery/varuna/varuna1.png',
      '/gallery/varuna/varuna3.png',
      '/gallery/varuna/varuna5.png',
      '/gallery/varuna/varuna7.png',
      '/gallery/varuna/Varuna_riverfront.jpeg',
      '/gallery/varuna/Picture16.jpeg',
      '/gallery/varuna/Isarwar.jpg',
    ],
    coverImage: '/gallery/varuna/varuna3.png',
  },
  {
    id: 'assi',
    title: 'Assi at Varanasi',
    description: 'The Assi River - a tributary of Ganga',
    images: [
      '/gallery/Assi/assi1.png',
      '/gallery/Assi/assi2.png',
      '/gallery/Assi/assi3.png',
      '/gallery/Assi/assi4.png',
    ],
    coverImage: '/gallery/Assi/assi3.png',
  },
];

export default function MediaGalleryPage() {
  const [activeSection, setActiveSection] = useState<string>(gallerySections[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const activeSectionData = gallerySections.find(s => s.id === activeSection) || gallerySections[0];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === activeSectionData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeSectionData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      
      <div className="w-[90%] mx-auto pt-6 pb-8">
      
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {gallerySections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? 'ring-3 ring-[#003366] ring-offset-2 shadow-2xl'
                    : 'shadow-md hover:shadow-xl'
                }`}
              >
                <div className="aspect-[4/2.5] relative">
                  <Image
                    src={section.coverImage}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent'
                      : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-[#003366]/80 group-hover:via-[#003366]/40'
                  }`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-2">
                    <h3 className="text-white font-bold text-xs md:text-sm leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-white/90 text-[10px] mt-0.5 line-clamp-2 hidden sm:block">
                      {section.description}
                    </p>
                  </div>
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg"
                    >
                      <div className="w-1.5 h-1.5 bg-[#003366] rounded-full" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-2">
              {activeSectionData.title}
            </h2>
            <p className="text-gray-600 text-lg flex items-center gap-2">
              <span className="bg-[#f08c3a] text-white px-2 py-0.5 rounded shadow-sm">{activeSectionData.description}</span> 
              <span className="text-gray-500">• {activeSectionData.images.length} photos</span>
            </p>
          </div>
        </motion.div>

        {/* Image Grid - Larger Images with 3 columns */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {activeSectionData.images.map((img, idx) => (
              <motion.div
                key={`${activeSection}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: idx * 0.03,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={img}
                  alt={`${activeSectionData.title} ${idx + 1}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-10 h-10 text-[#003366]" />
                  </div>
                </div>

                {/* Border Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#003366]/30 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all z-10 hover:rotate-90 duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-all hover:scale-110 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeSectionData.images[currentImageIndex]}
                  alt={`${activeSectionData.title} ${currentImageIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-all hover:scale-110 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full z-10">
              {activeSectionData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    idx === currentImageIndex
                      ? 'ring-4 ring-white scale-110'
                      : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}