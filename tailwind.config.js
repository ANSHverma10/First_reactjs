// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  theme: {
    extend: {
      
      keyframes: {
        blurIn: {
          '0%': {
            opacity: 0,
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: 1,
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        blurIn: 'blurIn 1s forwards',
      },
    },
  },
  plugins: [],
}
