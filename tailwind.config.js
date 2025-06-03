// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary-green': '#34D399', // A vibrant, friendly green
          'secondary-blue': '#3B82F6', // A clean, inviting blue
          'accent-yellow': '#FBBF24', // A warm, energetic yellow
          'accent-pink': '#F472B6',   // A playful pink
          'dark-bg': '#1A202C',      // Dark charcoal for background
          'light-text': '#F7FAFC',   // Off-white for text
          'light-gray-bg': '#EDF2F7', // Light gray for sections
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'pacifico': ['Pacifico', 'cursive'], // For playful accents
        },
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    plugins: [], // Ensure no typography plugin here unless installed
  }