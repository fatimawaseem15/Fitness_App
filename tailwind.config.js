// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to your JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
};
