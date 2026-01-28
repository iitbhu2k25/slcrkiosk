"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// ✅ Types
interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroText {
  title: string;
  description: string;
}

// Hero Data (Images & Text)
const heroSlider: HeroSlide[] = [
  { src: "/img/pm2.JPG", alt: "Image 1" },
  { src: "/img/ganga-ghat-haridwar2-attr-hero.jpg", alt: "Image 2" },
  { src: "/img/Varanasi-photography-00002.jpg", alt: "Image 3" },
  { src: "/img/slcr3img.JPG", alt: "Image 4" },
];

const heroText: HeroText = {
  title: "About SLCR",
  description:
    "Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the joint initiative by the Hon’ble Prime Minister of India, H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen. A Memorandum of Understanding (MoU) was signed between the Ministry of Jal Shakti and the Danish Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.",
};

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col">
      {/* Hero Slider */}
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000 }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {heroSlider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-white">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Text */}
      <div className="w-full flex flex-grow items-center justify-center px-4 sm:px-6 md:px-12 text-gray-900 bg-white h-[35vh] sm:h-[30vh] md:h-[25vh] lg:h-[20vh] xl:h-[15vh]">
        <div className="max-w-7xl text-center">
          <p className="text-base sm:text-lg">{heroText.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
