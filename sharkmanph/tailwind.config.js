/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Anton': ['Anton', 'sans-serif']
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    },
      colors: {
        'wild-sand': {
          '50': '#ffffff', 
          '100': '#fefefe', 
          '200': '#fdfdfd', 
          '300': '#fbfbfb', 
          '400': '#f8f8f8', 
          '500': '#f5f5f5', 
          '600': '#dddddd', 
          '700': '#b8b8b8', 
          '800': '#939393', 
          '900': '#787878'
      }
      },
      'amber': {
        '50': '#fffcf2', 
        '100': '#fff9e6', 
        '200': '#ffefbf', 
        '300': '#ffe599', 
        '400': '#ffd24d', 
        '500': '#ffbf00', 
        '600': '#e6ac00', 
        '700': '#bf8f00', 
        '800': '#997300', 
        '900': '#7d5e00'
    }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
 
}

