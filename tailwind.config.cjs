/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace']
      },
      screens: {
        '2xs': '375px',
        xs: '425px'
      }
    },
    colors: {
      neutral: {
        50: '#F5F5F5',
        75: '#E9E9E9',
        100: '#DDDDDD',
        200: '#C4C4C4',
        300: '#ACACAC',
        400: '#939393',
        500: '7B7B7B', 
        600: '#626262',
        700: '#494949',
        800: '#313131',
        900: '#181818'
      },
      primary: {
        blue: '#0075F2',
        red: {
          400: '#CF5653',
          500: '#E65F5C',
        }
      }
    },
    
  },
  plugins: [],
}
