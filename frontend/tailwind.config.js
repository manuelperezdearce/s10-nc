import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Nunito', 'sans-serif'],
        parrafo: ['Roboto', 'sans-serif']
      },
      colors: {
        marronCustom: 'var(--marron-custom)',
        greenCustom: 'var(--green-custom)',
        oranjeCustom: 'var(--oranje-custom)',
        blackCustom: 'var(--black-custom)',
        lightBrownCustom: 'var(--lightBrown-custom)',
        greyCustom: 'var(--grey-custom)',
        whiteCustom1: 'var(--white-custom1)',
        whiteCustom2: 'var(--white-custom2)',
        whiteCustom3: 'var(--white-custom3)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonPruebas': {
          background: 'linear-gradient(145deg, #ffd07c, #d9af68)',
          boxShadow: '3px 3px 3px #be995c, -3px -3px 3px #ffeb8c',
          color: 'var(--marron-custom)',
          border: '1px solid var(--white-custom1)',
          borderRadius: '4px',
          transition: 'all .2s linear',
          padding: '10px 20px',

          '&:hover': {
            background: 'linear-gradient(145deg, #e26f02, #be5e02)',
            boxShadow: '3px 3px 3px #a75202, -3px -3px 3px #ff7e02',
            color: 'var(--white-custom1)',
            border: '1px solid var(--oranje-custom)'
          }
        }
      })
    })
  ]
}
