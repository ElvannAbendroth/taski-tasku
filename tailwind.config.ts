import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        border: 'C6C6C6',
      },
      fontFamily: {
        body: ['Lato'],
        display: ['Poppins'],
        mono: ['Roboto Mono'],
      },
    },
  },
  plugins: [],
}
export default config
