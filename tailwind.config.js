/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'coffee-brown': '#5b3a29',
        'coffee-light': '#6f4e37',
        'coffee-dark': '#4e342e',
        'cream': '#fef9f1',
        'warm-cream': '#f5e1c9',
        'golden': '#f4c430',
        'golden-dark': '#e5b825',
      },
      backgroundImage: {
        'hero-pattern': "url('/capstonemain.png')",
        'blog-hero': "url('/Background-blogs.jpg')",
      }
    },
  },
  plugins: [],
}