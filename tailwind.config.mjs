/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      // These colors are from the theme files under ~/libs/theme,
      // and injected via ~/components/theme/ThemeProvider.vue.
      // Check out these docs to see how this theming works:
      // https://www.shadcn-vue.com/docs/theming.html#css-variables
      // https://tailwindcss.com/docs/customizing-colors#using-css-variables
      colors: {
        'background': 'rgba(var(--background), 1)',
        'foreground': 'rgba(var(--foreground), 1)',

        'secondary': 'rgba(var(--secondary), 1)',
        'secondary-foreground': 'rgba(var(--secondary-foreground), 1)',

        'tertiary': 'rgba(var(--tertiary), 1)',
        'tertiary-foreground': 'rgba(var(--tertiary-foreground), 1)',

        'quaternary': 'rgba(var(--quaternary), 1)',
        'quaternary-foreground': 'rgba(var(--quaternary-foreground), 1)',

        'primary': 'rgba(var(--primary), 1)',
        'primary-foreground': 'rgba(var(--primary-foreground), 1)',

        'positive': 'rgba(var(--positive), 1)',
        'positive-foreground': 'rgba(var(--positive-foreground), 1)',

        'warning': 'rgba(var(--warning), 1)',
        'warning-foreground': 'rgba(var(--warning-foreground), 1)',

        'destructive': 'rgba(var(--destructive), 1)',
        'destructive-foreground': 'rgba(var(--destructive-foreground), 1)',

        'border': 'rgba(var(--border-base), 1)',
        'border-secondary': 'rgba(var(--border-secondary), 1)',
      },
    },
  },
  plugins: [],
};
