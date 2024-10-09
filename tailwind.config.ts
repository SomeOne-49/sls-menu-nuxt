import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      container: {
        center: true,
        padding: '.5rem',
      },
      colors: {
        main: {
          '500': '#AD3A31',
        },
        secondary: {
          '500': '#f1b5b0',
        },
      },
    },
  },
};
