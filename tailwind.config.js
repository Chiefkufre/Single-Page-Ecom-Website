/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        redhat: ['"Red Hat Text"', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 28%'
      },
      colors:{
      Red: 'hsl(14, 86%, 42%)',
      Green: 'hsl(159, 69%, 38%)',
      Rose50: 'hsl(20, 50%, 98%)',
      Rose100: 'hsl(13, 31%, 94%)',
      Rose300: 'hsl(14, 25%, 72%)',
      Rose400: 'hsl(7, 20%, 60%)',
      Rose500: 'hsl(12, 20%, 44%)',
      Rose900: 'hsl(14, 65%, 9%)',
      },
    
    },
  },
  plugins: [],
}

