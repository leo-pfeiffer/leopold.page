module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'monokai-blue': '#06182a',
        'monokai-white': '#d6d6d6',
        'monokai-gray': '#797979',
        'monokai-orange': '#e87d3e',
        'monokai-red': '#F92672',
        'monokai-green': '#A6E22E',
        'monokai-purple': '#7d09ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
