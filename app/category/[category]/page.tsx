'use client';

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { technologies, categories } from "@/lib/data";
import TechnologyCard from "@/components/technology/TechnologyCard";

export default function CategoryPage() {
  const { category } = useParams();

  const categoryBackgrounds: Record<string, string> = {
    decentralized: "/category_img/Decentralised.jpg",
    stp_improvement: "/category_img/STP_Improvement.jpg",
    smart_monitoring: "/category_img/water_quality.webp",
    sludge_treatment: "/category_img/Solid_waste.png",
  };

  const backgroundImage = categoryBackgrounds[category as string];
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => tech.category === category);
  }, [category]);

  const title = categories[category as keyof typeof categories] || "Technologies";

  return (
    <main
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* --- Overlay to make text readable --- */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            >
              {title}
            </h2>
            <p
              className="text-lg md:text-xl text-gray-200 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Innovative wastewater technologies under this category
            </p>
          </div>

          {/* Technologies Grid */}
          {filteredTechnologies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechnologies.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-white">
              <h3 className="text-2xl font-bold mb-2">No technologies found</h3>
              <p className="text-gray-300">Try another category</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
