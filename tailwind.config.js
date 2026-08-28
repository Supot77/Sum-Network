/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF7F2',
          100: '#F4EFE6',
          200: '#EAE3D5',
          300: '#DDD3C1',
          400: '#BDB09B',
          500: '#8E7E6A',
          600: '#6B5C4B',
          700: '#4F4335',
          800: '#382F24',
          900: '#231D16',
          950: '#16120D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Sarabun', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
