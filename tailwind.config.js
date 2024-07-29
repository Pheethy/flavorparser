/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // เพิ่มเส้นทางนี้
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
