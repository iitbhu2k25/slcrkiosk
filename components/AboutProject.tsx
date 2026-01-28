"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { LuBookOpen } from "react-icons/lu";
import { IconType } from "react-icons";

// ✅ Define types for the project sections
interface ProjectSection {
  name: string;
  icon: IconType;
  content: string;
  points?: string[];
  outcome?: string;
}

interface ProjectData {
  sections: ProjectSection[];
}

const AboutProject: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const projectData: ProjectData = {
    sections: [
      {
        name: "About Us",
        icon: FiUsers,
        content:
          "Smart Laboratory for Clean Rivers (SLCR) is dedicated to finding sustainable solutions for the rejuvenation of streams and rivers. Our team of experts and scientists work together to create and exchange knowledge, manage and co-create solutions, and provide training, research, and innovation.",
      },
      {
        name: "Our Aim",
        icon: GoGoal,
        content:
          "To bring global knowledge and solutions on holistic and sustainable rejuvenation of small rivers that are economically, environmentally and socially sustainable in the local context. The government of India is dedicated towards clean and sustainable rivers in India. In order to do so, Hon'ble Prime Minister Shri Narendra Modi conceptualised the visionary Smart Laboratory for Clean Rivers (SLCR) an initiative with his Danish counterpart. The Smart Laboratory in Varanasi is a platform for knowledge creation and exchange, management and transfer/co-creation, training, research, and innovation. It is providing global and local sustainable solutions for the rejuvenation of streams/rivers and is jointly managed by the Indian and Danish sides.",
      },
      {
        name: "Our Objectives",
        icon: LuBookOpen,
        content: "The broad objectives can be summarized as under:",
        points: [
          "Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation to achieve clean river water",
          "To bring the global solutions on current challenges in the field of clean river water and conduct research and development to fit in real environment through Living lab approach to make them scalable and economically attractive.",
          "To Support NMCG in achieving its vision by focusing on small rivers.",
          "Develop the repository of all collected knowledge and technologies, which can be shared through various initiatives like River Cities Alliance/Global River Cities Alliance to perform rejuvenation work on other small rivers or tributaries in India and in GRCA member countries.",
        ],
        outcome:
          "The main outcomes of the SLCR will be successful demonstration of global solutions in the local context, which have a sound business model and can be up-scaled to other small rivers/tributaries.",
      },
    ],
  };

  return (
    <div className="min-h-[500px] bg-[#F5F5DC] flex flex-col items-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          About Our Project
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Learn more about our team, our mission, and what drives us to create
          exceptional solutions.
        </p>

        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {/* Sidebar Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-1/4">
            {projectData.sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === index;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg text-left flex items-center gap-x-2 cursor-pointer transition font-medium ${
                    isActive
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <Icon
                    className={`text-xl ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  />
                  {section.name}
                </motion.button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-8 bg-white rounded-lg w-full md:w-3/4">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-700">
              {projectData.sections[activeSection].name}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {projectData.sections[activeSection].content}
            </p>

            {projectData.sections[activeSection].points && (
              <ul className="mt-6 space-y-3">
                {projectData.sections[activeSection].points!.map(
                  (point, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg text-gray-700 shadow-sm"
                    >
                      {point}
                    </li>
                  )
                )}
              </ul>
            )}

            {projectData.sections[activeSection].outcome && (
              <p className="mt-6 text-lg text-gray-700 font-medium">
                Outcome: {projectData.sections[activeSection].outcome}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
