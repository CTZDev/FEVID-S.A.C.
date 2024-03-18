/** @type {import('tailwindcss').Config} */

import animations from "tailwindcss-animated";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "clr-light": "#faf6ec",
        "clr-dark": "#371a11",
        "clr-primary": "#d09845",
        "clr-light-primary": "#e8d0a0",
        "clr-dark-primary": "#a56429",
        "clr-black": "#000",
        "clr-white": "#fff",
        "clr-shadow": "#ffbf60",
      },
    },
  },
  plugins: [animations],
};
