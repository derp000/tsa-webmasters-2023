/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  daisyui: {
    themes: [
      {
        helios: {
          primary: "#fde68a",
          secondary: "#93c5fd",
          accent: "#a78bfa",
          neutral: "#191D24",
          "base-100": "#374151",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("@headlessui/tailwindcss"), require("daisyui")],
};

// https://www.appsloveworld.com/reactjs/100/22/how-do-i-get-tailwinds-active-breakpoint-in-javascript
