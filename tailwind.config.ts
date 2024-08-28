import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '610': '610px',
      },
      height: {
        '410': '410px'
      },
      boxShadow: {
        'square': '-50px 50px 0px 0px rgba(0, 0, 0, 0.3)',
        'project': '-15px 15px 0px 0px rgba(0, 0, 0, 0.3)',
        'projectHover' : '-10px 10px 0px 0px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true, // Centers the container by default
        padding: '5rem', // Adds padding on left and right
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [],
};
export default config;
