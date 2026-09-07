/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          dark: '#161512',
          card: '#262421',
          border: '#363431',
          accent: '#81b64c',
          accentHover: '#95bb4a',
          evaluation: '#4a4a4a',
        }
      }
    },
  },
  plugins: [],
}
