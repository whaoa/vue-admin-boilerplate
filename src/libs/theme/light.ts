import { defineColor, defineTheme } from './schema';

export const light = defineTheme({
  name: 'light',

  colors: {
    base: { background: '#ffffff', foreground: '#303133' },
    secondary: { background: '#fafafa', foreground: '#606266' },
    tertiary: { background: '#f5f7fa', foreground: '#909399' },
    quaternary: { background: '#f0f2f5', foreground: '#a8abb2' },

    primary: defineColor({ base: '#1677ff', text: '#ffffff' }, true),
    positive: defineColor({ base: '#52c41a', text: '#ffffff' }, true),
    warning: defineColor({ base: '#faad14', text: '#ffffff' }, true),
    destructive: defineColor({ base: '#ff4d4f', text: '#ffffff' }, true),
  },

  styles: {
    text: {
      font: [
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI',
        'Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
        'Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      ].join(', '),
      base: '14px',
    },
    radius: { base: '6px', small: '4px' },
    border: { base: '#d9d9d9', secondary: '#f0f0f0' },
    shadow: {
      base: 'rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px',
    },
  },
});
