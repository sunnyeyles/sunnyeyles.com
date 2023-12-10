import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/globals.css',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        blue: '#10172a',
        'blue-200': '#1d2641',
        'blue-300': '#0d1422',
        'blue-400': '#5474b4',
        'blue-500': '#94a8d0',
      },
      gray: {
        gray: '#10172a',
        'gray-200': '#333333',
        'gray-300': '#4C4C4C',
        'gray-400': '#666666',
        'gray-500': '#808080',
        'gray-600': '#999999',
      },
      boxShadow: {
        sm: '0 10px 20px -5px #94a8d0',
        md: '0 20px 30px -10px #94a8d0',
        lg: '0 35px 60px -15px #94a8d0',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')],
  daisyui: {
    themes: [
      {
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          primary: '#5474b4',
          secondary: '#94a8d0',
        },
        lofi: {
          ...require('daisyui/src/theming/themes')['lofi'],
          primary: '#1d2641',
          secondary: '#5474b4',
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'night', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
}
export default config
