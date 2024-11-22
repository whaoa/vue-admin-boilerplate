import type { Theme } from '~/libs/theme/schema';
import type { GlobalThemeOverrides } from 'naive-ui';

export function convertThemeToNaiveOverrides(theme: Theme): GlobalThemeOverrides {
  return {
    common: {
      baseColor: theme.colors.base.background,

      // primary color
      primaryColor: theme.colors.primary.base,
      primaryColorHover: theme.colors.primary.light,
      primaryColorPressed: theme.colors.primary.dark,
      primaryColorSuppl: theme.colors.primary.light,
      // info color
      infoColor: theme.colors.primary.base,
      infoColorHover: theme.colors.primary.light,
      infoColorPressed: theme.colors.primary.dark,
      infoColorSuppl: theme.colors.primary.light,
      // success color
      successColor: theme.colors.positive.base,
      successColorHover: theme.colors.positive.light,
      successColorPressed: theme.colors.positive.dark,
      successColorSuppl: theme.colors.positive.light,
      // warning color
      warningColor: theme.colors.warning.base,
      warningColorHover: theme.colors.warning.light,
      warningColorPressed: theme.colors.warning.dark,
      warningColorSuppl: theme.colors.warning.light,
      // error color
      errorColor: theme.colors.destructive.base,
      errorColorHover: theme.colors.destructive.light,
      errorColorPressed: theme.colors.destructive.dark,
      errorColorSuppl: theme.colors.destructive.light,

      // text color
      textColorBase: theme.colors.base.foreground,
      textColor1: theme.colors.base.foreground,
      textColor2: theme.colors.secondary.foreground,
      textColor3: theme.colors.tertiary.foreground,
      textColorDisabled: theme.colors.quaternary.foreground,
      placeholderColor: theme.colors.quaternary.foreground,
      placeholderColorDisabled: theme.colors.quaternary.foreground,

      fontFamily: theme.styles.text.font,

      borderRadius: theme.styles.radius.base,
      borderRadiusSmall: theme.styles.radius.small,

      borderColor: theme.styles.border.base,
      dividerColor: theme.styles.border.secondary,

      boxShadow1: theme.styles.shadow.base,
      boxShadow2: theme.styles.shadow.base,
      boxShadow3: theme.styles.shadow.base,
    },
  };
}
