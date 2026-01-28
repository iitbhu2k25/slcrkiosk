'use client';

import { X, MapPin, AlertCircle, CheckCircle, Info, ExternalLink } from 'lucide-react';
import { Technology } from '@/lib/data';
import { useEffect } from 'react';

interface TechnologyModalProps {
  technology: Technology | null;
  onClose: () => void;
}

export default function TechnologyModal({ technology, onClose }: TechnologyModalProps) {
  useEffect(() => {
    if (technology) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [technology]);

  if (!technology) return null;

  const sections = [
    {
      title: 'Current Gap',
      content: technology.currentGap,
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Technology',
      content: technology.technology,
      icon: Info,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      title: 'Novelty',
      content: technology.novelty,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Details & Applicability',
      content: technology.details,
      icon: Info,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
    {
      title: 'Field Application',
      content: technology.fieldApplication,
      icon: CheckCircle,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Limitations',
      content: technology.limitations,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 z-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-3 pr-12">{technology.name}</h2>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{technology.country}</span>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
            {sections.map(
              (section) =>
                section.content && (
                  <div key={section.title} className="mb-6 last:mb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 ${section.bgColor} rounded-lg`}>
                        <section.icon className={`w-5 h-5 ${section.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed ml-12">
                      {section.content}
                    </p>
                  </div>
                )
            )}

            {/* Status */}
            {technology.status && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Status</h3>
                </div>
                <p className="text-gray-700 ml-7">{technology.status}</p>
              </div>
            )}

            {/* References */}
            {technology.references && technology.references.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <ExternalLink className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-gray-900">References</h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {technology.references.map((ref, index) => {
                    const [key, value] = Object.entries(ref)[0]; // ✅ extract key/value

                    return (
                      <li key={index} className="flex gap-3 text-sm">
                        <span className="font-mono text-gray-500 min-w-[2rem]">
                          [{index + 1}]
                        </span>
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline leading-relaxed break-all"
                        >
                          {key}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
