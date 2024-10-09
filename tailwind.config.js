/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{js,html}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      fontFamily : {
        "main-heading" : ["Caveat" , "cursive"]
      },

      keyframes : {
        typing : {
          '0%' : {width: "0"},
          '100%' : {width: "calc(100% + 5px)"},
        },
        "blink-caret" : {
          "0%" : {"border-color": "rgb(253 186 140)"},
          "100%" : {"border-color": "transparent"}
        }
      },

      animation : {
        typing: 'typing 2s ease-in-out infinite',
        "blink-caret": 'blink-caret 1s ease-in-out infinite',
        "typing-blink" : "typing 2s ease-in-out infinite alternate , blink-caret 1s ease-in-out infinite"
      }

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],

  darkMode: 'class',
}

