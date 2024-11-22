import { light } from './light';
import { defineColor, defineTheme } from './schema';

export const dark = defineTheme({
  name: 'dark',

  colors: {
    base: { background: '#141414', foreground: '#e5eaf3' },
    secondary: { background: '#1d1d1d', foreground: '#cfd3dc' },
    tertiary: { background: '#262727', foreground: '#a3a6ad' },
    quaternary: { background: '#303030', foreground: '#8d9095' },

    primary: defineColor({ base: light.colors.primary.base, text: '#ffffff' }, false),
    positive: defineColor({ base: light.colors.positive.base, text: '#ffffff' }, false),
    warning: defineColor({ base: light.colors.warning.base, text: '#ffffff' }, false),
    destructive: defineColor({ base: light.colors.destructive.base, text: '#ffffff' }, false),
  },

  styles: {
    text: light.styles.text,
    radius: light.styles.radius,
    border: { base: '#424242', secondary: '#303030' },
    shadow: {
      base: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px',
    },
  },
});
