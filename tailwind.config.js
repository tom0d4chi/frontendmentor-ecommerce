/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      'sans' : ['Kumbh Sans', 'sans']
     },
     fontWeight:{
      medium:500,
     },
     colors: {
      'orange' : 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      'very-dark-blue' : 'hsl(220, 13%, 13%)',
      'dark-grayish-blue' : 'hsl(219, 9%, 45%)',
      'grayish-blue' : 'hsl(220, 14%, 75%)',
      'light-grayish-blue' : 'hsl(223, 64%, 98%)',
      'white' : 'hsl(0, 0%, 100%)',
      'black' : 'hsl(0, 0%, 0%)',
      'transparent-white' : 'rgba(255,255,255,0.5)'
     },
     boxShadow: {
      'xl' : '0 17px 35px -17px rgba(0, 0, 0, 0.3)'
     },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'dd': '970px',

      'lg': '1120px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar-hide')
  ]
}
