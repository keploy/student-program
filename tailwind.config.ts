import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand Palette
        // Primary headings, primary buttons, main elements
        primary: {
          50: "#FFF",
          100: "#FFB575",
          200: "#FFD0A0",
          300: "#ff914d",
          400: "#E67643",
          500: "#C95919",
        },
        // Backgrounds, borders, subtle accents
        secondary: {
          50: "#FFFFFF",
          100: "#29456E",
          200: "#537FA1",
          300: "#00163d",
          400: "#000E27",
          500: "#00061A",
        },
        // Backgrounds, borders, subtle accents
        neutral: {
          100: "#f5f5f5",
          200: "#FFF",
          300: "#e6e2d4",
        },
        accent: {
          // Success messages, notifications, progress indicators
          100: "#16704c",
          // Highlights, icons, creative sections
          200: "#5f3131",
          // Attention-grabbing elements, notifications, important highlights
          300: "#ef546b",
          400: "#d9cd9c",
          500: "#e6e2d4",
          gradient:
            "linear-gradient(to right, #F5F5F5, #E35134, #FF914D, #BE2C1B, #6F0A0D)",
        },
        gradient: {
          100: "#f5f5f5",
          200: "#e35134",
          300: "#ff914d",
          400: "#be2c1b",
          500: "#6f0a0d",
        },

        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        // purple: {
        //     100: '#F4F4FF',
        //     200: '#E2E1FF',
        //     300: '#CBCCFF',
        //     400: '#ABABFF',
        //     500: '#8D8DFF',
        //     600: '#5D5DFF',
        //     700: '#4B4ACF',
        //     800: '#38379C',
        //     900: '#262668',
        // },
        purple: {
          50: "#FFA665",
          100: "#FFB97E",
          200: "#FFCD96",
          300: "#FFE1AF",
          400: "#FFF5C7",
          500: "#ff914d",
          600: "#E97D46",
          700: "#D5633E",
          800: "#C14936",
          900: "#A82F2E",
        },
        blue: {
          100: "#E6F0FD",
          200: "#CCE2FC",
          300: "#99C5FA",
          400: "#66A9F7",
          500: "#338CF5",
          600: "#0070F4",
          700: "#0064DA",
          800: "#0059C2",
          900: "#004391",
        },
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
