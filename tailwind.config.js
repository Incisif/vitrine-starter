import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: {} },
  plugins: [tailwindcssAnimate],
};

export default config;
