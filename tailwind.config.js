/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#0B0F19',
        },
        surface: {
          light: '#F8FAFC',
          dark: '#111827',
        },
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        text: {
          primary: {
            light: '#0F172A',
            dark: '#F9FAFB',
          },
          muted: {
            light: '#64748B',
            dark: '#9CA3AF',
          }
        },
        border: {
          light: '#E2E8F0',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.02)',
        'premium-hover': '0 12px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
