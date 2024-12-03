/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008CBA',
        accent: '#FFC107',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'nav-bg': 'var(--nav-bg)',
        'sidebar-icon': 'var(--sidebar-icon)',
      },
      spacing: {
        'table-padding': '5mm',
      },
      borderRadius: {
        'table': '0.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'scale-in': 'scaleIn 0.2s ease-in-out',
        'hover-scale': 'hoverScale 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};