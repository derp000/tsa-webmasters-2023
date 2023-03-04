/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss"), require("daisyui")],
};

// https://www.appsloveworld.com/reactjs/100/22/how-do-i-get-tailwinds-active-breakpoint-in-javascript
