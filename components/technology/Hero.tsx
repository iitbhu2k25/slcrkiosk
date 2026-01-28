'use client';

import { Droplets, Leaf, Microscope, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background_water.jpg')" }}
    >
      {/* Dim overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/50 to-black/80 z-0" />

      {/* Floating glow effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] bg-cyan-400/25 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 leading-tight drop-shadow-[0_4px_20px_rgba(0,200,255,0.3)] tracking-wide">
          <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-pulse">
            TECHNOLOGY &nbsp;FORUM
          </span>
        </h1>

        {/* Icons Row */}
        <div className="mb-12 flex justify-center gap-6 flex-wrap">
          {[
            { Icon: Droplets, color: 'text-blue-300' },
            { Icon: Leaf, color: 'text-green-300' },
            { Icon: Microscope, color: 'text-cyan-300' },
            { Icon: Settings, color: 'text-purple-300' },
          ].map(({ Icon, color }, i) => (
            <div
              key={i}
              className="p-4 bg-white/15 backdrop-blur-lg rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
          ))}
        </div>
          <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight"> <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent"> Innovative Technologies </span> </h1>  
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          A comprehensive research showcase of 45+ cutting-edge approaches in wastewater treatment —
          from decentralized solutions to smart monitoring systems.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-white/90 text-blue-800 rounded-full font-semibold shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 border border-blue-400"
          >
            View Categories
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Technologies', value: '45+', color: 'text-blue-300' },
            { label: 'Categories', value: '4', color: 'text-green-300' },
            { label: 'Countries', value: '15+', color: 'text-cyan-300' },
            { label: 'Innovation', value: '100%', color: 'text-purple-300' },
          ].map(({ label, value, color }, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-4xl font-bold ${color}`}>{value}</div>
              <div className="text-sm text-gray-200 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
