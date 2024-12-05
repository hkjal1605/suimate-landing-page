import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        black: {
          1000: '#FFFFFF',
          900: '#F6F7F8',
          800: '#F1F2F4',
          700: '#B2B7BE',
          600: '#9399A3',
          500: '#616973',
          400: '#4B5159',
          300: '#7a7a7a',
          200: '#14171A',
          100: '#0B0D0E',
          50: '#000000'
        },
        green: {
          100: '#e6f3ed',
          200: '#96ceb4',
          300: '#008849',
          500: '#00532d'
        },
        red: {
          100: '#fce8e6',
          200: '#f2a197',
          300: '#D74545',
          500: '#890f01'
        },
        yellow: {
          500: '#fff9ec',
          300: '#ffda93',
          200: '#ffbf44',
          100: '#9c7529'
        },
        blue: {
          500: '#E9F1FF',
          300: '#78A5EB',
          200: '#4789EE',
          100: '#0201af'
        },
        brown: {
          500: '#4B3223',
          300: '#AF7846',
          200: '#FFBD81'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '100'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '100'
          },
          '100%': {
            opacity: '0'
          }
        }
      },
      animation: {
        fadeIn: 'fade-in 0.5s ease-in-out',
        fadeOut: 'fade-out 0.5s ease-in-out'
      }
    }
  },
  plugins: []
} satisfies Config;
