'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Gallery sections with their images from folders
const gallerySections = [
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
    id: 'events',
    title: 'Events',
    description: 'Workshops, conferences and activities',
    images: [
      '/gallery/Events/pic2.jpg',
      '/gallery/Events/pic1.jpg',
      '/gallery/Events/pic3.png',
      '/gallery/Events/pic4.jpg',
      '/gallery/Events/pic5.jpg',
      '/gallery/Events/pic6.jpg',
      '/gallery/Events/pic7.jpg',
      '/gallery/Events/pic8.jpg',
      '/gallery/Events/pic9.jpg',
    ],
    coverImage: '/gallery/Events/pic2.jpg',
  },
  {
    id: 'visitors',
    title: 'Visitors',
    description: 'Distinguished visitors and collaborators',
    images: [
      '/gallery/visitors/Mr_Dheeraj_Joshi_Director_NMCG.png',
      '/gallery/visitors/pic1.png',
      '/gallery/visitors/ISRO_MEMBERS.png',
      
      
    ],
    coverImage: '/gallery/visitors/Mr_Dheeraj_Joshi_Director_NMCG.png',
  },
  {
    id: 'field_work',
    title: 'Field work',
    description: 'Data sampling and collection',
    images: [
      '/gallery/field_work/new1.jpg',
      '/gallery/field_work/new2.jpg',
      '/gallery/field_work/new3.jpg',
      '/gallery/field_work/new4.jpg',
      '/gallery/field_work/new5.jpg',
      '/gallery/field_work/Picture1.jpg',
      '/gallery/field_work/Picture2.jpg',
      '/gallery/field_work/Picture3.jpeg',
      '/gallery/field_work/Picture5.jpg',
      '/gallery/field_work/Picture6.jpg',
      '/gallery/field_work/Picture7.jpeg',
      '/gallery/field_work/Picture8.jpg',
      '/gallery/field_work/slcr14.jpg',
      '/gallery/field_work/slcr10.jpg',
      '/gallery/field_work/slcr18.jpg',
      '/gallery/field_work/new.avif',
    ],
    coverImage: '/gallery/field_work/new.avif',
  },
];

// Main viewer component for active section
function MainViewer({
  section
}: {
  section: typeof gallerySections[0];
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [localIndex, setLocalIndex] = useState(0);

  useEffect(() => {
    setLocalIndex(0);
  }, [section.id]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setLocalIndex((prev) => (prev + 1) % section.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, section.images.length, section.id]);

  return (
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-400 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-xl">{section.title}</h3>
          <p className="text-white/70 text-sm">{section.description}</p>
        </div>
        <div className="text-yellow-400 text-sm font-medium">
          {isPaused && <span className="ml-2"> Paused</span>}
        </div>
      </div>

      {/* Main Image */}
      <div className="relative aspect-[16/9] bg-gray-100">
        <Image
          src={section.images[localIndex]}
          alt={`${section.title} - Image ${localIndex + 1}`}
          fill
          className="object-contain"
          quality={100}
        />
      </div>

      {/* Thumbnails Row */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {section.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLocalIndex(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${idx === localIndex
                  ? 'border-primary ring-2 ring-primary/30'
                  : 'border-gray-200 hover:border-gray-400'
                }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={56}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MediaGalleryPage() {
  const [activeSection, setActiveSection] = useState<string>(gallerySections[0].id);

  const activeSectionData = gallerySections.find(s => s.id === activeSection) || gallerySections[0];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content with Integrated Header */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          
          {/* --- INTEGRATED HEADER (TEXT STYLE) --- */}
          <div className="text-center mb-12">
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003366] uppercase leading-tight mb-3"
            >
              The SLCR Gallery: An Initiative of <br className="hidden md:block"/>
              Smart Laboratory on Clean Rivers (SLCR), IIT BHU Varanasi
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-gray-500 italic font-medium"
            >
              A gallery for public awareness, conservation and restoration of the river
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {/* Image floated to the right */}
            <div className="float-right ml-6 mb-4 w-full sm:w-[350px] md:w-[400px] not-prose">
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/gallery/main_page_gif.gif"
                  alt="A view of the Ganga River in Varanasi"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2 italic">
                A view of the Ganga River in Varanasi
              </p>
            </div>

            {/* Text content that wraps around the image */}
            <p className="text-gray-700 leading-relaxed mb-6 text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              The Ganga River is the lifeline of India, flowing through the heart of the country and sustaining
              millions of lives along its banks. Revered as a sacred river and a symbol of India&apos;s rich cultural
              heritage, the Ganga faces unprecedented challenges from pollution, industrial effluents, and
              urbanization. The Government of India, under the leadership of Hon&apos;ble Prime Minister Shri Narendra Modi,
              has taken significant steps towards the rejuvenation of the Ganga through the Namami Gange Programme.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              The <strong className="text-primary">Smart Laboratory on Clean Rivers (SLCR)</strong> initiative represents
              a landmark collaboration between India and Denmark, conceptualized during the meeting between the Hon&apos;ble
              Prime Minister of India and the Prime Minister of Denmark. This joint venture aims to develop innovative
              solutions for river restoration through cutting-edge research, technology transfer, and capacity building.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              In the sacred city of <strong>Varanasi</strong>, the SLCR initiative takes special significance. The city,
              also known as Kashi or Banaras, derives its very name from two rivers - the <strong className="text-primary">Varuna</strong> in
              the north and the <strong className="text-primary">Assi</strong> in the south, both tributaries of the Ganga. The Varuna River,
              in particular, has been a focus of restoration efforts as it flows into the holy Ganga at the northern
              boundary of the city.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Unlike the main Ganges stream, the Varuna has suffered from reduced flow and heavy encroachment.
              The water, which should be a lifeline for the northern districts, often stagnates. A lack of
              dissolved oxygen promotes the growth of anaerobic bacteria, leading to foul odors and a decline
              in aquatic life. The present situation reflects decades of indifference towards the environment.
              The basin has been treated as a reservoir for dumping waste—plastic bags, industrial effluent
              from small-scale dyeing units, and untreated sewage.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Such exogenic activities have robbed the river of its pristine glory. Therefore, collective action
              from all stakeholders—government, academia, and citizens—is needed to bring &quot;Varuna&quot; back to life.
              <strong className="text-primary"> The Smart Laboratory on Clean River (SLCR) at IIT (BHU)</strong> has
              made a remarkable effort by establishing this digital SLCR Gallery.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              The SLCR at IIT (BHU) Varanasi serves as a Living Laboratory where global knowledge meets local wisdom.
              Through a multi-disciplinary approach involving hydrology, environmental science, social engagement, and
              policy research, the laboratory works towards developing sustainable solutions for river rejuvenation.
              The initiative brings together experts from Indian Institutes of Technology, Danish universities, and
              various government bodies to create a collaborative platform for knowledge exchange.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              This digital gallery serves as a window into the various activities, research initiatives, field work,
              and events organized under the SLCR umbrella. Through these visual narratives, we aim to inspire
              collective action and raise public awareness about the importance of river conservation for our
              future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">SLCR Gallery</h2>
            <p className="text-gray-600">
              Click on a category to view images. Hover to pause.
            </p>
          </motion.div>

          {/* Category Selection - Single Row Above Viewer */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-3">
              {gallerySections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => setActiveSection(section.id)}
                  className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${activeSection === section.id
                      ? 'ring-3 ring-primary shadow-xl scale-105'
                      : 'hover:scale-102'
                    }`}
                >
                  <div className="w-28 sm:w-32 h-20 sm:h-24 relative">
                    <Image
                      src={section.coverImage}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <h4 className="text-white font-semibold text-xs sm:text-sm drop-shadow-lg text-center leading-tight">
                        {section.title}
                      </h4>
                    </div>

                    {/* Active Indicator */}
                    {activeSection === section.id && (
                      <div className="absolute top-1 right-1 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                        ●
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Viewer */}
          <MainViewer section={activeSectionData} />
        </div>
      </section>
    </div>
  );
}