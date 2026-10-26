/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#08090d',
          900: '#0c0e14',
          800: '#11141c',
          700: '#1a1e29',
          600: '#272d3c',
          500: '#3a4257',
        },
        ember: {
          50: '#fff6ed',
          100: '#ffe9d4',
          200: '#ffd0a8',
          300: '#ffaf70',
          400: '#ff8437',
          500: '#fb6411',
          600: '#ec4a07',
          700: '#c43808',
          800: '#9c2e0f',
          900: '#7e2911',
        },
        steel: {
          50: '#f4f6fa',
          100: '#e8edf5',
          200: '#d2dbea',
          300: '#aabbd8',
          400: '#7a93bf',
          500: '#5a76a6',
          600: '#475d88',
          700: '#3a4c6e',
          800: '#324157',
          900: '#2c374a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
