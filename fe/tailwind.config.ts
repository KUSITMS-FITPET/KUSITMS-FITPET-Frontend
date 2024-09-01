import type { Config } from 'tailwindcss'

// Generate pixel values from 0 to 10
const px0To10 = {
  ...Array.from(Array(11)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }), // Corrected: Added backticks around `${i}px`
    {},
  ),
};

// Generate pixel values from 0 to 100
const px0To100 = {
  ...Array.from(Array(101)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }), // Corrected: Added backticks around `${i}px`
    {},
  ),
};

// Generate pixel values from 0 to 1000
const px0To1000 = {
  ...Array.from(Array(1001)).reduce(
    (acc, _, i) => ({ ...acc, [i]: `${i}px` }), // Corrected: Added backticks around `${i}px`
    {},
  ),
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      textColor: '#333333',
      black: '#000000',
<<<<<<< Updated upstream
      main: '#008CFF',
      mediumGray: '#A5A5A5',
      bgColor1: '#CDFAFA',
      bgColor3: '#F4F7FA',
=======
      "main-color": "#008cff",       // Custom color
      "darkslategray": "#374553",    // Custom color
      "gray": {                      // Custom gray shades
        "100": "#858585",
        "200": "#282828",
      },
      "lightcyan": "#cdfafa",        // Custom color
      "gold": "#ffd600",             // Custom color
      "lightgray": "#5A5A5A",        // Custom color
>>>>>>> Stashed changes
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
      borderRadius: { ...px0To100, button: "6px" }, // Ensured border radius is in pixels
      fontFamily: {
        "pretendard": ["Pretendard", "sans-serif"], // Added Pretendard font
      },
    },
  },
  plugins: [],
<<<<<<< Updated upstream
}
export default config
=======
};

export default config;
>>>>>>> Stashed changes
