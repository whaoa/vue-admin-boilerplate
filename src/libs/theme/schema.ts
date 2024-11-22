import { v } from '~/libs/validator';

import { createBasePalette } from './palette';
import { hexColor } from './utils';

import type { InferSchemaInput, InferSchemaOutput } from '../validator';
import type { MarkOptional } from '~/types/utility';

function string(label = 'the value', isColor?: true) {
  return v.pipe(
    v.string(`${label} must be a string`),
    v.nonEmpty(`${label} must not be empty`),
    v.transform((input) => (isColor ? hexColor(input) : input)),
  );
}

const BaseColorSchema = v.object(
  {
    background: string('the background value for this color', true),
    foreground: string('the foreground value for this color', true),
  },
  'color must be an object',
);

const ColorSchema = v.object(
  {
    light: string('the lighter value for this color', true),
    base: string('the base value for this color', true),
    dark: string('the darker value for this color', true),
    text: string('the text color for the base value of this color', true),
  },
  'color must be an object',
);

type Color = InferSchemaOutput<typeof ColorSchema>;

export function defineColor(input: MarkOptional<Color, 'dark' | 'light'>, light: boolean): Color {
  const palette = (!input.dark || !input.light) ? createBasePalette(input.base, light) : [];
  input.text = hexColor(input.text);
  input.base = palette[1] || hexColor(input.base);
  input.light = input.light ? hexColor(input.light) : (palette[0] || input.base);
  input.dark = input.dark ? hexColor(input.dark) : (palette[2] || input.base);
  return v.parse(ColorSchema, input);
}

const ThemeSchema = v.object({
  name: string('the name of theme'),

  colors: v.object({
    base: BaseColorSchema,
    secondary: BaseColorSchema,
    tertiary: BaseColorSchema,
    quaternary: BaseColorSchema,

    primary: ColorSchema,
    positive: ColorSchema,
    warning: ColorSchema,
    destructive: ColorSchema,
  }),

  styles: v.object({
    text: v.object({
      font: string('the font of text'),
      base: string('the base size of text'),
    }),
    radius: v.object({
      base: string('the base of radius'),
      small: string('the small of radius'),
    }),
    border: v.object({
      base: string('the base color of border', true),
      secondary: string('the secondary color of border', true),
    }),
    shadow: v.object({
      base: string('the base color of shadow'),
    }),
  }),
});

export type ThemeInput = InferSchemaInput<typeof ThemeSchema>;

export type Theme = InferSchemaOutput<typeof ThemeSchema>;

export function defineTheme(input: ThemeInput): Theme {
  return v.parse(ThemeSchema, input);
}
