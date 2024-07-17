// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Ajoutez le chemin vers les fichiers où vous utilisez les composants Tailwind
  ],
  theme: {
    extend: {
      width: {
        'max-content': 'max-content',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
