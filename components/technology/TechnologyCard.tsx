'use client';

import { useRouter } from 'next/navigation';
import { MapPin, ExternalLink } from 'lucide-react';
import { Technology } from '@/lib/data';

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const router = useRouter();

  const categoryColors: Record<string, string> = {
    decentralized: 'bg-red-100 text-red-700 border-red-200 ',
    'stp_improvement': 'bg-green-100 text-green-700 border-green-200',
    'smart_monitoring': 'bg-blue-100 text-blue-700 border-blue-200',
    'sludge_treatment': 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <button
      onClick={() => router.push(`/technology/${technology.id}`)}
      className="card card-hover p-6 text-left w-full group transition-transform hover:-translate-y-1 hover:shadow-lg rounded-xl border border-gray-100 bg-white"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {technology.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span>{technology.country}</span>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-2" />
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
          categoryColors[technology.category] || 'bg-gray-100 text-gray-700 border-gray-200'
        }`}
      >
        {technology.category
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </span>

      {technology.novelty && (
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{technology.novelty}</p>
      )}

      {technology.status && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-500">Status: </span>
          <span className="text-xs text-gray-700">{technology.status}</span>
        </div>
      )}
    </button>
  );
}
