module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ai: {
          main: {
            lightblue: '#5268AA',
            darkblue: '#16143B',
            lightgray: '#F8F8F8',
            gray: '#D3D3D3',
            buttongray: '#F0F1F4',
          },
          blue: '#1EA7FD',
          green: '#4EDB90',
          orange: '#FF5717',
          purple: '#AA529C',
          red: '#EB6060',
          black: '#000',
        },
      },
      rotate: {
        270: '270deg',
      },

      fontFamily: {
        main: 'Roboto',
      },
      spacing: {
        108: '27rem',
      },
    },
  },
  plugins: [],
};
