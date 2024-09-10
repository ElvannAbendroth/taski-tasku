// const twColors = require('tailwindcss/colors')
import type { Config } from 'tailwindcss'
import twColors from 'tailwindcss/colors'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: twColors.black,
        white: twColors.white,
        border: twColors.gray[200],
        gray: twColors.gray,
        foreground: {
          DEFAULT: twColors.gray[800],
        },
        background: twColors.gray[200],
        muted: {
          DEFAULT: twColors.gray[400],
        },

        pre: twColors.gray[600],
        input: { DEFAULT: twColors.gray[100] },
        primary: {
          DEFAULT: twColors.gray[800],
          foreground: twColors.white,
        },
        secondary: {
          DEFAULT: twColors.gray[200],
          foreground: twColors.gray[800],
        },
        accent: {
          DEFAULT: twColors.green[500],
          foreground: twColors.gray[800],
        },
        danger: {
          DEFAULT: twColors.red[500],
          foreground: twColors.white,
        },
        success: {
          DEFAULT: twColors.green[500],
          foreground: twColors.white,
        },
        warning: {
          ...twColors.amber,
        },

        card: twColors.white,
        popover: { DEFAULT: twColors.white, foreground: twColors.gray[800] },
      },
      fontFamily: {
        body: ['Lato'],
        display: ['Poppins'],
        mono: ['Roboto Mono'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
