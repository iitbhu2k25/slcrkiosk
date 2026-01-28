"use client";
import Image from "next/image";
import React from "react";

interface PartnershipData {
  title: string;
  description: string;
  image: string;
}

const Partnership: React.FC = () => {
  const indoDenmarkPartnership: PartnershipData = {
    title: "Indo - Denmark Partnership",
    description: `Establishment of Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the initiative discussed between the Hon’ble Prime Minister of India, H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter’s visit to India.
      
SLCR was also mentioned in the India–Denmark Joint Statement released on 3rd May 2021 during the Visit of Hon’ble Prime Minister of India, H.E. Shri. Narendra Modi On 03rd May 2022 as one of the initiatives both the countries looked forward eagerly to be launched. On 12th September 2022 during the Hon’ble Minister of Jal Shakti’s visit to Denmark, a Memorandum of Understanding was signed between the Ministry of Jal Shakti and the Danish Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.`,
    image: "/img/partnership.jpg",
  };

  return (
    <section className="py-20 sm:py-40 bg-white flex justify-center">
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {indoDenmarkPartnership.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {indoDenmarkPartnership.description}
          </p>
        </div>

        <div className="relative w-full h-[250px] sm:h-[350px] hover:scale-105 transition duration-300 ease-in-out overflow-hidden shadow-md rounded-md">
          <Image
            src={indoDenmarkPartnership.image}
            alt={indoDenmarkPartnership.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
