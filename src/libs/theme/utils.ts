import { colord as c } from 'colord';

import type { Theme } from './schema';

export function hexColor(color: string) {
  return c(color).toHex();
}

function rgb(color: string) {
  const { r, g, b } = c(color).toRgb();
  return `${r}, ${g}, ${b}`;
}

// https://www.shadcn-vue.com/docs/theming.html#css-variables
// https://tailwindcss.com/docs/customizing-colors#using-css-variables
function convertThemeToCSSVariables(theme: Theme) {
  return `
    --font: ${theme.styles.text.font};
    --font-size: ${theme.styles.text.base};

    --background: ${rgb(theme.colors.base.background)};
    --foreground: ${rgb(theme.colors.base.foreground)};

    --secondary: ${rgb(theme.colors.secondary.background)};
    --secondary-foreground: ${rgb(theme.colors.secondary.foreground)};

    --tertiary: ${rgb(theme.colors.tertiary.background)};
    --tertiary-foreground: ${rgb(theme.colors.tertiary.foreground)};

    --quaternary: ${rgb(theme.colors.quaternary.background)};
    --quaternary-foreground: ${rgb(theme.colors.quaternary.foreground)};

    --primary: ${rgb(theme.colors.primary.base)};
    --primary-foreground: ${rgb(theme.colors.primary.text)};

    --positive: ${rgb(theme.colors.positive.base)};
    --positive-foreground: ${rgb(theme.colors.positive.text)};

    --warning: ${rgb(theme.colors.warning.base)};
    --warning-foreground: ${rgb(theme.colors.warning.text)};

    --destructive: ${rgb(theme.colors.destructive.base)};
    --destructive-foreground: ${rgb(theme.colors.destructive.text)};

    --border: ${rgb(theme.styles.border.base)};
    --border-secondary: ${rgb(theme.styles.border.secondary)};
  `;
}

const THEME_STYLE_ELEMENT_ID = 'theme-provider-styles';

export function injectThemeStylesToDocument(theme: Theme) {
  let el = document.head.querySelector<HTMLStyleElement>(`style#${THEME_STYLE_ELEMENT_ID}`);

  if (!el) {
    el = document.createElement('style');
    el.id = THEME_STYLE_ELEMENT_ID;
    document.head.appendChild(el);
  }

  const style = `:root {${convertThemeToCSSVariables(theme)}}`;
  if (el.textContent !== style) {
    el.textContent = style;
  }
  el.dataset.themeName = theme.name;

  return el;
}
