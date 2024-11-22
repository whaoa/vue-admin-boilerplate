/**
 * Generate a color palette based on a given color, based on the algorithm in ant-design
 * https://github.com/ant-design/ant-design/blob/master/components/theme/themes/shared/genColorMapToken.ts
 * https://github.com/ant-design/ant-design-colors/blob/main/src/generate.ts
 * @file
 */

import { colord as c } from 'colord';

import type { HsvaColor, RgbColor } from 'colord';

const lightColorCount = 5; // 浅色数量，主色上
const darkColorCount = 4; // 深色数量，主色下

const hueStep = 2; // 色相阶梯
const saturationStep = 0.16; // 饱和度阶梯，浅色部分
const saturationStep2 = 0.05; // 饱和度阶梯，深色部分
const brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
const brightnessStep2 = 0.15; // 亮度阶梯，深色部分

// 暗色主题颜色映射关系表
const darkColorMap = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 },
];

const darkColorMixColor = c('#141414').toRgb();

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb2: RgbColor, amount: number): RgbColor {
  const rgb1 = darkColorMixColor;
  const p = amount / 100;
  return {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
}

function hue(hsv: HsvaColor, i: number, light: boolean): number {
  let hue: number;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}

function saturation(hsv: HsvaColor, i: number, light: boolean): number {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation: number;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 1) {
    saturation = 1;
  }
  // 第一格的 s 限制在 0.06-0.1 之间
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}

function value(hsv: HsvaColor, i: number, light: boolean): number {
  let value: number;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}

function transform(hsv: HsvaColor, i: number, light: boolean): HsvaColor {
  hsv = { h: hsv.h, s: hsv.s / 100, v: hsv.v / 100, a: hsv.a };
  return {
    h: hue(hsv, i, light),
    s: saturation(hsv, i, light) * 100,
    v: value(hsv, i, light) * 100,
    a: hsv.a,
  };
}

export function createBasePalette(base: string, light = true) {
  const color = c(base);
  const hsv = color.toHsv();

  const lighter = c(transform(hsv, 1, true));
  const darker = c(transform(hsv, 1, false));

  return [
    light ? lighter.toHex() : c(mix(lighter.toRgb(), darkColorMap[6].opacity * 100)).toHex(),
    color.toHex(),
    light ? darker.toHex() : c(mix(color.toRgb(), darkColorMap[4].opacity * 100)).toHex(),
  ];
}

// export function createPalette(base: string, light = true) {
//   const palette: string[] = [];
//
//   const hsv = c(base).toHsv();
//
//   for (let i = lightColorCount; i > 0; i -= 1) {
//     palette.push(
//       c(transform(hsv, i, true)).toHex(),
//     );
//   }
//
//   palette.push(base);
//
//   for (let i = 1; i < darkColorCount; i += 1) {
//     const color = c(transform(hsv, i, false));
//     palette.push(color.toHex());
//   }
//
//   if (light) {
//     return palette;
//   }
//
//   return darkColorMap.map(({ index, opacity }) => {
//     const color = mix(c(palette[index]).toRgb(), opacity * 100);
//     return c(color).toHex();
//   });
// }
