'use client';

import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  color: string;
  onClick: () => void;
}

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  count,
  color,
  onClick,
}: CategoryCardProps) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    secondary: 'from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  };

  return (
    <button
      onClick={onClick}
      className="card card-hover p-8 text-left w-full group relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">{count}</span>
          <span className="text-sm text-gray-500 font-medium">Technologies →</span>
        </div>
      </div>
    </button>
  );
}
