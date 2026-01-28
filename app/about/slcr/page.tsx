'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Globe, Target, Building2, ChevronRight } from 'lucide-react';

export default function AboutSLCRPage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Fabulous Header */}
          <div className="text-center mb-16 pt-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 drop-shadow-sm tracking-tight"
            >
              SLCR at a Glance
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Intro Section - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
              <div className="text-gray-700 leading-relaxed text-lg text-justify">
                <h2 className="text-3xl font-bold text-primary mb-6">Indo - Denmark Partnership</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    <span className="float-left text-7xl font-bold text-primary mr-3 leading-none mt-[-8px]">E</span>
                    stablishment of Secretariat for Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the initiative discussed between the Hon'ble Prime Minister of India,
                    H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter's visit to India.
                    SLCR was also mention in the India–Denmark Joint Statement released on 3rd May 2021 during the Visit of Hon'ble Prime Minister of India, H.E. Shri.
                    Narendra Modi On 03rd May 2022 as one the initiatives both the countries looked forward eagerly to be launched. On 12th September 2022 during the
                    Hon'ble Minister of Jal Sakti's visit to Denmark, a Memorandum of Understanding was signed between the Ministry of Jal Shakti and the Danish
                    Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-md bg-white p-2 border border-gray-100 flex flex-col">
                <div className="relative flex-grow w-full">
                  <Image
                    src="/about/pm.jpg"
                    alt="Prime Ministers of India and Denmark"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 italic flex-shrink-0">
                  Hon'ble Prime Minister of India and Prime Minister of Denmark
                </p>
              </div>
            </div>

            {/* Concept Section - Image */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Concept of Smart Living Lab on Clean River (SLCR) <br className="hidden md:block" />
                Small River Rejuvenation
              </h2>
              <div className="flex justify-center mb-16">
                <Image
                  src="/about/lab_component.png"
                  alt="Concept of SLCR Components"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>

              {/* Hybrid Lab Detail Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                  <p>
                    SLCR is more than a laboratory; it is an ecosystem of learning, engagement, co-creation, and experimentation in the real environment. SLCR consists of two major components:
                  </p>
                  <p>
                    <strong>Hybrid Lab (Virtual + Secretariat):</strong> Provides the platform to bring all Govt. Dept., Stakeholders, Academician, Industries and Community to engage to evaluate the Global sustainable solutions (technologies, Policies, frameworks) and enable their implementation in local context through Engagement, Learning and Co-creation. The Hybrid lab will also enable the upscaling of the solutions to the basin level and other rivers.
                  </p>
                  <p>
                    The second component consists of the <strong>On-field Living Lab</strong> having the real field area as an experimental site and is used to demonstrate the co-creation on the field.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/about/flowchart2.avif"
                    alt="Hybrid Lab Flowchart"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>

              {/* Structure Section */}
              <h2 className="flex justify-center text-2xl md:text-3xl font-bold text-primary mb-8">Structure of SLCR</h2>

              {/* Partnership Image + Structure Image side by side */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100">
                  <Image
                    src="/about/partnership2.jpg"
                    alt="Indo-Denmark Partnership"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/about/structure.avif"
                    alt="Structure of SLCR"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                  />
                </div>
              </div>

              {/* JSC, PRC, MSWG Cards below */}
              <div className="space-y-4 mb-8">
                {/* JSC and PRC side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50/50 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-primary mb-2">Joint Steering Committee</h3>
                    <p className="text-gray-700 text-xs leading-relaxed text-justify">
                      National level committee with high-level representatives from both Denmark and India. To provide strategic guidance and review the progress activities which are identified by the Multi Stake Holder Working Group. To explore and secure funding for new projects, if necessary.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50/50 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-purple-700 mb-2">Project Review Committee</h3>
                    <p className="text-gray-700 text-xs leading-relaxed text-justify">
                      To review the progress of the ongoing projects to assist the JSC. Quality control of the proposed new projects by the Multistakeholder Working group and share recommendation with the JSC. The PRC can request for a JSC meeting if new projects are to be reapproved or if they need strategic direction.
                    </p>
                  </div>
                </div>
                {/* MSWG full width */}
                <div className="p-4 rounded-xl bg-teal-50/50 border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-teal-700 mb-2">The Multi Stakeholder Working Group</h3>
                  <p className="text-gray-700 text-xs leading-relaxed text-justify">
                    It is the platform to bring the different Central and State Government agencies, Urban Local Bodies (ULBs), District Administrations and state and central missions that are relevant for the Varuna. Share the challenges in their respective areas to SLCR. Inform the ongoing activities in their respective areas to SLCR. Establish synergy and convergence with the other schemes/initiatives. Give strategic inputs if any during framing of the individual projects to SLCR.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
