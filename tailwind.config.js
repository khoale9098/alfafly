module.exports = {
  darkMode: false,
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-family-mulist)',
        eng: 'var(--font-eng)',
        mono: 'var(--font-family-source)',
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

      screens: {
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',

        'm-sm': { max: '640px' },
        'm-md': { max: '768px' },
        'm-lg': { max: '1024px' },
        'm-xl': { max: '1280px' },
        'm-2xl': { max: '1536px' },
      },
    },
  },

  plugins: [],
};
