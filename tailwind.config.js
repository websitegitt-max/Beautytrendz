/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        alabaster: '#FAF8F5',
        linen: '#F4EFE6',
        obsidian: '#121211',
        charcoal: '#1E1E1C',
        mutedGold: '#C5A880',
        deepGold: '#A8875A',
        softBorder: '#E6E0D6',
      }
    },
  },
  plugins: [],
}
