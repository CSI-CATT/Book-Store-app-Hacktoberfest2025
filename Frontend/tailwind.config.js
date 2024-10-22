/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #f1faee, #5eade7, #4567f0)',
      },
      boxShadow: {
        'bottom-only': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Creates shadow only at the bottom
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' }, // Adjust the bounce height
        },
      },
      animation: {
        'custom-bounce': 'custom-bounce 2.5s infinite ease-out', // Adjust the duration if needed
      },
    },
  },
  plugins: [require('daisyui')],
}
