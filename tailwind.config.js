module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-family-mulist)',
        eng: 'var(--font-eng)',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--gray)',
        'fruit-dove': 'var(--fruit-dove)',
        cloud: 'var(--cloud)',
        blue: 'var(--blue)',
      }),

      textColor: (theme) => ({
        ...theme('colors'),
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--gray)',
        'fruit-dove': 'var(--fruit-dove)',
        cloud: 'var(--cloud)',
        blue: 'var(--blue)',
      }),

      borderColor: (theme) => ({
        ...theme('colors'),
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--gray)',
        'fruit-dove': 'var(--fruit-dove)',
        cloud: 'var(--cloud)',
        blue: 'var(--blue)',
      }),
    },
  },

  plugins: [],
}
