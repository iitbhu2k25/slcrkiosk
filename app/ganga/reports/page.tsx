'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const reports = [
    {
        title: 'PIB Release - December 4',
        description: 'Press Information Bureau release dated December 4 regarding Namami Gange Programme updates.',
        file: '/new/PIB_4_12.pdf',
        type: 'PDF',
        size: '156 KB',
    },
    {
        title: 'PIB - NMCG Target Achieved',
        description: 'Press Information Bureau announcement about National Mission for Clean Ganga achieving key targets.',
        file: '/new/PIB_NMCG_Target_Achieved.pdf',
        type: 'PDF',
        size: '201 KB',
    },
    {
        title: 'PIB - Water Quality Monitoring',
        description: 'Press Information Bureau report on water quality monitoring initiatives under Namami Gange.',
        file: '/new/PIB_Water_Quality_Monitoring.pdf',
        type: 'PDF',
        size: '187 KB',
    },
    {
        title: 'Rajya Sabha Unstarred Question Response',
        description: 'Parliamentary response to unstarred question in Rajya Sabha regarding Clean Ganga Mission.',
        file: '/new/RS_unstarred_response.pdf',
        type: 'PDF',
        size: '423 KB',
    },
];

export default function ReportsPage() {
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
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg"
                    >
                        Reports
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 leading-relaxed mb-12 text-center drop-shadow-lg"
                    >
                        Official reports and press releases related to Namami Gange Programme and NMCG activities.
                    </motion.p>

                    {/* Reports List */}
                    <div className="space-y-6">
                        {reports.map((report, index) => (
                            <motion.div
                                key={report.title}
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
                                            {report.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {report.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-gray-400">
                                                {report.type} • {report.size}
                                            </span>
                                            <div className="flex gap-2">
                                                <a
                                                    href={report.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    View
                                                </a>
                                                <a
                                                    href={report.file}
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
