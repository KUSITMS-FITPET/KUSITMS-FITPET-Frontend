import type { Config } from 'tailwindcss'

// Generate pixel values from 0 to 10
const px0To10 = {
  ...Array.from(Array(11)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

// Generate pixel values from 0 to 100
const px0To100 = {
  ...Array.from(Array(101)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

// Generate pixel values from 0 to 1000
const px0To1000 = {
  ...Array.from(Array(1001)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }),
    {},
  ),
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      textColor: '#282828',
      black: '#000000',
      main: '#008CFF',
      mediumGray: '#A5A5A5',
      bgColor1: '#CDFAFA',
      bgColor3: '#F4F7FA',
      'main-color': '#008cff',
      darkslategray: '#374553',
      gray: {
        '100': '#858585',
        '200': '#282828',
        '300': '#c5c8ce',
        '400': '#f7f8f9',
        '500': '#9ca3af',
      },
      lightcyan: '#cdfafa',
      gold: '#ffd600',
      lightgray: '#5A5A5A',
      red: '#D61F2D',
    },
    extend: {
      width: px0To1000,
      height: px0To1000,
      borderWidth: px0To10,
      fontSize: px0To100,
      lineHeight: px0To100,
      minWidth: px0To1000,
      minHeight: px0To1000,
      spacing: px0To1000,
      borderRadius: { ...px0To100, button: '6px' },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
