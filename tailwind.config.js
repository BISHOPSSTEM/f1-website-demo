/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        f1: {
          red: '#E10600',
          black: '#15151E',
          white: '#FFFFFF',
          gray: {
            100: '#F8F8F8',
            200: '#E8E8E8',
            300: '#D1D1D1',
            400: '#9E9E9E',
            500: '#6B6B6B',
            600: '#4A4A4A',
            700: '#2D2D2D',
            800: '#1A1A1A',
            900: '#0F0F0F'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
