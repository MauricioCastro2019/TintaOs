/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ink-50': '#f2ede4',
        'ink-100': '#e4ddd0',
        'ink-200': '#c8bfb0',
        'ink-400': '#8a8480',
        'ink-500': '#5a5550',
        'ink-700': '#2a2520',
        'ink-800': '#1a1612',
        'ink-900': '#111111',
        'ink-950': '#080808',
        'wine': '#1a4a28',
        'wine-light': '#2a6636',
        'copper': '#3ea055',
        'copper-light': '#6fcf84',
        'violet-deep': '#0f2618',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-1%, -1%)' },
          '20%': { transform: 'translate(1%, 1%)' },
          '30%': { transform: 'translate(-2%, 0%)' },
          '40%': { transform: 'translate(2%, -2%)' },
          '50%': { transform: 'translate(0%, 2%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,31,31,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(139,31,31,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
