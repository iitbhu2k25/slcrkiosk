"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const fetchGalleryImages = (): string[] => [
  "/image2.jpg",
  "/slcr18.jpg",
  "/slcr3img.JPG",
  "/slcr10.jpg",
  "/slcr14.jpg",
  "/image4.jpg",
];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setImages(fetchGalleryImages()), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
    },
    [selectedIndex, images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center text-[#081f5c] drop-shadow-md mb-12"
      >
        Explore Our Gallery
      </motion.h1>

      {/* Responsive Grid Layout */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-10 md:px-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white hover:shadow-xl transition-all"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox - Full-Screen Image Preview */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative w-[90vw] max-w-4xl p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Enlarged Gallery Image ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="w-full max-h-[80vh] rounded-lg shadow-xl object-contain"
              />

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-all"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={28} />
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-all"
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex !== null
                      ? (selectedIndex - 1 + images.length) % images.length
                      : 0
                  )
                }
              >
                <ArrowLeft size={28} />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-all"
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex !== null
                      ? (selectedIndex + 1) % images.length
                      : 0
                  )
                }
              >
                <ArrowRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
