"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const logos: string[] = [
    "/img/iitbhu.png",
    "/img/ganga.jpg",
    "/img/cgwb_logo_2.jpg",
    "/img/golden_jubilee_logo.png",
    "/img/logo.png",
    "/img/download.png",
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 py-3 text-slate-300">
      {/* Logos */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 bg-slate-700/20 rounded-lg hover:bg-slate-700/30 transition-all"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={60}
              height={60}
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-2/3 mx-auto h-px bg-slate-600/50 mb-2"></div>

      {/* Text */}
    <div className="text-center space-y-1">
  <p className="text-white text-xs md:text-sm tracking-wide">
    © {new Date().getFullYear()} <span className="font-semibold">SLCR</span> | All Rights Reserved
  </p>
  <p className="text-white/90">
    SLCR, Indian Institute of Technology (BHU), Varanasi
  </p>
</div>

    </footer>
  );
};

export default Footer;
