'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Team SECR members with photos
const teamMembers = {
    principalInvestigators: [
        {
            name: "Prof. Shishir Gaur",
            designation: "Professor, Dept. of Civil Engg., IIT (BHU), Varanasi",
            role: "Principal Investigator",
            image: "/project_images/SECR/sgsir.png",
        },
        {
            name: "Prof. Anurag Ohri",
            designation: "Professor, Dept. of Civil Engg., IIT (BHU), Varanasi",
            role: "Co-Principal Investigator",
            image: "/project_images/SECR/ao.jpg",
        },
        
    ],
    researchTeam: [
        {
            name: "Dr. Hema Patel",
            designation: "Senior Project Scientist",
            image: "/project_images/SECR/image2.jpg",
        },
        {
            name: "Dr. Nikhilesh Singh",
            designation: "Research Associate-III",
            image: "/project_images/SECR/image7.jpg",
        },
        {
            name: "Dr. Anugrah Ray",
            designation: "Research Associate-I",
            image: "/project_images/SECR/image10.jpg",
        },
        {
            name: "Dr. Dinkar Parashar",
            designation: "Research Associate-I",
            image: "/project_images/SECR/image9.jpg",
        },
        {
            name: "Shri. Chakrawarti Patel",
            designation: "Project Assistant (Technical)",
            image: "/project_images/SECR/image1.jpg",
        },
        {
            name: "Shri Abhishek Kumar",
            designation: "Project Attendant (SLCR)",
            image: "/project_images/SECR/image6.jpg",
        },
        {
            name: "Shri Amit Kumar Sonkar",
            designation: "Project Assistant (Technical)",
            image: "/project_images/SECR/amit.jpg",
        },
    ],
    admin: [
        {
            name: "Shri. Chandan Singh",
            designation: "Senior Project Manager",
            image: "/project_images/SECR/chandan.png",
        },
        {
            name: "Shri. Krishna Tiwari",
            designation: "Project Assistant (Admin)",
            image: "/project_images/SECR/krishna.JPG",
        },
        {
            name: "Shri. Suresh Kumar Pal",
            designation: "Project Assistant (Admin)",
            image: "/project_images/SECR/image4.jpg",
        },
    ],
};

export default function SECRProject() {
    return (
        <main className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section
                className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/project_images/SECR/new3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-0" />

                {/* Floating Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="inline-block text-teal-300 text-lg sm:text-xl font-medium tracking-widest uppercase">
                            Project SLCR Secretariat
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-green-100 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                            Establishment of Secretariat
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
                    >
                        Smart Laboratory on Clean Rivers - Varanasi
                    </motion.p>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1440 80" fill="none" className="w-full">
                        <path d="M0 40L48 37C96 34 192 28 288 30C384 32 480 42 576 45C672 48 768 44 864 38C960 32 1056 24 1152 25C1248 26 1344 36 1392 41L1440 46V80H0V40Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* About Section - Side by Side Layout */}
            <section className="py-12 sm:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Modified grid to items-stretch for equal height columns */}
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About SLCR Secretariat</h2>
                            <div className="prose prose-lg max-w-none text-justify">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The <strong className="text-primary">Smart Laboratory on Clean Rivers (SLCR)</strong>
                                    , an initiative of IIT (BHU) and NMCG under the India-Denmark Green Strategic Partnership, established in Varanasi,
                                    is dedicated to bringing global sustainable solutions to current challenges in the field of clean rivers for the rejuvenation of streams and
                                    rivers through collaborative efforts with government bodies, institutions, technology providers, and local communities, using a
                                    living-lab approach at the Varuna River.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Secretariat of Smart Laboratory on Clean Rivers (SLCR) in Varanasi has been set up in Department of Civil Engineering, Indian
                                    Institute of Technology, Banaras Hindu University, Varanasi under the Green Strategic Partnership between India and Denmark.{" "}
                                    {/* --- HIGHLIGHT ADJUSTMENT HERE: font-semibold text-gray-900 (Bold Black) --- */}
                                    <span className="font-semibold text-gray-900">
                                        Work is ongoing by a team of dedicated officials on the various aspects of sustainable and holistic rejuvenation of small rivers initiating in
                                    </span>{" "}
                                    river Varuna in Varanasi which is being established as a living lab for small rivers wherein various activities and projects are being
                                    taken up in the initial phase.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - SECR Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-full min-h-[400px]"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full bg-white relative">
                                <Image
                                    src="/project_images/lab_component.png"
                                    alt="SLCR Secretariat"
                                    fill
                                    quality={100}
                                    className="object-contain p-2"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Objectives Section */}
            <section className="py-12 sm:py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-left mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">Key Objectives</h2>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        SLCR will develop the repository of all collected knowledge and technologies, which can be shared through various initiatives like River Cities Alliance/Global River Cities Alliance to perform rejuvenation work on other small rivers or tributaries in India and in GRCA member countries.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation to achieve clean river water.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        To bring the global solutions on current challenges in the field of clean river water and conduct research and development to fit in real environment through Living lab approach to make them scalable and economically attractive.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="font-bold text-primary min-w-[24px]"></span>
                                    <span>
                                        To Support NMCG in achieving its vision by focusing on small rivers & provide preliminary solution for the local problems and provide inputs for Urban River Management Plans and other interventions being carried out by other agencies.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Team SECR Section */}
            <section className="py-12 sm:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">Team SLCR Secretariat</h2>
                        <p className="text-gray-600">The dedicated team driving the SLCR vision forward</p>
                    </motion.div>

                    {/* Principal Investigators - Centered */}
                    <div className="mb-16">
                        <div className="flex flex-wrap justify-center gap-8">
                            {teamMembers.principalInvestigators.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center w-56"
                                >
                                    <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            quality={100}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Research and Development Team - CENTERED */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Research and Development Team</h3>
                        {/* Changed from Grid to Flex to enable centering of the last row */}
                        <div className="flex flex-wrap justify-center gap-5">
                            {teamMembers.researchTeam.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.03 }}
                                    // Added w-40 sm:w-44 md:w-48 to ensure consistent sizing in flex layout
                                    className="text-center w-40 sm:w-44 md:w-48"
                                >
                                    <div className="w-full aspect-square mb-3 rounded-xl overflow-hidden shadow-md bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 mb-1">{member.name}</h4>
                                    <p className="text-xs text-gray-500">{member.designation}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Admin Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center">Admin Team</h3>
                        <div className="flex justify-center">
                            {teamMembers.admin.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center w-48"
                                >
                                    <div className="w-full aspect-square mb-3 rounded-xl overflow-hidden shadow-md bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-800 mb-1">{member.name}</h4>
                                    <p className="text-xs text-gray-500">{member.designation}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}