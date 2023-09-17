import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'customDarkGreyVarient': '#3A3A3A',
        'customDesciptionWorkes':'#898989',
        'customProperty':'#282828',
        'customDubaiDescription':'#3A3A3A',
        'customTrendLearn':'#B28A5B',
        'white':'#fff',
        'black':'#000000',
      },
      // Gradients
      backgroundImage: {
        'customGradient': 'linear-gradient(252deg, #E412F0 4.13%, #7F29A4 89.94%)'
      },
    },
  },
  plugins: [],
}
export default config
