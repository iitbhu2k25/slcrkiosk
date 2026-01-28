import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium SLCR Colors
        primary: {
          DEFAULT: '#003366',
          dark: '#002244',
          light: '#004488',
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0066ff',
          600: '#003366',
          700: '#002d5c',
          800: '#002652',
          900: '#001f47',
        },
        secondary: {
          DEFAULT: '#0284c7',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          DEFAULT: '#FF9933',
          dark: '#E68A2E',
          light: '#FFB366',
        },
        success: '#138808',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/slcr18.jpg')",
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(0, 102, 170, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255, 153, 51, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0, 68, 136, 0.3) 0px, transparent 50%), linear-gradient(135deg, #003366 0%, #002244 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 153, 51, 0.7)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 153, 51, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 153, 51, 0.6)',
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
        '10xl': '1800px',
      },
    },
  },
  plugins: [],
};

export default config;
