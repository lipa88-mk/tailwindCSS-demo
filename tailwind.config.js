module.exports = {
  content: [
      './public/**/*.html',
      './src/**/*.css',
  ],
  theme: {
    colors: { 
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray-dark': '#d6d6d6',
      'gray-light': '#f8f8f8',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: { 
      base: ['14px', '16px'],
    },
    extend: {
      gridTemplateColumns: {
        'header': 'minmax(max-content, 1fr) 70px minmax(max-content, 1fr)',
      }
    },
  },
  plugins: [],
}
