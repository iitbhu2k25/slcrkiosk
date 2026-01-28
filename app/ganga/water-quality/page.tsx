'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Droplets } from 'lucide-react';

const documents = [
    {
        title: 'PIB Release - December 4th',
        description: 'Press Information Bureau release regarding Ganga water quality and NMCG initiatives.',
        file: '/new/PIB_4_12.pdf',
        type: 'PDF',
        size: '1.4 MB',
    },
    {
        title: 'NMCG Targets Achieved',
        description: 'PIB release highlighting the targets achieved by NMCG in water quality improvement.',
        file: '/new/PIB_NMCG_Target_Achieved.pdf',
        type: 'PDF',
        size: '156 KB',
    },
    {
        title: 'Water Quality Monitoring',
        description: 'Detailed report on water quality monitoring across the Ganga river basin.',
        file: '/new/PIB_Water_Quality_Monitoring.pdf',
        type: 'PDF',
        size: '87 KB',
    },
];

export default function WaterQualityPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('/new/gangavns2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Page Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center mb-12"
                    >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                            <Droplets className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
                            Water Quality
                        </h1>
                        <p className="text-lg text-white/90 text-center drop-shadow-lg">
                            PIB Releases & Monitoring Reports
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 leading-relaxed mb-12 text-center drop-shadow-lg"
                    >
                        Access official Press Information Bureau (PIB) releases and reports
                        on water quality monitoring under the Namami Gange Programme.
                    </motion.p>

                    {/* Documents List */}
                    <div className="space-y-6">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={doc.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * (index + 2) }}
                                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 hover:bg-white transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                        <FileText className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {doc.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {doc.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-gray-400">
                                                {doc.type} • {doc.size}
                                            </span>
                                            <div className="flex gap-2">
                                                <a
                                                    href={doc.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    View
                                                </a>
                                                <a
                                                    href={doc.file}
                                                    download
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                                                >
                                                    <Download className="w-4 h-4" />
                                                    Download
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
